/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { DynamicIcon } from './DynamicIcon';
import { PageRoute } from '../types';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export const Footer = React.memo(({ onNavigate }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { label: 'About Finwise', route: 'about' },
    { label: 'Professional Team', route: 'team' },
    { label: 'Contact & Support', route: 'contact' }
  ];

  const serviceLinks = [
    { label: 'Cloud Analytics', route: 'services/cloud-analytics' },
    { label: 'Data Migration', route: 'services/data-migration' },
    { label: 'AI Consulting', route: 'services/ai-consulting' },
    { label: 'Custom Dashboards', route: 'services/custom-dashboards' },
    { label: '24/7 Priority Support', route: 'services/support' },
    { label: 'Security Auditing', route: 'services/security-audit' }
  ];

  return (
    <footer className="bg-slate-900 text-slate-350 border-t border-slate-850 pt-16 pb-12" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Finwise Analytics Footer Information</h2>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Links Segment */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          {/* Brand Presentation Block */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <DynamicIcon name="BarChart3" className="w-4.5 h-4.5" />
              </div>
              <span className="font-heading text-lg font-bold tracking-tight text-white">
                Finwise<span className="text-blue-500">Analytics</span>
              </span>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Securing operations and delivering high-fidelity real-time intelligence for security-first enterprise organizations. Built on strict WCAG 2.2 AA engineering benchmarks.
            </p>

            <address className="not-italic text-sm text-slate-400 space-y-2">
              <div className="flex items-start gap-2.5">
                <DynamicIcon name="MapPin" className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>100 Pine Street, Floor 21<br />San Francisco, CA 94111</span>
              </div>
            </address>
          </div>

          {/* Solutions / Quick Links */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-5">
              Capabilities
            </h3>
            <ul className="space-y-3.5 text-sm" aria-label="Services links list">
              {serviceLinks.map((link) => (
                <li key={link.route}>
                  <button
                    onClick={() => onNavigate(link.route)}
                    className="hover:text-white transition-colors cursor-pointer text-left outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded p-0.5"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate / Support */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-5">
              Finwise Company
            </h3>
            <ul className="space-y-3.5 text-sm" aria-label="Corporate quick links list">
              {companyLinks.map((link) => (
                <li key={link.route}>
                  <button
                    onClick={() => onNavigate(link.route)}
                    className="hover:text-white transition-colors cursor-pointer text-left outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded p-0.5"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct Line */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-5">
              Direct Contact
            </h3>
            <div className="space-y-4 text-sm">
              <p className="text-slate-400 leading-relaxed">
                Have questions regarding compliance architecture? Reach our support operations directly.
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:partner@finwise-analytics-demo.com"
                  className="flex items-center gap-2.5 hover:text-white transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded p-0.5"
                  aria-label="Email our partner association team at partner@finwise-analytics-demo.com"
                >
                  <DynamicIcon name="Mail" className="w-4.5 h-4.5 text-blue-500 shrink-0" />
                  <span>partner@finwise-analytics-demo.com</span>
                </a>
                <a
                  href="tel:+14155550189"
                  className="flex items-center gap-2.5 hover:text-white transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded p-0.5"
                  aria-label="Call our sales line: +1 (415) 555-0189"
                >
                  <DynamicIcon name="Phone" className="w-4.5 h-4.5 text-blue-500 shrink-0" />
                  <span>+1 (415) 555-0189</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-550 gap-4">
          
          <div>
            <p>© {currentYear} Finwise Analytics Inc. All rights reserved. Built to premium WCAG 2.2 AA certification.</p>
          </div>

          {/* Social Links Panel and Accessibility Statement */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-white transition-colors underline cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded p-0.5"
              aria-label="Read our official Web Accessibility Statement (Contact Page Support)"
            >
              Accessibility Certification
            </button>
            
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800/80 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-705 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label="Finwise Securities LinkedIn Page (opens in a new tab)"
              >
                <DynamicIcon name="Linkedin" className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
