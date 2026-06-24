/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { DynamicIcon } from './DynamicIcon';
import { Service, TeamMember, BlogPost, ValueItem, Milestone, Testimonial } from '../types';

// ==========================================
// FEATURE CARD
// ==========================================
interface FeatureCardProps {
  title: string;
  description: string;
  iconName: string;
}

export const FeatureCard = React.memo(({ title, description, iconName }: FeatureCardProps) => {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all group hover:border-blue-300 dark:hover:border-blue-900 duration-200">
      <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-blue-700 dark:text-blue-400 mb-5 group-hover:scale-110 transition-transform duration-200">
        <DynamicIcon name={iconName} className="w-6 h-6" />
      </div>
      <h3 className="font-heading text-lg font-semibold text-slate-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
});

FeatureCard.displayName = 'FeatureCard';


// ==========================================
// SERVICE CARD
// ==========================================
interface ServiceCardProps {
  service: Service;
  onNavigate: (route: string) => void;
}

export const ServiceCard = React.memo(({ service, onNavigate }: ServiceCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number; size: number }[]>([]);
  const shouldReduceMotion = useReducedMotion();

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const size = Math.max(rect.width, rect.height) * 2.5;

    const newRipple = {
      id: Date.now() + Math.random(),
      x,
      y,
      size,
    };

    setRipples((prev) => [...prev, newRipple]);
  };

  const removeRipple = (id: number) => {
    setRipples((prev) => prev.filter((r) => r.id !== id));
  };

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onNavigate(`services/${service.slug}`);

    // If activated via keyboard keypress, clientX and clientY will be 0
    if (e.clientX === 0 && e.clientY === 0 && !shouldReduceMotion && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = rect.width / 2;
      const y = rect.height / 2;
      const size = Math.max(rect.width, rect.height) * 2.5;

      const newRipple = {
        id: Date.now() + Math.random(),
        x,
        y,
        size,
      };

      setRipples((prev) => [...prev, newRipple]);
    }
  };

  return (
    <motion.div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onClick={handleCardClick}
      whileTap={shouldReduceMotion ? {} : { scale: 0.975 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="service-card cursor-pointer relative overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between hover:border-blue-300 dark:hover:border-blue-900 duration-200"
    >
      {/* Absolute positioning for ripple container so it doesn't affect document layout flow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <AnimatePresence>
          {ripples.map((ripple) => (
            <motion.span
              key={ripple.id}
              initial={{ transform: `translate(-50%, -50%) translate(${ripple.x}px, ${ripple.y}px) scale(0)`, opacity: 0.35 }}
              animate={{ transform: `translate(-50%, -50%) translate(${ripple.x}px, ${ripple.y}px) scale(1)`, opacity: 0 }}
              exit={{ opacity: 0 }}
              onAnimationComplete={() => removeRipple(ripple.id)}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="absolute rounded-full bg-blue-500/20 dark:bg-blue-400/20"
              style={{
                width: ripple.size,
                height: ripple.size,
                left: 0,
                top: 0,
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      <div className="relative z-10 pointer-events-none">
        <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-blue-700 dark:text-blue-400 mb-5">
          <DynamicIcon name={service.iconName} className="w-6 h-6" />
        </div>
        <h3 className="font-heading text-lg font-semibold text-slate-900 dark:text-white mb-3">
          {service.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
          {service.shortDescription}
        </p>
      </div>
      
      <div className="relative z-10">
        <button
          type="button"
          className="inline-flex items-center text-blue-700 dark:text-blue-400 font-medium text-sm hover:underline cursor-pointer group focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
          aria-label={`View detailed benefits and pricing for ${service.title}`}
        >
          <span>Explore Solutions</span>
          <DynamicIcon name="ChevronRight" className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
});

ServiceCard.displayName = 'ServiceCard';


// ==========================================
// TEAM MEMBER CARD
// ==========================================
interface TeamMemberCardProps {
  member: TeamMember;
}

export const TeamMemberCard = React.memo(({ member }: TeamMemberCardProps) => {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
      <div className="h-48 bg-slate-50 dark:bg-slate-850 flex items-center justify-center p-6 border-b border-slate-100 dark:border-slate-800">
        <img
          src={member.image}
          alt={`Professional portrait of ${member.name}`}
          className="w-32 h-32 rounded-full border-4 border-white dark:border-slate-900 shadow-md object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-heading text-base font-semibold text-slate-900 dark:text-white">
              {member.name}
            </h3>
            <p className="text-blue-700 dark:text-blue-400 text-xs font-semibold mb-3">
              {member.role}
            </p>
          </div>
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-600 transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none rounded-md p-1"
              aria-label={`Connect with ${member.name} on LinkedIn (opens in a new tab)`}
            >
              <DynamicIcon name="Linkedin" className="w-5 h-5" />
            </a>
          )}
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          {member.bio}
        </p>
      </div>
    </div>
  );
});

TeamMemberCard.displayName = 'TeamMemberCard';


// ==========================================
// TESTIMONIAL CARD
// ==========================================
interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard = React.memo(({ testimonial }: TestimonialCardProps) => {
  return (
    <figure className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm flex flex-col justify-between">
      <blockquote className="text-slate-700 dark:text-slate-300 text-sm italic leading-relaxed mb-6">
        "{testimonial.quote}"
      </blockquote>
      <div className="flex items-center gap-4">
        <img
          src={testimonial.avatar}
          alt={`Photo of ${testimonial.authorName}`}
          className="w-10 h-10 rounded-full object-cover shadow-sm"
          loading="lazy"
        />
        <div>
          <cite className="not-italic font-heading text-sm font-semibold text-slate-900 dark:text-white block">
            {testimonial.authorName}
          </cite>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {testimonial.authorRole}, <strong className="font-medium">{testimonial.companyName}</strong>
          </span>
        </div>
      </div>
    </figure>
  );
});

TestimonialCard.displayName = 'TestimonialCard';


// ==========================================
// NEWSLETTER SIGN-UP FORM
// ==========================================
export const NewsletterForm = React.memo(() => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const statusRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please provide your email address.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please provide a valid email format, such as user@example.com.');
      return;
    }

    setIsSubmitting(true);
    // Mimic API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      // Move focus safely to the success message for screen reader activation
      setTimeout(() => {
        statusRef.current?.focus();
      }, 50);
    }, 800);
  };

  return (
    <div className="max-w-md">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} noValidate className="space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <label htmlFor="newsletter-email" className="sr-only">
                Email Address for Newsletter Updates
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Work email address"
                required
                aria-required="true"
                aria-invalid={!!error}
                aria-describedby={error ? 'newsletter-error' : undefined}
                className={`w-full bg-slate-800 text-white placeholder-slate-400 px-4 py-3 rounded-lg border focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none transition-colors ${
                  error ? 'border-red-400 focus-visible:ring-red-400' : 'border-slate-700'
                }`}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold tracking-wide shadow-md transition-all active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 disabled:opacity-75 cursor-pointer text-center"
            >
              {isSubmitting ? 'Subscribing...' : 'Keep Me Updated'}
            </button>
          </div>
          {error && (
            <span id="newsletter-error" role="alert" className="text-red-400 text-xs font-semibold block mt-1">
              {error}
            </span>
          )}
        </form>
      ) : (
        <div
          ref={statusRef}
          tabIndex={-1}
          className="bg-emerald-950/40 border border-emerald-800 text-emerald-300 p-4 rounded-lg flex items-start gap-3 outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          id="newsletter-success"
        >
          <DynamicIcon name="CheckCircle2" className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-sm text-emerald-200">Subscription Completed!</h4>
            <p className="text-xs text-emerald-400 mt-1">
              Thank you for trusting Finwise. You will receive bi-weekly compliance and product updates directly to your inbox.
            </p>
          </div>
        </div>
      )}
    </div>
  );
});

NewsletterForm.displayName = 'NewsletterForm';


// ==========================================
// COMPREHENSIVE CONTACT FORM
// ==========================================
export const ContactForm = React.memo(() => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your business email.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email must follow the format: user@example.com.';
    }
    if (!formData.company.trim()) {
      newErrors.company = 'Please specify your company or group name.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please input your primary inquiry or requirements.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Focus on the first element with an error
      const firstErrField = Object.keys(newErrors)[0];
      const el = document.getElementById(`contact-${firstErrField}`);
      if (el) el.focus();
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
      // Stably shift focus to safety banner
      setTimeout(() => {
         successRef.current?.focus();
      }, 50);
    }, 1000);
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
      {!isSubmitted ? (
        <form onSubmit={handleFormSubmit} noValidate className="space-y-5">
          <h3 className="sr-only">Contact Details Form</h3>
          <div>
            <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Full Name <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'contact-name-error' : undefined}
              className={`w-full px-4 py-2.5 rounded-lg border bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none transition-colors ${
                errors.name ? 'border-red-500 focus-visible:ring-red-500 bg-red-50/10' : 'border-slate-300 dark:border-slate-700'
              }`}
            />
            {errors.name && (
              <span id="contact-name-error" role="alert" className="text-red-500 text-xs font-semibold block mt-1">
                {errors.name}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Business Email <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'contact-email-error' : undefined}
              className={`w-full px-4 py-2.5 rounded-lg border bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none transition-colors ${
                errors.email ? 'border-red-500 focus-visible:ring-red-500 bg-red-50/10' : 'border-slate-300 dark:border-slate-700'
              }`}
            />
            {errors.email && (
              <span id="contact-email-error" role="alert" className="text-red-500 text-xs font-semibold block mt-1">
                {errors.email}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="contact-company" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Company Name <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input
              id="contact-company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              required
              aria-required="true"
              aria-invalid={!!errors.company}
              aria-describedby={errors.company ? 'contact-company-error' : undefined}
              className={`w-full px-4 py-2.5 rounded-lg border bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none transition-colors ${
                errors.company ? 'border-red-500 focus-visible:ring-red-500 bg-red-50/10' : 'border-slate-300 dark:border-slate-700'
              }`}
            />
            {errors.company && (
              <span id="contact-company-error" role="alert" className="text-red-500 text-xs font-semibold block mt-1">
                {errors.company}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Your Requirements / Message <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              aria-required="true"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'contact-message-error' : undefined}
              className={`w-full px-4 py-2.5 rounded-lg border bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none transition-colors ${
                errors.message ? 'border-red-500 focus-visible:ring-red-500 bg-red-50/10' : 'border-slate-300 dark:border-slate-700'
              }`}
            ></textarea>
            {errors.message && (
              <span id="contact-message-error" role="alert" className="text-red-500 text-xs font-semibold block mt-1">
                {errors.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-blue-700 hover:bg-blue-600 text-white rounded-lg font-bold tracking-wide shadow-md hover:shadow-lg transition-all active:scale-[0.99] outline-none focus-visible:ring-4 focus-visible:ring-blue-300 disabled:opacity-75 cursor-pointer flex justify-center items-center gap-2"
          >
            {isSubmitting ? (
              <span>Broadcasting Securely...</span>
            ) : (
              <>
                <span>Submit Inquiry</span>
                <DynamicIcon name="ChevronRight" className="w-5 h-5" />
              </>
            )}
          </button>
        </form>
      ) : (
        <div
          ref={successRef}
          tabIndex={-1}
          className="bg-emerald-50 dark:bg-slate-850 border-2 border-emerald-400 dark:border-emerald-800 rounded-2xl p-6 sm:p-8 text-center outline-none focus:ring-4 focus:ring-emerald-300"
          id="contact-success-wrapper"
        >
          <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/50 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 mx-auto mb-6">
            <DynamicIcon name="CheckCircle2" className="w-10 h-10" />
          </div>
          <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-3">
            Inquiry Securely Logged!
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm max-w-sm mx-auto mb-6 leading-relaxed">
            Thank you, your message has been transmitted through our secure servers. A senior integration architect will reach out to your business within 4 business hours.
          </p>
          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="px-6 py-2.5 bg-blue-700 hover:bg-blue-600 text-white font-semibold text-sm rounded-lg transition-colors cursor-pointer"
          >
            Submit Another Request
          </button>
        </div>
      )}
    </div>
  );
});

ContactForm.displayName = 'ContactForm';
