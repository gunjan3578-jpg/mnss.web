import React, { useState } from 'react';
import { X, Check, Heart, ShieldCheck, CreditCard, Award, ArrowRight, Download, Receipt } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPurpose?: string;
}

export default function DonateModal({ isOpen, onClose, initialPurpose = 'education' }: DonateModalProps) {
  const [amount, setAmount] = useState<number>(2500);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pan: '',
    purpose: initialPurpose,
    anonymous: false
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [receiptNo, setReceiptNo] = useState('');

  const presets = [500, 1000, 2500, 5000, 10000];

  const handlePresetSelect = (val: number) => {
    setIsCustom(false);
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomChange = (val: string) => {
    setIsCustom(true);
    setCustomAmount(val);
    const num = parseFloat(val);
    if (!isNaN(num)) {
      setAmount(num);
    } else {
      setAmount(0);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || amount <= 0) return;
    
    // Generate a beautiful receipt number
    const uniqueReceipt = `MNSS-REC-80G-${Math.floor(200000 + Math.random() * 799000).toString()}`;
    setReceiptNo(uniqueReceipt);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setAmount(2500);
    setCustomAmount('');
    setIsCustom(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      pan: '',
      purpose: 'education',
      anonymous: false
    });
    setIsSubmitted(false);
  };

  // 80G Tax exemption calculations
  const taxDeductionValue = amount * 0.50;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
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
                <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center text-rose-600">
                  <Heart className="fill-rose-600/10 animate-pulse" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">Support Serving Humanity</h3>
                  <p className="text-xs text-rose-600 font-semibold uppercase tracking-wider">Approved 12A & 80G Tax Exemption</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* 1. Preset Buttons */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Select Donation Amount (₹) *</label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {presets.map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => handlePresetSelect(val)}
                        className={`py-2 px-1 text-xs font-bold rounded-lg border transition-all ${
                          !isCustom && amount === val
                            ? 'bg-rose-50 border-rose-500 text-rose-700 font-mono shadow-xs'
                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 font-mono'
                        }`}
                      >
                        ₹{val.toLocaleString('en-IN')}
                      </button>
                    ))}
                  </div>

                  {/* Custom Input */}
                  <div className="mt-3">
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400 font-mono">₹</span>
                      <input
                        type="number"
                        min="100"
                        value={customAmount}
                        onChange={(e) => handleCustomChange(e.target.value)}
                        placeholder="Or enter custom amount (Min. ₹100)"
                        className={`w-full bg-slate-50 border rounded-xl pl-8 pr-4 py-2.5 text-sm outline-none transition-all font-mono ${
                          isCustom ? 'border-rose-500 bg-white font-bold text-rose-700' : 'border-slate-200 focus:border-rose-500 focus:bg-white'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Tax Savings Preview */}
                  {amount > 0 && (
                    <div className="mt-3 bg-emerald-50/60 border border-emerald-100 rounded-xl p-3 flex items-start gap-2.5 text-xs text-emerald-800">
                      <Award className="text-emerald-600 shrink-0 mt-0.5" size={15} />
                      <div>
                        <span>Your tax deduction benefits (under 80G): </span>
                        <strong className="font-mono">₹{taxDeductionValue.toLocaleString('en-IN')}</strong>
                        <span className="text-emerald-700"> (50% of ₹{amount.toLocaleString('en-IN')} is exempt from tax)</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* 2. Donor Info */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider border-b pb-1.5">Donor Information</h4>
                  
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-500 mb-0.5">Full Name (Matches PAN for 80G claims) *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter full name"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-rose-500 focus:bg-white rounded-xl p-2.5 text-sm transition-colors outline-none text-slate-800"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-500 mb-0.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full bg-slate-50 border border-slate-200 focus:border-rose-500 focus:bg-white rounded-xl p-2.5 text-sm transition-colors outline-none text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-500 mb-0.5">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="10-digit mobile"
                        className="w-full bg-slate-50 border border-slate-200 focus:border-rose-500 focus:bg-white rounded-xl p-2.5 text-sm transition-colors outline-none text-slate-800 font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-500 mb-0.5">PAN Card Number (Required for 80G Tax Exemption)</label>
                      <input
                        type="text"
                        maxLength={10}
                        value={formData.pan}
                        onChange={(e) => setFormData({ ...formData, pan: e.target.value.toUpperCase() })}
                        placeholder="ABCDE1234F"
                        className="w-full bg-slate-50 border border-slate-200 focus:border-rose-500 focus:bg-white rounded-xl p-2.5 text-sm transition-colors outline-none text-slate-800 font-mono uppercase"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-500 mb-0.5">Support Cause / Purpose *</label>
                      <select
                        value={formData.purpose}
                        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-rose-500 focus:bg-white rounded-xl p-2.5 text-sm transition-colors outline-none text-slate-800 cursor-pointer"
                      >
                        <option value="education">Education & Digital Literacy</option>
                        <option value="healthcare">Healthcare Seva Camps</option>
                        <option value="skills">Skill & Tailoring Centers</option>
                        <option value="climate">Environment & Sapling Plantation</option>
                        <option value="water">Water & Sanitation Systems</option>
                        <option value="general">General NGO Fund</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="anonymous"
                      checked={formData.anonymous}
                      onChange={(e) => setFormData({ ...formData, anonymous: e.target.checked })}
                      className="rounded text-rose-600 focus:ring-rose-500 cursor-pointer"
                    />
                    <label htmlFor="anonymous" className="text-xs text-slate-600 font-semibold cursor-pointer">
                      Make this contribution anonymous in public logs
                    </label>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl shadow-lg hover:shadow-rose-100 transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Proceed to Support ₹{amount.toLocaleString('en-IN')}</span>
                    <CreditCard size={15} />
                  </button>
                </div>
              </form>

              <div className="mt-4 flex items-center justify-center gap-1.5 text-[10px] text-slate-400 font-medium">
                <ShieldCheck size={14} className="text-emerald-500" />
                <span>Simulated Secure 256-bit SSL transaction gateway</span>
              </div>
            </div>
          ) : (
            <div className="p-6 sm:p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 mx-auto">
                <Receipt size={36} className="animate-pulse" />
              </div>

              <div>
                <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full text-xs font-bold font-mono tracking-wider mb-2">
                  {receiptNo}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 leading-tight">Contribution Confirmed!</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto mt-2">
                  Thank you, <strong className="text-slate-800">{formData.name}</strong>, for your generous donation of <strong className="text-rose-600 text-sm">₹{amount.toLocaleString('en-IN')}</strong>. A simulated donation confirmation has been sent to <span className="font-semibold">{formData.email}</span>.
                </p>
              </div>

              {/* Printable Receipt Box */}
              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50 text-left space-y-4 font-mono text-xs text-slate-700 relative shadow-inner">
                <div className="border-b pb-2 text-center">
                  <h4 className="font-bold text-slate-900 text-sm">MAHENDRA NARAYAN SEVA SANSTHAN</h4>
                  <p className="text-[9px] text-slate-400 uppercase tracking-widest mt-0.5">Samastipur, Bihar • Regd No: 1762/2011</p>
                </div>

                <div className="space-y-1 text-[11px]">
                  <div className="flex justify-between">
                    <span>RECEIPT NO:</span>
                    <span className="font-bold text-slate-950">{receiptNo}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>DATE & TIME:</span>
                    <span>{new Date().toLocaleString('en-GB')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>DONOR NAME:</span>
                    <span className="font-bold text-slate-950 uppercase">{formData.anonymous ? 'ANONYMOUS' : formData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>PAN NO:</span>
                    <span className="font-bold text-slate-950 uppercase">{formData.pan || 'NOT PROVIDED'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SUPPORT PURPOSE:</span>
                    <span className="uppercase">{formData.purpose}</span>
                  </div>
                  <div className="border-t border-dashed my-2 pt-2 flex justify-between text-slate-950 font-bold">
                    <span>AMOUNT RECEIVED:</span>
                    <span>₹{amount.toLocaleString('en-IN')}.00</span>
                  </div>
                  <div className="flex justify-between text-emerald-700 font-bold">
                    <span>80G TAX BENEFIT (50%):</span>
                    <span>₹{taxDeductionValue.toLocaleString('en-IN')}.00</span>
                  </div>
                </div>

                <div className="pt-2 border-t text-[9px] text-slate-400 text-center leading-relaxed">
                  This is a simulated digital certificate of donation issued in appreciation of social support for rural welfare.
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleReset}
                  className="grow py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition"
                >
                  New Donation
                </button>
                <button
                  onClick={onClose}
                  className="grow py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl shadow-md transition"
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
