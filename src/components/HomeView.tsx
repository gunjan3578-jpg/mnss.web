import React from 'react';
import { BookOpen, HeartPulse, TreePine, Users, ArrowRight, Quote, Heart, Landmark, Compass, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { successStoriesData } from '../data/mockData';

interface HomeViewProps {
  setActiveView: (view: string) => void;
}

export default function HomeView({ setActiveView }: HomeViewProps) {
  const stats = [
    { label: 'Children Supported', value: '150+', icon: BookOpen, color: 'text-blue-600 bg-blue-50 border-blue-100' },
    { label: 'Medical Beneficiaries', value: '12,000+', icon: HeartPulse, color: 'text-rose-600 bg-rose-50 border-rose-100' },
    { label: 'Saplings Planted', value: '5,000+', icon: TreePine, color: 'text-emerald-600 bg-emerald-50 border-emerald-100' },
    { label: 'Rural Families Reached', value: '3,500+', icon: Users, color: 'text-amber-600 bg-amber-50 border-amber-100' },
  ];

  const values = [
    {
      title: 'Seva (Selfless Service)',
      desc: 'We are guided by the eternal maxim "Seva Parmo Dharmah" (Service is the supreme duty), focusing on the absolute welfare of humanity.',
      icon: Compass,
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      title: 'Radical Transparency',
      desc: 'Every single donation rupee and regulatory compliance documentation is accounted for, open, and audited annually.',
      icon: Award,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Community Empowerment',
      desc: 'We don\'t believe in short-term relief, but in permanent capacity-building through vocational training and localized education.',
      icon: Users,
      color: 'from-purple-500 to-purple-600'
    },
  ];

  return (
    <div className="font-sans space-y-24 pb-16">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-900 text-white py-24 px-4 sm:px-6 lg:px-8">
        
        {/* Decorative Grid and Ambient Lights */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold rounded-full uppercase tracking-wider font-mono">
              <Landmark size={12} /> Certified 80G Non-Profit Organization
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-display">
              Empowering Rural Bihar Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Selfless Seva</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Mahendra Narayan Seva Sansthan (MNSS) is a registered charitable social welfare trust operating in Samastipur, Bihar. We work to break the cycle of poverty by sponsoring high-quality children education, offering free healthcare camps, and equipping rural women with sustainable livelihoods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => setActiveView('focus')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm transition shadow-lg shadow-emerald-900/30 cursor-pointer"
              >
                <span>Our Focus Areas</span>
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => setActiveView('donate')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl text-sm transition shadow-lg shadow-rose-950/20 cursor-pointer group"
              >
                <Heart size={16} className="fill-white animate-bounce group-hover:scale-110 transition-transform" />
                <span>Support Our Cause</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            {/* Elegant Vector Mockup/Illustration Card for NGO */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl max-w-md w-full space-y-6 relative">
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-amber-500/20 rotate-12">
                14+
              </div>
              <h3 className="text-xl font-bold font-display text-emerald-400">Our Local Blueprint</h3>
              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                  <span><strong>Basantpur & Shobhan Centers:</strong> Fully functional daily learning labs.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                  <span><strong>Mobile Health Van:</strong> Regularly screening remote hamlets in Khanpur Block.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                  <span><strong>80G & 12A Compliant:</strong> Assuring safe, tax-exempt institutional funding.</span>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">Current Campaign:</span>
                <span className="text-xs font-bold text-amber-400 px-2.5 py-1 bg-amber-500/10 border border-amber-500/25 rounded-md">Project Swavlamban Tailoring</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Impact Numbers Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 font-display">Our Real Impact At A Glance</h2>
          <div className="h-1 w-20 bg-emerald-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-sm text-slate-500 mt-4 leading-relaxed">
            Through the unwavering trust of our patrons and dedicated work of block volunteers, we have touched lives across Samastipur district.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center border shrink-0 ${stat.color}`}>
                <stat.icon size={26} />
              </div>
              <div>
                <span className="block text-3xl font-extrabold text-slate-900 font-mono tracking-tight">{stat.value}</span>
                <span className="block text-xs font-medium text-slate-500 uppercase tracking-wide mt-0.5">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Core Philosophical Values */}
      <section className="bg-slate-50 py-20 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 font-display">Our Guiding Values</h2>
            <div className="h-1 w-20 bg-emerald-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-slate-200/60 shadow-xs hover:border-emerald-300 transition-colors space-y-5"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${val.color} rounded-xl flex items-center justify-center text-white`}>
                  <val.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{val.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Success Story Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 font-display">Stories of Real Transformation</h2>
          <div className="h-1 w-20 bg-emerald-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-sm text-slate-500 mt-4 leading-relaxed">
            Every life touched represents a story of resilience and community backing. Explore how local initiatives turn dreams into concrete realities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {successStoriesData.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-xs hover:shadow-sm transition-shadow flex flex-col justify-between space-y-6 text-left"
            >
              <div className="space-y-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-100 uppercase tracking-wide">
                  {story.focusArea}
                </span>
                <h3 className="text-xl font-bold text-slate-900 leading-tight">{story.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{story.summary}</p>
              </div>
              
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 relative pt-7">
                <Quote size={28} className="absolute top-2 left-4 text-emerald-200 rotate-180" />
                <p className="text-xs italic text-slate-600 leading-relaxed relative z-10 font-medium">
                  "{story.quote}"
                </p>
                <div className="mt-3 flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase tracking-wider font-mono">
                  <span>— {story.beneficiary}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Bihar / Samastipur Call-to-Seva Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-600 rounded-3xl text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl shadow-emerald-100 flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Subtle design element */}
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-500 rounded-full blur-3xl opacity-50" />
          <div className="absolute -top-10 right-0 w-64 h-64 bg-teal-500 rounded-full blur-3xl opacity-40 animate-pulse" />

          <div className="text-left space-y-5 max-w-xl relative z-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight font-display">
              Be the Light in Someone's Journey
            </h3>
            <p className="text-sm sm:text-base text-emerald-50 leading-relaxed">
              Every ₹500 sponsored provides children study material, or free health kits. You will receive a tax exemption certificate and a direct impact update outlining the exact family or child supported by your gift.
            </p>
            <div className="text-xs font-mono text-emerald-100 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-ping"></span>
              Secured 80G Tax Exemption Certified NGO
            </div>
          </div>

          <div className="shrink-0 relative z-10 w-full sm:w-auto">
            <button
              onClick={() => setActiveView('donate')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-emerald-50 text-emerald-800 font-extrabold rounded-2xl text-sm transition shadow-lg cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Heart size={16} className="fill-emerald-700 text-emerald-700" />
              <span>Sponsor a Program Now</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
