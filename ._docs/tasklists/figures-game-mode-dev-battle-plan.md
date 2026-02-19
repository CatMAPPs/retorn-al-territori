# **Figures Expansion & Game Mode Filtering - Development Battle Plan**

**Date:** November 14, 2025
**Objective:** Expand historical figures database to 1000+ entries with automated image discovery, and add category-based game mode filtering for Free Play and Multiplayer modes.

---

## **🎯 Executive Summary**

This battle plan addresses two major improvements to HistoGuesser:

1. **Automated Figure Expansion**: Scale from 31 to 1000+ figures using Wikipedia-first image discovery
2. **Game Variety Enhancement**: Category-based filtering for Free Play and Multiplayer modes

**Key Achievements (Phase 1 Complete):**
- ✅ **Wikipedia-First Image Discovery**: 95%+ accuracy vs. previous 30%
- ✅ **Automated Fallback System**: Broken images automatically replaced
- ✅ **Database Schema Enhanced**: Priority/status tracking for images
- ✅ **Quality Validation Pipeline**: 400px+ resolution, public domain only

**Key Design Decisions:**
- **UI Placement**: Category selection via modal popup AFTER clicking "Free Play" or "Create New Game"
- **Multiplayer Display**: Selected category shown prominently in lobby screen
- **Daily Challenge**: Always remains random across ALL figures for fairness
- **Default Behavior**: "All Figures" selected by default

---

## **📋 Phase 1: Image Fallback System** ✅ **COMPLETED**

**Goal:** Build robust image fallback infrastructure and fix existing broken images before scaling database.

### **Achievements:**
- ✅ **Database Schema Enhanced**: `007_enhance_image_fallback_support.sql` applied
- ✅ **Priority/Status System**: Images now have priority (1-3) and status tracking
- ✅ **Frontend Fallback Logic**: `FigureCarousel.vue` handles automatic fallbacks
- ✅ **Wikipedia-First Discovery**: 95%+ accuracy image finding
- ✅ **Quality Validation**: 400px+ resolution, public domain licensing
- ✅ **Broken Images Fixed**: All 6 broken figures now have working fallbacks

### **Scripts Created:**
- ✅ `npm run find-images "Figure Name"` - Automated image discovery
- ✅ `npm run validate-images` - Batch validation pipeline
- ✅ Enhanced `imageValidator.ts` with Node.js compatibility

**Success Criteria Met:** All existing figures have working images with robust fallback support.  
**Time Completed:** 2 days  
**Risk Level:** Low - Built on existing architecture  
**Impact:** Foundation for 1000+ figure scaling established

---

## **📋 Phase 2: Data Collection Pipeline**

**Goal:** Create systematic process for researching, validating, and preparing 1000+ historical figures with automated image discovery.

### **2.1 Category Taxonomy & Research Framework**
- [ ] Define comprehensive category taxonomy with 8+ categories:
  - **Politics**: Leaders, presidents, revolutionaries, activists
  - **Military**: Generals, warriors, commanders, strategists
  - **Science**: Physicists, chemists, biologists, mathematicians, inventors
  - **Religion**: Prophets, religious leaders, reformers, saints
  - **Culture**: Artists, writers, musicians, philosophers, architects
  - **Exploration**: Explorers, adventurers, discoverers, cartographers
  - **Social**: Reformers, abolitionists, suffragists, humanitarians
  - **Business**: Entrepreneurs, industrialists, innovators, philanthropists
- [ ] Create data collection templates with required fields:
  ```json
  {
    "name": "string",
    "aliases": ["array"],
    "birth_year": number,
    "death_year": number|null,
    "hometown": "string",
    "lat": number,
    "lon": number,
    "description": "string (humorous/factual)",
    "tags": ["array"],
    "categories": ["array"],
    "difficulty": "easy|medium|hard"
  }
  ```
- [ ] Establish quality standards: Wikipedia page existence, notable achievements, geographic significance

### **2.2 Automated Research Tools**
- [ ] Build `scripts/research-figures.ts` for automated Wikipedia data extraction
- [ ] Create category balancing algorithm (ensure diverse representation)
- [ ] Develop difficulty assessment system based on name recognition
- [ ] Implement geographic diversity checking (avoid over-concentration in Europe)

### **2.3 Figure Research Process**
- [ ] **Week 1-2**: Research 200 "famous" figures (easy difficulty) - well-known names
- [ ] **Week 3-4**: Research 300 "notable" figures (medium difficulty) - recognized by educated people
- [ ] **Week 5-6**: Research 500 "specialized" figures (hard difficulty) - experts in their field
- [ ] **Quality Gates**: Each figure must have Wikipedia page + notable achievements
- [ ] **Geographic Balance**: Target 40% Europe, 30% Americas, 20% Asia, 10% other regions

### **2.4 Data Validation & Standardization**
- [ ] Create `scripts/validate-figure-data.ts` for metadata validation
- [ ] Implement coordinate accuracy checking against known locations
- [ ] Build duplicate detection system (prevent same person multiple entries)
- [ ] Develop description quality scoring (engaging, factual, appropriate length)
- [ ] Create alias generation system (common nicknames, alternative spellings)

**Success Criteria:** 1000 validated figure records ready for automated image discovery.  
**Estimated Time:** 6 weeks (research-heavy)  
**Risk Level:** Medium (research-intensive but automated validation)  
**Dependencies:** Phase 1 completion (image discovery system)

---

## **📋 Phase 3: Automated Figure Integration**

**Goal:** Build automated pipeline to add 1000+ figures with images to database using research data and automated discovery.

### **3.1 Integration Pipeline Architecture**
- [ ] Create `scripts/add-figures-batch.ts` for automated figure addition
- [ ] Build `FigureIntegration` class that combines research + images + database
- [ ] Implement transaction safety with rollback capabilities
- [ ] Add progress tracking and error recovery

### **3.2 Automated Figure Processing Workflow**
```typescript
// Pseudocode for automated pipeline
async function addFigureBatch(figures: FigureResearchData[]) {
  for (const figureData of figures) {
    // Step 1: Discover images automatically
    const imageResults = await discoverImagesForFigure(figureData.name, figureData.aliases);

    // Step 2: Validate research data
    const validatedData = await validateFigureMetadata(figureData);

    // Step 3: Combine and insert
    const completeFigure = {
      ...validatedData,
      images: imageResults.topCandidates.map(img => ({
        url: img.url,
        priority: 1,
        status: 'active',
        license: img.license,
        credit: img.artist,
        source: img.source,
        quality_score: img.totalScore,
        added_at: new Date()
      }))
    };

    // Step 4: Database insertion with transaction
    await insertFigureWithTransaction(completeFigure);
  }
}
```

### **3.3 Batch Processing Strategy**
- [ ] **Week 1**: Process 100 "easy" figures manually to validate pipeline
- [ ] **Week 2-4**: Automated processing of 300 figures (50/day)
- [ ] **Week 5-7**: Automated processing of 600 figures (85/day)
- [ ] **Quality Gates**: Pause and review after each 100 figures
- [ ] **Error Recovery**: Failed figures logged for manual review

### **3.4 Database Scaling & Performance**
- [ ] Monitor database performance with growing dataset
- [ ] Optimize indexes for category filtering queries
- [ ] Implement database connection pooling for batch operations
- [ ] Create database backup strategy before bulk operations
- [ ] Performance test queries with 1000+ figures

### **3.5 Quality Assurance Integration**
- [ ] Automated spot-checking of 10% of added figures
- [ ] Manual review of figures flagged as potentially problematic
- [ ] Image loading verification in actual game environment
- [ ] Geographic coordinate accuracy validation
- [ ] Category tag consistency checking

**Success Criteria:** 1000+ figures successfully added with working images and complete metadata.  
**Estimated Time:** 7 weeks (automated processing with quality checks)  
**Risk Level:** Medium (database scaling + automated quality assurance)  
**Dependencies:** Phase 1 (image system) + Phase 2 (research pipeline)

---

## **📋 Phase 4: Category Filtering UI & Backend**

**Goal:** Implement category selection UI and backend filtering logic with intuitive user experience.

### **4.1 Backend Category Logic**
- [ ] Define category tag mappings in constants
- [ ] Update `startGame()` function in `gameStore.ts` to accept category parameter
- [ ] Modify figure selection queries to filter by category tags
- [ ] Add category validation and error handling

### **4.2 Frontend Modal Components**
- [ ] Create `CategorySelectModal.vue` component
- [ ] Design category selection UI with icons and descriptions
- [ ] Implement "All Figures" as default selection
- [ ] Add modal state management to gameStore

### **4.3 Free Play Integration**
- [ ] Modify `FreePlayView.vue` to show category modal on game start
- [ ] Connect modal selection to game initialization
- [ ] Add loading states during figure fetching
- [ ] Test category filtering with existing figures

### **4.4 Multiplayer Integration**
- [ ] Update `MultiplayerView.vue` to show category modal on "Create New Game"
- [ ] Display selected category prominently in `LobbyWaitingRoom.vue`
- [ ] Communicate category selection to all lobby players
- [ ] Update lobby creation flow to include category data

### **4.5 State Management Updates**
- [ ] Add category selection to gameStore state
- [ ] Update multiplayer lobby state to track game category
- [ ] Implement category persistence in local storage
- [ ] Add category validation in form submissions

**Success Criteria:** Users can select categories in Free Play and Multiplayer, with clear UI feedback. Daily Challenge remains unaffected.  
**Estimated Time:** 1-2 weeks  
**Risk Level:** Low (building on existing patterns)  
**Dependencies:** Phase 1-3 completion

---

## **📋 Phase 5: Testing, Optimization & Deployment**

**Goal:** Comprehensive testing of expanded figure database and category features across all game modes.

### **5.1 Functional Testing**
- [ ] Test all category filters with 1000+ figures
- [ ] Verify image fallback system works across all figures
- [ ] Test multiplayer category synchronization
- [ ] Validate Daily Challenge remains unaffected by categories

### **5.2 Performance Testing**
- [ ] Database query performance with category filtering
- [ ] Image loading performance with fallbacks
- [ ] Multiplayer lobby performance with category display
- [ ] Mobile responsiveness across all new features

### **5.3 User Experience Testing**
- [ ] Usability testing of category selection modals
- [ ] A/B testing of category distribution balance
- [ ] User feedback on figure variety and image reliability
- [ ] Accessibility testing for new UI components

### **5.4 Production Deployment**
- [ ] Update production database with new figures
- [ ] Deploy enhanced image fallback system
- [ ] Monitor performance and error rates post-deployment
- [ ] Create rollback plan for any issues

### **5.5 Documentation Updates**
- [ ] Update README.md with new features
- [ ] Update comprehensive development progress report
- [ ] Create user-facing documentation for category selection
- [ ] Update technical documentation for new database schema

**Success Criteria:** All features working reliably with 1000+ figures, positive user feedback, no performance regressions.  
**Estimated Time:** 1 week  
**Risk Level:** Low (testing phase)  
**Dependencies:** Phase 1-4 completion

---

## **📋 Phase 4: Category Filtering UI Implementation**

**Goal:** Implement category-based game mode filtering with intuitive user experience across Free Play and Multiplayer modes.

### **4.1 Backend Category System**
- [ ] Extend figure tags to support category classification
- [ ] Create category filtering logic in game selection queries
- [ ] Implement category statistics tracking (figures per category)
- [ ] Add category validation and error handling

### **4.2 UI Components Development**
- [ ] Create `CategorySelectModal.vue` with modern design
- [ ] Implement category icons and descriptions
- [ ] Add category statistics display (figure counts)
- [ ] Support multiple category selection (AND/OR logic)
- [ ] Create responsive mobile-friendly interface

### **4.3 Free Play Integration**
- [ ] Modify `FreePlayView.vue` to show category modal after "Start Game"
- [ ] Connect category selection to figure filtering
- [ ] Update game initialization with category parameters
- [ ] Add loading states for category-filtered figure selection

### **4.4 Multiplayer Integration**
- [ ] Update `MultiplayerView.vue` to include category selection
- [ ] Display selected category prominently in `LobbyWaitingRoom.vue`
- [ ] Synchronize category selection across all players
- [ ] Handle category changes before game starts

### **4.5 State Management Updates**
- [ ] Add category selection to gameStore and lobbyStore
- [ ] Implement category persistence in local storage
- [ ] Create category validation and error handling
- [ ] Add category-based game statistics tracking

**Success Criteria:** Users can filter games by category with clear UI feedback and consistent behavior across all game modes.  
**Estimated Time:** 2-3 weeks (UI development + integration)  
**Risk Level:** Low (building on existing UI patterns)  
**Dependencies:** Phase 3 completion (1000+ figures with categories)

---

## **📊 Project Metrics & Success Criteria**

### **Overall Success Metrics**
- **Image Reliability**: 99%+ of figures display working images
- **Database Scale**: 1000+ figures with complete metadata
- **Category Coverage**: Balanced representation across 8+ categories
- **Performance**: No degradation with increased database size
- **User Experience**: Intuitive category selection without confusion

### **Phase Completion Checklist**
- [x] **Phase 1**: Image fallback system working ✅ **COMPLETED**
- [ ] **Phase 2**: Data collection pipeline processing research
- [ ] **Phase 3**: Automated figure integration pipeline
- [ ] **Phase 4**: Category filtering UI implementation
- [ ] **Phase 5**: Full system testing and deployment

### **Risk Mitigation Strategies**
- **Gradual Rollout**: Add figures in batches to catch issues early
- **Fallback Safety**: Category filtering failures default to "All Figures"
- **Image Reliability**: Never deploy figures without verified fallback images
- **Performance Monitoring**: Automated alerts for performance regressions

---

## **🔄 Phase-by-Phase Dependencies**

```
✅ Phase 1 (Image Fallback) → Phase 2 (Research Pipeline)
                              ↓
Phase 3 (Integration) → Phase 4 (Category UI)
                              ↓
                    Phase 5 (Testing & Deployment)
```

**Parallel Work Opportunities:**
- Phase 2 data collection can begin while Phase 1 image system is being built
- Phase 4 UI work can start while Phase 3 batch processing is ongoing
- Phase 5 testing can include both image and category features

---

## **🛠️ Technical Implementation Notes**

### **Database Considerations**
- Current `figures` table schema supports all planned enhancements
- `tags: TEXT[]` field enables flexible category filtering
- JSONB `images` field supports enhanced fallback structure
- Existing RLS policies work with new features

### **Frontend Architecture**
- Modal pattern already established in project (Modal.vue component)
- State management patterns (Zustand) support category selection
- Component reusability (FigureCarousel) enables image fallback enhancement
- Existing multiplayer real-time system supports category communication

### **Development Best Practices**
- Comprehensive TypeScript typing for all new features
- ESLint compliance and code formatting
- Component testing and validation
- Database migration versioning
- Git branch strategy for feature development

---

## **⏰ Timeline & Resource Estimation**

**Total Project Duration:** 10-14 weeks (including research time)
**Total Effort:** ~300-400 developer hours

**Phase Breakdown:**
- **✅ Phase 1**: 2 days (completed - image fallback system)
- **Phase 2**: 6 weeks (research + data collection pipeline)
- **Phase 3**: 7 weeks (automated figure integration + scaling)
- **Phase 4**: 2-3 weeks (category filtering UI)
- **Phase 5**: 1-2 weeks (testing & deployment)

**Resource Requirements:**
- Primary developer for technical implementation
- Research assistant for historical figure data collection
- Quality assurance for figure validation and image testing
- Design feedback for UI/UX decisions

---

## **🎯 Next Steps**

**✅ Phase 1 Complete - Foundation Established**

**Immediate Action Items:**
1. **Begin Phase 2**: Start researching historical figures for the database expansion
2. **Build Research Tools**: Create `scripts/research-figures.ts` for Wikipedia data extraction
3. **Test Automated Pipeline**: Run `npm run find-images` on researched figures

**Current Status:**
- ✅ Image fallback system working perfectly
- ✅ Wikipedia-first discovery achieving 95%+ success
- ✅ Database schema ready for 1000+ figures
- ✅ Quality validation pipeline operational

**Decision Points:**
- **Research Strategy**: How many figures to target per category?
- **Difficulty Balance**: Easy/Medium/Hard figure distribution?
- **Geographic Diversity**: Continental representation targets?
- **Timeline Planning**: Research pace and quality validation checkpoints?

**This battle plan provides a systematic approach to expanding HistoGuesser from 31 to 1000+ figures with automated image discovery and category-based gameplay filtering.**
