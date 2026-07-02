export interface Project {
  id: string;
  title: string;
  category: 'Education' | 'Health' | 'Environment' | 'Welfare';
  location: string;
  status: 'Active' | 'Completed' | 'Upcoming';
  budget: number; // in INR
  funded: number; // in INR
  targetBeneficiaries: number;
  description: string;
  keyImpacts: string[];
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

export interface DonationRequest {
  id: string;
  donorName: string;
  email: string;
  phone: string;
  pan: string;
  amount: number;
  purpose: string;
  timestamp: string;
  receiptNo: string;
  address: string;
}

export interface FocusArea {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string;
  stats: string;
  points: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  colorScheme: string; // Tailwind bg-color for avatar placeholder
}

export interface SuccessStory {
  id: string;
  title: string;
  focusArea: string;
  summary: string;
  description: string;
  beneficiary: string;
  quote: string;
  author: string;
}
