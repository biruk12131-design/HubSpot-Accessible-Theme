/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ServiceCard } from '../components/ReusableComponents';
import { SERVICES } from '../data';
import { PageRoute } from '../types';

interface ServicesViewProps {
  onNavigate: (route: PageRoute) => void;
}

export const ServicesView = React.memo(({ onNavigate }: ServicesViewProps) => {
  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. SECTION INTRO */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-100 dark:border-slate-900" aria-labelledby="services-overview-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-3xl space-y-4">
            <span className="text-blue-700 dark:text-blue-450 text-xs font-bold uppercase tracking-widest block">
              What We Do
            </span>
            <h1 id="services-overview-title" className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
              Enterprise Solutions & Analytical Engineering
            </h1>
            <p className="text-slate-650 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore our core technical specialities. From migrating active transaction databases to auditing cloud networking bounds, our teams maintain strict security guarantees and direct accessibility support through all implementation rounds.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SERVICES CAPABILITY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" aria-labelledby="services-grid-title">
        <h2 id="services-grid-title" className="sr-only">Detailed Services Matrix</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((serv) => (
            <ServiceCard key={serv.slug} service={serv} onNavigate={onNavigate} />
          ))}
        </div>
      </section>

      {/* 3. ACCESSIBLE SERVICE COMPARISON TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" aria-labelledby="comparison-title">
        <div className="text-left max-w-2xl space-y-3">
          <h2 id="comparison-title" className="font-heading text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Solutions Matrix & Implementation Comparison
          </h2>
          <p className="text-slate-500 text-sm">
            Cross-reference operational delivery targets, pricing frameworks, and security qualifications to select the correct engagement scope.
          </p>
        </div>

        {/* Responsive, Scrollable Table Wrapper */}
        <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600" tabIndex={0} aria-label="Solutions comparison table scroll panel">
          <table className="min-w-full divide-y divide-slate-205 dark:divide-slate-800 text-left">
            <caption className="sr-only">Parameters review of services, showing title, delivery window, pricing mode, and compliance level.</caption>
            
            <thead className="bg-slate-50 dark:bg-slate-850">
              <tr>
                <th scope="col" className="px-6 py-4.5 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  Capability
                </th>
                <th scope="col" className="px-6 py-4.5 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  Delivery Speed
                </th>
                <th scope="col" className="px-6 py-4.5 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  Focus Architecture
                </th>
                <th scope="col" className="px-6 py-4.5 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  Base Budget
                </th>
                <th scope="col" className="px-6 py-4.5 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  Compliance Level
                </th>
              </tr>
            </thead>
            
            <tbody className="divide-y divide-slate-105 dark:divide-slate-800/80">
              
              <tr>
                <th scope="row" className="px-6 py-4 text-sm font-bold text-slate-905 dark:text-white">
                  Cloud Analytics
                </th>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-350">
                  4 - 6 Weeks
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-350">
                  Real-time pipelines
                </td>
                <td className="px-6 py-4 text-sm font-mono text-slate-900 dark:text-blue-400">
                  $2.5k - $7k / m
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-355">
                  SOC2, AICPA Bound
                </td>
              </tr>

              <tr>
                <th scope="row" className="px-6 py-4 text-sm font-bold text-slate-905 dark:text-white">
                  Data Migration
                </th>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-350">
                  6 - 12 Weeks
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-350">
                  Zero-loss replication
                </td>
                <td className="px-6 py-4 text-sm font-mono text-slate-900 dark:text-blue-400">
                  $8k - $25k Fixed
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-355">
                  TLS Encrypted Lines
                </td>
              </tr>

              <tr>
                <th scope="row" className="px-6 py-4 text-sm font-bold text-slate-905 dark:text-white">
                  AI Consulting
                </th>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-350">
                  Ongoing Retainer
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-350">
                  Secure local LLM
                </td>
                <td className="px-6 py-4 text-sm font-mono text-slate-900 dark:text-blue-400">
                  $150 - $250 / hr
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-355">
                  Private Cloud Bounds
                </td>
              </tr>

              <tr>
                <th scope="row" className="px-6 py-4 text-sm font-bold text-slate-905 dark:text-white">
                  Custom Dashboards
                </th>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-350">
                  3 - 5 Weeks
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-350">
                  WCAG Interface Build
                </td>
                <td className="px-6 py-4 text-sm font-mono text-slate-900 dark:text-blue-400">
                  $3.5k - $9.5k Proj
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-355">
                  WCAG 2.2 AA Certified
                </td>
              </tr>

              <tr>
                <th scope="row" className="px-6 py-4 text-sm font-bold text-slate-905 dark:text-white">
                  24/7 Support
                </th>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-350">
                  Continuous Cover
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-350">
                  15min priority SLA
                </td>
                <td className="px-6 py-4 text-sm font-mono text-slate-900 dark:text-blue-400">
                  $1.2k - $5k / m
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-355">
                  ISO27001 SysAdmin Run
                </td>
              </tr>

              <tr>
                <th scope="row" className="px-6 py-4 text-sm font-bold text-slate-905 dark:text-white">
                  Security Audit
                </th>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-350">
                  4 Weeks
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-350">
                  Full penetration checks
                </td>
                <td className="px-6 py-4 text-sm font-mono text-slate-900 dark:text-blue-400">
                  $6k - $18k Detailed
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-355">
                  SOC2, HIPAA Validation
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
});

ServicesView.displayName = 'ServicesView';
