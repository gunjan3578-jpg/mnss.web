import { Project, FocusArea, TeamMember, SuccessStory } from '../types';

export const focusAreasData: FocusArea[] = [
  {
    id: 'education',
    title: 'Education & Child Support',
    description: 'Providing free evening tuition, schooling supplies, and scholarship support to children of migrant laborers and farmers.',
    longDescription: 'We believe education is the single most powerful tool for breaking the cycle of poverty. In rural Samastipur, many children drop out of school to help their families or due to a lack of guidance. Our "Gyan Jyoti" evening centers provide supportive learning, digital literacy, and essential academic materials to ensure children stay in school and excel.',
    iconName: 'GraduationCap',
    stats: '150+ Children Enrolled',
    points: [
      'Daily free academic tutoring and homework assistance',
      'Distribution of school bags, books, uniforms, and stationery',
      'Basic digital literacy classes with shared laptops',
      'Annual science exhibitions and creative talent competitions'
    ]
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Seva Camps',
    description: 'Organizing routine health diagnostics, free medicine distribution, and specialized eye-screening camps for elders.',
    longDescription: 'Primary healthcare is often a distant luxury for rural Bihar. Many suffer from preventable illnesses due to lack of diagnostic facilities and affordable treatments. MNSS conducts mobile health camps with certified general physicians, eye care specialists, and pediatricians, ensuring diagnosis and free distribution of prescribed medicines directly to their doorstep.',
    iconName: 'HeartPulse',
    stats: '12,000+ Patients Served',
    points: [
      'Bi-weekly general health diagnostic and awareness camps',
      'Free blood pressure, sugar testing, and basic blood screening',
      'Cataract screening and free spectacles distribution for senior citizens',
      'Child immunisation drives and malnutrition counseling for mothers'
    ]
  },
  {
    id: 'women',
    title: 'Women Empowerment',
    description: 'Developing self-reliance through vocational training in stitching, embroidery, and entrepreneurship counseling.',
    longDescription: 'When you empower a woman, you empower an entire family. Our "Swavlamban" initiative provides free certified vocational training in tailoring, sewing, and traditional handicrafts. Post-training, we offer guidance on self-employment, starting micro-enterprises, and facilitate access to low-interest microfinance resources.',
    iconName: 'Sparkles',
    stats: '85+ Women Trained',
    points: [
      '6-month structured course in basic and advanced tailoring',
      'Financial literacy seminars on savings, budgeting, and bank accounts',
      'Facilitating distribution of sewing machines to top graduates',
      'Connecting artisans with local markets and online cooperative spaces'
    ]
  },
  {
    id: 'environment',
    title: 'Environment & Rural Welfare',
    description: 'Promoting organic farming, setting up clean drinking water facilities, and conducting large-scale tree plantation drives.',
    longDescription: 'Environmental health directly impacts rural livelihoods. We are actively involved in planting native tree species to restore green cover in Bihar. We also run awareness drives on rainwater harvesting, organic fertilizers, and have installed drinking water filter stations in villages where groundwater is high in arsenic and iron.',
    iconName: 'TreePine',
    stats: '5,000+ Saplings Planted',
    points: [
      'Mass tree plantation drives in schools, public spaces, and barren land',
      'Workshops on vermicomposting and natural organic pest control',
      'Installation of bio-sand and carbon water purification setups',
      'Cleanliness drives aligned with Swachh Bharat Abhiyan'
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: 'proj-gyan-jyoti',
    title: 'Project Gyan Jyoti (Education)',
    category: 'Education',
    location: 'Khanpur Block, Samastipur',
    status: 'Active',
    budget: 150000,
    funded: 118000,
    targetBeneficiaries: 150,
    description: 'Running two evening learning centers providing free tutoring, study material, and nutrition snacks to marginalized rural children.',
    keyImpacts: [
      'Prevented 42 school dropouts in 2025',
      'Distributed 150+ custom school bags and kits',
      'Maintained 94% average attendance across centers'
    ]
  },
  {
    id: 'proj-sanjeevani',
    title: 'Project Sanjeevani (Rural Health)',
    category: 'Health',
    location: 'Shobhan & Basantpur Villages',
    status: 'Active',
    budget: 220000,
    funded: 185000,
    targetBeneficiaries: 2000,
    description: 'Providing free health consultations, generic medicine distribution, and organizing specialized eye-care screening programs for rural residents.',
    keyImpacts: [
      'Treated over 1,200 rural patients in the last 6 months',
      'Distributed 210 free prescription spectacles to elderly residents',
      'Referred 18 critical cataract cases for subsidized hospital surgeries'
    ]
  },
  {
    id: 'proj-swavlamban',
    title: 'Project Swavlamban (Vocational)',
    category: 'Welfare',
    location: 'Khanpur Center, Samastipur',
    status: 'Active',
    budget: 180000,
    funded: 132000,
    targetBeneficiaries: 60,
    description: 'Conducting a certified 6-month sewing and tailoring course for rural women, enabling self-employment and sustainable livelihood.',
    keyImpacts: [
      'Completed training for 35 women in first batch',
      'Distributed 12 sewing machines to high-performing trainees',
      'Formed 2 self-help groups (SHGs) for collective market supply'
    ]
  },
  {
    id: 'proj-harit-bihar',
    title: 'Project Harit Bihar (Aforestation)',
    category: 'Environment',
    location: 'Samastipur District',
    status: 'Completed',
    budget: 85000,
    funded: 85000,
    targetBeneficiaries: 5000,
    description: 'A community-led tree plantation initiative that planted 5,000 neem, mango, and mahogany saplings across 12 villages with local security pledge.',
    keyImpacts: [
      '5,000 native tree saplings planted and geo-tagged',
      'Achieved a verified 82% survival rate of saplings over 1 year',
      'Engaged 300+ school students in eco-club training'
    ]
  },
  {
    id: 'proj-jala-shuddhi',
    title: 'Project Jal Shuddhi (Clean Water)',
    category: 'Environment',
    location: 'Basantpur Village',
    status: 'Upcoming',
    budget: 130000,
    funded: 45000,
    targetBeneficiaries: 800,
    description: 'Installation of high-capacity community bio-sand filter systems in local community halls to remove heavy iron and arsenic contaminants from tube wells.',
    keyImpacts: [
      'Will provide safe drinking water to 180+ families',
      'Reduce waterborne gastrointestinal disease incidence by 80%',
      'Train a village youth committee to manage maintenance'
    ]
  }
];

export const teamMembersData: TeamMember[] = [
  {
    name: 'Shri Ram Narayan Mishra',
    role: 'Founder & Patron',
    bio: 'An educator and social visionary whose lifetime commitment to rural development and community service serves as the foundational philosophy of MNSS.',
    colorScheme: 'bg-emerald-100 text-emerald-800 border-emerald-300'
  },
  {
    name: 'Smt. Anshu Mishra',
    role: 'President',
    bio: 'Over 15 years of social service experience. Directs executive policies, donor relationships, and ensures perfect compliance with government non-profit standards.',
    colorScheme: 'bg-rose-100 text-rose-800 border-rose-300'
  },
  {
    name: 'Shri Kundan Kumar',
    role: 'Secretary & Program Director',
    bio: 'Oversees day-to-day operations of Gyan Jyoti education centers and coordinates medical camps. Believes in hyper-local and metrics-driven social rehabilitation.',
    colorScheme: 'bg-blue-100 text-blue-800 border-blue-300'
  },
  {
    name: 'Smt. Reena Devi',
    role: 'Coordinator - Women Empowerment',
    bio: 'Tailoring master and advocate. She leads the Swavlamban program, mentoring rural women to gain economic independence and start sustainable micro-shops.',
    colorScheme: 'bg-amber-100 text-amber-800 border-amber-300'
  }
];

export const successStoriesData: SuccessStory[] = [
  {
    id: 'story-1',
    title: 'Aarti Devi\'s Journey to Financial Independence',
    focusArea: 'Women Empowerment',
    summary: 'A mother of three from Shobhan village becomes her family\'s co-breadwinner through our Swavlamban tailoring training.',
    description: 'Aarti Devi always dreamed of contributing to her children\'s school fees but lacked marketable skills. Through Project Swavlamban, she dedicated 2 hours daily for 6 months learning tailoring. Today, equipped with a subsidized sewing machine, she earns over ₹4,500 monthly stitching blouses and kurtis right from her home.',
    beneficiary: 'Aarti Devi, Shobhan Village',
    quote: 'The training gave me not just sewing skills, but the courage to sit in a bank, open my savings account, and dream of sending my daughter to college.',
    author: 'Sunita Devi (Volunteer Supervisor)'
  },
  {
    id: 'story-2',
    title: 'Deepak\'s Leap of Hope in Board Exams',
    focusArea: 'Education',
    summary: 'The son of a daily wage farm-worker ranks first in his high school block after attending our Gyan Jyoti support classes.',
    description: 'With no electricity at home and parents working late, Deepak struggled to revise concepts for his Class 10 board examinations. Our Khanpur Gyan Jyoti center became his sanctuary, providing solar-powered lighting, free reference textbooks, and mentoring from visiting teachers. Deepak scored an outstanding 84% in his matriculation.',
    beneficiary: 'Deepak Kumar, Khanpur',
    quote: 'At Gyan Jyoti, the teachers told me that poverty is not a permanent state; learning is. Having a quiet space with books made all the difference.',
    author: 'Kundan Kumar (Secretary)'
  }
];
