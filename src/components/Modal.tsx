/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { DynamicIcon } from './DynamicIcon';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal = React.memo(({ isOpen, onClose, title, children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Esc key closes modal & lock body scroll
  useEffect(() => {
    if (isOpen) {
      // Store current focus to restore later
      previousFocusRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';

      // Move focus inside the modal focus wrapper
      setTimeout(() => {
        if (modalRef.current) {
          // Find first focusable element inside our modal
          const focusables = modalRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([-1])'
          );
          if (focusables.length > 0) {
            (focusables[0] as HTMLElement).focus();
          } else {
            modalRef.current.focus();
          }
        }
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
        // Restore focus to original triggering element
        if (previousFocusRef.current) {
          previousFocusRef.current.focus();
        }
      };
    }
  }, [isOpen, onClose]);

  // Trap focus inside modal bounds
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'Tab') return;

    if (!modalRef.current) return;
    const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([-1])'
    );

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey) {
      // If Shift + Tab and on first element, cycle to last
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    } else {
      // If Tab and on last element, cycle to first
      if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 overflow-y-auto"
      onKeyDown={handleKeyDown}
    >
      {/* Background Overlay */}
      <div
        className="fixed inset-0 bg-slate-900/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content Container */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        tabIndex={-1}
        className="relative bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-lg shadow-2xl p-6 sm:p-8 overflow-hidden z-10 transition-all focus:outline-none"
      >
        {/* Header bar */}
        <div className="flex items-start justify-between mb-5">
          <h2 id="modal-title" className="font-heading text-xl font-bold text-slate-900 dark:text-white">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
            aria-label="Close quote modal"
          >
            <DynamicIcon name="X" className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Description for Screen Readers */}
        <p id="modal-description" className="sr-only">
          This overlay modal holds a secure form allowing you to request a formal business quote for our analytical solutions.
        </p>

        {/* Content body */}
        <div className="max-h-[70vh] overflow-y-auto pr-1">
          {children}
        </div>
      </div>
    </div>
  );
});

Modal.displayName = 'Modal';
