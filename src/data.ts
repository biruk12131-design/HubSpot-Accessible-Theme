/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, TeamMember, BlogPost, ValueItem, Milestone, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    slug: 'cloud-analytics',
    title: 'Cloud Analytics',
    iconName: 'Cloud',
    shortDescription: 'Unify your distributed metrics into a real-time analytics hub with auto-scaling compute support.',
    fullDescription: 'Our Cloud Analytics module integrates seamlessly with modern warehousing engines to transform raw telemetry logs and system transactions into instantly queries. We design highly compressed schemas and caching layers that reduce querying overhead while delivering real-time dashboards to operations, sales, and technical teams.',
    features: [
      'Multi-cloud telemetry ingestion adapters',
      'Configurable real-time aggregations and views',
      'Encrypted cold-storage and fast-query hot-swap tiering',
      'Machine learning forecasting extensions'
    ],
    benefits: [
      'Reduce infrastructure spending on big data queries by up to 40%',
      'Eliminate dashboard latency with smart data partitioning',
      'Enable instant business triggers directly from streaming event streams'
    ],
    pricingRange: '$2,500 - $7,000 / month',
    deliveryTime: '4 - 6 Weeks'
  },
  {
    slug: 'data-migration',
    title: 'Data Migration',
    iconName: 'ServerCrash',
    shortDescription: 'Transition heritage databases to secure, cloud-replicated platforms with zero active transaction loss.',
    fullDescription: 'System transitions can be hazardous. Our engineers design phased, parallel data pipelines that validate integrity down to single transactions. We handle schema translations, character encodings, foreign integrity reconciliation, and full regression testing prior to the final dns split-over.',
    features: [
      'Zero-downtime replication pipelines',
      'Automatic constraint mapping and schema translation',
      'Encrypted transit paths utilizing point-to-point tunnels',
      'Comprehensive validation reporting with cryptographic checksums'
    ],
    benefits: [
      'Guaranteed zero database synchronization anomalies',
      'Minimal cutover windows to bypass active service disruptions',
      'Preserve historic analytical reference blocks with clean index mappings'
    ],
    pricingRange: '$8,000 - $25,000 (Fixed Scope)',
    deliveryTime: '6 - 12 Weeks'
  },
  {
    slug: 'ai-consulting',
    title: 'AI Consulting',
    iconName: 'Brain',
    shortDescription: 'Introduce compliant generative models and predictive classifiers into existing workflows.',
    fullDescription: 'Navigate the complex market of artificial intelligence securely. We provide concrete, measurable assessments on model safety, prompt performance, hosting economics, and algorithmic ethics. From building automated classification models to deploying agent architectures, we align AI safely with your compliance boundaries.',
    features: [
      'LLM selection consulting and private hosting setups',
      'Vector indexing and high-accuracy Retrieval-Augmented Generation (RAG)',
      'Fine-tuning pipelines for custom industry classification tasking',
      'Hardware capability and token cost modeling dashboards'
    ],
    benefits: [
      'Mitigate training telemetry risks with secure private network bounds',
      'Optimize compute budgets and limit redundant API invocations',
      'Accelerate operational workflows with bulletproof semantic search structures'
    ],
    pricingRange: '$150 - $250 / hour',
    deliveryTime: 'Ongoing / Retainer'
  },
  {
    slug: 'custom-dashboards',
    title: 'Custom Dashboards',
    iconName: 'BarChart3',
    shortDescription: 'Bespoke administrative command centers customized for unique executive and board alignment metrics.',
    fullDescription: 'Shatter communication silos with centralized, high-fidelity metrics dashboards. By pulling transactions, server vitals, helpdesk issues, and marketing pipelines into unified, accessible screens, leaders can align organizational priorities in seconds without manual slide creation.',
    features: [
      'High-contrast interactive data tables with filter matrixes',
      'Accessible, clean Recharts-powered charting layouts',
      'Secure, role-based visualization restrictions',
      'Automatic reports delivery directly to email or slack digests'
    ],
    benefits: [
      'Consolidate disjointed reporting packages into a single reliable source',
      'Accelerate board alignment with fully verified and auditable metrics',
      'Empower local managers with real-time operational course correction triggers'
    ],
    pricingRange: '$3,500 - $9,500 (Project Based)',
    deliveryTime: '3 - 5 Weeks'
  },
  {
    slug: 'support',
    title: '24/7 Support',
    iconName: 'ShieldAlert',
    shortDescription: 'Keep critical operational frameworks online with prioritized incident responses and phone updates.',
    fullDescription: 'Banish downtime anxiety. Finwise Analytics maintains dedicated, multi-time-zone support teams composed of senior sysadmins. We monitor health checkpoints continuously and trigger rapid structural fail-safes before server bottlenecks affect active client connections.',
    features: [
      'Pristine 15-minute response SLA for critical system crashes',
      'Direct, human hotline connections directly to backup systems engineer',
      'Continuous uptime and health checks covering all public API layers',
      'Root-cause analysis (RCA) reporting for any service disruptions'
    ],
    benefits: [
      'Maintain maximum trust with downstream consumer transactions',
      'Ease internal resource constraints with external incident managers',
      'Accelerate bug identification with persistent logs and traces monitoring'
    ],
    pricingRange: '$1,200 - $5,000 / month',
    deliveryTime: 'Continuous Coverage'
  },
  {
    slug: 'security-audit',
    title: 'Security Audit',
    iconName: 'Lock',
    shortDescription: 'Rigorous penetration testing, structural risk audits, and credentials policy reviews.',
    fullDescription: 'Proactively recognize vector holes before malicious attacks discover them. We run comprehensive system reviews encompassing networking boundaries, credentials storage, container rules, and software supply chains. At the close, you receive an actionable, prioritized mitigation playbook.',
    features: [
      'Internal and external networking penetration runs',
      'Comprehensive open-source dependency supply audit',
      'Access policy mapping and least-privilege alignment',
      'Compliance compatibility maps (SOC2, ISO27001, HIPAA)'
    ],
    benefits: [
      'Shield proprietary pipelines against destructive leaks and ransomware',
      'Expedite enterprise client onboarding with ready-to-share compliance kits',
      'Develop long-term risk management models based on concrete audit findings'
    ],
    pricingRange: '$6,000 - $18,000 (Detailed Run)',
    deliveryTime: '4 Weeks'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Chief Executive Officer',
    bio: 'Sarah combines fifteen years of enterprise SaaS architecture with active board consulting to focus Finwise on user-aligned analytical performance.',
    image: 'https://i.pravatar.cc/150?img=32',
    linkedin: 'https://linkedin.com/in/sarah-jenkins-finwise-demo'
  },
  {
    id: '2',
    name: 'David Chen',
    role: 'Chief Technology Officer',
    bio: 'A cloud infrastructure specialist holding multiple database performance records. David leads our research on low-latency analytical scaling.',
    image: 'https://i.pravatar.cc/150?img=11',
    linkedin: 'https://linkedin.com/in/david-chen-finwise-demo'
  },
  {
    id: '3',
    name: 'Elena Rostova',
    role: 'Head of Product Design',
    bio: 'Passionate about accessibility, Elena spearheads all system features with a rigid commitment to WCAG 2.2 AA design guidelines.',
    image: 'https://i.pravatar.cc/150?img=47',
    linkedin: 'https://linkedin.com/in/elena-rostova-finwise-demo'
  },
  {
    id: '4',
    name: 'Marcus Vance',
    role: 'Director of Security Compliance',
    bio: 'Formerly auditing cloud perimeters for state infrastructure, Marcus shapes our rigorous pipeline testing and customer data privacy models.',
    image: 'https://i.pravatar.cc/150?img=12',
    linkedin: 'https://linkedin.com/in/marcus-vance-finwise-demo'
  },
  {
    id: '5',
    name: 'Amara Diop',
    role: 'Senior AI Engineer',
    bio: 'Amara specializes in fine-tuning task-specific neural configurations and implementing robust vector indexing for RAG frameworks.',
    image: 'https://i.pravatar.cc/150?img=5',
    linkedin: 'https://linkedin.com/in/amara-diop-finwise-demo'
  },
  {
    id: '6',
    name: 'Julian Sorel',
    role: 'Lead Migration Architect',
    bio: 'Julian manages complex database mapping pipelines and ensures zero-loss structural migration for clients transition from legacy schemas.',
    image: 'https://i.pravatar.cc/150?img=13',
    linkedin: 'https://linkedin.com/in/julian-sorel-finwise-demo'
  },
  {
    id: '7',
    name: 'Yuki Tanaka',
    role: 'Senior Frontend Accessibility Advocate',
    bio: 'Yuki validates our web layouts for consistent screen reader performance, ensuring custom interfaces adapt gracefully to any assistive device.',
    image: 'https://i.pravatar.cc/150?img=44',
    linkedin: 'https://linkedin.com/in/yuki-tanaka-finwise-demo'
  },
  {
    id: '8',
    name: 'Robert Boyle',
    role: 'Infrastructure Operations Lead',
    bio: 'Robert oversees cluster monitoring systems and orchestrates emergency container failovers to hold client service times to the 100% SLA target.',
    image: 'https://i.pravatar.cc/150?img=14',
    linkedin: 'https://linkedin.com/in/robert-boyle-finwise-demo'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    slug: 'achieving-wcag-accessibility-saas',
    title: 'Achieving WCAG 2.2 Alignment in Enterprise Dashboards',
    excerpt: 'Complex analytical layouts pose distinct challenges for assistive software. We outline visual high-contrast and keyboard focusing strategies.',
    date: 'May 12, 2026',
    readTime: '6 Min Read',
    author: {
      name: 'Elena Rostova',
      role: 'Head of Product Design',
      avatar: 'https://i.pravatar.cc/150?img=47'
    },
    category: 'Accessibility'
  },
  {
    id: 'b2',
    slug: 'securing-ai-pipelines',
    title: 'Securing generative AI Pipelines inside Cloud Perimeters',
    excerpt: 'How to incorporate large language models into internal systems securely without leaking proprietary datasets or API keys to the open web.',
    date: 'April 28, 2026',
    readTime: '8 Min Read',
    author: {
      name: 'Amara Diop',
      role: 'Senior AI Engineer',
      avatar: 'https://i.pravatar.cc/150?img=5'
    },
    category: 'Security'
  },
  {
    id: 'b3',
    slug: 'eliminating-migration-anomalies',
    title: 'Eliminating Data Synchronization Anomalies During Live Migrations',
    excerpt: 'Phased, byte-level checking pipelines can support uninterrupted read/write performance in active databases while executing deep structural upgrades.',
    date: 'March 15, 2026',
    readTime: '11 Min Read',
    author: {
      name: 'Julian Sorel',
      role: 'Lead Migration Architect',
      avatar: 'https://i.pravatar.cc/150?img=13'
    },
    category: 'Architecture'
  }
];

export const VALUES: ValueItem[] = [
  {
    id: 'v1',
    title: 'Inclusion-First Engineering',
    description: 'We prioritize WCAG AA compatibility as a structural fundamental, ensuring our layouts scale seamlessly across all modern screen readers, assistive tools, and devices.',
    iconName: 'Accessibility'
  },
  {
    id: 'v2',
    title: 'Cryptographic Security',
    description: 'Every endpoint transaction, temporary queue, and analytical log backup passes through modern encryption envelopes inside our dedicated network boundaries.',
    iconName: 'Shield'
  },
  {
    id: 'v3',
    title: 'Transparent Metrics',
    description: 'No marketing smoke screens. We provide audit trails for calculations, database performance latency, and API error reports directly from open analytical views.',
    iconName: 'Cpu'
  },
  {
    id: 'v4',
    title: 'Empathetic Client Partnership',
    description: 'We offer expert engineers directly to your support channel — not automated bots. Your systems receive direct human attention whenever emergencies arise.',
    iconName: 'Users'
  }
];

export const MILESTONES: Milestone[] = [
  {
    id: 'm1',
    year: '2021',
    title: 'Company Foundation',
    description: 'Sarah and David form Finwise in a quiet attic to provide security-minded database consulting.'
  },
  {
    id: 'm2',
    year: '2023',
    title: 'Analytics Engine 1.0 Release',
    description: 'We launch our core cloud analysis framework, boosting average database lookup speeds by 300%.'
  },
  {
    id: 'm3',
    year: '2025',
    title: '100th Enterprise Client Onboarded',
    description: 'Over 100 enterprise clients trust Finwise with their continuous telemetry and data processing pathways.'
  },
  {
    id: 'm4',
    year: '2026',
    title: 'Full WCAG Affirmation',
    description: 'Achievement of direct 100/100 accessibility standards across all administrative modules.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: 'The team at Finwise rebuilt our customer analytics dashboard to be fully WCAG complaint. It is not only significantly faster, but now every single member of our board is able to explore real-time sales reports independently.',
    authorName: 'Alistair Vance',
    authorRole: 'VP of Product Operations',
    companyName: 'MedTech Systems',
    avatar: 'https://i.pravatar.cc/150?img=60'
  },
  {
    id: 't2',
    quote: 'Their security audit was extremely thorough. They illuminated active vulnerabilities in our cloud dependencies we did not realize existed and provided detailed guides to resolve them within 24 hours. They are world-class professionals.',
    authorName: 'Genevieve Moreau',
    authorRole: 'Chief Information Security Officer',
    companyName: 'Lumina Digital',
    avatar: 'https://i.pravatar.cc/150?img=34'
  }
];
