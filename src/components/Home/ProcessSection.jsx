import React from 'react';
import { UserPlus, Search, Users, Gavel } from 'lucide-react';

export function ProcessSection() {
    return (
        <section id="about" className="py-24 bg-gradient-to-b from-slate-50 to-blue-100/50 relative overflow-hidden">
            <div className="container px-4 mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <h2 className="text-3xl md:text-5xl text-[#000814] font-medium mb-6 leading-tight">
                        How the Resolution Process Works
                    </h2>
                    <p className="text-lg text-[#1E3A8A]/70">
                        A transparent, multi-departmental workflow designed to provide fair and efficient land dispute resolutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[2.25rem] left-[10%] w-[90%] h-[2px] bg-gradient-to-r from-[#1E3A8A]/2 via-[#1E3A8A]/10 to-[#1E3A8A]/0 z-0"></div>

                    {/* Step 1 */}
                    <div className="relative group h-full pt-6">
                        <div className="absolute top-5 left-1/2 md:left-8 -translate-x-1/2 md:translate-x-0 w-8 h-8 rounded-full bg-[#FFFFFF] border-4 border-[#F3F4F6] shadow-sm flex items-center justify-center z-20 group-hover:border-[#003566] transition-colors duration-300">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#003566]"></div>
                        </div>
                        <div className="bg-[#FFFFFF] rounded-2xl p-8 border border-[#1E3A8A]/5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 h-full flex flex-col mt-6 text-center md:text-left">
                            <div className="w-12 h-12 rounded-xl bg-[#1E3A8A] text-[#FFFFFF] flex items-center justify-center mb-6 shadow-md shadow-[#1E3A8A]/20 mx-auto md:mx-0">
                                <UserPlus className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-[#001d3d] mb-3">1. Submit Request</h3>
                            <p className="text-[#1E3A8A]/70 text-sm leading-relaxed flex-grow">
                                Citizens register disputes and upload vital documents like land records via the secure portal.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative group h-full pt-6">
                        <div className="absolute top-5 left-1/2 md:left-8 -translate-x-1/2 md:translate-x-0 w-8 h-8 rounded-full bg-[#FFFFFF] border-4 hover:border-[#003566] shadow-sm flex items-center justify-center z-20 group-hover:border-[#003566] transition-colors duration-300">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#003566]"></div>
                        </div>
                        <div className="bg-[#FFFFFF] rounded-2xl p-8 border border-[#1E3A8A]/5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 h-full flex flex-col mt-6 text-center md:text-left">
                            <div className="w-12 h-12 rounded-xl bg-[#1E3A8A] border border-[#1E3A8A]/10 text-[#FFFFFF] flex items-center justify-center mb-6 shadow-sm mx-auto md:mx-0">
                                <Search className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-[#001d3d] mb-3">2. Document Verification</h3>
                            <p className="text-[#1E3A8A]/70 text-sm leading-relaxed flex-grow">
                                Revenue officials (CO, Halka Karmachari) verify records while the Police submit initial reports.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative group h-full pt-6">
                        <div className="absolute top-5 left-1/2 md:left-8 -translate-x-1/2 md:translate-x-0 w-8 h-8 rounded-full bg-[#FFFFFF] border-4 hover:border-[#003566] shadow-sm flex items-center justify-center z-20 group-hover:border-[#003566] transition-colors duration-300">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#003566]"></div>
                        </div>
                        <div className="bg-[#FFFFFF] rounded-2xl p-8 border border-[#1E3A8A]/5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 h-full flex flex-col mt-6 text-center md:text-left">
                            <div className="w-12 h-12 rounded-xl bg-[#1E3A8A] text-[#FFFFFF] flex items-center justify-center mb-6 shadow-md shadow-[#1E3A8A]/20 mx-auto md:mx-0">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-[#001d3d] mb-3">3. Multi-Dept Review</h3>
                            <p className="text-[#1E3A8A]/70 text-sm leading-relaxed flex-grow">
                                Administrative officers (ADM, SDO, DSP) review findings to ensure legal and factual accuracy.
                            </p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative group h-full pt-6">
                        <div className="absolute top-5 left-1/2 md:left-8 -translate-x-1/2 md:translate-x-0 w-8 h-8 rounded-full bg-[#FFFFFF] border-4 border-[#F3F4F6] shadow-sm flex items-center justify-center z-20 group-hover:border-[#003566] transition-colors duration-300">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#003566]"></div>
                        </div>
                        <div className="bg-[#FFFFFF] rounded-2xl p-8 border border-[#1E3A8A]/5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 h-full flex flex-col mt-6 text-center md:text-left">
                            <div className="w-12 h-12 rounded-xl bg-[#1E3A8A] text-[#FFFFFF] flex items-center justify-center mb-6 shadow-md shadow-[#1E3A8A]/20 mx-auto md:mx-0">
                                <Gavel className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-[#001d3d] mb-3">4. Final Resolution</h3>
                            <p className="text-[#1E3A8A]/70 text-sm leading-relaxed flex-grow">
                                The District Magistrate or authorized officer issues a formal, legally binding resolution.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
