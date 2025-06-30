
import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[rgba(255,255,255,0.02)] border self-stretch flex w-full flex-col items-center mt-[129px] pt-[76px] pb-[30px] px-20 border-[rgba(255,255,255,0.1)] border-solid max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="flex items-center gap-5">
        <img
          src="/lovable-uploads/d8ef68e3-b2a4-4110-91f1-2272d58e4004.png"
          className="w-[79px] h-[76px] object-contain"
          alt="Avishkar AI Logo"
        />
        <div className="text-white text-3xl font-medium">Avishkar AI</div>
      </div>
      <nav className="flex gap-[22px] text-base text-white font-normal whitespace-nowrap leading-loose flex-wrap mt-10 max-md:max-w-full">
        <button onClick={() => scrollToSection('ai-agents')} className="p-4 hover:opacity-80 transition-opacity">AI Agents</button>
        <button onClick={() => scrollToSection('voice-os')} className="self-stretch gap-2.5 p-4 hover:opacity-80 transition-opacity">Voice OS</button>
        <button onClick={() => scrollToSection('integrations')} className="self-stretch gap-2.5 p-4 hover:opacity-80 transition-opacity">Integrations</button>
        <button onClick={() => scrollToSection('pricing')} className="self-stretch gap-2.5 p-4 hover:opacity-80 transition-opacity">Pricing</button>
        <button onClick={() => scrollToSection('faq')} className="self-stretch gap-2.5 p-4 hover:opacity-80 transition-opacity">FAQ</button>
      </nav>
      
      {/* Social Media Icons with LinkedIn */}
      <div className="flex items-center gap-4 mt-[30px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/76ba181240597b9efe08272f0ed49f5c7f3fe0d7?placeholderIfAbsent=true"
          className="aspect-[3.65] object-contain w-[164px] max-w-full"
          alt="Social media icons"
        />
        <a
          href="https://linkedin.com/company/avishkar-ai"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[rgba(255,255,255,0.1)] p-3 rounded-full hover:bg-[rgba(255,255,255,0.2)] transition-colors"
        >
          <Linkedin className="w-6 h-6 text-white" />
        </a>
      </div>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/e20f6521ec416524de9ee5c3a7818aa3156f236c?placeholderIfAbsent=true"
        className="aspect-[1000] object-contain w-full max-w-[1240px] mt-[75px] max-md:max-w-full max-md:mt-10"
        alt="Footer divider"
      />
      <div className="flex w-full max-w-[1240px] items-center gap-[40px_100px] text-base text-white font-normal leading-loose justify-between flex-wrap mt-[29px] max-md:max-w-full">
        <div className="self-stretch my-auto">
          Copyright 2025 | All rights reserved
        </div>
        <div className="self-stretch my-auto">
          Terms & Condition | Privacy Policy
        </div>
      </div>
    </footer>
  );
};

export default Footer;

