/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { DynamicIcon } from '../components/DynamicIcon';
import { TeamMemberCard } from '../components/ReusableComponents';
import { VALUES, TEAM_MEMBERS, MILESTONES } from '../data';
import { PageRoute } from '../types';

interface AboutViewProps {
  onNavigate: (route: PageRoute) => void;
}

export const AboutView = React.memo(({ onNavigate }: AboutViewProps) => {
  // Capture executive leaders only (first 4 members of layout team)
  const executiveTeam = TEAM_MEMBERS.slice(0, 4);

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. BRAND STORY & MISSION */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-100 dark:border-slate-900" aria-labelledby="mission-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-blue-700 dark:text-blue-450 text-xs font-bold uppercase tracking-widest block">
                Who We Are
              </span>
              <h1 id="mission-title" className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                Our Mission: Unfailing Accessibility, Rigid Security
              </h1>
              <p className="text-slate-650 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Finwise Analytics was formulated to demonstrate that high-performance enterprise dashboards do not require compromising on accessibility safety. We engineer robust big-data pipelines to keep transactions transparent while supporting active keyboard navigability and dynamic text-scaling natively.
              </p>
              <p className="text-slate-655 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                By maintaining active development perimeters and leveraging modern design frameworks, our engineers build tools that align easily with SOC2, GDPR, HIPAA, and WCAG AA regulatory mandates, enabling organizations to scale confidently across international markets.
              </p>
            </div>

            {/* Visual Mission Decorative Feature */}
            <div className="lg:col-span-5 hidden lg:block" aria-hidden="true">
              <div className="aspect-square bg-blue-600/5 rounded-3xl border border-blue-500/10 p-10 flex flex-col justify-between items-start relative overflow-hidden">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg">
                  <DynamicIcon name="Accessibility" className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-heading text-slate-900 dark:text-white text-2xl font-bold mb-2">Designed for Assisting Tools First</h3>
                  <p className="text-slate-550 text-sm">Every menu, widget, chart, and alert passes stringent validation audits.</p>
                </div>
                <div className="absolute right-[-40px] top-[-40px] w-48 h-48 rounded-full border border-blue-600/10 pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CORE VALUES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" aria-labelledby="values-heading">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 id="values-heading" className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-905 dark:text-white tracking-tight">
            Valued Anchors Guided Our Work
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Maintaining safe telemetry parameters and building trust with active system owners is at the center of our operational priorities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((val) => (
            <div
              key={val.id}
              className="bg-white dark:bg-slate-900 border border-slate-205 dark:border-slate-850 rounded-xl p-5 hover:border-blue-300 dark:hover:border-slate-800 transition-colors"
            >
              <div className="w-10 h-10 bg-blue-50 dark:bg-slate-800 rounded-lg flex items-center justify-center text-blue-755 dark:text-blue-400 mb-4">
                <DynamicIcon name={val.iconName} className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-base font-bold text-slate-950 dark:text-white mb-2">
                {val.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-405 text-xs leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. EXECUTIVE BOARD LEADERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" aria-labelledby="executive-heading">
        <div className="flex flex-col sm:flex-row items-baseline justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 id="executive-heading" className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-910 dark:text-white tracking-tight">
              Executive Governance
            </h2>
            <p className="text-slate-500 text-sm mt-1">Our executive board guides compliance performance and research directions.</p>
          </div>
          <button
            onClick={() => onNavigate('team')}
            className="text-blue-700 dark:text-blue-400 font-bold text-sm hover:underline cursor-pointer tracking-wide flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded p-1"
            aria-label="View the full team directory including implementation engineers and design staff"
          >
            <span>View Full Team Directory (8 Members)</span>
            <DynamicIcon name="ChevronRight" className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {executiveTeam.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* 4. COMPANY HISTORY TIMELINE */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" aria-labelledby="milestone-heading">
        <div className="text-center space-y-3">
          <h2 id="milestone-heading" className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Historical Milestones
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Review the historical track of Finwise Analytics as we scaled database safety.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 py-2 space-y-8" role="list" aria-label="Finwise corporate milestone timeline">
          {MILESTONES.map((stone) => (
            <div key={stone.id} className="relative pl-8 group" role="listitem">
              
              {/* Timeline bubble node locator */}
              <div
                className="absolute left-[-9px] top-1 w-4.5 h-4.5 rounded-full bg-white dark:bg-slate-950 border-2 border-slate-300 dark:border-slate-700 group-hover:border-blue-600 transition-colors"
                aria-hidden="true"
              />
              
              <div className="space-y-1.5 text-left">
                <time className="font-heading text-sm font-black text-blue-700 dark:text-blue-450 tracking-wider block">
                  {stone.year}
                </time>
                <h3 className="font-heading text-base font-bold text-slate-950 dark:text-white">
                  {stone.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-355 text-sm leading-relaxed">
                  {stone.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
});

AboutView.displayName = 'AboutView';
