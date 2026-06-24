/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';

interface RouteAnnouncerProps {
  currentRoute: string;
}

export const RouteAnnouncer = React.memo(({ currentRoute }: RouteAnnouncerProps) => {
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    let pageLabel = 'Home Page';
    
    if (currentRoute === 'about') {
      pageLabel = 'About Finwise Analytics';
    } else if (currentRoute === 'services') {
      pageLabel = 'Services and Capabilities';
    } else if (currentRoute.startsWith('services/')) {
      const slug = currentRoute.split('/')[1];
      const serviceName = slug
        ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        : 'Service Detail';
      pageLabel = `${serviceName} Service Details`;
    } else if (currentRoute === 'team') {
      pageLabel = 'Meet Our Elite Team';
    } else if (currentRoute === 'contact') {
      pageLabel = 'Contact Us - Get a Quote';
    }

    setAnnouncement(`Navigated to ${pageLabel}.`);
  }, [currentRoute]);

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="sr-only absolute w-1 h-1 p-0 -m-1 overflow-hidden clip-rect-0 border-0"
    >
      {announcement}
    </div>
  );
});

RouteAnnouncer.displayName = 'RouteAnnouncer';
