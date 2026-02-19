/**
 * Image Validation Utilities for HistoGuesser
 *
 * Provides comprehensive image validation, testing, and fallback management
 * for historical figure images with support for priority-based fallbacks.
 */

interface FigureImage {
  url: string
}

// Polyfill AbortController for Node.js environments
if (typeof globalThis !== 'undefined' && !globalThis.AbortController) {
  globalThis.AbortController = class AbortController {
    signal = { aborted: false };
    abort() { this.signal.aborted = true; }
  } as any;
}

// =====================================================
// TYPES & INTERFACES
// =====================================================

export interface ImageValidationResult {
  url: string;
  isValid: boolean;
  error?: string;
  responseTime?: number;
  statusCode?: number;
  contentType?: string;
  contentLength?: number;
}

export interface BatchValidationResult {
  total: number;
  valid: number;
  invalid: number;
  results: ImageValidationResult[];
  duration: number;
}

export interface FigureValidationResult {
  figureId: string;
  figureName: string;
  totalImages: number;
  validImages: number;
  invalidImages: number;
  brokenImages: string[];
  results: ImageValidationResult[];
}

// =====================================================
// IMAGE VALIDATION FUNCTIONS
// =====================================================

/**
 * Validates a single image URL by attempting to load it
 * @param url - The image URL to validate
 * @param timeout - Timeout in milliseconds (default: 10000)
 * @returns Promise resolving to validation result
 */
export async function validateImageUrl(
  url: string,
  timeout: number = 10000
): Promise<ImageValidationResult> {
  const startTime = Date.now();

  // Check if we're in a browser environment (has window/globalThis.Image)
  const isBrowser = typeof globalThis !== 'undefined' && 'Image' in globalThis;

  if (isBrowser) {
    // Browser environment - use Image constructor
    return new Promise((resolve) => {
      const img = new Image();
      let resolved = false;

      const onSuccess = () => {
        if (resolved) return;
        resolved = true;
        const responseTime = Date.now() - startTime;
        resolve({
          url,
          isValid: true,
          responseTime,
          contentType: 'image/*',
        });
      };

      const onError = (error?: string | Event) => {
        if (resolved) return;
        resolved = true;
        const responseTime = Date.now() - startTime;
        resolve({
          url,
          isValid: false,
          error: typeof error === 'string' ? error : error?.type || 'Unknown error',
          responseTime,
        });
      };

      img.onload = onSuccess;
      img.onerror = onError;

      setTimeout(() => {
        if (!resolved) {
          resolved = true;
          resolve({
            url,
            isValid: false,
            error: 'Timeout',
            responseTime: timeout,
          });
        }
      }, timeout);

      img.src = url;
    });
  } else {
    // Node.js environment - use fetch
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      const response = await fetch(url, {
        method: 'HEAD', // Use HEAD to avoid downloading the full image
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      const responseTime = Date.now() - startTime;

      // Check if response is successful and content-type indicates an image
      const contentType = response.headers.get('content-type') || '';
      const isImage = contentType.startsWith('image/');
      const isSuccess = response.ok;

      if (isSuccess && isImage) {
        return {
          url,
          isValid: true,
          responseTime,
          statusCode: response.status,
          contentType,
          contentLength: parseInt(response.headers.get('content-length') || '0') || undefined,
        };
      } else {
        return {
          url,
          isValid: false,
          error: `HTTP ${response.status}: ${contentType || 'Unknown content type'}`,
          responseTime,
          statusCode: response.status,
          contentType,
        };
      }
    } catch (error: any) {
      const responseTime = Date.now() - startTime;
      return {
        url,
        isValid: false,
        error: error.name === 'AbortError' ? 'Timeout' : (error.message || 'Network error'),
        responseTime,
      };
    }
  }
}

/**
 * Validates multiple image URLs in parallel with concurrency control
 * @param urls - Array of image URLs to validate
 * @param concurrency - Maximum number of concurrent validations (default: 5)
 * @param timeout - Timeout per image in milliseconds (default: 10000)
 * @returns Promise resolving to batch validation result
 */
export async function validateImageUrls(
  urls: string[],
  concurrency: number = 5,
  timeout: number = 10000
): Promise<BatchValidationResult> {
  const startTime = Date.now();
  const results: ImageValidationResult[] = [];

  // Process URLs in batches to control concurrency
  for (let i = 0; i < urls.length; i += concurrency) {
    const batch = urls.slice(i, i + concurrency);
    const batchPromises = batch.map(url => validateImageUrl(url, timeout));
    const batchResults = await Promise.all(batchPromises);
    results.push(...batchResults);

    console.log(`🖼️ Validated batch ${Math.floor(i / concurrency) + 1}/${Math.ceil(urls.length / concurrency)}: ${batchResults.filter(r => r.isValid).length}/${batchResults.length} valid`);
  }

  const duration = Date.now() - startTime;
  const valid = results.filter(r => r.isValid).length;
  const invalid = results.length - valid;

  return {
    total: urls.length,
    valid,
    invalid,
    results,
    duration,
  };
}

/**
 * Validates all images for a single figure
 * @param figureId - The figure ID
 * @param figureName - The figure name (for logging)
 * @param images - Array of figure images
 * @param timeout - Timeout per image in milliseconds
 * @returns Promise resolving to figure validation result
 */
export async function validateFigureImages(
  figureId: string,
  figureName: string,
  images: FigureImage[],
  timeout: number = 10000
): Promise<FigureValidationResult> {
  console.log(`🖼️ Validating images for ${figureName} (${figureId})`);

  const urls = images.map(img => img.url);
  const batchResult = await validateImageUrls(urls, 3, timeout);

  const validImages = batchResult.results.filter(r => r.isValid).length;
  const invalidImages = batchResult.results.length - validImages;
  const brokenImages = batchResult.results.filter(r => !r.isValid).map(r => r.url);

  return {
    figureId,
    figureName,
    totalImages: images.length,
    validImages,
    invalidImages,
    brokenImages,
    results: batchResult.results,
  };
}

// =====================================================
// DATABASE UPDATE FUNCTIONS
// =====================================================

/**
 * Updates image statuses in the database based on validation results
 * @param figureId - The figure ID
 * @param validationResults - Results from validateFigureImages
 * @returns Promise resolving when update is complete
 */
export async function updateFigureImageStatuses(
  figureId: string,
  validationResults: FigureValidationResult
): Promise<void> {
  // This function would typically make database calls to update image statuses
  // For now, we'll log the results and prepare the data for manual database updates

  console.log(`📊 Update needed for figure ${validationResults.figureName}:`);
  console.log(`   - Valid images: ${validationResults.validImages}/${validationResults.totalImages}`);
  console.log(`   - Broken images: ${validationResults.brokenImages.length}`);

  if (validationResults.brokenImages.length > 0) {
    console.log('   - Broken URLs:', validationResults.brokenImages);
  }

  // In a real implementation, this would update the database:
  // 1. Mark broken images as 'broken' status
  // 2. Ensure at least one valid image has 'active' status
  // 3. Add fallback images if all primary images are broken

  // For now, we'll return the data needed for manual database updates
  const updateData = {
    figureId,
    updates: validationResults.results.map((result, index) => ({
      url: result.url,
      newStatus: result.isValid ? 'active' : 'broken',
      priority: index + 1, // Assuming order in array determines priority
    })),
  };

  console.log('🔄 Database update data:', JSON.stringify(updateData, null, 2));
}

// =====================================================
// UTILITY FUNCTIONS
// =====================================================

/**
 * Generates a summary report from multiple figure validation results
 * @param results - Array of figure validation results
 * @returns Summary report as string
 */
export function generateValidationReport(results: FigureValidationResult[]): string {
  const totalFigures = results.length;
  const totalImages = results.reduce((sum, r) => sum + r.totalImages, 0);
  const totalValid = results.reduce((sum, r) => sum + r.validImages, 0);
  const totalInvalid = results.reduce((sum, r) => sum + r.invalidImages, 0);

  const figuresWithBrokenImages = results.filter(r => r.invalidImages > 0).length;
  const figuresWithAllBroken = results.filter(r => r.validImages === 0).length;

  let report = '=' .repeat(60) + '\n';
  report += 'IMAGE VALIDATION REPORT\n';
  report += '=' .repeat(60) + '\n\n';

  report += `Total Figures: ${totalFigures}\n`;
  report += `Total Images: ${totalImages}\n`;
  report += `Valid Images: ${totalValid} (${((totalValid / totalImages) * 100).toFixed(1)}%)\n`;
  report += `Invalid Images: ${totalInvalid} (${((totalInvalid / totalImages) * 100).toFixed(1)}%)\n\n`;

  report += `Figures with broken images: ${figuresWithBrokenImages}\n`;
  report += `Figures with ALL images broken: ${figuresWithAllBroken}\n\n`;

  if (figuresWithBrokenImages > 0) {
    report += 'FIGURES NEEDING ATTENTION:\n';
    report += '-'.repeat(40) + '\n';

    results
      .filter(r => r.invalidImages > 0)
      .forEach(result => {
        report += `${result.figureName} (${result.figureId})\n`;
        report += `  - ${result.validImages}/${result.totalImages} images valid\n`;
        if (result.brokenImages.length > 0) {
          report += `  - Broken: ${result.brokenImages.join(', ')}\n`;
        }
        report += '\n';
      });
  }

  report += '=' .repeat(60) + '\n';

  return report;
}

/**
 * Checks if an image URL is likely to be a Wikimedia Commons URL
 * @param url - The URL to check
 * @returns True if URL appears to be from Wikimedia Commons
 */
export function isWikimediaUrl(url: string): boolean {
  return url.includes('wikimedia.org') ||
         url.includes('wikipedia.org') ||
         url.includes('commons.wikimedia.org');
}

/**
 * Extracts image filename from Wikimedia URL for potential fallback construction
 * @param url - Wikimedia URL
 * @returns Image filename or null if not extractable
 */
export function extractWikimediaFilename(url: string): string | null {
  try {
    const urlObj = new URL(url);
    const pathParts = urlObj.pathname.split('/');
    const filename = pathParts[pathParts.length - 1];

    // Decode URL-encoded filename
    return decodeURIComponent(filename);
  } catch {
    return null;
  }
}

// =====================================================
// CONSTANTS
// =====================================================

export const VALIDATION_CONSTANTS = {
  DEFAULT_TIMEOUT: 10000, // 10 seconds
  DEFAULT_CONCURRENCY: 5,
  MAX_RETRIES: 3,
  RETRY_DELAY: 1000, // 1 second
} as const;
