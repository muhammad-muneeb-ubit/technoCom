# React Router DOM Implementation Guide

## Project Analysis Summary

### Current Architecture
- **Routing Type**: State-based manual routing (using `currentView` state)
- **Router Status**: `BrowserRouter` is already set up in `main.jsx`
- **Package Status**: `react-router-dom` (v7.11.0) is already installed
- **Current Implementation**: Hybrid approach - Routes defined but renderContent() still uses state-based logic

### Project Structure
```
src/
├── App.jsx (Main file - needs refactoring)
├── main.jsx (BrowserRouter already setup ✓)
├── about.jsx (Home page content component)
├── components/
│   ├── Header.jsx (Uses NavLink but needs cleanup)
│   ├── Footer.jsx (Needs refactoring - has state logic issues)
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── Stats.jsx
│   ├── Products.jsx
│   ├── Clients.jsx
│   ├── Contact.jsx
│   ├── TermsOfService.jsx (Policy page)
│   ├── RefundPolicy.jsx (Policy page)
│   ├── PrivacyPolicy.jsx (Policy page)
│   ├── SignIn.jsx (Auth page)
│   └── SignUp.jsx (Auth page)
```

---

## Implementation Steps

### Phase 1: Refactor App.jsx (Main File)

#### Step 1.1: Remove State-Based Routing Logic

**File**: `src/App.jsx`

**Changes**:
1. Remove the `renderContent()` function (Lines 40-119)
2. Remove `currentView` state (Line 21)
3. Keep `scrollProgress` state (needed for scroll tracking)
4. Remove the switch statement that renders components

**Code to Remove**:
```jsx
const [currentView, setCurrentView] = useState("landing");

const renderContent = () => {
  switch (currentView) {
    // ... all cases
  }
};
```

#### Step 1.2: Implement Route-Based Structure

Replace the entire main return JSX with:

```jsx
return (
  <div className="min-h-screen bg-white flex flex-col selection:bg-[#42AA18] selection:text-white">
    {/* Scroll Progress Bar */}
    <div className="fixed top-0 left-0 w-full h-1 z-[120] pointer-events-none">
      <div
        className="h-full bg-[#42AA18] transition-all duration-150 ease-out shadow-[0_0_10px_#42AA18]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>

    <Routes>
      {/* Landing Page Route */}
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      
      {/* Policy Routes */}
      <Route path="/terms" element={<Layout><TermsOfService /></Layout>} />
      <Route path="/refund" element={<Layout><RefundPolicy /></Layout>} />
      <Route path="/privacy" element={<Layout><PrivacyPolicy /></Layout>} />
      
      {/* Auth Routes (No Header/Footer) */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      
      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);
```

#### Step 1.3: Create Layout Component

Create a new component `src/components/Layout.jsx`:

```jsx
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [children]);

  return (
    <>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
```

#### Step 1.4: Create HomePage Component

Create a new component `src/pages/HomePage.jsx`:

```jsx
import React from 'react';
import Hero from '../components/Hero';
import About from '../about';
import Services from '../components/Services';
import Stats from '../components/Stats';
import Products from '../components/Products';
import Clients from '../components/Clients';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Stats />
      <Products />
      <Clients />
      <Contact />
    </>
  );
};

export default HomePage;
```

#### Step 1.5: Create NotFound Component

Create a new component `src/pages/NotFound.jsx`:

```jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-black text-slate-900">404</h1>
        <h2 className="text-4xl font-bold text-slate-900">Page Not Found</h2>
        <p className="text-xl text-slate-500 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#42AA18] text-white rounded-full font-bold hover:bg-[#358A13] transition-all"
        >
          <ArrowLeft size={20} />
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
```

---

### Phase 2: Refactor Header Component

**File**: `src/components/Header.jsx`

#### Step 2.1: Update Imports

Replace imports with:

```jsx
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Technocom from "../assets/technocom.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
```

#### Step 2.2: Remove onNavigate Prop

Remove `onNavigate` and `currentView` props from function signature:

**Old**:
```jsx
const Header = ({ onNavigate, currentView }) => {
```

**New**:
```jsx
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
```

#### Step 2.3: Replace handleLinkClick Function

**Old**:
```jsx
const handleLinkClick = (view, href) => {
  onNavigate(view);
  setIsMobileMenuOpen(false);
  setIsLegalOpen(false);
  if (href && view === "landing") {
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 10);
  }
};
```

**New**:
```jsx
const handleNavClick = (href) => {
  setIsMobileMenuOpen(false);
  setIsLegalOpen(false);
  
  if (location.pathname === '/' && href.startsWith('#')) {
    // Smooth scroll if on landing page
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 10);
  }
};

const handleLogoClick = () => {
  navigate('/');
  setIsMobileMenuOpen(false);
};

const handleLegalClick = (path) => {
  navigate(path);
  setIsMobileMenuOpen(false);
  setIsLegalOpen(false);
};
```

#### Step 2.4: Update Navigation JSX

Replace all navigation buttons with proper React Router links:

**Old Example**:
```jsx
<button
  onClick={() => handleLinkClick("landing", "#home")}
  className="flex justify-center items-center group"
>
```

**New Example**:
```jsx
<button
  onClick={handleLogoClick}
  className="flex justify-center items-center group"
>
```

#### Step 2.5: Update Navigation Links

Replace legal dropdown buttons:

**Old**:
```jsx
<NavLink to="/terms">
  <button
    onClick={() => handleLinkClick("terms")}
    className="w-full text-left px-5 py-3 rounded-2xl..."
  >
    Terms of Service
  </button>
</NavLink>
```

**New**:
```jsx
<Link to="/terms">
  <button
    onClick={() => handleLegalClick('/terms')}
    className="w-full text-left px-5 py-3 rounded-2xl..."
  >
    Terms of Service
  </button>
</Link>
```

#### Step 2.6: Update Auth Buttons

**Old**:
```jsx
<NavLink to="/signin">
  <button
    onClick={() => handleLinkClick("signin")}
    className="text-sm font-bold..."
  >
```

**New**:
```jsx
<Link to="/signin">
  <button
    onClick={() => { navigate('/signin'); setIsMobileMenuOpen(false); }}
    className="text-sm font-bold..."
  >
```

---

### Phase 3: Refactor Footer Component

**File**: `src/components/Footer.jsx`

#### Step 3.1: Update Imports

```jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
```

#### Step 3.2: Remove Props and Add useNavigate Hook

**Old**:
```jsx
export default function Footer({ onNavigate, currentView }) {
```

**New**:
```jsx
export default function Footer() {
  const navigate = useNavigate();
```

#### Step 3.3: Replace All setCurrentView Calls

**Old**:
```jsx
<button
  onClick={() => setCurrentView("landing")}
  className="flex items-center gap-4 text-left"
>
```

**New**:
```jsx
<button
  onClick={() => navigate('/')}
  className="flex items-center gap-4 text-left"
>
```

#### Step 3.4: Replace All Policy Links

**Old**:
```jsx
<button
  onClick={() => setCurrentView("terms")}
  className="hover:text-[#6BCF4A] transition-colors"
>
  Terms of Service
</button>
```

**New**:
```jsx
<Link to="/terms">
  <button className="hover:text-[#6BCF4A] transition-colors">
    Terms of Service
  </button>
</Link>
```

---

### Phase 4: Update Policy Components

**Files**: 
- `src/components/TermsOfService.jsx`
- `src/components/RefundPolicy.jsx`
- `src/components/PrivacyPolicy.jsx`

#### Step 4.1: Replace onBack Prop with useNavigate

**Old**:
```jsx
const TermsOfService = ({ onBack }) => {
  return (
    <button onClick={onBack} className="...">
      Back to Home
    </button>
  );
};
```

**New**:
```jsx
import { useNavigate } from 'react-router-dom';

const TermsOfService = () => {
  const navigate = useNavigate();
  
  return (
    <button onClick={() => navigate('/')} className="...">
      Back to Home
    </button>
  );
};
```

---

### Phase 5: Update Auth Components

**Files**:
- `src/components/SignIn.jsx`
- `src/components/SignUp.jsx`

#### Step 5.1: Update SignIn Component

**Old**:
```jsx
const SignIn = ({ onBack, onSignUp }) => {
  return (
    <button onClick={onBack} className="...">
      Back to Platform
    </button>
  );
};
```

**New**:
```jsx
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <button onClick={() => navigate('/')} className="...">
        Back to Platform
      </button>
      
      {/* ... form content ... */}
      
      <button onClick={() => navigate('/signup')} className="...">
        Create Account
      </button>
    </>
  );
};

export default SignIn;
```

#### Step 5.2: Update SignUp Component

Apply similar changes as SignIn - replace `onBack` and `onSignIn` props with `useNavigate()` hook.

---

### Phase 6: Update main.jsx

**File**: `src/main.jsx`

The file already has `BrowserRouter`, but verify it looks like:

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
```

✓ **No changes needed** - Already correctly configured

---

## Complete File Changes Summary

### Files to Modify
1. **App.jsx** - Complete refactor with Routes
2. **Header.jsx** - Remove onNavigate prop, use useNavigate
3. **Footer.jsx** - Remove onNavigate prop, use useNavigate
4. **TermsOfService.jsx** - Remove onBack prop, use useNavigate
5. **RefundPolicy.jsx** - Remove onBack prop, use useNavigate
6. **PrivacyPolicy.jsx** - Remove onBack prop, use useNavigate
7. **SignIn.jsx** - Remove onBack/onSignUp props, use useNavigate
8. **SignUp.jsx** - Remove onBack/onSignIn props, use useNavigate

### Files to Create
1. **src/components/Layout.jsx** - Wrapper component with Header/Footer
2. **src/pages/HomePage.jsx** - Landing page content
3. **src/pages/NotFound.jsx** - 404 page

### Files to Keep (No Changes)
- main.jsx ✓
- All other components (Hero, Services, Stats, Products, Clients, Contact, About)

---

## Implementation Order

### Day 1: Foundation
1. ✅ Create new directories: `src/pages/`
2. ✅ Create `Layout.jsx` component
3. ✅ Create `HomePage.jsx` component
4. ✅ Create `NotFound.jsx` component
5. ✅ Refactor `App.jsx` with Routes

### Day 2: Component Updates
1. ✅ Update `Header.jsx`
2. ✅ Update `Footer.jsx`
3. ✅ Update `SignIn.jsx`
4. ✅ Update `SignUp.jsx`

### Day 3: Policy Pages
1. ✅ Update `TermsOfService.jsx`
2. ✅ Update `RefundPolicy.jsx`
3. ✅ Update `PrivacyPolicy.jsx`
4. ✅ Test all routes
5. ✅ Fix any bugs

---

## Testing Checklist

### Route Testing
- [ ] `/` loads HomePage with Header, content, and Footer
- [ ] `/terms` loads TermsOfService page
- [ ] `/refund` loads RefundPolicy page
- [ ] `/privacy` loads PrivacyPolicy page
- [ ] `/signin` loads SignIn without Header/Footer
- [ ] `/signup` loads SignUp without Header/Footer
- [ ] `/invalid-route` shows 404 page

### Navigation Testing
- [ ] Header links navigate correctly
- [ ] Footer links navigate correctly
- [ ] Back buttons return to previous route
- [ ] Logo click returns to home
- [ ] Mobile menu closes on navigation
- [ ] Legal dropdown works properly

### Scroll Testing
- [ ] Scroll progress bar appears on all pages
- [ ] Scroll progress bar hidden on auth pages
- [ ] Page scrolls to top on route change
- [ ] Hash links (#home, #about, etc.) work on landing page

### Auth Flow Testing
- [ ] SignIn → SignUp link works
- [ ] SignUp → SignIn link works
- [ ] Both auth pages have back button to home
- [ ] Mobile navigation includes auth links

---

## Expected Benefits After Migration

✅ **Cleaner URL Structure**: `/signin` instead of `?view=signin`
✅ **Browser History**: Back button works as expected
✅ **SEO Friendly**: Each route has its own URL
✅ **Easier Testing**: Routes can be tested independently
✅ **Code Splitting**: Enable lazy loading of components
✅ **Better Performance**: Load only needed code per route
✅ **Standard React Pattern**: Following React Router best practices

---

## Troubleshooting Guide

### Issue: Routes not rendering
**Solution**: Ensure `<Routes>` is wrapped inside `<BrowserRouter>` in main.jsx

### Issue: Links not working
**Solution**: Use `<Link>` from react-router-dom, not regular `<a>` tags

### Issue: useNavigate not working
**Solution**: Ensure component is inside `<BrowserRouter>` in component tree

### Issue: Scroll not resetting
**Solution**: Add `useEffect` with dependency on location in Layout component

### Issue: Mobile menu not closing on navigation
**Solution**: Call `setIsMobileMenuOpen(false)` in navigation handlers

---

## Additional Features to Consider

After completing this implementation:

1. **Nested Routes**: For dashboard/account pages
2. **Protected Routes**: For authenticated pages
3. **Route Guards**: For permission-based access
4. **Query Parameters**: For filters and search
5. **Dynamic Segments**: For product pages with IDs
6. **Loader Functions**: For data fetching before rendering
7. **Error Boundaries**: For error handling at route level

---

## References

- [React Router v7 Documentation](https://reactrouter.com/)
- [useNavigate Hook](https://reactrouter.com/en/main/hooks/use-navigate)
- [Link Component](https://reactrouter.com/en/main/components/link)
- [useLocation Hook](https://reactrouter.com/en/main/hooks/use-location)
- [Routes Component](https://reactrouter.com/en/main/components/routes)

