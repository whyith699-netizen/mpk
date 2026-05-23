# Design Spec: MPK Content Integration (Consolidated About Page)

**Date:** 2026-05-23
**Status:** Approved

## 1. Goal
Integrate comprehensive formal information about MPK (Majelis Permusyawaratan Kelas) into the existing website, specifically within a consolidated "About" page.

## 2. Information Architecture
All new formal content will be added to `src/pages/About.jsx`. The existing `src/pages/Works.jsx` will remain as a visual highlight reel for major activities.

### New Content Sections:
1.  **Mission/Role:** Legislative focus (aspirasi, pengawasan, legislasi).
2.  **Tugas MPK (Tasks):** 8 primary duties (a-h).
3.  **Struktur Pengurusan (Structure):** Hierarchical layout including BPH and Commissions I-IV.
4.  **Program Kerja (Programs):** 6 key sessions/activities.
5.  **Produk Hukum (Legal Products):** 4 categories of legislative output.

## 3. UI/UX Design (Frontend-Design)
- **Aesthetic:** Maintain the bold, high-contrast aesthetic (White, Brand Red, Brand Orange).
- **Layout:** Use a grid-based approach to handle dense information without clutter.
- **Components:**
    - **Tasks Card:** High-contrast white card with red text for maximum visibility.
    - **Structure Grid:** Dark-themed cards with accent commissions.
    - **Program/Law Sections:** Clean lists with accent borders (Brand Orange).
- **Interactions:** Framer Motion for staggered reveals and hover states on cards.

## 4. Implementation Details
- **Data Arrays:** Move text content into constant arrays within `About.jsx` for maintainability.
- **Component Refactoring:** `About.jsx` will be refactored to use reusable section components if it grows too large (e.g., `InfoSection.jsx`).

## 5. Verification Plan
- **Visual Check:** Ensure all text provided in the prompt is accurately represented.
- **Responsive Check:** Verify the grid collapses correctly on mobile devices.
- **Build Check:** Run `npm run build` to ensure no regressions.
