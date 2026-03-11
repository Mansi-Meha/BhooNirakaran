import React from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/Home/HeroSection';
import { FeaturesSection } from '../components/Home/FeaturesSection';
import { ProcessSection } from '../components/Home/ProcessSection';
import { GuidelinesNoticeSection } from '../components/Home/GuidelinesNoticeSection';
import { FooterSection } from '../components/Home/FooterSection';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-slate-50 selection:bg-primary/10">
            <Navbar isLanding />

            <HeroSection />
            <ProcessSection />
            <GuidelinesNoticeSection />
            <FeaturesSection />

           
            <FooterSection />
        </div>
    );
}
