import React, { useState, useMemo } from 'react';
import { projectsData } from '../data/mockData';
import { Project } from '../types';
import { Search, MapPin, Users, Heart, CheckCircle2, TrendingUp, Sparkles, Filter } from 'lucide-react';

interface ProjectsViewProps {
  setActiveView: (view: string) => void;
  setSelectedCampaignPurpose?: (purpose: string) => void;
}

export default function ProjectsView({ setActiveView, setSelectedCampaignPurpose }: ProjectsViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');

  // Filter lists
  const categories = ['All', 'Education', 'Health', 'Environment', 'Welfare'];
  const statuses = ['All', 'Active', 'Completed', 'Upcoming'];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            project.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesStatus = selectedStatus === 'All' || project.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchQuery, selectedCategory, selectedStatus]);

  const handleSupportClick = (project: Project) => {
    if (setSelectedCampaignPurpose) {
      // Map project to specific donation purpose category
      let purpose = 'General Fund';
      if (project.category === 'Education') purpose = 'Education Support (Gyan Jyoti)';
      else if (project.category === 'Health') purpose = 'Healthcare Outreach (Sanjeevani)';
      else if (project.category === 'Welfare') purpose = 'Women Tailoring (Swavlamban)';
      else if (project.category === 'Environment') purpose = 'Environment (Harit Bihar)';
      
      setSelectedCampaignPurpose(purpose);
    }
    setActiveView('donate');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="font-sans space-y-12 pb-16">
      
      {/* 1. Header description */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-100 text-xs font-bold rounded-full uppercase tracking-wider font-mono">
            <TrendingUp size={12} /> Live Progress Dashboard
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Our Active & Completed Projects
          </h2>
          <div className="h-1 w-20 bg-emerald-600 mx-auto rounded-full"></div>
          <p className="text-sm text-slate-500 leading-relaxed">
            Monitor our ground-level achievements, funding goals, and audited accomplishments. Filter by domain or status to inspect specific projects in Samastipur.
          </p>
        </div>
      </section>

      {/* 2. Search & Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6 text-left">
          
          <div className="flex flex-col md:flex-row gap-4 items-center">
            
            {/* Search Input */}
            <div className="relative w-full md:grow">
              <Search className="absolute left-3.5 top-3 text-slate-400" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by title, location, or keyword..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
              />
            </div>

            {/* Clear Filters Button if any selected */}
            {(searchQuery || selectedCategory !== 'All' || selectedStatus !== 'All') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setSelectedStatus('All');
                }}
                className="w-full md:w-auto px-5 py-2.5 border border-slate-200 hover:bg-slate-50 rounded-xl text-sm font-semibold text-slate-600 cursor-pointer text-center"
              >
                Reset Filters
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
            
            {/* Category selection */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-mono flex items-center gap-1">
                <Filter size={11} /> Filter by Domain
              </span>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                      selectedCategory === cat
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Status selection */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-mono flex items-center gap-1">
                <Sparkles size={11} /> Filter by Status
              </span>
              <div className="flex flex-wrap gap-2">
                {statuses.map((st) => (
                  <button
                    key={st}
                    onClick={() => setSelectedStatus(st)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                      selectedStatus === st
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Projects Grid List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProjects.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 py-16 px-4 text-center">
            <span className="block text-4xl mb-3">🔍</span>
            <h3 className="text-lg font-bold text-slate-800">No projects match your query</h3>
            <p className="text-sm text-slate-500 mt-1">Try tweaking your search term or filters above.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const percentFunded = Math.min(100, Math.round((project.funded / project.budget) * 100));
              const isCompleted = project.status === 'Completed';

              return (
                <div
                  key={project.id}
                  className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between text-left h-full"
                >
                  
                  {/* Top segment */}
                  <div className="p-6 space-y-5">
                    
                    {/* Badges row */}
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-slate-50 text-slate-600 border border-slate-200 font-mono">
                        {project.category}
                      </span>
                      
                      <span className={`px-2.5 py-0.5 rounded-md text-xs font-bold font-mono border ${
                        project.status === 'Active'
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          : project.status === 'Completed'
                          ? 'bg-blue-50 text-blue-700 border-blue-200'
                          : 'bg-amber-50 text-amber-700 border-amber-200'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-lg font-extrabold text-slate-900 leading-snug">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                        <MapPin size={13} className="text-slate-400 shrink-0" />
                        <span>{project.location}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed font-sans">
                      {project.description}
                    </p>

                    {/* Progress details if not fully completed */}
                    <div className="space-y-2 pt-2">
                      <div className="flex justify-between text-xs font-bold text-slate-600 font-mono">
                        <span>₹{project.funded.toLocaleString('en-IN')} Raised</span>
                        <span>₹{project.budget.toLocaleString('en-IN')} Goal</span>
                      </div>
                      
                      {/* Custom Progress bar */}
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            isCompleted ? 'bg-blue-600' : 'bg-emerald-600'
                          }`}
                          style={{ width: `${percentFunded}%` }}
                        ></div>
                      </div>
                      
                      <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                        <span>Progress: {percentFunded}%</span>
                        <span className="flex items-center gap-1">
                          <Users size={12} className="text-slate-400" />
                          {project.targetBeneficiaries.toLocaleString('en-IN')}+ served
                        </span>
                      </div>
                    </div>

                  </div>

                  {/* Impact points & action */}
                  <div className="p-6 bg-slate-50 border-t border-slate-100 space-y-5">
                    <div className="space-y-2">
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                        Audited Impact Highlights
                      </span>
                      <ul className="space-y-1.5">
                        {project.keyImpacts.map((imp, index) => (
                          <li key={index} className="flex items-start gap-2 text-xs text-slate-600">
                            <CheckCircle2 size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                            <span>{imp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Support trigger */}
                    {!isCompleted && (
                      <button
                        onClick={() => handleSupportClick(project)}
                        className="w-full flex items-center justify-center gap-2 py-2.5 bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 text-emerald-800 text-xs font-bold rounded-xl transition duration-200 cursor-pointer shadow-xs"
                      >
                        <Heart size={14} className="text-rose-500 fill-rose-500" />
                        <span>Sponsor this Project</span>
                      </button>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
