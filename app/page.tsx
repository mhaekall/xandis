'use client';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import CreateJob from './components/CreateJob';
import CTA from './components/CTA';
import JobBoard from './components/JobBoard';
import EditorProfile from './components/EditorProfile';

export default function Home() {
  return (
    <div>
      <CTA />
      <Hero />
      <Features />
      <HowItWorks />
      <EditorProfile />
      <JobBoard />
      <CreateJob />
    </div>
  );
}
