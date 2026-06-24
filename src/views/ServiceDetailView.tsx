/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState } from 'react';
import { DynamicIcon } from '../components/DynamicIcon';
import { Modal } from '../components/Modal';
import { ContactForm } from '../components/ReusableComponents';
import { SERVICES } from '../data';
import { PageRoute } from '../types';

interface ServiceDetailViewProps {
  slug: string;
  onNavigate: (route: PageRoute) => void;
}

export const ServiceDetailView = React.memo(({ slug, onNavigate }: ServiceDetailViewProps) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-16 h-16 bg-red-55/65 dark:bg-red-950/40 border border-red-200 dark:border-red-900 rounded-full flex items-center justify-center text-red-500 mx-auto">
          <DynamicIcon name="AlertCircle" className="w-8 h-8" />
        </div>
        <h1 className="font-heading text-2xl font-black text-slate-900 dark:text-white">
          Capability Matrix Not Discovered
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md mx-auto">
          The requested engineering capability reference (<em>{slug}</em>) does not exist in our system registry. Review our complete active list.
        </p>
        <button
          onClick={() => onNavigate('services')}
          className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-blue-700 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
        >
          <DynamicIcon name="ArrowLeft" className="w-4 h-4" />
          <span>Return to Services Listing</span>
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* 1. NAVIGATION ACTIONS */}
      <div>
        <button
          onClick={() => onNavigate('services')}
          className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-700 dark:text-slate-400 dark:hover:text-blue-400 font-bold text-sm tracking-wide bg-slate-100 dark:bg-slate-900 px-4.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-blue-650"
          aria-label="Back to all services listing"
        >
          <DynamicIcon name="ArrowLeft" className="w-4 h-4" />
          <span>Back to All Services</span>
        </button>
      </div>

      {/* 2. HEADER SUMMARY BLOCK */}
      <h1 className="sr-only">Detailed capability review: {service.title}</h1>
      <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-2xl p-6 sm:p-10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="space-y-4">
          <div className="w-14 h-14 bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-400 rounded-2xl flex items-center justify-center">
            <DynamicIcon name={service.iconName} className="w-8 h-8" />
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {service.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-350 text-sm sm:text-base leading-relaxed max-w-xl">
            {service.shortDescription}
          </p>
        </div>

        {/* Dynamic Service Parameters Panel */}
        <div className="bg-slate-50 dark:bg-slate-850 rounded-xl p-5 border border-slate-205 dark:border-slate-800/80 min-w-xs space-y-3">
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-500 font-bold uppercase tracking-wider">Pricing Range</span>
            <span className="font-bold font-mono text-slate-905 dark:text-blue-400">{service.pricingRange}</span>
          </div>
          <div className="flex justify-between items-center text-xs border-t border-slate-200/60 dark:border-slate-800 pt-2.5">
            <span className="text-slate-500 font-bold uppercase tracking-wider">Average Delivery</span>
            <span className="font-bold text-slate-805 dark:text-white">{service.deliveryTime}</span>
          </div>
          
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="w-full mt-4 py-3 bg-blue-700 hover:bg-blue-600 text-white rounded-lg font-bold text-xs tracking-wide shadow-md transition-all cursor-pointer active:scale-[0.98]"
            aria-label={`Open quote proposal overlay for ${service.title}`}
          >
            Request custom quote
          </button>
        </div>
      </section>

      {/* 3. MULTI-COLUMN COMPOSITE DESCRIPTION */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Left Col: Full Description & Specific Benefits (7 columns) */}
        <section className="md:col-span-7 space-y-8" aria-label="Benefits Section">
          <div className="space-y-4">
            <h2 className="font-heading text-xl font-bold text-slate-950 dark:text-white pb-2 border-b border-slate-100 dark:border-slate-850">
              Overview & Structural Purpose
            </h2>
            <p className="text-slate-650 dark:text-slate-300 text-sm leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-xl font-bold text-slate-950 dark:text-white">
              Primary Business Outcomes
            </h2>
            <ul className="space-y-3.5" aria-label={`Benefits list of ${service.title}`}>
              {service.benefits.map((benefit, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-660 dark:text-slate-350 leading-relaxed">
                  <DynamicIcon name="CheckCircle2" className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Right Col: Technical Specifications (5 columns) */}
        <section className="md:col-span-5 bg-white dark:bg-slate-900 border border-slate-201 dark:border-slate-850 rounded-2xl p-6 h-fit" aria-label="Technical Specifications">
          <h2 className="font-heading text-lg font-bold text-slate-950 dark:text-white mb-4">
            Engineering Features Included
          </h2>
          <ul className="space-y-4" aria-label={`Included features for ${service.title}`}>
            {service.features.map((feature, i) => (
              <li key={i} className="flex gap-3 text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-855 rounded-xl p-3 border border-slate-100 dark:border-slate-800">
                <div className="w-6 h-6 rounded-lg bg-blue-500/10 dark:bg-blue-450/15 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
                  <DynamicIcon name="Sparkles" className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="font-semibold text-slate-850 dark:text-slate-250 block mb-0.5">Scope Parameter {i + 1}</strong>
                  <span className="leading-relaxed block">{feature}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

      </div>

      {/* 4. REASSURANCE SECTION / TRUST */}
      <section className="bg-slate-50 dark:bg-slate-900/40 p-6 sm:p-8 rounded-2xl border border-slate-200/60 dark:border-slate-850 flex items-center gap-4 text-left">
        <div className="w-12 h-12 rounded-full bg-blue-105 dark:bg-blue-900/50 flex items-center justify-center text-blue-700 dark:text-blue-400 shrink-0">
          <DynamicIcon name="Shield" className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-heading text-sm font-bold text-slate-900 dark:text-white">Active Compliance Audit Coverage Included</h3>
          <p className="text-slate-505 text-xs max-w-xl leading-relaxed mt-0.5">
            Every engagement model features compliance mapping matching national governance indices. Your software comes fully certified by Finwise Compliance Auditors natively.
          </p>
        </div>
      </section>

      {/* 5. PORTABLE QUOTE OVERLAY MODAL */}
      <Modal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        title={`Custom Quote: ${service.title}`}
      >
        <div className="space-y-4 text-left">
          <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
            Fill out the details below. Our technical integrations team is prepared to analyze your active tech stack and will pre-configure custom {service.title} parameters matching your specific timelines and budget goals.
          </p>
          <div className="border border-blue-100 dark:border-blue-950 bg-blue-50/40 dark:bg-blue-950/20 px-3.5 py-2.5 rounded-xl text-xs text-blue-700 dark:text-blue-300 flex items-center gap-2">
            <DynamicIcon name="Sparkles" className="w-4 h-4 shrink-0" />
            <span>Targeting Capability: <strong>{service.title}</strong> • Average Timeframe: {service.deliveryTime}</span>
          </div>
          <ContactForm />
        </div>
      </Modal>

    </div>
  );
});

ServiceDetailView.displayName = 'ServiceDetailView';
