export interface SolutionItem {
  id: string;
  title: string;
  category: string;
  description: string;
  badge: string;
  badgeType: string;
  icon: string;
  deliverables: string[];
  techStack: string[];
  colSpanLg: number;
}

export interface CaseStudy {
  id: string;
  title: string;
  tag: string;
  tagColor: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
  metric1: {
    value: string;
    label: string;
    highlight?: boolean;
    color: string;
  };
  metric2: {
    value: string;
    label: string;
    highlight?: boolean;
    color: string;
  };
  clientIndustry: string;
  duration: string;
  architectureHighlights: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface MethodologyStep {
  number: string;
  title: string;
  description: string;
  detail: string;
  sla: string;
  colorClass: string;
  icon: string;
  deliverables: string[];
}

export interface ProjectFormData {
  solutions: string[];
  fullName: string;
  corporateEmail: string;
  phone: string;
  companySize: string;
  projectDescription: string;
  estimatedBudgetTier?: string;
  deadlinePreference?: string;
}

export interface ClusterStatus {
  region: string;
  throughput: string;
  latency: number;
  uptime: string;
  activeNodes: number;
  microservicesHealthy: boolean;
  aiOpsPerSec: string;
  dbSyncStatus: string;
}
