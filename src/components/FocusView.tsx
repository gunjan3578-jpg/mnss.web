import React, { useState } from 'react';
import { focusAreasData } from '../data/mockData';
import { GraduationCap, HeartPulse, Sparkles, TreePine, ChevronRight, CheckCircle2, Award, Landmark } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const iconMap: Record<string, React.ComponentType<any>> = {
  GraduationCap: GraduationCap,
  HeartPulse: HeartPulse,
  Sparkles: Sparkles,
  TreePine: TreePine,
};

export default function FocusView() {
  const [selectedAreaId, setSelectedAreaId] = useState<string>('education');

  const selectedArea = focusAreasData.find((a) => a.id === selectedAreaId) || focusAreasData[0];

  return (
    <div className="font-sans space-y-16 pb-16">
      
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-100 text-xs font-bold rounded-full uppercase tracking-wider font-mono">
            <Award size={12} /> Strategic Framework
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Our Primary Focus Areas
          </h2>
          <div className="h-1 w-20 bg-emerald-600 mx-auto rounded-full"></div>
          <p className="text-sm text-slate-500 leading-relaxed">
            We operate through four highly interconnected, community-driven thematic portfolios. Click on each card below to inspect operational models, key points, and achievements.
          </p>
        </div>
      </section>

      {/* 2. Interactive Interactive Showcase Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* Left: Interactive Menu list */}
          <div className="lg:col-span-5 space-y-4 text-left">
            {focusAreasData.map((area) => {
              const IconComponent = iconMap[area.iconName] || GraduationCap;
              const isActive = selectedAreaId === area.id;

              return (
                <button
                  key={area.id}
                  id={`focus-tab-${area.id}`}
                  onClick={() => setSelectedAreaId(area.id)}
                  className={`w-full p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 text-left cursor-pointer group focus:outline-none ${
                    isActive
                      ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-600/10'
                      : 'bg-white border-slate-200 hover:border-emerald-400 text-slate-700'
                  }`}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${
                    isActive
                      ? 'bg-white/10 border-white/20 text-white'
                      : 'bg-emerald-50 border-emerald-100 text-emerald-600 group-hover:scale-105 transition-transform'
                  }`}>
                    <IconComponent size={20} />
                  </div>
                  <div className="space-y-1 pr-4 grow">
                    <h3 className={`text-base font-bold leading-snug ${isActive ? 'text-white' : 'text-slate-900'}`}>
                      {area.title}
                    </h3>
                    <p className={`text-xs leading-relaxed line-clamp-2 ${isActive ? 'text-emerald-100' : 'text-slate-500'}`}>
                      {area.description}
                    </p>
                  </div>
                  <ChevronRight
                    size={16}
                    className={`mt-3 shrink-0 transition-transform ${
                      isActive ? 'text-white translate-x-1' : 'text-slate-400 group-hover:translate-x-0.5'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Deep Dive Area */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedArea.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs flex flex-col justify-between h-full text-left"
              >
                <div className="space-y-6">
                  {/* Icon & Title row */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                      {React.createElement(iconMap[selectedArea.iconName] || GraduationCap, { size: 28 })}
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-slate-900 font-display">
                        {selectedArea.title}
                      </h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200 mt-1 font-mono">
                        {selectedArea.stats}
                      </span>
                    </div>
                  </div>

                  {/* Long Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {selectedArea.longDescription}
                  </p>

                  {/* Points list */}
                  <div className="space-y-3.5 pt-4 border-t border-slate-100">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                      Core Operations & Deliverables
                    </h4>
                    <ul className="space-y-3">
                      {selectedArea.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                          <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Additional Regulatory/Audit Note to guarantee realism */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-1">
                    <Landmark size={12} className="text-slate-400" />
                    <span>Regd. Panchayat Initiative Samastipur</span>
                  </div>
                  <span>Continuous Weekly Reporting</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>
    </div>
  );
}
