/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { DynamicIcon } from './DynamicIcon';
import { PageRoute } from '../types';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export const Header = React.memo(({ currentRoute, onNavigate }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Sync theme initial state safely with browser environment
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const navItems = [
    { label: 'Home', route: 'home' },
    { label: 'About', route: 'about' },
    { label: 'Services', route: 'services' },
    { label: 'Team', route: 'team' },
    { label: 'Contact', route: 'contact' }
  ];

  const handleLinkClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
  };

  const isCurrent = (route: PageRoute) => {
    if (route === 'home' && currentRoute === 'home') return true;
    if (route !== 'home' && currentRoute.startsWith(route)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-950/95 border-b border-slate-200 dark:border-slate-800 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Fictional Brand Logo Header */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-3 cursor-pointer group focus-visible:ring-2 focus-visible:ring-blue-650 focus-visible:outline-none rounded-lg p-1.5"
              aria-label="Finwise Analytics homepage"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white ring-4 ring-blue-500/15 group-hover:scale-105 transition-all">
                <DynamicIcon name="BarChart3" className="w-5 h-5" />
              </div>
              <span className="font-heading text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                Finwise<span className="text-blue-600 dark:text-blue-450">Analytics</span>
              </span>
            </button>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2" aria-label="Primary Navigation Container">
            {navItems.map((item) => {
              const active = isCurrent(item.route);
              return (
                <button
                  key={item.route}
                  onClick={() => handleLinkClick(item.route)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                    active
                      ? 'bg-blue-50 dark:bg-slate-900 text-blue-700 dark:text-blue-450 z-10'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Theme Switch and Mobile Toggle Group Panel */}
          <div className="flex items-center gap-3">
            {/* Color contrast friendly Accessibility theme toggler */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
              aria-label={isDarkMode ? 'Activate Light Visual Theme' : 'Activate Dark Visual Theme'}
              title={isDarkMode ? 'Toggle Light Theme' : 'Toggle Dark Theme'}
            >
              {isDarkMode ? (
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-12.37c-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.38.39-1.03 0-1.41zm-12.37 12.37c-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.38.39-1.03 0-1.41Z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.3 22h-.1c-5.5 0-10-4.5-10-10C2.2 6.8 6.4 2.5 11.7 2c.6-.1 1.2.4 1.1 1-.1.4-.4.8-.8 1-3.7 1.5-6.1 5.3-5.7 9.5.4 4.1 3.7 7.5 7.9 7.9 4.2.4 8-2 9.5-5.7.2-.4.6-.7 1-.8.6-.1 1.1.5 1 1.1C21.5 17.6 17.2 22 12.3 22Z" />
                </svg>
              )}
            </button>

            {/* Mobile Nav Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Collapse main navigation menu' : 'Expand main navigation menu'}
            >
              <DynamicIcon name={mobileMenuOpen ? 'X' : 'Menu'} className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800"
        >
          <nav className="px-4 pt-2 pb-6 space-y-1.5" aria-label="Mobile Navigation Drawer">
            {navItems.map((item) => {
              const active = isCurrent(item.route);
              return (
                <button
                  key={item.route}
                  onClick={() => handleLinkClick(item.route)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold tracking-wide transition-all cursor-pointer block outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                    active
                      ? 'bg-blue-50 dark:bg-slate-900 text-blue-700 dark:text-blue-450 font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
});

Header.displayName = 'Header';
