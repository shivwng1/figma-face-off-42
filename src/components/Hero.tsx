
import React from 'react';

const Hero = () => {
  return (
    <section className="ml-4 mt-[19px] max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-6/12 max-md:w-full max-md:ml-0">
          <div className="flex mr-[-118px] w-full flex-col self-stretch items-center text-center justify-center my-auto max-md:max-w-full max-md:mt-10 max-md:items-center">
            <div className="flex items-center justify-center gap-2.5 text-white uppercase leading-[1.3]">
              <div className="bg-[rgba(255,255,255,0.02)] border min-h-[47px] gap-[18px] px-[19px] py-[13px] rounded-[130px] border-[rgba(255,255,255,0.1)] border-solid text-sm">
                3X Your BPO Capacity While Cutting Costs 40%
              </div>
            </div>
            <h1 className="text-[rgba(247,247,247,1)] text-[75px] leading-[85px] mt-[30px] max-md:max-w-full max-md:text-[40px] max-md:leading-[50px]">
              Scale Your BPO The Smart Way:{" "}
              <span className="font-medium">AI Agents + Human Intelligence</span>
            </h1>
            <p className="text-[rgba(206,206,207,1)] text-lg font-light leading-7 mt-[30px] max-md:max-w-full">
              Deploy specialized AI agents across voice, chat, and WhatsApp. White-label ready. Enterprise-grade. Built for Indian BPOs.
            </p>
            
            {/* Hero Features Grid */}
            <div className="grid grid-cols-2 gap-4 mt-[30px] text-[rgba(206,206,207,1)] text-sm max-md:grid-cols-1">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Specialized AI Agents
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Multi-Channel Deployment
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                White-Label Ready
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                21-Day Implementation
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                CRM Integration
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                99.9% Uptime SLA
              </div>
            </div>

            <button className="bg-white flex min-h-[57px] items-center gap-[25px] capitalize leading-loose justify-center mt-[30px] pl-[25px] pr-[9px] py-[9px] rounded-[55px] max-md:pl-5 hover:opacity-90 transition-opacity">
              <div className="bg-clip-text bg-[linear-gradient(45deg,#0B0C0D_0%,#1C1E21_100%)] self-stretch my-auto">
                Talk to us
              </div>
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/b5d424ac7631220a96ee98f3b273bd7d854084ee?placeholderIfAbsent=true"
            className="aspect-[0.97] object-contain w-full grow max-md:max-w-full"
            alt="Hero illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

