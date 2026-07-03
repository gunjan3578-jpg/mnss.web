import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import VolunteerModal from './components/VolunteerModal';
import DonateModal from './components/DonateModal';
import { ContactInquiry } from './types';
import { 
  motion, 
  AnimatePresence 
} from 'motion/react';
import { 
  GraduationCap, 
  Briefcase, 
  UserPlus, 
  Wheat, 
  Leaf, 
  Droplet, 
  HeartPulse, 
  Laptop, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Heart, 
  Handshake, 
  Award, 
  CheckCircle, 
  Clock, 
  Eye, 
  Target, 
  MessageSquare,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function App() {
  const [isVolunteerOpen, setIsVolunteerOpen] = useState(false);
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [selectedCampaignPurpose, setSelectedCampaignPurpose] = useState('education');

  // Interactive local message inbox for immediate user feedback after submitting the form
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([
    {
      id: 'MNSS-INQ-4820',
      name: 'Dr. Alok Sen',
      email: 'alok.sen@patnauniversity.ac.in',
      message: 'Interested in conducting a weekly digital literacy seminar at your Basantpur center. Kindly advise if we can share projector screens.',
      timestamp: 'Today, 11:34 AM'
    },
    {
      id: 'MNSS-INQ-1940',
      name: 'Sunita Mehra',
      email: 'sunita_volunteer@outlook.com',
      message: 'I would love to volunteer at the upcoming Healthcare camp in Samastipur. Let me know the schedule.',
      timestamp: 'Yesterday, 4:12 PM'
    }
  ]);

  // Contact Form Inputs
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [isContactSubmitted, setIsContactSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) return;

    const newInquiry: ContactInquiry = {
      id: `MNSS-INQ-${Math.floor(1000 + Math.random() * 9000)}`,
      name: contactName,
      email: contactEmail,
      message: contactMessage,
      timestamp: 'Just now'
    };

    setInquiries([newInquiry, ...inquiries]);
    setIsContactSubmitted(true);
    setContactName('');
    setContactEmail('');
    setContactMessage('');

    // Auto dismiss success toast after 4 seconds
    setTimeout(() => {
      setIsContactSubmitted(false);
    }, 4000);
  };

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 96; // sticky header offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const openDonateWithPurpose = (purpose: string) => {
    setSelectedCampaignPurpose(purpose);
    setIsDonateOpen(true);
  };

  // Focus Area Definitions (8 Core Cards)
  const focusAreas = [
    {
      id: 'focus-edu',
      icon: <GraduationCap className="w-8 h-8 text-emerald-600" />,
      title: 'Education & Digital Literacy',
      description: 'Bridging resource gaps by introducing fundamental digital navigation tools directly into rural schools.'
    },
    {
      id: 'focus-skill',
      icon: <Briefcase className="w-8 h-8 text-emerald-600" />,
      title: 'Skill Development',
      description: 'Generating direct vocational capabilities targeted specifically toward immediate formal employment.'
    },
    {
      id: 'focus-women',
      icon: <UserPlus className="w-8 h-8 text-emerald-600" />,
      title: 'Women Empowerment',
      description: 'Structuring independent self-employment collectives via micro-credit orientation models.'
    },
    {
      id: 'focus-agri',
      icon: <Wheat className="w-8 h-8 text-emerald-600" />,
      title: 'Sustainable Agriculture',
      description: 'Training farmers in climate-smart agriculture, organic farming, modern cultivation techniques, and sustainable livelihood practices.'
    },
    {
      id: 'focus-climate',
      icon: <Leaf className="w-8 h-8 text-emerald-600" />,
      title: 'Environment & Climate Action',
      description: 'Organizing tree plantation drives, environmental awareness campaigns, seed ball initiatives, and waste management activities.'
    },
    {
      id: 'focus-water',
      icon: <Droplet className="w-8 h-8 text-emerald-600" />,
      title: 'Water Conservation',
      description: 'Promoting rainwater harvesting, water resource management, groundwater recharge, and community awareness for sustainable water use.'
    },
    {
      id: 'focus-health',
      icon: <HeartPulse className="w-8 h-8 text-emerald-600" />,
      title: 'Health & Community',
      description: 'Deployment models bringing emergency medical infrastructure directly to remote village tracts.'
    },
    {
      id: 'focus-ict',
      icon: <Laptop className="w-8 h-8 text-emerald-600" />,
      title: 'Information & Communication Technology (ICT)',
      description: 'Bridging the digital divide via tech training, e-governance, and digital solutions for rural development.'
    }
  ];

  // Featured Projects (6 Cards)
  const projects = [
    {
      id: 'proj-sanitation',
      tag: 'Sanitation',
      tagColor: 'bg-teal-100 text-teal-800',
      title: 'Swachh Bharat Mission–Grameen',
      description: 'Implementing critical localized infrastructure deployment setups directly mapping rural residential areas.',
      campaign: 'water'
    },
    {
      id: 'proj-ecology',
      tag: 'Ecology',
      tagColor: 'bg-emerald-100 text-emerald-800',
      title: 'Tree Plantation & Seed Balls',
      description: 'Accelerating regional vegetation volumes utilizing specialized distribution methods.',
      campaign: 'climate'
    },
    {
      id: 'proj-livelihood',
      tag: 'Livelihood',
      tagColor: 'bg-indigo-100 text-indigo-800',
      title: 'Women Empowerment Models',
      description: 'Empowering women with micro-enterprise guidance architectures tailored to regional cottage industry demand.',
      campaign: 'skills'
    },
    {
      id: 'proj-agri',
      tag: 'Agriculture',
      tagColor: 'bg-amber-100 text-amber-800',
      title: 'Sustainable Agriculture Development',
      description: 'Training farmers in climate-smart agriculture, organic farming, modern cultivation techniques, and sustainable livelihood practices.',
      campaign: 'agriculture'
    },
    {
      id: 'proj-water',
      tag: 'Water',
      tagColor: 'bg-cyan-100 text-cyan-800',
      title: 'Water Conservation Initiative',
      description: 'Promoting rainwater harvesting, water resource management, groundwater recharge, and community awareness for sustainable water use.',
      campaign: 'water'
    },
    {
      id: 'proj-environment',
      tag: 'Environment',
      tagColor: 'bg-green-100 text-green-800',
      title: 'Environment & Climate Action',
      description: 'Organizing tree plantation drives, environmental awareness campaigns, seed ball initiatives, and waste management activities to build greener communities.',
      campaign: 'climate'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-emerald-600 selection:text-white">
      
      {/* Dynamic Sticky Header Navigation */}
      <Header 
        onOpenVolunteer={() => setIsVolunteerOpen(true)}
        onOpenDonate={() => openDonateWithPurpose('general')}
      />

      {/* 1. HERO SECTION */}
      <section 
        id="home" 
        className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-950 text-white overflow-hidden py-24 lg:py-32"
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Description */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              <span className="inline-block px-3.5 py-1.5 bg-emerald-700/50 backdrop-blur-xs text-emerald-300 rounded-full text-xs font-semibold uppercase tracking-wider border border-emerald-500/20">
                Serving Humanity, Empowering Lives
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Building an Inclusive & <span className="text-teal-400">Sustainable Society</span>
              </h1>
              <p className="text-lg text-emerald-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Welcome to Mahendra Narayan Seva Sansthan. We actively empower local communities across Bihar through structured initiatives in education, digital literacy, and rural development.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
                <button 
                  onClick={() => openDonateWithPurpose('general')}
                  className="px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl shadow-lg hover:shadow-rose-900/30 transition text-center cursor-pointer flex items-center justify-center gap-2"
                >
                  <Heart size={18} className="fill-white animate-pulse" />
                  <span>Support Our Work</span>
                </button>
                <button 
                  onClick={() => handleScrollToSection('projects')}
                  className="px-8 py-4 bg-emerald-700/60 hover:bg-emerald-700 text-white font-semibold rounded-xl border border-emerald-500/30 transition text-center cursor-pointer"
                >
                  Explore Featured Programs
                </button>
              </div>
            </motion.div>
            
            {/* Right Column Impact Stats Grid */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5 grid grid-cols-2 gap-4"
            >
              <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 hover:border-white/20 transition group">
                <div className="text-3xl lg:text-4xl font-extrabold text-teal-300 mb-1 group-hover:scale-105 transition-transform duration-300 origin-left">500+</div>
                <div className="text-xs font-bold text-emerald-100 uppercase tracking-wider">Household Toilets Built</div>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 hover:border-white/20 transition group">
                <div className="text-3xl lg:text-4xl font-extrabold text-teal-300 mb-1 group-hover:scale-105 transition-transform duration-300 origin-left">10k+</div>
                <div className="text-xs font-bold text-emerald-100 uppercase tracking-wider">Trees Planted</div>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 hover:border-white/20 transition group">
                <div className="text-3xl lg:text-4xl font-extrabold text-teal-300 mb-1 group-hover:scale-105 transition-transform duration-300 origin-left">100%</div>
                <div className="text-xs font-bold text-emerald-100 uppercase tracking-wider">Community Led</div>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 hover:border-white/20 transition group">
                <div className="text-3xl lg:text-4xl font-extrabold text-teal-300 mb-1 group-hover:scale-105 transition-transform duration-300 origin-left">24/7</div>
                <div className="text-xs font-bold text-emerald-100 uppercase tracking-wider">Dedicated Service</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. ABOUT THE ORGANIZATION */}
      <section id="about" className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">About the Organization</h2>
            <div className="h-1.5 w-20 bg-emerald-600 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-emerald-600 font-bold italic tracking-wide uppercase text-sm">Serving Humanity, Empowering Lives</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Descriptive Content & Values */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-slate-700 text-lg leading-relaxed font-medium">
                Mahendra Narayan Seva Sansthan (MNSS) is a registered non-profit organization established in 2011 and headquartered in Samastipur, Bihar. The organization is committed to improving the quality of life of rural and underserved communities through education, skill development, women empowerment, agriculture development, environmental conservation, water management, sanitation, healthcare, and sustainable livelihood initiatives.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm">
                MNSS works in close collaboration with local communities, government departments, educational institutions, corporate CSR partners, and volunteers to design and implement impactful development programs that create lasting social change.
              </p>
              
              <div className="pt-6">
                <h4 className="text-md font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Sparkles size={18} className="text-emerald-600" />
                  <span>Our Guiding Core Values</span>
                </h4>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="p-5 bg-slate-50 rounded-2xl border-l-4 border-emerald-600 shadow-xs hover:shadow-md transition">
                    <h5 className="font-bold text-slate-900 text-sm">Inclusivity</h5>
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Equal treatment and developmental access for every demographic segment.</p>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-2xl border-l-4 border-emerald-600 shadow-xs hover:shadow-md transition">
                    <h5 className="font-bold text-slate-900 text-sm">Transparency</h5>
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Maintaining dynamic integrity across compliance and program operations.</p>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-2xl border-l-4 border-emerald-600 shadow-xs hover:shadow-md transition">
                    <h5 className="font-bold text-slate-900 text-sm">Sustainability</h5>
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Designing self-sufficient frameworks that outlive physical intervention timelines.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Compliance Matrix Sidecard */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden border border-slate-800">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
              <h3 className="text-xl font-bold tracking-wide border-b border-slate-800 pb-4 text-teal-400 flex items-center gap-2">
                <Award size={20} className="text-teal-400" />
                <span>Registration & Compliance</span>
              </h3>
              <dl className="mt-6 space-y-4 text-sm font-medium">
                <div className="flex justify-between border-b border-slate-800 pb-2.5">
                  <dt className="text-slate-400">Registration No.</dt>
                  <dd className="font-mono text-emerald-300">1762/2011-2012</dd>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2.5">
                  <dt className="text-slate-400">DARPAN ID</dt>
                  <dd className="font-mono text-emerald-300">BR/2025/0922079</dd>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2.5">
                  <dt className="text-slate-400">PAN Status</dt>
                  <dd className="font-mono text-emerald-300">AACAM0783D</dd>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2.5">
                  <dt className="text-slate-400">12A Certification</dt>
                  <dd className="text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Provisional Status Active</span>
                  </dd>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2.5">
                  <dt className="text-slate-400">80G Tax Exemption</dt>
                  <dd className="text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Provisional Status Active</span>
                  </dd>
                </div>
                <div className="flex justify-between pt-1">
                  <dt className="text-slate-400">CSR Verification</dt>
                  <dd className="text-teal-400 font-semibold">CSR-1 Registered</dd>
                </div>
              </dl>
              <div className="mt-6 pt-4 border-t border-slate-800 text-[10px] text-slate-500 font-mono text-center">
                MAHENDRA NARAYAN SEVA SANSTHAN • SAMASTIPUR
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION */}
      <section id="vision" className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Vision Card */}
            <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-xs border-t-8 border-emerald-600 relative overflow-hidden group hover:shadow-md transition duration-300">
              <div className="absolute right-6 top-6 opacity-5 group-hover:scale-110 transition duration-300 text-slate-900">
                <Eye size={120} />
              </div>
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-700 mb-6">
                <Eye size={28} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">Vision Statement</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                To build an inclusive, empowered, and sustainable society where every individual has equal access to education, livelihood, sanitation, and a healthy environment.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-xs border-t-8 border-teal-600 relative overflow-hidden group hover:shadow-md transition duration-300">
              <div className="absolute right-6 top-6 opacity-5 group-hover:scale-110 transition duration-300 text-slate-900">
                <Target size={120} />
              </div>
              <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-700 mb-6">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">Mission Statement</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                To empower communities through education, skill development, women empowerment, environmental conservation, and sustainable rural development.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CORE FOCUS AREAS */}
      <section id="focus" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Core Focus Areas</h2>
            <div className="h-1.5 w-20 bg-emerald-600 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-slate-500 text-sm leading-relaxed max-w-xl mx-auto">
              Our multidimensional approach covers structural sectors vital to rural and urban development transformation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {focusAreas.map((area, idx) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-500/20 hover:bg-white hover:shadow-lg hover:shadow-emerald-900/5 transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-emerald-100/50 rounded-xl flex items-center justify-center mb-5">
                    {area.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">{area.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{area.description}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-200/50 flex justify-end">
                  <button 
                    onClick={() => setIsVolunteerOpen(true)}
                    className="text-emerald-600 hover:text-emerald-700 text-xs font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <span>Volunteer here</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. FEATURED PROJECTS */}
      <section id="projects" className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Featured Projects</h2>
            <div className="h-1.5 w-20 bg-emerald-600 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-slate-500 text-sm">
              Explore some of our major campaigns active in Samastipur and wider rural Bihar blocks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj) => (
              <div 
                key={proj.id}
                className="bg-white rounded-2xl shadow-xs border border-slate-200/75 overflow-hidden flex flex-col justify-between hover:shadow-md transition duration-300"
              >
                <div className="p-6 space-y-4">
                  <div>
                    <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${proj.tagColor}`}>
                      {proj.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 leading-snug">{proj.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{proj.description}</p>
                </div>
                <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 font-bold uppercase">Samastipur Block</span>
                  <button 
                    onClick={() => openDonateWithPurpose(proj.campaign)}
                    className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-lg shadow-xs transition cursor-pointer flex items-center gap-1"
                  >
                    <Heart size={12} className="fill-white" />
                    <span>Sponsor</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CONTACT US & SOCIAL MEDIA */}
      <section id="contact" className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Contact & Follow Us</h2>
            <div className="h-1.5 w-20 bg-emerald-600 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-slate-500 text-sm">
              We look forward to partnering with donors, volunteer networks, and corporate CSR sponsors.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left Info Panel */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-8 shadow-xs border border-slate-200/60 flex flex-col justify-between space-y-8">
              <div className="space-y-6 text-sm text-slate-700">
                <h3 className="text-xl font-extrabold text-slate-900 border-b pb-3 border-slate-100 uppercase tracking-tight">
                  Mahendra Narayan Seva Sansthan
                </h3>
                
                <div className="flex items-start">
                  <MapPin className="text-emerald-600 mt-1 mr-4 shrink-0" size={18} />
                  <div>
                    <span className="font-bold text-slate-950 block mb-0.5">HEADQUARTERS ADDRESS</span>
                    <span className="leading-relaxed">Basantpur, Shobhan, Block-Khanpur, Samastipur, Bihar – 848117</span>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-emerald-600 mt-1 mr-4 shrink-0" size={18} />
                  <div>
                    <span className="font-bold text-slate-950 block mb-0.5">PHONE NUMBERS</span>
                    <div className="flex flex-col font-mono text-slate-800 font-semibold gap-0.5">
                      <span>+91 9570562580</span>
                      <span>+91 9473011987</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-emerald-600 mt-0.5 mr-4 shrink-0" size={18} />
                  <div>
                    <span className="font-bold text-slate-950 block mb-0.5">EMAIL INQUIRIES</span>
                    <span className="font-mono text-slate-800 font-semibold block">info.mnsevasansthan@gmail.com</span>
                  </div>
                </div>
              </div>

              {/* Follow Us Grid */}
              <div className="pt-6 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">Follow Our Progress</h4>
                <div className="grid grid-cols-2 gap-3">
                  <a 
                    href="https://www.facebook.com/share/1BmqYdhbhu/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-100 bg-slate-50 text-slate-600 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition text-sm font-semibold"
                  >
                    <Facebook size={18} className="text-blue-600" />
                    <span>Facebook</span>
                  </a>
                  <a 
                    href="https://www.instagram.com/mn_seva_sansthan" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-100 bg-slate-50 text-slate-600 hover:text-pink-600 hover:bg-pink-50 hover:border-pink-200 transition text-sm font-semibold"
                  >
                    <Instagram size={18} className="text-pink-600" />
                    <span>Instagram</span>
                  </a>
                  <a 
                    href="https://x.com/mnsevasansthan" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-100 bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 hover:border-slate-300 transition text-sm font-semibold"
                  >
                    <Twitter size={18} className="text-slate-900" />
                    <span>X (Twitter)</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/mahendra-narayan-seva-sansthan-5902b1417/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-100 bg-slate-50 text-slate-600 hover:text-blue-700 hover:bg-blue-50 hover:border-blue-200 transition text-sm font-semibold"
                  >
                    <Linkedin size={18} className="text-blue-700" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Message Form & Live Inbox */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Form Card */}
              <div className="bg-white rounded-3xl p-8 shadow-xs border border-slate-200/60">
                <h3 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2 uppercase tracking-tight">
                  <MessageSquare size={18} className="text-emerald-600" />
                  <span>Send A Quick Message</span>
                </h3>
                
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1">Your Name *</label>
                      <input 
                        type="text" 
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:border-emerald-500 focus:bg-white outline-none transition text-slate-800" 
                        placeholder="Dr. Rajesh Kumar"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1">Your Email *</label>
                      <input 
                        type="email" 
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:border-emerald-500 focus:bg-white outline-none transition text-slate-800" 
                        placeholder="rajesh@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">Message / Suggestion *</label>
                    <textarea 
                      rows={4} 
                      required
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:border-emerald-500 focus:bg-white outline-none transition text-slate-800" 
                      placeholder="Share your ideas or inquiry with our coordinators..."
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4 pt-2">
                    <button 
                      type="submit" 
                      className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md transition hover:shadow-emerald-100 flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Send Message</span>
                      <ArrowRight size={15} />
                    </button>

                    <AnimatePresence>
                      {isContactSubmitted && (
                        <motion.span 
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-xs text-emerald-600 font-bold flex items-center gap-1 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100"
                        >
                          <CheckCircle size={14} />
                          <span>Sent successfully!</span>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </form>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 text-sm py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-3">
          <div className="flex justify-center items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center border border-emerald-500/20">
              <svg viewBox="0 0 100 100" className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="50" cy="30" r="8" className="fill-emerald-400/20" />
                <path d="M 25 75 Q 35 60 48 68" />
                <path d="M 75 75 Q 65 60 52 68" />
                <path d="M 50 68 L 50 42" />
                <path d="M 50 48 Q 38 42 45 35 Q 50 40 50 48" className="fill-emerald-400" />
              </svg>
            </div>
            <span className="text-white font-extrabold tracking-widest text-xs uppercase">MAHENDRA NARAYAN SEVA SANSTHAN</span>
          </div>
          <div className="text-xs text-slate-500">© 2026 Mahendra Narayan Seva Sansthan (MNSS). All Rights Reserved.</div>
          <div className="text-[10px] text-slate-600 font-mono">
            Approved 12A & 80G Registered NGO • basantpur.samastipur.bihar
          </div>
        </div>
      </footer>

      {/* Interactive Modal Screens */}
      <VolunteerModal 
        isOpen={isVolunteerOpen}
        onClose={() => setIsVolunteerOpen(false)}
      />
      <DonateModal 
        isOpen={isDonateOpen}
        onClose={() => setIsDonateOpen(false)}
        initialPurpose={selectedCampaignPurpose}
      />

    </div>
  );
}
