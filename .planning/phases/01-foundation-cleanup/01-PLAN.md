# Phase 1: Foundation & Cleanup — Plan

## Objective

Resolve blocking issues and establish a clean development baseline. After this phase, the dev environment will work, configuration will be centralized, and basic resilience patterns will be in place.

## Prerequisites

- Access to the repository
- Node.js and npm installed

## Tasks

### Task 1: Install Dependencies

**Goal**: Get the development environment running

**Actions**:
1. Run `npm install` to install all dependencies
2. Run `npm run dev` to verify the development server starts
3. Visit the local development URL and confirm the site renders

**Verification**: `npm run dev` starts without errors and the site loads in browser

---

### Task 2: Create Configuration File

**Goal**: Centralize hardcoded values in a single config file

**Files to create**:
- `src/constants/config.js`

**Config values to centralize**:
```js
export const CONTACT = {
  phone: '+13179612546',
  phoneDisplay: '317-961-2546',
};

export const SITE = {
  name: 'StrataBlue',
  logoPath: '/stratablue-logo.png', // Will use VITE_BASE_URL prefix
};
```

**Verification**: File created with exported constants

---

### Task 3: Update Components to Use Config

**Goal**: Replace hardcoded phone numbers with config imports

**Files to modify** (6 total):
- `src/components/Header.jsx` - line 29
- `src/components/Hero.jsx` - line 67
- `src/components/VoiceDemo.jsx` - line 158
- `src/components/HowItWorks.jsx` - line 93
- `src/components/FinalCTA.jsx` - line 19
- `src/components/Footer.jsx` - line 26

**Pattern**:
```jsx
// Before
<a href="tel:+13179612546">317-961-2546</a>

// After
import { CONTACT } from '../constants/config';
<a href={`tel:${CONTACT.phone}`}>{CONTACT.phoneDisplay}</a>
```

**Verification**: Search for `+13179612546` returns 0 results in src/

---

### Task 4: Set Up Environment Variables

**Goal**: Enable environment-specific configuration

**Files to create**:
- `.env.example` - Template for required environment variables
- `.env` - Local development values (add to .gitignore if not present)

**Environment variables**:
```env
# Base URL path for deployment (e.g., /test/ for GitHub Pages subdirectory)
VITE_BASE_URL=/

# Feature flags (future use)
# VITE_ENABLE_ANALYTICS=false
```

**Files to modify**:
- `vite.config.js` - Use `process.env.VITE_BASE_URL` or loadEnv for base path

**Updated vite.config.js**:
```js
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    base: env.VITE_BASE_URL || '/',
  }
})
```

**Verification**: `npm run dev` still works; base path configurable via .env

---

### Task 5: Clean Up Unused CSS

**Goal**: Remove Vite boilerplate CSS that's not being used

**Files to modify**:
- `src/App.css` - Remove or empty the file

**Unused styles to remove**:
- `.logo` styles (Vite boilerplate)
- `.card` styles (unused)
- `.read-the-docs` styles (unused)
- `@keyframes logo-spin` (unused)
- `#root` constraints (conflicts with full-width design)

**Decision**: Keep App.css but empty it (or remove import from App.jsx) to maintain file structure for future use.

**Verification**: Site still renders correctly after CSS removal

---

### Task 6: Fix Broken Links

**Goal**: Replace placeholder `href="#"` with appropriate actions

**Files to modify**:
- `src/components/Footer.jsx` - lines 44, 62, 67, 73
- `src/components/UseCases.jsx` - line 117

**Strategy**:
- Footer navigation links → Use anchor IDs to sections (e.g., `#use-cases`, `#how-it-works`)
- Footer social/contact links → Add real URLs or remove if not applicable
- UseCases "Learn more" → Link to appropriate section or use button with scroll behavior

**Verification**: No `href="#"` in source code (except legitimate anchor roots)

---

### Task 7: Add Error Boundary

**Goal**: Prevent full-page crashes from component errors

**Files to create**:
- `src/components/ErrorBoundary.jsx`

**Implementation**:
```jsx
import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-brand-blue rounded hover:bg-brand-blue/80"
            >
              Reload page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
```

**Files to modify**:
- `src/App.jsx` - Wrap content with ErrorBoundary

**Verification**: Site renders; ErrorBoundary wraps main content in App.jsx

---

### Task 8: Final Verification

**Goal**: Confirm all changes work together

**Actions**:
1. Run `npm run lint` - Fix any linting errors
2. Run `npm run build` - Verify production build succeeds
3. Run `npm run preview` - Test production build locally
4. Verify no hardcoded phone numbers in src/ (except config)
5. Verify no `href="#"` placeholders remain
6. Verify ErrorBoundary is in place

**Verification**: All npm scripts pass; site functions correctly

---

## Verification Checklist

- [ ] `npm run dev` starts successfully
- [ ] `npm run build` completes without errors
- [ ] `npm run lint` passes (or only warnings)
- [ ] Phone number centralized in config (0 hardcoded instances in components)
- [ ] No `href="#"` placeholders in components
- [ ] `.env.example` exists with documented variables
- [ ] ErrorBoundary wraps App content
- [ ] Site renders correctly in browser

## Success Criteria

1. Development environment is fully functional
2. All configuration values are centralized and documented
3. No broken links or placeholder hrefs
4. Error boundary prevents full-page crashes
5. Codebase is clean and ready for Phase 2 (Design System)

## Output

After completing this phase:
- Update `.planning/STATE.md` to mark Phase 1 complete
- Commit all changes with message: "feat: complete phase 1 foundation & cleanup"
- Ready to begin Phase 2: Design System

---
*Created: 2026-01-11*
