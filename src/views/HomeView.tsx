/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { DynamicIcon } from '../components/DynamicIcon';
import { FeatureCard, NewsletterForm } from '../components/ReusableComponents';
import { BLOG_POSTS, SERVICES } from '../data';
import { PageRoute } from '../types';

interface HomeViewProps {
  onNavigate: (route: PageRoute) => void;
}

export const HomeView = React.memo(({ onNavigate }: HomeViewProps) => {
  // Simple interactive counter state to prove live React reactivity (Accessibility compliant)
  const [metricMultiplier, setMetricMultiplier] = useState(1);
  const [activeBlogId, setActiveBlogId] = useState<string | null>(null);

  const stats = [
    { value: 5, label: 'Years in Active Business', suffix: '+' },
    { value: 99.99, label: 'Service S.L.A Guarantee', suffix: '%' },
    { value: 140, label: 'Enterprise Security Audits', suffix: '+' },
    { value: 100, label: 'Accessibility Score Achieved', suffix: '%' }
  ];

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden py-24 sm:py-32 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content text */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 ring-1 ring-blue-600/10 mb-2">
                <DynamicIcon name="Sparkles" className="w-4 h-4" />
                <span>Premium WCAG 2.2 Corporate Framework</span>
              </span>
              
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-none leading-[1.05]">
                Accessible Intelligence<br />
                <span className="text-blue-700 dark:text-blue-400">For Modern SaaS Teams</span>
              </h1>
              
              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Unify transactional telemetry, compliance tracking, and database migration pathways under a secure analytical hub designed to represent pristine accessibility design.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-8 py-4 bg-blue-700 hover:bg-blue-650 text-white font-semibold text-base rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all active:scale-[0.99] outline-none focus-visible:ring-4 focus-visible:ring-blue-300 cursor-pointer text-center flex items-center justify-center gap-2"
                  aria-label="Secure a customized consulting proposal on the contact page"
                >
                  <span>Request Custom Quote</span>
                  <DynamicIcon name="ChevronRight" className="w-5 h-5" />
                </button>
                
                <button
                  onClick={() => onNavigate('services')}
                  className="px-8 py-4 bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-850 dark:text-white font-semibold text-base rounded-xl border border-slate-200 dark:border-slate-800 transition-all outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer text-center flex items-center justify-center gap-2"
                  aria-label="Browse the directory of security-first analytics solutions"
                >
                  <span>Explore Capabilities</span>
                </button>
              </div>
            </div>

            {/* Right Interactive Dashboard Mockup Card */}
            <div className="lg:col-span-5 relative" aria-hidden="true">
              <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-2xl shadow-2xl p-6 relative overflow-hidden">
                <div className="flex items-center justify-between mb-6 border-b border-slate-100 dark:border-slate-905 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-red-400 rounded-full" />
                    <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <span className="w-3 h-3 bg-green-400 rounded-full" />
                  </div>
                  <span className="text-slate-500 font-mono text-xs">finwise-analytics.app/hub</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs text-slate-550 border-b border-slate-50 dark:border-slate-900 pb-2">
                    <span>Performance Matrix</span>
                    <span className="text-green-600 dark:text-green-400 flex items-center gap-1 font-semibold">
                      <DynamicIcon name="CheckCircle2" className="w-4.5 h-4.5" />
                      100% WCAG AA Certified
                    </span>
                  </div>
                  
                  {/* Dynamic Progress Indicator */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="font-semibold text-slate-800 dark:text-slate-350">Lighthouse Accessibility</span>
                      <span className="text-blue-600 dark:text-blue-400 font-bold">100/100</span>
                    </div>
                    <div className="h-2 bg-slate-105 dark:bg-slate-900 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full w-full animate-pulse transition-all duration-1000" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-slate-50 dark:bg-slate-900 p-3.5 rounded-xl border border-slate-100 dark:border-slate-850">
                      <span className="text-slate-500 text-[10px] uppercase font-bold tracking-wider block">Real-time Queries</span>
                      <strong className="text-slate-900 dark:text-white text-lg font-black font-heading mt-0.5 block">
                        {(12450 * metricMultiplier).toLocaleString()}
                      </strong>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900 p-3.5 rounded-xl border border-slate-100 dark:border-slate-850">
                      <span className="text-slate-500 text-[10px] uppercase font-bold tracking-wider block">Telemetry Channels</span>
                      <strong className="text-slate-900 dark:text-white text-lg font-black font-heading mt-0.5 block">
                        {(8 * metricMultiplier)} Nodes
                      </strong>
                    </div>
                  </div>

                  {/* Operational Interactive Demonstration Trigger */}
                  <div className="pt-2 text-center">
                    <button
                      type="button"
                      onClick={() => setMetricMultiplier(prev => prev >= 4 ? 1 : prev + 1)}
                      className="text-xs bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-850 text-slate-600 dark:text-slate-300 font-bold py-2 px-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer inline-flex items-center gap-1.5"
                    >
                      <DynamicIcon name="Cpu" className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      Scale Simulation State (x{metricMultiplier})
                    </button>
                    <span className="sr-only">Pressing this button multiplies the mockup metrics values on the page to verify live framework reaction state.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUSTED BY LOGO BOARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" aria-labelledby="trusted-brands-heading">
        <h2 id="trusted-brands-heading" className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-widest mb-8">
          Trusted by Compliance-First System Leaders
        </h2>
        
        {/* Row of 5 vector-like monochrome brand badges */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-70 filter grayscale dark:invert contrast-125">
          
          {/* Logo 1 - Acme */}
          <div className="flex items-center gap-2 text-slate-800 text-sm font-black" aria-label="Acme Corporation Partner">
            <DynamicIcon name="Cloud" className="w-6 h-6 text-slate-705" />
            <span className="tracking-tighter font-heading uppercase text-base">ACME.CORP</span>
          </div>

          {/* Logo 2 - Globex */}
          <div className="flex items-center gap-1 text-slate-800 text-sm font-black" aria-label="Globex Systems Partner">
            <DynamicIcon name="Shield" className="w-6 h-6 text-slate-705" />
            <span className="tracking-tight font-heading uppercase text-base">GLOBEX.SYS</span>
          </div>

          {/* Logo 3 - Initech */}
          <div className="flex items-center gap-2 text-slate-800 text-sm font-black" aria-label="Initech Technology Partner">
            <DynamicIcon name="Cpu" className="w-6 h-6 text-slate-705" />
            <span className="tracking-tight font-heading uppercase text-base">INITECH.TECH</span>
          </div>

          {/* Logo 4 - Umbrella */}
          <div className="flex items-center gap-2 text-slate-800 text-sm font-black" aria-label="Umbrella Security Partner">
            <DynamicIcon name="Lock" className="w-6 h-6 text-slate-705" />
            <span className="tracking-tighter font-heading uppercase text-base">UMBRELLA</span>
          </div>

          {/* Logo 5 - Stark */}
          <div className="flex items-center gap-1.5 text-slate-800 text-sm font-black" aria-label="Stark Engineering Partner">
            <DynamicIcon name="Brain" className="w-6 h-6 text-slate-705" />
            <span className="tracking-tight font-heading uppercase text-base">STARK.ENG</span>
          </div>

        </div>
      </section>

      {/* 3. CORE FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" aria-labelledby="solutions-heading">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 id="solutions-heading" className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Comprehensive Architectural Features
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Engineered from ground-zero to guarantee WCAG compliance, database resilience, and deep analytical clarity for distributed SaaS networks.
          </p>
        </div>

        {/* Three column feature bento layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Full Inclusion Design"
            description="Our components pass stringent screen reader traversals, offer customizable theme settings, and respect natural system motion bounds."
            iconName="Accessibility"
          />
          <FeatureCard
            title="Private AI Pipelines"
            description="Consult and deploy fine-tuned local models inside virtual boundaries without routing keys, datasets, or context prompts out to the open web."
            iconName="Brain"
          />
          <FeatureCard
            title="Unconditional Uptime"
            description="Our cluster engineers manage direct, multi-region database replication streams, protecting operations against single nodes failures."
            iconName="ShieldAlert"
          />
        </div>
      </section>

      {/* 4. STATISTICS PANEL */}
      <section className="bg-blue-900 text-white rounded-2xl max-w-7xl mx-auto px-6 py-12 sm:py-16 mx-4 sm:mx-6 lg:mx-8 border border-blue-805" aria-labelledby="stats-heading">
        <h2 id="stats-heading" className="sr-only">Finwise Operating Achievements and Statistics</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-blue-800/60">
          {stats.map((stat, i) => (
            <div key={i} className={`pt-6 lg:pt-0 ${i === 0 ? '' : 'pt-6 lg:pt-0'}`}>
              <strong className="font-heading text-4xl sm:text-5xl font-black block tracking-tight">
                {stat.value}{stat.suffix}
              </strong>
              <span className="text-blue-200 text-xs uppercase font-bold tracking-wider block mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. RECENT BLOG & NEWSLETTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12" aria-labelledby="updates-heading">
        
        {/* Left Side: Recent Articles (8 Columns) */}
        <div className="lg:col-span-8 space-y-8">
          <div className="flex items-baseline justify-between">
            <h2 id="updates-heading" className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Recent Architectural Notebooks
            </h2>
            <button
              onClick={() => onNavigate('about')}
              className="text-blue-700 dark:text-blue-400 font-bold text-sm tracking-wide hover:underline cursor-pointer"
              aria-label="View all technical writers on the company profile"
            >
              Meet Our Authors
            </button>
          </div>

          <div className="space-y-6">
            {BLOG_POSTS.map((post) => {
              const isExpanded = activeBlogId === post.id;
              return (
                <article
                  key={post.id}
                  className="bg-white dark:bg-slate-900 border border-slate-205 dark:border-slate-850 rounded-xl p-6 transition-colors shadow-sm focus-within:ring-2 focus-within:ring-blue-650"
                >
                  <div className="flex items-center gap-3 mb-3.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-650 dark:text-slate-350 uppercase">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      {post.date} • {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-slate-950 dark:text-white mb-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-650 dark:text-slate-400 text-sm leading-relaxed mb-4">
                    {isExpanded ? post.excerpt + " Full access reviews uncover rigorous compliance automation guidelines, complete testing scripts, and metrics telemetry templates curated specifically for enterprise deployment blocks. We guide your design teams step-by-step through custom configuration steps." : post.excerpt}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-50 dark:border-slate-850">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.author.avatar}
                        alt={`Writers avatar photo for ${post.author.name}`}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <span className="text-xs font-bold text-slate-900 dark:text-white block">{post.author.name}</span>
                        <span className="text-[10px] text-slate-505 block">{post.author.role}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveBlogId(isExpanded ? null : post.id)}
                      className="inline-flex self-start sm:self-center items-center text-xs font-bold text-blue-700 dark:text-blue-400 hover:text-blue-500 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded p-1"
                      aria-label={`${isExpanded ? "Collapse" : "Expand"} detailed post about "${post.title}"`}
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? 'Collapse Abstract' : 'Read Abstract'}</span>
                      <DynamicIcon name="ChevronDown" className={`w-3.5 h-3.5 ml-1 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Right Side: Mock Newsletter Subscription (4 Columns) */}
        <div className="lg:col-span-4 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-center space-y-6 border border-slate-800 h-fit lg:sticky lg:top-24">
          <div className="w-10 h-10 rounded-lg bg-blue-650 flex items-center justify-center text-white">
            <DynamicIcon name="Mail" className="w-5 h-5" />
          </div>
          
          <div className="space-y-2">
            <h3 className="font-heading text-xl font-bold tracking-tight text-white">
              Stay Compliant
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Sign up to receive security vulnerabilities reports, WCAG 2.2 AA testing insights, and corporate analytical playbooks. Zero marketing spam, unsubscribe in one click.
            </p>
          </div>

          <NewsletterForm />
        </div>

      </section>

    </div>
  );
});

HomeView.displayName = 'HomeView';
