import React from 'react';

const Hero = () => {
  return (
    <section className="ml-4 mt-[19px] max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-6/12 max-md:w-full max-md:ml-0">
          <div className="flex mr-[-118px] w-full flex-col self-stretch items-stretch text-base font-normal justify-center my-auto max-md:max-w-full max-md:mt-10">
            <div className="flex items-center gap-2.5 text-white uppercase leading-[1.3]">
              <div className="self-stretch bg-[rgba(255,255,255,0.02)] border min-h-[47px] gap-[18px] my-auto px-[19px] py-[13px] rounded-[130px] border-[rgba(255,255,255,0.1)] border-solid">
                Start Building
              </div>
              <div className="self-stretch bg-[rgba(255,255,255,0.02)] border min-h-[47px] gap-[18px] whitespace-nowrap my-auto px-[19px] py-[13px] rounded-[130px] border-[rgba(255,255,255,0.1)] border-solid">
                Docs
              </div>
            </div>
            <h1 className="text-[rgba(247,247,247,1)] text-[75px] leading-[85px] mt-[30px] max-md:max-w-full max-md:text-[40px] max-md:leading-[50px]">
              Realtime voice, video, &{" "}
              <span className="font-medium">AI at global scale</span>
            </h1>
            <p className="text-[rgba(206,206,207,1)] text-lg font-light leading-7 mt-[30px] max-md:max-w-full">
              Build ultra low latency conversations. Global WebRTC
              infrastructure and enterprise reliability since 2016. Daily
              is the team behind Pipecat, the 100% open source framework
              for conversational AI.
            </p>
            <button className="bg-white flex min-h-[57px] items-center gap-[25px] capitalize leading-loose justify-center mt-[30px] pl-[25px] pr-[9px] py-[9px] rounded-[55px] max-md:pl-5 hover:opacity-90 transition-opacity">
              <div className="bg-clip-text bg-[linear-gradient(45deg,#0B0C0D_0%,#1C1E21_100%)] self-stretch my-auto">
                Talk to us
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/9413e0a6c2a4bc763190a27dec2cae6d282fa969?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-10 self-stretch min-h-10 shrink-0 my-auto"
                alt="Arrow"
              />
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
