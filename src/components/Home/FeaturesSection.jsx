import React from 'react';
import { Database, Network, MapPin, Clock, Lock, Archive } from 'lucide-react';
import heroBg from '../../assets/land-map-bg.png';

export function FeaturesSection() {
    return (
        <section
            className="py-24 relative overflow-hidden bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7)), url(${heroBg})` }}
        >
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#000814]/10 to-transparent"></div>
            <div className="absolute -top-[200px] -right-[200px] w-[500px] h-[500px] bg-[#4F46E5]/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute -bottom-[200px] -left-[200px] w-[500px] h-[500px] bg-[#000814]/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container px-4 mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <h2 className="text-3xl md:text-5xl font-medium text-[#000814] mb-6 leading-tight">
                        Why Choose <span className="text-[#003566]">BhooNirakaran?</span>
                    </h2>
                    <p className="text-lg md:text-xl text-[#001242]/70">
                        Empowering stakeholders with digital tools for efficient and transparent land dispute resolution.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="group bg-[#F3F4F6] shadow-lg shadow-[#000814]/5 rounded-[2rem] p-8 border border-[#000814]/5 hover:bg-[#FFFFFF] hover:border-[#4F46E5]/30 hover:shadow-2xl hover:shadow-[#000814]/5 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden z-10">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#4F46E5]/10 to-transparent rounded-bl-[4rem] -z-10 group-hover:scale-125 transition-transform duration-700"></div>
                        <div className="w-14 h-14 rounded-2xl bg-[#001242] text-[#FFFFFF] flex items-center justify-center mb-6 group-hover:bg-[#003566] group-hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-[#000814]/20">
                            <Database className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-[#000814] mb-4">Centralized Document System</h3>
                        <p className="text-[#001242]/70 leading-relaxed text-sm">
                            All stakeholders upload reports and documents in one centralized platform for easy access and record management.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="group bg-[#F3F4F6] shadow-lg shadow-[#000814]/5 rounded-[2rem] p-8 border border-[#000814]/5 hover:bg-[#FFFFFF] hover:border-[#4F46E5]/30 hover:shadow-2xl hover:shadow-[#000814]/5 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden z-10">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#000814]/5 to-transparent rounded-bl-[4rem] -z-10 group-hover:scale-125 transition-transform duration-700"></div>
                        <div className="w-14 h-14 rounded-2xl bg-[#FFFFFF] border-2 border-[#000814]/10 text-[#001242] flex items-center justify-center mb-6 group-hover:border-[#003566] group-hover:text-[#4F46E5] group-hover:-translate-y-1 transition-all duration-300 shadow-sm">
                            <Network className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-[#000814] mb-4">Multi-Department Coordination</h3>
                        <p className="text-[#001d3d]/70 leading-relaxed text-sm">
                            Revenue and police departments collaborate efficiently by sharing case updates and reports through the system.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="group bg-[#F3F4F6] shadow-lg shadow-[#000814]/5 rounded-[2rem] p-8 border border-[#000814]/5 hover:bg-[#FFFFFF] hover:border-[#4F46E5]/30 hover:shadow-2xl hover:shadow-[#000814]/5 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden z-10">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#4F46E5]/10 to-transparent rounded-bl-[4rem] -z-10 group-hover:scale-125 transition-transform duration-700"></div>
                        <div className="w-14 h-14 rounded-2xl bg-[#001242] text-[#FFFFFF] flex items-center justify-center mb-6 group-hover:bg-[#003566] group-hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-[#000814]/20">
                            <MapPin className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-[#000814] mb-4">Case Tracking</h3>
                        <p className="text-[#001d3d]/70 leading-relaxed text-sm">
                            Applicants and officials can track the status of disputes and monitor progress in real time.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="group bg-[#F3F4F6] shadow-lg shadow-[#000814]/5 rounded-[2rem] p-8 border border-[#000814]/5 hover:bg-[#FFFFFF] hover:border-[#4F46E5]/30 hover:shadow-2xl hover:shadow-[#000814]/5 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden z-10">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#000814]/5 to-transparent rounded-bl-[4rem] -z-10 group-hover:scale-125 transition-transform duration-700"></div>
                        <div className="w-14 h-14 rounded-2xl bg-[#FFFFFF] border-2 border-[#000814]/10 text-[#001242] flex items-center justify-center mb-6 group-hover:border-[#003566] group-hover:text-[#4F46E5] group-hover:-translate-y-1 transition-all duration-300 shadow-sm">
                            <Clock className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-[#000814] mb-4">Faster Resolution</h3>
                        <p className="text-[#001d3d]/70 leading-relaxed text-sm">
                            The digital workflow reduces paperwork and administrative delays, helping resolve disputes faster.
                        </p>
                    </div>

                    {/* Feature 5 */}
                    <div className="group bg-[#F3F4F6] shadow-lg shadow-[#000814]/5 rounded-[2rem] p-8 border border-[#000814]/5 hover:bg-[#FFFFFF] hover:border-[#4F46E5]/30 hover:shadow-2xl hover:shadow-[#000814]/5 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden z-10">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#4F46E5]/10 to-transparent rounded-bl-[4rem] -z-10 group-hover:scale-125 transition-transform duration-700"></div>
                        <div className="w-14 h-14 rounded-2xl bg-[#001242] text-[#FFFFFF] flex items-center justify-center mb-6 group-hover:bg-[#003566] group-hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-[#000814]/20">
                            <Lock className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-[#000814] mb-4">Secure Case Management</h3>
                        <p className="text-[#001d3d]/70 leading-relaxed text-sm">
                            Role-based access ensures that only authorized officials can view or upload documents related to a case.
                        </p>
                    </div>

                    {/* Feature 6 */}
                    <div className="group bg-[#F3F4F6] shadow-lg shadow-[#000814]/5 rounded-[2rem] p-8 border border-[#000814]/5 hover:bg-[#FFFFFF] hover:border-[#4F46E5]/30 hover:shadow-2xl hover:shadow-[#000814]/5 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden z-10">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#000814]/5 to-transparent rounded-bl-[4rem] -z-10 group-hover:scale-125 transition-transform duration-700"></div>
                        <div className="w-14 h-14 rounded-2xl bg-[#FFFFFF] border-2 border-[#001242]/10 text-[#000814] flex items-center justify-center mb-6 group-hover:border-[#003566] group-hover:text-[#4F46E5] group-hover:-translate-y-1 transition-all duration-300 shadow-sm">
                            <Archive className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-[#000814] mb-4">Digital Record Keeping</h3>
                        <p className="text-[#001d3d]/70 leading-relaxed text-sm">
                            The system maintains a complete digital history of documents, reports, and final decisions for transparency.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
