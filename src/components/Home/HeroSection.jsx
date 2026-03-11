import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { ShieldCheck, ArrowRight, CheckCircle2, Lock, FileText } from 'lucide-react';
import heroIllustration from '../../assets/hero-illustration.png';

export function HeroSection() {
    const navigate = useNavigate();

    return (
        <section id="home" className="relative px-2 md:px-4 bg-gradient-to-br from-[#1E40AF]/12 via-[#001242]/12 to-[#FF9933]/12 overflow-hidden min-h-[90vh] flex items-center">
            {/* Subtle Official Pattern/Overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoMjB2MjBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMGgyMHYxSDB6bTAgMjBoMXYtMjBoLTEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMSkiLz4KPC9zdmc+')] opacity-40 z-0"></div>

            {/* Smooth gradient fade into next section */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#F3F4F6] pointer-events-none z-10"></div>

            {/* Decorative Blurs */}
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#1E40AF]/20 rounded-full blur-[120px] pointer-events-none -z-0"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#001242]/20 rounded-full blur-[140px] pointer-events-none -z-0"></div>

            <div className="container px-6 mx-auto py-10 md:py-20 relative z-10 flex flex-col lg:flex-row items-center gap-10">
                {/* Left Column: Text Content */}
                <div className="w-full lg:w-1/2 text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#003566]/10 border-l-4 border-[#003566] text-[#001d3d] text-sm font-medium mb-8">
                        <ShieldCheck className="w-4 h-4 text-[#001d3d]" />
                        Official Government Portal
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-medium tracking-normal text-[#000814] mb-6 leading-tight">
                        Transparent & Efficient <br className="hidden md:block" />
                        <span className="bg-gradient-to-r from-[#001242] to-[#1E40AF] bg-clip-text text-transparent">Land Dispute Resolution</span>
                    </h1>

                    <p className="text-lg md:text-xl text-[#001d3d]/80 mb-10 max-w-xl leading-relaxed">
                        BhooNirakaran provides a secure, centralized platform for citizens to request land-related services, track application progress, and obtain official resolutions.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-2">
                        <Button
                            size="lg"
                            className="text-base px-8 h-14 rounded-md bg-[#003566] hover:bg-[#003566]/95 text-[#FFFFFF] font-semibold border-none transition-colors shadow-none"
                            onClick={() => navigate('/request')}
                        >
                            Submit New Application
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="text-base px-8 h-14 rounded-md bg-white border-[#001242]/30 text-[#001242] hover:bg-[#efefef]/95 hover:border-[#000814] font-medium transition-colors"
                            onClick={() => navigate('/dashboard')}
                        >
                            Track Application Status
                        </Button>
                    </div>

                    <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-[#001d3d]/10 pt-6">
                        <div className="flex items-center gap-2 text-[#000814]/70 text-sm font-medium">
                            <CheckCircle2 className="w-4 h-4 text-[#fb8500]" />
                            <span>Multi-Department Review</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#000814]/70 text-sm font-medium">
                            <Lock className="w-4 h-4 text-[#fb8500]" />
                            <span>Secure Document Access</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#000814]/70 text-sm font-medium">
                            <FileText className="w-4 h-4 text-[#fb8500]" />
                            <span>Digitized Records</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Clean Illustration/Image */}
                <div className="w-full lg:w-1/2 hidden lg:block">
                    <div className="relative p-3 bg-white/50 backdrop-blur-sm border border-white/40 rounded-3xl max-w-xl mx-auto shadow-2xl shadow-blue-900/10">
                        <img
                            src={heroIllustration}
                            alt="Land management illustration"
                            className="w-full h-auto object-cover rounded-2xl shadow-inner relative z-10"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
