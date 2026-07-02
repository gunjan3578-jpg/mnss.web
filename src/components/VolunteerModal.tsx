import React, { useState } from 'react';
import { X, Check, Heart, ShieldCheck, Mail, Phone, MapPin, Award, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VolunteerModal({ isOpen, onClose }: VolunteerModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    focusArea: 'education',
    availability: 'weekends',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [pledgeCode, setPledgeCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    
    // Generate a unique pledge/volunteer certificate code
    const randomCode = `MNSS-VOL-${Math.floor(100000 + Math.random() * 90000).toString()}`;
    setPledgeCode(randomCode);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      focusArea: 'education',
      availability: 'weekends',
      message: ''
    });
    setIsSubmitted(false);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
        />

        {/* Modal content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white rounded-2xl shadow-2xl border border-slate-100 max-w-lg w-full max-h-[90vh] overflow-y-auto relative z-10 font-sans"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X size={20} />
          </button>

          {!isSubmitted ? (
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                  <Heart className="fill-emerald-600/10" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Become a Volunteer</h3>
                  <p className="text-xs text-slate-500 font-medium">Join Mahendra Narayan Seva Sansthan</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl p-3 text-sm transition-colors outline-none text-slate-800"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl p-3 text-sm transition-colors outline-none text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit number"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl p-3 text-sm transition-colors outline-none text-slate-800 font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Where can you help? *</label>
                  <select
                    value={formData.focusArea}
                    onChange={(e) => setFormData({ ...formData, focusArea: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl p-3 text-sm transition-colors outline-none text-slate-800 cursor-pointer"
                  >
                    <option value="education">Education & Digital Literacy</option>
                    <option value="skill_dev">Skill Development (Tailoring, etc.)</option>
                    <option value="agriculture">Sustainable Agriculture</option>
                    <option value="climate">Environment & Tree Plantation</option>
                    <option value="water">Water Conservation Initiatives</option>
                    <option value="sanitation">Sanitation (Swachh Bharat)</option>
                    <option value="healthcare">Healthcare & Medicine Camps</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Availability</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['weekends', 'weekdays', 'flexible'].map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setFormData({ ...formData, availability: mode })}
                        className={`py-2 text-xs font-semibold rounded-lg border capitalize transition-all ${
                          formData.availability === mode
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Address / Location</label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Town, District"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl p-3 text-sm transition-colors outline-none text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Short Message / Background</label>
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly share why you want to join..."
                    className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl p-3 text-sm transition-colors outline-none text-slate-800"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg hover:shadow-emerald-100 transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit Pledge & Join</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </form>

              <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-slate-400 font-medium">
                <ShieldCheck size={14} className="text-emerald-500" />
                <span>We respect your privacy. Form data is stored locally in the session.</span>
              </div>
            </div>
          ) : (
            <div className="p-6 sm:p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto">
                <Award size={36} className="animate-bounce" />
              </div>

              <div>
                <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full text-xs font-bold font-mono tracking-wider mb-2">
                  {pledgeCode}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 leading-tight">Thank You, {formData.name}!</h3>
                <p className="text-sm text-emerald-600 font-semibold italic mt-1">"Serving Humanity, Empowering Lives"</p>
                <p className="text-xs text-slate-500 max-w-sm mx-auto mt-3">
                  Your volunteer application has been successfully logged! We have sent a confirmation placeholder to <span className="font-semibold text-slate-700">{formData.email}</span>.
                </p>
              </div>

              {/* Digital Certificate Box */}
              <div className="border-2 border-dashed border-emerald-600/30 rounded-2xl p-6 bg-slate-50 relative overflow-hidden text-left shadow-inner">
                <div className="absolute right-3 top-3 opacity-5">
                  <Award size={100} />
                </div>
                
                <div className="text-center pb-4 border-b border-slate-200">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mahendra Narayan Seva Sansthan</span>
                  <span className="block text-xs font-bold text-emerald-700 uppercase tracking-widest mt-0.5">Certificate of Association</span>
                </div>

                <div className="py-4 space-y-2 text-xs text-slate-600">
                  <p>This is to record that <strong className="text-slate-950 text-sm block mt-0.5">{formData.name}</strong></p>
                  <p>has pledged to volunteer for <strong className="text-emerald-800 font-semibold uppercase tracking-wider bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 inline-block">{formData.focusArea.replace('_', ' ')}</strong> development programs across rural Samastipur, Bihar.</p>
                </div>

                <div className="pt-3 border-t border-slate-200 flex justify-between items-end text-[10px] text-slate-500 font-mono">
                  <div>
                    <span>DATE: {new Date().toLocaleDateString('en-GB')}</span>
                  </div>
                  <div className="text-right">
                    <span className="block font-bold text-slate-800">KUNDAN KUMAR</span>
                    <span className="block text-[9px] text-slate-400">Secretary, MNSS</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleReset}
                  className="grow py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition"
                >
                  Register Another
                </button>
                <button
                  onClick={onClose}
                  className="grow py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-md transition"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
