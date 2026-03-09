'use strict';
// Update cache names any time any of the cached files change.
const CACHE_NAME = 'static-cache-v1';
const DYNAMIC_CACHE = 'dynamic-cache-v1';

// Add list of files to cache here.
const FILES_TO_CACHE = [
  'offline.html',
  'manifest.json',
  'icgc_icon_192.png',
  'icgc_icon_256.png',
  'icgc_icon_512.png',
];

self.addEventListener('install', (evt) => {
  evt.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(FILES_TO_CACHE);
      })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  evt.waitUntil(
      caches.keys().then((keyList) => {
        return Promise.all(keyList.map((key) => {
          if (key !== CACHE_NAME && key !== DYNAMIC_CACHE) {
            return caches.delete(key);
          }
        }));
      }) 
  );
  self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
  const { request } = evt;
  const url = new URL(request.url);
  
  // Handle navigation requests
  if (request.mode === 'navigate') {
    evt.respondWith(
      fetch(request)
        .then((response) => {
          // Cache successful responses
          if (response && response.status === 200) {
            const responseClone = response.clone();
            caches.open(DYNAMIC_CACHE).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          // Fall back to offline page
          return caches.open(CACHE_NAME)
            .then((cache) => {
              return cache.match('offline.html');
            });
        })
    );
    return;
  }
  
  // Handle other requests with cache-first strategy
  evt.respondWith(
    caches.match(request).then((response) => {
      if (response) {
        return response;
      }
      
      return fetch(request)
        .then((response) => {
          // Cache successful responses
          if (response && response.status === 200 && request.method === 'GET') {
            const responseClone = response.clone();
            caches.open(DYNAMIC_CACHE).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          // Return offline page for failed requests
          return caches.open(CACHE_NAME)
            .then((cache) => {
              return cache.match('offline.html');
            });
        });
    })
  );
});
