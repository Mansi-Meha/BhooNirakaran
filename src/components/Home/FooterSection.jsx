import React from 'react';
import { Building2, ArrowRight, Zap, FileText } from 'lucide-react';

export function FooterSection() {
    return (
        <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white pt-24 pb-12 border-t border-slate-900 overflow-hidden relative">
            {/* Decorative glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

            <div className="container px-4 mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* 1. Portal Information */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                                <Building2  />
                            </div>
                            <span className="font-bold text-2xl tracking-tight">BhooNirakaran</span>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-primary font-bold text-sm uppercase text-white/25 tracking-widest">Bhoomi Vivaad Nivaran Portal</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                A centralized digital platform for resolving land disputes through coordinated action by administrative, police, and revenue authorities.
                            </p>
                        </div>
                    </div>

                    {/* 2. Quick Links */}
                    <div className="lg:pl-8">
                        <h4 className="text-white font-bold text-lg mb-8 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full"></span>
                        </h4>
                        <ul className="space-y-4">
                            {['Home', 'About the Portal', 'Submit Application', 'Track Application Status', 'Officer Login'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-slate-400 hover:text-white text-sm flex items-center gap-2 group transition-colors">
                                        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. Help & Support */}
                    <div className="lg:pl-8">
                        <h4 className="text-white font-bold text-lg mb-8 relative inline-block">
                            Help & Support
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full"></span>
                        </h4>
                        <ul className="space-y-4">
                            {['FAQs', 'User Guidelines', 'Help Center', 'Contact Support'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-slate-400 hover:text-white text-sm flex items-center gap-2 group transition-colors">
                                        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 4. Contact Information */}
                    <div className="lg:pl-8">
                        <h4 className="text-white font-bold text-lg mb-8 relative inline-block">
                            Contact Info
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full"></span>
                        </h4>
                        <div className="space-y-6">
                            <div className="space-y-1">
                                <p className="text-white font-medium text-sm">Department of Revenue & Land Reforms</p>
                                <p className="text-slate-400 text-sm">Government of Bihar</p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors cursor-pointer">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                                        <Zap className="w-4 h-4 text-primary" />
                                    </div>
                                    <span className="text-sm">Helpline: +91 1800-XXX-XXXX</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors cursor-pointer">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                                        <FileText className="w-4 h-4 text-primary" />
                                    </div>
                                    <span className="text-sm">support-bhooni@bihar.gov.in</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-slate-500 text-xs text-center md:text-left leading-relaxed max-w-md">
                        © 2026 Bhoomi Vivaad Nivaran Portal | Government of Bihar. <br className="hidden md:block" />
                        All Rights Reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-medium uppercase tracking-widest">
                        {['Privacy Policy', 'Terms of Use', 'Disclaimer'].map((item) => (
                            <a key={item} href="#" className="text-slate-500 hover:text-primary transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
