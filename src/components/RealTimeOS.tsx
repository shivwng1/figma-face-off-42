
import React, { useState } from 'react';

const RealTimeOS = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Telephony via SIP Trunking",
      description: "Connect to providers like RingCentral, NICE, and others using elastic SIP. Flexible, carrier-agnostic setup for fast deployment.",
      image: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/525a9eabf9664d2d118296dfcecc63b08d724bec?placeholderIfAbsent=true"
    },
    {
      title: "Custom Actions",
      description: "Voice agents can send SMS, track orders, and create tickets — automating tasks so your team can focus on what matters.",
      image: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/fbf12fae90ed6cba55bba555e16bf2fe6f1a6b76?placeholderIfAbsent=true"
    },
    {
      title: "Custom Workflows",
      description: "Automate full call flows with actions like booking, transfers, and escalation — all fully configurable to match your logic.",
      image: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/90dde32f73505cec78c6ac3634a3d2d912695788?placeholderIfAbsent=true"
    },
    {
      title: "No-Code Flow Designer",
      description: "Visually build conversations and logic-based flows without writing a single line of code. No dev team required.",
      image: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/50c30923087ed6be993e7caa3d29188550e6ec7f?placeholderIfAbsent=true"
    },
    {
      title: "Ready-Made AI Agent Templates",
      description: "Choose from prebuilt agents for sales, support, and scheduling. Launch fast and start seeing results right away.",
      image: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/2e76ff5f87d02eca20167c0719250cb1fa3af40c?placeholderIfAbsent=true"
    },
    {
      title: "Multilingual Agents",
      description: "Deploy voice agents in 15+ languages. Manage global conversations without duplicating flows or content.",
      image: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/d8cec3d1bdb805b099a4c37f673bf6f19389e9f9?placeholderIfAbsent=true"
    }
  ];

  return (
    <section id="voice-os" className="relative flex items-center gap-[30px] flex-wrap mt-[130px] max-md:max-w-full max-md:mt-10">
      <div className="self-stretch flex min-w-60 min-h-[770px] flex-col items-stretch justify-between w-[610px] my-auto max-md:max-w-full">
        <h2 className="text-white text-[65px] font-normal leading-[75px] tracking-[-1.3px] max-md:max-w-full max-md:text-[40px] max-md:leading-[51px]">
          Complete AI Voice OS for Enterprise Teams
        </h2>
        <p className="text-[rgba(206,206,207,1)] text-lg font-light leading-7 mt-[34px] max-md:max-w-full">
          One platform to automate, manage, and scale every phone conversation — from routing to resolution. Everything you need to build, launch, and run voice AI agents in one unified tool.
        </p>
        <div className="w-full mt-[34px] max-md:max-w-full">
          <div className="w-full max-md:max-w-full">
            {features.map((feature, index) => (
              <div key={index} className="mb-5 last:mb-0">
                <button
                  onClick={() => setActiveFeature(index)}
                  className={`w-full text-left transition-all duration-300 ${
                    activeFeature === index ? 'opacity-100' : 'opacity-60 hover:opacity-80'
                  }`}
                >
                  <h3 className="text-[rgba(240,240,240,1)] text-[26px] font-medium leading-none max-md:max-w-full mb-2">
                    {feature.title}
                  </h3>
                  {activeFeature === index && (
                    <p className="text-[rgba(206,206,207,1)] text-lg font-light leading-7 max-md:max-w-full">
                      {feature.description}
                    </p>
                  )}
                </button>
                {index < features.length - 1 && (
                  <div className="border min-h-px w-full mt-5 border-[rgba(255,255,255,0.2)] border-solid max-md:max-w-full" />
                )}
              </div>
            ))}
          </div>
        </div>
        <button className="bg-white flex min-h-[57px] items-center gap-[25px] text-base font-normal capitalize leading-loose justify-center mt-[34px] pl-[25px] pr-[9px] py-[9px] rounded-[55px] max-md:pl-5 hover:opacity-90 transition-opacity">
          <div className="bg-clip-text bg-[linear-gradient(45deg,#0B0C0D_0%,#1C1E21_100%)] self-stretch my-auto">
            contact today
          </div>
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>
      </div>
      <div className="self-stretch flex min-w-60 flex-col justify-center my-auto max-md:max-w-full">
        <div className="bg-[rgba(255,255,255,0.02)] border flex max-w-full w-[600px] flex-col overflow-hidden items-stretch justify-center px-[57px] py-[120px] rounded-[50px] border-[rgba(255,255,255,0.1)] border-solid max-md:px-5 max-md:py-[100px]">
          <div className="flex flex-col relative min-h-[443px] -mb-6 pt-[21px] pb-[368px] px-2 max-md:max-w-full max-md:mb-2.5 max-md:pr-5 max-md:pb-[100px]">
            <img
              src={features[activeFeature].image}
              className="absolute h-full w-full object-cover inset-0 rounded-[40px] transition-all duration-500"
              alt="Voice OS illustration"
            />
            <div className="relative bg-[rgba(91,13,213,1)] flex mb-[-74px] w-[54px] shrink-0 h-[54px] rounded-[10px] max-md:mb-2.5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealTimeOS;

