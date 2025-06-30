
import React from 'react';

const Header = () => {
  return (
    <header className="relative flex w-full flex-col items-stretch pl-20 max-md:max-w-full max-md:pl-5">
      <nav className="bg-[rgba(255,255,255,0.02)] border self-center flex min-h-[90px] w-full max-w-[1273px] flex-col justify-center p-[17px] rounded-[130px] border-[rgba(255,255,255,0.1)] border-solid max-md:max-w-full">
        <div className="flex w-full max-w-[1220px] items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
          <div className="self-stretch flex min-w-60 items-center gap-[15px] my-auto">
            <img
              src="/lovable-uploads/d8ef68e3-b2a4-4110-91f1-2272d58e4004.png"
              className="w-[59px] h-[57px] object-contain"
              alt="Avishkar AI Logo"
            />
            <div className="text-white text-2xl font-medium">Avishkar AI</div>
          </div>
          <div className="self-stretch flex min-w-60 gap-[22px] text-base text-white font-normal whitespace-nowrap leading-loose flex-wrap my-auto max-md:max-w-full">
            <div className="p-4">Platform</div>
            <div className="self-stretch gap-2.5 p-4">Docs</div>
            <div className="self-stretch gap-2.5 p-4">Customers</div>
            <div className="self-stretch gap-2.5 p-4">Pricing</div>
            <div className="self-stretch gap-2.5 p-4">More</div>
          </div>
          <button className="bg-white self-stretch flex min-h-[57px] items-center gap-[25px] text-base font-normal capitalize leading-loose justify-center my-auto pl-[25px] pr-2 py-[9px] rounded-[55px] max-md:pl-5 hover:opacity-90 transition-opacity">
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
      </nav>
    </header>
  );
};

export default Header;
