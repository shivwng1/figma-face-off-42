
import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mt-[19px]">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-6/12 max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col items-center text-center justify-center my-auto max-md:mt-10">
            
            {/* Main headline - largest text */}
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mt-4 max-md:text-3xl max-md:leading-tight">
              3X Your BPO Capacity While Cutting Costs 40%
            </h1>
            
            {/* Secondary headline */}
            <h2 className="text-[rgba(247,247,247,1)] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight mt-6 max-md:text-lg max-md:leading-tight">
              Scale Your BPO The Smart Way:{" "}
              <span className="font-medium">AI Agents + Human Intelligence</span>
            </h2>
            
            {/* Description */}
            <p className="text-[rgba(206,206,207,1)] text-sm sm:text-base md:text-lg font-light leading-6 md:leading-7 mt-6 max-w-4xl max-md:text-sm max-md:leading-6">
              Deploy specialized AI agents across voice, chat, and WhatsApp. White-label ready. Enterprise-grade. Built for Indian BPOs.
            </p>
            
            {/* Hero Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-6 text-[rgba(206,206,207,1)] text-xs sm:text-sm md:text-base max-w-2xl w-full">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="text-green-400">✓</span>
                Specialized AI Agents
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="text-green-400">✓</span>
                Multi-Channel Deployment
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="text-green-400">✓</span>
                White-Label Ready
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="text-green-400">✓</span>
                21-Day Implementation
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="text-green-400">✓</span>
                CRM Integration
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="text-green-400">✓</span>
                99.9% Uptime SLA
              </div>
            </div>

            <button className="bg-white flex min-h-[50px] md:min-h-[57px] items-center gap-4 md:gap-[25px] capitalize leading-loose justify-center mt-6 md:mt-8 px-6 md:pl-[25px] md:pr-[9px] py-2 md:py-[9px] rounded-[55px] hover:opacity-90 transition-opacity text-sm md:text-base">
              <div className="bg-clip-text bg-[linear-gradient(45deg,#0B0C0D_0%,#1C1E21_100%)] font-medium">
                Talk to us
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" className="md:w-4 md:h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0 max-md:mt-8">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/b5d424ac7631220a96ee98f3b273bd7d854084ee?placeholderIfAbsent=true"
            className="aspect-[0.97] object-contain w-full grow max-md:max-w-full max-md:h-auto"
            alt="Hero illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
