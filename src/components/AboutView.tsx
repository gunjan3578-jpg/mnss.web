import React from 'react';
import { teamMembersData } from '../data/mockData';
import { Target, Eye, ShieldCheck, Landmark, Sparkles, HeartHandshake } from 'lucide-react';

export default function AboutView() {
  return (
    <div className="font-sans space-y-24 pb-16">
      
      {/* 1. Legacy Story & Background */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 text-left space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-100 text-xs font-bold rounded-full uppercase tracking-wider font-mono">
              <Sparkles size={12} /> Continuing a Legacy of Love
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              The Genesis of Mahendra Narayan Seva Sansthan
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Founded in Bihar, Mahendra Narayan Seva Sansthan (MNSS) was established with a singular, resolute objective: to uplift the socio-economically marginalized communities of Samastipur district through localized, sustainable volunteer service.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Named in memory of **Late Shri Mahendra Narayan**, an educator who spent his entire life tutoring rural farm children under banyan trees, the foundation preserves his core philosophy—that service to the poor is service to the Divine. What started as a small group of volunteers distributing generic medicines and warm blankets during winters in Khanpur block has today grown into a recognized non-profit trust supporting hundreds of students, conducting diagnostic medical camps, and mentoring rural women.
            </p>
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100/50 flex items-start gap-3.5">
              <HeartHandshake className="text-emerald-600 shrink-0 mt-0.5" size={20} />
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Rooted in Local Trust</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  We operate with a 100% grassroots model. Over 90% of our volunteers belong to the same local panchayats, ensuring we recognize exact needs and command extreme local trust.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-50 border border-slate-200/60 rounded-3xl p-8 sm:p-10 shadow-inner relative flex flex-col justify-center space-y-8">
            <div className="absolute top-4 right-4 text-xs font-mono font-bold text-emerald-600 px-2.5 py-1 bg-emerald-100 border border-emerald-200 rounded-md">
              ESTD. 2012
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 font-display">Regulatory Standing & Credentials</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs text-left">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Act & Jurisdiction</span>
                <span className="block text-sm font-bold text-slate-800 mt-1">Bihar Societies Act 21, 1860</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs text-left">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Registration ID</span>
                <span className="block text-sm font-bold text-slate-800 mt-1 font-mono">No. 181/2012-13</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs text-left">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">NGO Darpan ID</span>
                <span className="block text-sm font-bold text-slate-800 mt-1 font-mono">BR/2018/0187425</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs text-left">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Tax Exempt Status</span>
                <span className="block text-sm font-bold text-emerald-600 mt-1 font-mono">Income Tax Sec 80G/12A</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center gap-3 text-slate-500 text-xs text-left">
              <ShieldCheck size={20} className="text-emerald-600 shrink-0" />
              <span>
                All public donations are processed via secure institutional bank accounts and are eligible for tax deduction certificates.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mission & Vision Bento Grid */}
      <section className="bg-slate-50 py-20 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm flex flex-col justify-between text-left space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center">
                <Target size={22} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-display">Our Core Mission</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                To construct a resilient social infrastructure in rural Bihar by bridging critical gaps in child schooling, secondary diagnostic healthcare, vocational self-reliance, and clean energy/environment. We seek to foster self-sufficiency rather than dependency.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-mono font-bold text-emerald-600 uppercase tracking-wide">
              <span>Empowerment</span> • <span>Inclusion</span> • <span>Sustainability</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm flex flex-col justify-between text-left space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 border border-rose-100 flex items-center justify-center">
                <Eye size={22} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-display">Our Dynamic Vision</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                We envision an equitable Bihar where no child abandons learning due to poverty, no elder suffers illness for lack of basic clinical care, and every household is fortified by financial security, sustainable clean water, and green cover.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-mono font-bold text-rose-600 uppercase tracking-wide">
              <span>Dignity</span> • <span>Equity</span> • <span>Decentralised Service</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Leadership & Key Volunters Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 font-display">The Hearts Behind the Seva</h2>
          <div className="h-1 w-20 bg-emerald-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-sm text-slate-500 mt-4 leading-relaxed">
            Our governance model relies on selfless educators, local community organizers, and medical advocates who manage projects transparently.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembersData.map((member, idx) => {
            // Generate initials for beautiful visual avatar
            const initials = member.name
              .split(' ')
              .map((n) => n[0])
              .join('')
              .substring(0, 2);

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col items-center text-center space-y-5 hover:shadow-md transition-shadow group"
              >
                {/* Visual Initials Avatar */}
                <div className={`w-16 h-16 rounded-2xl border-2 flex items-center justify-center font-extrabold text-lg shadow-inner group-hover:scale-105 transition-transform duration-300 ${member.colorScheme}`}>
                  {initials}
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {member.name}
                  </h3>
                  <span className="block text-xs font-bold text-emerald-600 uppercase tracking-wider font-mono">
                    {member.role}
                  </span>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                  {member.bio}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
