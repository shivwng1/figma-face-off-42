import React from 'react';

const RealTimeOS = () => {
  const features = [
    {
      title: "Real-Time Video & Audio SDKs",
      description: "One API to build, launch, and scale video, audio, and voice AI applications — from customer support to collaboration. Everything you need, in one powerful platform."
    },
    {
      title: "Customizable UI & Layouts"
    },
    {
      title: "AI-Ready Infrastructure"
    },
    {
      title: "Global Media Routing"
    },
    {
      title: "Multilingual Voice & Video Agents"
    }
  ];

  return (
    <section className="relative flex items-center gap-[30px] flex-wrap mt-[130px] max-md:max-w-full max-md:mt-10">
      <div className="self-stretch flex min-w-60 min-h-[770px] flex-col items-stretch justify-between w-[610px] my-auto max-md:max-w-full">
        <h2 className="text-white text-[65px] font-normal leading-[75px] tracking-[-1.3px] max-md:max-w-full max-md:text-[40px] max-md:leading-[51px]">
          Complete Real-Time OS for Global Teams
        </h2>
        <p className="text-[rgba(206,206,207,1)] text-lg font-light leading-7 mt-[34px] max-md:max-w-full">
          One API to build, launch, and scale video, audio, and voice AI
          applications — from customer support to collaboration. Everything
          you need, in one powerful platform.
        </p>
        <div className="w-full mt-[34px] max-md:max-w-full">
          <div className="w-full max-md:max-w-full">
            {features.map((feature, index) => (
              <div key={index}>
                <h3 className="text-[rgba(240,240,240,1)] text-[26px] font-medium leading-none max-md:max-w-full">
                  {feature.title}
                </h3>
                {feature.description && (
                  <p className="text-[rgba(206,206,207,1)] text-lg font-light leading-7 mt-2.5 max-md:max-w-full">
                    {feature.description}
                  </p>
                )}
                {index < features.length - 1 && (
                  <div className="border min-h-px w-full mt-5 border-[rgba(255,255,255,0.5)] border-solid max-md:max-w-full" />
                )}
              </div>
            ))}
          </div>
        </div>
        <button className="bg-white flex min-h-[57px] items-center gap-[25px] text-base font-normal capitalize leading-loose justify-center mt-[34px] pl-[25px] pr-[9px] py-[9px] rounded-[55px] max-md:pl-5 hover:opacity-90 transition-opacity">
          <div className="bg-clip-text bg-[linear-gradient(45deg,#0B0C0D_0%,#1C1E21_100%)] self-stretch my-auto">
            contact today
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/9413e0a6c2a4bc763190a27dec2cae6d282fa969?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-10 self-stretch min-h-10 shrink-0 my-auto"
            alt="Arrow"
          />
        </button>
      </div>
      <div className="self-stretch flex min-w-60 flex-col justify-center my-auto max-md:max-w-full">
        <button className="bg-white flex min-h-[57px] items-center gap-[25px] text-base font-normal capitalize leading-loose pl-[25px] pr-2 py-[9px] rounded-[55px] max-md:pl-5 hover:opacity-90 transition-opacity">
          <div className="bg-clip-text bg-[linear-gradient(45deg,#0B0C0D_0%,#1C1E21_100%)] self-stretch my-auto">
            contact today
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/9413e0a6c2a4bc763190a27dec2cae6d282fa969?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-10 self-stretch min-h-10 shrink-0 my-auto"
            alt="Arrow"
          />
        </button>
        <div className="rotate-[1.570796370506285rad] bg-[rgba(255,255,255,0.02)] border flex max-w-full w-[600px] flex-col overflow-hidden items-stretch justify-center mt-[30px] px-[57px] py-[120px] rounded-[50px] border-[rgba(255,255,255,0.1)] border-solid max-md:px-5 max-md:py-[100px]">
          <div className="flex flex-col relative min-h-[443px] -mb-6 pt-[21px] pb-[368px] px-2 max-md:max-w-full max-md:mb-2.5 max-md:pr-5 max-md:pb-[100px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/525a9eabf9664d2d118296dfcecc63b08d724bec?placeholderIfAbsent=true"
              className="absolute h-full w-full object-cover inset-0"
              alt="Real-time OS illustration"
            />
            <div className="relative bg-[rgba(91,13,213,1)] flex mb-[-74px] w-[54px] shrink-0 h-[54px] rounded-[10px] max-md:mb-2.5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealTimeOS;
