/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { DynamicIcon } from '../components/DynamicIcon';
import { ContactForm } from '../components/ReusableComponents';
import { PageRoute } from '../types';

interface ContactViewProps {
  onNavigate: (route: PageRoute) => void;
}

export const ContactView = React.memo(({ onNavigate }: ContactViewProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 pb-20">
      
      {/* 1. INTRO COMPONENT */}
      <div className="text-left max-w-3xl space-y-4">
        <span className="text-blue-700 dark:text-blue-450 text-xs font-bold uppercase tracking-widest block">
          Establish Contact
        </span>
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
          Request Security Consultation
        </h1>
        <p className="text-slate-655 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          Ready to deploy customized Cloud Analytics, schedule database migrations, or request detailed penetration checks? Reach out using our secure interface to connect directly with a senior coordinator.
        </p>
      </div>

      {/* 2. CORE CONFLICT RESOLUTIONS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Col: Contact Information and Map illustration (5 columns) */}
        <section className="lg:col-span-5 space-y-8 text-left" aria-label="Finwise Office Details">
          
          {/* Details column list */}
          <div className="space-y-6">
            <h2 className="font-heading text-xl font-bold text-slate-905 dark:text-white pb-3 border-b border-slate-105 dark:border-slate-800">
              Operations Directory
            </h2>
            
            <div className="space-y-4">
              
              {/* Phone Line item */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <DynamicIcon name="Phone" className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase font-bold text-slate-500 tracking-wider">Priority Hotline</h3>
                  <a
                    href="tel:+14155550189"
                    className="text-sm font-bold text-slate-805 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:underline outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded p-0.5 mt-0.5 block"
                  >
                    +1 (415) 555-0189
                  </a>
                </div>
              </div>

              {/* Email Line item */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <DynamicIcon name="Mail" className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase font-bold text-slate-500 tracking-wider">Inquiries Routing</h3>
                  <a
                    href="mailto:partner@finwise-analytics-demo.com"
                    className="text-sm font-bold text-slate-805 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:underline outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded p-0.5 mt-0.5 block"
                  >
                    partner@finwise-analytics-demo.com
                  </a>
                </div>
              </div>

              {/* Physical Headquarters Address item */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <DynamicIcon name="MapPin" className="w-5 h-5" />
                </div>
                <address className="not-italic text-sm text-slate-600 dark:text-slate-350">
                  <h3 className="text-xs uppercase font-bold text-slate-505 tracking-wider mb-0.5">Finwise Headquarters</h3>
                  <p className="font-semibold text-slate-800 dark:text-white">100 Pine Street, Floor 21</p>
                  <p>San Francisco, CA 94111</p>
                </address>
              </div>

            </div>
          </div>

          {/* 3. EMBEDDED MAP PLACEHOLDER */}
          <div className="space-y-3">
            <h2 className="sr-only">Physical Location Guide Map</h2>
            <div
              className="relative bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl h-64 overflow-hidden shadow-inner flex items-center justify-center"
              role="img"
              aria-label="Map illustration depicting the Finwise Headquarters office at 100 Pine Street, Financial District, San Francisco."
            >
              {/* CSS Vector abstraction representing downtown street guides */}
              <div className="absolute inset-0 opacity-20 dark:opacity-30 pointer-events-none">
                <div className="absolute left-0 right-0 h-0.5 bg-slate-400 dark:bg-slate-700 top-12" />
                <div className="absolute left-0 right-0 h-0.5 bg-slate-400 dark:bg-slate-700 top-32" />
                <div className="absolute left-0 right-0 h-0.5 bg-slate-400 dark:bg-slate-700 top-48" />
                <div className="absolute top-0 bottom-0 w-0.5 bg-slate-400 dark:bg-slate-700 left-1/4" />
                <div className="absolute top-0 bottom-0 w-0.5 bg-slate-400 dark:bg-slate-700 left-2/3" />
              </div>

              {/* Ambient Circular Glow Pin point marker */}
              <div className="relative z-10 text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/45 flex items-center justify-center text-blue-700 dark:text-blue-400 mx-auto ring-8 ring-blue-500/15 animate-bounce">
                  <DynamicIcon name="MapPin" className="w-6 h-6" />
                </div>
                <div className="bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xl px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap">
                  Finwise HQ • San Francisco
                </div>
              </div>

              {/* Map Controls placeholder visuals */}
              <div className="absolute bottom-3 right-3 bg-white dark:bg-slate-950 px-2 py-1 rounded border border-slate-200 dark:border-slate-800 text-[10px] text-slate-500 font-bold shadow-md uppercase">
                Mock Satellite View
              </div>
            </div>
          </div>

        </section>

        {/* Right Col: Interactive Submission Fields (7 columns) */}
        <section className="lg:col-span-7 space-y-4 text-left" aria-label="Secure Message Submission Form">
          <div className="space-y-2 mb-2">
            <h2 className="font-heading text-xl font-bold text-slate-905 dark:text-white">
              Secure Submission Terminal
            </h2>
            <p className="text-slate-505 text-sm">
              Our transmission protocols use modern encryption boundaries to protect your company information dynamically.
            </p>
          </div>

          <ContactForm />
        </section>

      </div>

    </div>
  );
});

ContactView.displayName = 'ContactView';
