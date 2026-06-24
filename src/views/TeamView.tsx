/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { DynamicIcon } from '../components/DynamicIcon';
import { TeamMemberCard } from '../components/ReusableComponents';
import { TEAM_MEMBERS } from '../data';
import { PageRoute } from '../types';

interface TeamViewProps {
  onNavigate: (route: PageRoute) => void;
}

export const TeamView = React.memo(({ onNavigate }: TeamViewProps) => {
  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. SECTION INTRO */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-100 dark:border-slate-900" aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-3xl space-y-4">
            <span className="text-blue-700 dark:text-blue-450 text-xs font-bold uppercase tracking-widest block">
              Our Experts
            </span>
            <h1 id="team-heading" className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
              Meet Our Elite Technical Specialists
            </h1>
            <p className="text-slate-650 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              We maintain a direct, collaborative culture of senior engineers, certification specialists, and accessibility advocates. Each member is explicitly committed to delivering production assets following strict industry safety specifications.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FULL TEAM DIRECTIONAL GRID (8 MEMBERS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" aria-labelledby="roster-heading">
        <h2 id="roster-heading" className="sr-only">Roster directory list of 8 members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* 3. RECRUITMENT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="recruit-title">
        <div className="bg-slate-900 dark:bg-slate-950/70 text-white rounded-2xl p-8 sm:p-12 border-2 border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-8 text-left relative overflow-hidden">
          
          <div className="space-y-4 max-w-xl z-10">
            <span className="text-blue-500 text-xs font-bold uppercase tracking-wider block">
              Active Scaling
            </span>
            <h2 id="recruit-title" className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Join Our Engineering Cluster
            </h2>
            <p className="text-slate-450 text-sm leading-relaxed">
              Are you passionate about WCAG 2.2 AA accessibility design, complex data pipelines, or private zero-knowledge LLM configurations? We are continuously seeking rigorous practitioners to guide our scaling cycles.
            </p>
          </div>

          <div className="z-10 shrink-0">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-blue-700 hover:bg-blue-600 text-white font-bold text-sm rounded-xl tracking-wide shadow-md transition-all inline-flex items-center gap-2 cursor-pointer focus-visible:ring-4 focus-visible:ring-blue-500"
              aria-label="Direct message our talent acquisition pipeline on the contact page"
            >
              <span>Submit Speculative CV</span>
              <DynamicIcon name="ExternalLink" className="w-4 h-4" />
            </button>
          </div>

          {/* Graphical Background Rings */}
          <div className="absolute right-[-60px] bottom-[-60px] w-64 h-64 rounded-full border border-slate-800 pointer-events-none" />
          <div className="absolute left-[-60px] top-[-60px] w-64 h-64 rounded-full border border-slate-800/40 pointer-events-none" />

        </div>
      </section>

    </div>
  );
});

TeamView.displayName = 'TeamView';
