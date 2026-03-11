import React from 'react';
import { BookOpen, Bell, CheckCircle2, AlertCircle, ArrowRight, FileText, Sparkles, ShieldCheck } from 'lucide-react';

export function GuidelinesNoticeSection() {
    const guidelines = [
        {
            title: "Accurate Documentation",
            description: "Ensure all uploaded land records and ID proofs are clear and valid.",
            icon: <CheckCircle2 className="w-6 h-6 text-[#10b981]" />,
            step: "01"
        },
        {
            title: "Truthful Submission",
            description: "Provide factual information about the dispute to avoid legal complications.",
            icon: <CheckCircle2 className="w-6 h-6 text-[#10b981]" />,
            step: "02"
        },
        {
            title: "Follow-up Regularly",
            description: "Stay updated on your request status through the citizen dashboard.",
            icon: <CheckCircle2 className="w-6 h-6 text-[#10b981]" />,
            step: "03"
        },
        {
            title: "Cooperate with Officials",
            description: "Respond promptly to any clarification requests from revenue or officers.",
            icon: <CheckCircle2 className="w-6 h-6 text-[#10b981]" />,
            step: "04"
        }
    ];

    const notices = [
        {
            date: "March 10, 2024",
            title: "New Digital Land Records Integration",
            tag: "UPDATE",
            isNew: true
        },
        {
            date: "March 08, 2024",
            title: "Special Resolution Camp in Central District",
            tag: "EVENT",
            isNew: false
        },
        {
            date: "March 05, 2024",
            title: "Updated Guidelines for Document Verification",
            tag: "CIRCULAR",
            isNew: false
        }
    ];

    return (
        <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-blue-100/50 to-white relative overflow-hidden">
            <div className="container px-4 mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left Column: Guidelines */}
                    <div id="guidelines" className="lg:col-span-7">
                        <div className="mb-10">
                            <h2 className="text-3xl md:text-4xl text-[#003566] font-bold mb-4">
                                Procedural Guidelines
                            </h2>
                            <div className="w-20 h-1 bg-[#F97316] mb-6"></div>
                            <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
                                Standards of submission and interaction to ensure a fair resolution process.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {guidelines.map((item, index) => (
                                <div key={index} className="group p-6 rounded-xl bg-white border border-slate-200 hover:border-[#F97316]/30 hover:shadow-md transition-all duration-300">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center text-[#F97316] group-hover:bg-[#F97316]/5 transition-colors">
                                            {item.icon}
                                        </div>
                                        <span className="text-xs font-bold text-slate-300 trekking-widest">{item.step}</span>
                                    </div>
                                    <h3 className="font-bold text-lg text-[#000814] mb-2">{item.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10">
                            <button className="group flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[#003566]/50 text-[#003566] bg-[#003566]/10 font-bold hover:bg-[#003566] hover:text-white transition-all">
                                <FileText className="w-5 h-5" />
                                Download Handbook
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Notice Board */}
                    <div id="bulletin" className="lg:col-span-5 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                        <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#000814] flex items-center justify-center text-white">
                                    <Bell className="w-5 h-5" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-[#000814]">Official Bulletin</h2>
                                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Live Updates</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-600 text-[10px] font-bold">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                                LIVE
                            </div>
                        </div>

                        <div className="space-y-6">
                            {notices.map((notice, index) => (
                                <div key={index} className="group cursor-pointer pb-6 border-b border-slate-100 last:border-0 last:pb-0 hover:pl-2 transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-[11px] text-slate-400 font-medium">{notice.date}</span>
                                        <span className="bg-[#F97316]/10 text-[#F97316] px-2 py-0.5 rounded text-[10px] font-bold tracking-wider">
                                            {notice.tag}
                                        </span>
                                    </div>
                                    <h4 className="text-[15px] font-semibold text-[#000814] group-hover:text-[#F97316] transition-colors flex items-center justify-between gap-4">
                                        <span>{notice.title}</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                    </h4>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 p-5 rounded-xl bg-blue-50/50 border border-blue-100">
                            <div className="flex items-start gap-3">
                                <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                                <div>
                                    <h5 className="font-bold text-sm text-blue-900 mb-1">Important Advisory</h5>
                                    <p className="text-blue-800/70 text-xs leading-relaxed">
                                        Update your profile with a valid mobile number for instant procedural milestone alerts.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
