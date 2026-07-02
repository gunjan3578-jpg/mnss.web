import React, { useState, useEffect } from 'react';
import { DonationRequest } from '../types';
import { Heart, Landmark, CheckCircle2, AlertCircle, FileText, Printer, Mail, User, ShieldCheck, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DonateViewProps {
  initialPurpose?: string;
}

export default function DonateView({ initialPurpose }: DonateViewProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pan: '',
    address: '',
    amount: '1000',
    purpose: 'Education Support (Gyan Jyoti)',
    isCustom: false,
    customAmount: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [donationComplete, setDonationComplete] = useState(false);
  const [receiptDetails, setReceiptDetails] = useState<DonationRequest | null>(null);

  // Sync purpose if preselected from project card
  useEffect(() => {
    if (initialPurpose) {
      setFormData((prev) => ({ ...prev, purpose: initialPurpose }));
    }
  }, [initialPurpose]);

  const presetAmounts = ['500', '1000', '2500', '5000'];
  const campaigns = [
    'Education Support (Gyan Jyoti)',
    'Healthcare Outreach (Sanjeevani)',
    'Women Tailoring (Swavlamban)',
    'Environment (Harit Bihar)',
    'General Welfare Fund'
  ];

  // Dynamic Impact Calculator message
  const impactMessage = () => {
    const amt = formData.isCustom ? Number(formData.customAmount) : Number(formData.amount);
    if (!amt || isNaN(amt) || amt <= 0) {
      return "Please input a contribution amount to view estimated humanitarian impact.";
    }

    if (amt < 1000) {
      return `₹${amt} will fund educational stationery kits (books, geometry box, drawing materials) for 1 child at our evening centers.`;
    } else if (amt >= 1000 && amt < 2500) {
      return `₹${amt} will provide books, school bags, a winter sweater, and daily evening tutoring for 1 rural student for a full month.`;
    } else if (amt >= 2500 && amt < 5000) {
      return `₹${amt} will directly sponsor medical screening, clinical tests, and free cataract spectacles for 4 elder villagers.`;
    } else {
      return `₹${amt} will fully sponsor 6-month vocational tailoring training, sewing supplies, and certificates for 1 rural woman under Project Swavlamban.`;
    }
  };

  const handlePresetSelect = (val: string) => {
    setFormData((prev) => ({
      ...prev,
      amount: val,
      isCustom: false,
      customAmount: ''
    }));
    if (formErrors.amount) {
      setFormErrors((prev) => ({ ...prev, amount: '' }));
    }
  };

  const handleCustomToggle = () => {
    setFormData((prev) => ({
      ...prev,
      isCustom: true,
      amount: ''
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = 'Donor name is required for receipts';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please provide a valid email format';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      errors.phone = 'Enter a valid 10-digit Indian phone number';
      isValid = false;
    }

    // Validate PAN for tax exemptions (optional but recommended, check format if filled)
    if (formData.pan.trim()) {
      const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
      if (!panRegex.test(formData.pan.trim().toUpperCase())) {
        errors.pan = 'Invalid PAN card format (e.g. ABCDE1234F)';
        isValid = false;
      }
    }

    if (!formData.address.trim()) {
      errors.address = 'Full address is required for 80G declaration';
      isValid = false;
    }

    const amt = formData.isCustom ? Number(formData.customAmount) : Number(formData.amount);
    if (!amt || isNaN(amt) || amt <= 0) {
      errors.amount = 'Please select or enter a valid donation amount';
      isValid = false;
    } else if (amt < 100) {
      errors.amount = 'Minimum contribution amount is ₹100';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsProcessing(true);

    // Simulate Payment Gateway Gateway Ingestion
    setTimeout(() => {
      const finalAmount = formData.isCustom ? Number(formData.customAmount) : Number(formData.amount);
      const receiptNo = `MNSS-REC-${Math.floor(100000 + Math.random() * 900000)}`;
      const request: DonationRequest = {
        id: `TXN-${Math.floor(1000000 + Math.random() * 9000000)}`,
        donorName: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        pan: formData.pan.trim().toUpperCase() || 'NOT PROVIDED',
        amount: finalAmount,
        purpose: formData.purpose,
        timestamp: new Date().toLocaleDateString('en-IN', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        }),
        receiptNo: receiptNo,
        address: formData.address.trim()
      };

      setReceiptDetails(request);
      setIsProcessing(false);
      setDonationComplete(true);
    }, 1800);
  };

  // Convert numbers to English words (simplistic for receipts)
  const numberToWords = (num: number): string => {
    const single = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const double = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    
    if (num === 500) return 'Five Hundred Rupees Only';
    if (num === 1000) return 'One Thousand Rupees Only';
    if (num === 2500) return 'Two Thousand Five Hundred Rupees Only';
    if (num === 5000) return 'Five Thousand Rupees Only';

    return `${num.toLocaleString('en-IN')} Rupees Only`;
  };

  return (
    <div className="font-sans space-y-16 pb-16">
      
      {/* Page Title Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-100 text-xs font-bold rounded-full uppercase tracking-wider font-mono">
            <Landmark size={12} /> Institutional Support Gateway
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Sponsor a Humanitarian Initiative
          </h2>
          <div className="h-1 w-20 bg-emerald-600 mx-auto rounded-full"></div>
          <p className="text-sm text-slate-500 leading-relaxed">
            Your generous support feeds, educates, and medically protects families in need across Samastipur. All transactions are secure, recorded, and eligible for Sec 80G tax deductions.
          </p>
        </div>
      </section>

      {/* Main Container: Form vs. Success Receipt */}
      <section className="max-w-4xl mx-auto px-4">
        <AnimatePresence mode="wait">
          {!donationComplete ? (
            <motion.div
              key="donate-form"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden text-left"
            >
              
              {/* Campaign Highlight info bar */}
              <div className="bg-emerald-600 text-white p-6 sm:p-8 flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 border border-white/25">
                  <Heart size={22} className="fill-white" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-lg font-display">Section 80G Tax Exemption Eligible</h4>
                  <p className="text-xs text-emerald-100 leading-relaxed">
                    Under current regulations, public donations to Mahendra Narayan Seva Sansthan are eligible for a 50% deduction of the donated amount from taxable income.
                  </p>
                </div>
              </div>

              {/* Form Body */}
              <form onSubmit={handleDonateSubmit} className="p-6 sm:p-10 space-y-8">
                
                {/* 1. Contribution Amount */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider font-mono">
                    1. Select Contribution Amount (INR)
                  </h3>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    {presetAmounts.map((amt) => {
                      const isActive = !formData.isCustom && formData.amount === amt;
                      return (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => handlePresetSelect(amt)}
                          className={`py-3 px-4 rounded-xl font-mono font-bold text-center border transition-all cursor-pointer ${
                            isActive
                              ? 'bg-emerald-600 border-emerald-600 text-white shadow-md'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          ₹{Number(amt).toLocaleString('en-IN')}
                        </button>
                      );
                    })}
                    <button
                      type="button"
                      onClick={handleCustomToggle}
                      className={`py-3 px-4 rounded-xl font-bold text-center border transition-all cursor-pointer ${
                        formData.isCustom
                          ? 'bg-emerald-600 border-emerald-600 text-white shadow-md'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      Custom
                    </button>
                  </div>

                  {/* Custom amount field if toggled */}
                  {formData.isCustom && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="pt-2 relative max-w-xs"
                    >
                      <span className="absolute left-3.5 top-5.5 font-mono text-sm font-bold text-slate-400">₹</span>
                      <input
                        type="number"
                        name="customAmount"
                        value={formData.customAmount}
                        onChange={handleInputChange}
                        placeholder="Enter amount (Min ₹100)"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-8 pr-4 text-sm font-mono font-bold focus:outline-none focus:border-emerald-500 focus:bg-white"
                      />
                    </motion.div>
                  )}

                  {formErrors.amount && (
                    <p className="text-xs font-bold text-red-500 font-mono">⚠ {formErrors.amount}</p>
                  )}

                  {/* Dynamic Impact Display Box */}
                  <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-4 flex items-start gap-3 mt-3">
                    <HelpCircle className="text-emerald-600 shrink-0 mt-0.5" size={16} />
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      <strong>Humanitarian Footprint:</strong> {impactMessage()}
                    </p>
                  </div>
                </div>

                {/* 2. Choose Campaign */}
                <div className="space-y-4 pt-6 border-t border-slate-100">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider font-mono">
                    2. Choose Welfare Campaign
                  </h3>
                  
                  <div className="max-w-md">
                    <select
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-semibold text-slate-700 focus:outline-none focus:border-emerald-500"
                    >
                      {campaigns.map((camp) => (
                        <option key={camp} value={camp}>
                          {camp}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 3. Donor Specifications */}
                <div className="space-y-5 pt-6 border-t border-slate-100">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider font-mono">
                    3. Donor Credentials (For Tax Exemption Filing)
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                        Donor Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="As printed on PAN/Aadhaar"
                        className={`w-full bg-slate-50 border rounded-xl p-3 text-sm ${
                          formErrors.name ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-emerald-500'
                        }`}
                      />
                      {formErrors.name && (
                        <p className="text-[10px] font-bold text-red-500 font-mono">⚠ {formErrors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="To receive tax receipt PDF"
                        className={`w-full bg-slate-50 border rounded-xl p-3 text-sm ${
                          formErrors.email ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-emerald-500'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-[10px] font-bold text-red-500 font-mono">⚠ {formErrors.email}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                        Phone Number *
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="10-digit Indian Mobile"
                        className={`w-full bg-slate-50 border rounded-xl p-3 text-sm font-mono ${
                          formErrors.phone ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-emerald-500'
                        }`}
                      />
                      {formErrors.phone && (
                        <p className="text-[10px] font-bold text-red-500 font-mono">⚠ {formErrors.phone}</p>
                      )}
                    </div>

                    {/* PAN for IT clearance */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wide flex items-center justify-between">
                        <span>PAN Card Number (Optional)</span>
                        <span className="text-[9px] font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Claim 80G</span>
                      </label>
                      <input
                        type="text"
                        name="pan"
                        value={formData.pan}
                        onChange={handleInputChange}
                        placeholder="e.g. ABCDE1234F"
                        className={`w-full bg-slate-50 border rounded-xl p-3 text-sm uppercase font-mono ${
                          formErrors.pan ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-emerald-500'
                        }`}
                      />
                      {formErrors.pan && (
                        <p className="text-[10px] font-bold text-red-500 font-mono">⚠ {formErrors.pan}</p>
                      )}
                    </div>
                  </div>

                  {/* Address */}
                  <div className="space-y-1.5 pt-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                      Full Address *
                    </label>
                    <textarea
                      name="address"
                      rows={2}
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Required for auditing logs under NGO regulations"
                      className={`w-full bg-slate-50 border rounded-xl p-3 text-sm ${
                        formErrors.address ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-emerald-500'
                      }`}
                    ></textarea>
                    {formErrors.address && (
                      <p className="text-[10px] font-bold text-red-500 font-mono">⚠ {formErrors.address}</p>
                    )}
                  </div>
                </div>

                {/* Submit Payment Trigger */}
                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <ShieldCheck size={16} className="text-emerald-600" /> Secure 256-Bit Simulated Processing
                  </span>
                  
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-sm rounded-xl shadow-md hover:shadow-rose-100 hover:shadow-lg transition-all duration-300 cursor-pointer disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing Gateway...</span>
                      </>
                    ) : (
                      <>
                        <Heart size={15} className="fill-white animate-pulse" />
                        <span>Confirm & Donate ₹{(formData.isCustom ? Number(formData.customAmount) : Number(formData.amount)).toLocaleString('en-IN')}</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            </motion.div>
          ) : (
            // Success State - Beautiful official donation receipt document!
            <motion.div
              key="donate-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              <div className="text-center space-y-3">
                <div className="w-14 h-14 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center text-emerald-600 mx-auto shadow-xs">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 font-display">Donation Processed Successfully!</h3>
                <p className="text-sm text-slate-500 max-w-md mx-auto">
                  Thank you, {receiptDetails?.donorName}. A receipt copy has been dispatched to <span className="font-semibold text-slate-800">{receiptDetails?.email}</span>.
                </p>
              </div>

              {/* PDF Official NGO Receipt Document mockup */}
              <div
                id="receipt-document"
                className="bg-white border-2 border-slate-300 rounded-3xl p-6 sm:p-10 shadow-lg text-left relative overflow-hidden font-sans max-w-2xl mx-auto"
              >
                {/* Watermark symbol */}
                <div className="absolute inset-0 opacity-4 flex items-center justify-center pointer-events-none select-none">
                  <svg viewBox="0 0 100 100" className="w-96 h-96 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="50" cy="30" r="8" />
                    <path d="M 25 75 Q 35 60 48 68" />
                    <path d="M 75 75 Q 65 60 52 68" />
                    <path d="M 50 68 L 50 42" />
                  </svg>
                </div>

                {/* Header segment */}
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4 pb-6 border-b-2 border-slate-900 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center justify-center text-emerald-600 font-extrabold">
                      MNSS
                    </div>
                    <div>
                      <span className="block text-sm font-extrabold tracking-wider text-slate-900 uppercase">MAHENDRA NARAYAN</span>
                      <span className="block text-xs font-bold text-emerald-600 uppercase tracking-wide">SEVA SANSTHAN</span>
                      <span className="block text-[9px] text-slate-400 font-mono">Samastipur, Bihar • Regd No: 181/2012-13</span>
                    </div>
                  </div>

                  <div className="text-left sm:text-right font-mono text-[10px] text-slate-500 space-y-0.5">
                    <div><strong>RECEIPT NO:</strong> {receiptDetails?.receiptNo}</div>
                    <div><strong>DATE:</strong> {receiptDetails?.timestamp}</div>
                    <div><strong>TXN ID:</strong> {receiptDetails?.id}</div>
                  </div>
                </div>

                {/* Declaration Body */}
                <div className="py-6 space-y-5 text-sm text-slate-700 relative z-10">
                  <div className="text-center font-extrabold text-xs tracking-wider uppercase bg-emerald-50 border border-emerald-100 text-emerald-800 py-1 rounded">
                    Official Donation Receipt (Section 80G Income Tax Act)
                  </div>

                  <div className="space-y-3.5 leading-relaxed">
                    <p>
                      Received with thanks from <strong className="text-slate-900">{receiptDetails?.donorName}</strong> (PAN: <strong className="font-mono text-slate-900">{receiptDetails?.pan}</strong>), residing at <span className="italic">{receiptDetails?.address}</span>, a sum of <strong className="text-slate-900">₹{receiptDetails?.amount.toLocaleString('en-IN')}</strong> (Words: <em>{receiptDetails && numberToWords(receiptDetails.amount)}</em>) as a voluntary support contribution toward the program: <strong className="text-emerald-700">{receiptDetails?.purpose}</strong>.
                    </p>
                  </div>

                  {/* Audit information table */}
                  <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200 font-mono text-xs">
                    <div>
                      <span className="block text-[9px] uppercase font-bold text-slate-400">Donor Email:</span>
                      <span className="font-semibold text-slate-800">{receiptDetails?.email}</span>
                    </div>
                    <div>
                      <span className="block text-[9px] uppercase font-bold text-slate-400">Donor Phone:</span>
                      <span className="font-semibold text-slate-800">{receiptDetails?.phone}</span>
                    </div>
                  </div>

                  {/* Legal certification clause */}
                  <p className="text-[10px] text-slate-400 italic leading-relaxed pt-2 border-t border-slate-100">
                    * Certification: Mahendra Narayan Seva Sansthan is registered under the Bihar Societies Registration Act 21 of 1860, No. 181/2012-13. Public donations qualify for tax exemption under Section 80G of the Indian Income Tax Act. We certify that the funds received will be strictly utilized for charity and community development purposes.
                  </p>
                </div>

                {/* Signatures footer */}
                <div className="pt-6 border-t-2 border-slate-200 flex justify-between items-end relative z-10 font-mono text-xs text-slate-500">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Office Seal</div>
                    <div className="w-14 h-14 border border-emerald-300 rounded-full flex items-center justify-center text-[8px] text-emerald-600 font-bold rotate-12 mt-2">
                      MNSS SEAL
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Verified Signatory</div>
                    <div className="italic text-emerald-700 font-bold font-display text-sm mt-3 border-b border-slate-300 pb-1">
                      Kundan Kumar
                    </div>
                    <div className="text-[9px] text-slate-400 mt-1 uppercase">Secretary, MNSS Bihar</div>
                  </div>
                </div>

              </div>

              {/* Document actions */}
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 py-2.5 px-5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md transition duration-200 cursor-pointer"
                >
                  <Printer size={15} />
                  <span>Print Receipt</span>
                </button>
                
                <button
                  onClick={() => setDonationComplete(false)}
                  className="inline-flex items-center gap-1.5 py-2.5 px-5 border border-slate-300 bg-white hover:bg-slate-50 text-slate-600 font-bold text-sm rounded-xl transition duration-200 cursor-pointer"
                >
                  <span>Donate Again</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
