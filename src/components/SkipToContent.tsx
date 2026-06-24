/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const SkipToContent = React.memo(() => {
  return (
    <a
      id="skip-link"
      href="#main-content"
      className="absolute left-[50%] -translate-x-1/2 -top-[200px] focus:top-4 z-[9999] bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold tracking-wide shadow-xl border border-blue-500 transition-all focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 outline-none"
    >
      Skip to content
    </a>
  );
});

SkipToContent.displayName = 'SkipToContent';
