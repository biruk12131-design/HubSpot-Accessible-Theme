/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Cloud,
  ServerCrash,
  Brain,
  BarChart3,
  ShieldAlert,
  Lock,
  Accessibility,
  Shield,
  Cpu,
  Users,
  ChevronRight,
  Menu,
  X,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Linkedin,
  Clock,
  Calendar,
  Sparkles,
  Building2,
  ExternalLink,
  ChevronDown,
  Info
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string; 'aria-hidden'?: string }>> = {
  Cloud,
  ServerCrash,
  Brain,
  BarChart3,
  ShieldAlert,
  Lock,
  Accessibility,
  Shield,
  Cpu,
  Users,
  ChevronRight,
  Menu,
  X,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Linkedin,
  Clock,
  Calendar,
  Sparkles,
  Building2,
  ExternalLink,
  ChevronDown,
  Info
};

interface DynamicIconProps {
  name: string;
  className?: string;
}

export const DynamicIcon = React.memo(({ name, className = 'w-5 h-5' }: DynamicIconProps) => {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    // Fallback icon to prevent layouts from breaking gracefully
    return <Info className={className} aria-hidden="true" />;
  }
  return <IconComponent className={className} aria-hidden="true" />;
});

DynamicIcon.displayName = 'DynamicIcon';
