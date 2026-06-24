/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SkipToContent } from './components/SkipToContent';
import { RouteAnnouncer } from './components/RouteAnnouncer';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ServicesView } from './views/ServicesView';
import { ServiceDetailView } from './views/ServiceDetailView';
import { TeamView } from './views/TeamView';
import { ContactView } from './views/ContactView';
import { PageRoute } from './types';
import { DynamicIcon } from './components/DynamicIcon';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');

  // Sync route with URL hash for perfect bookmarking & back/forward button compliance
  useEffect(() => {
    const parseRouteFromHash = (): PageRoute => {
      const hash = window.location.hash;
      if (!hash || hash === '#' || hash === '#home') {
        return 'home';
      }
      return hash.slice(1); // Remove leading '#'
    };

    // Set stable initial route
    setCurrentRoute(parseRouteFromHash());

    const handleHashChange = () => {
      const nextRoute = parseRouteFromHash();
      setCurrentRoute(nextRoute);

      // Scroll smoothly back to top on transitions
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Shift programmatic focus safely to main content block to support screen readers
      setTimeout(() => {
        const mainElement = document.getElementById('main-content');
        if (mainElement) {
          mainElement.focus();
        }
      }, 100);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigation = (route: PageRoute) => {
    window.location.hash = `#${route}`;
  };

  // Render correct visual view matching active layout state
  const renderView = () => {
    if (currentRoute === 'home') {
      return <HomeView onNavigate={handleNavigation} />;
    }
    if (currentRoute === 'about') {
      return <AboutView onNavigate={handleNavigation} />;
    }
    if (currentRoute === 'services') {
      return <ServicesView onNavigate={handleNavigation} />;
    }
    if (currentRoute.startsWith('services/')) {
      const slug = currentRoute.split('/')[1];
      return <ServiceDetailView slug={slug || ''} onNavigate={handleNavigation} />;
    }
    if (currentRoute === 'team') {
      return <TeamView onNavigate={handleNavigation} />;
    }
    if (currentRoute === 'contact') {
      return <ContactView onNavigate={handleNavigation} />;
    }

    // Default Fallback AA-Compliant 404 View
    return (
      <div className="max-w-md mx-auto py-24 text-center space-y-6">
        <div className="w-16 h-16 bg-blue-50 dark:bg-slate-900 border border-blue-200 dark:border-slate-800 rounded-full flex items-center justify-center text-blue-700 dark:text-blue-400 mx-auto">
          <DynamicIcon name="AlertCircle" className="w-8 h-8" />
        </div>
        <h1 className="font-heading text-3xl font-black text-slate-900 dark:text-white">
          Reference Not Found
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          The view path reference is invalid or has expired. Use our primary menu directory to return safely.
        </p>
        <button
          onClick={() => handleNavigation('home')}
          className="inline-flex items-center gap-1.5 px-6 py-3 bg-blue-700 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all cursor-pointer"
        >
          <span>Return To Homepage</span>
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col selection:bg-blue-600 selection:text-white transition-colors duration-300">
      
      {/* 1. KEYBOARD NAVIGATION FIRST BLOCK (WCAG AA requirement) */}
      <SkipToContent />

      {/* 2. SILENT SCREEN READER ANNUNCIATOR */}
      <RouteAnnouncer currentRoute={currentRoute} />

      {/* 3. HERO ACCESSIBLE CONTAINER HEADER */}
      <Header currentRoute={currentRoute} onNavigate={handleNavigation} />

      {/* 4. MAIN PAGE CONTENT ELEMENT (Targeted by skip-link) */}
      <main
        id="main-content"
        tabIndex={-1}
        className="flex-grow focus-visible:outline-none"
        aria-label="Finwise Main Contents Pane"
      >
        {renderView()}
      </main>

      {/* 5. METRIC ALIGNED FOOTER BLOCK */}
      <Footer onNavigate={handleNavigation} />

    </div>
  );
}
