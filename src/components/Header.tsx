import React from 'react';

const Header = () => {
  return (
    <header className="relative flex w-full flex-col items-stretch pl-20 max-md:max-w-full max-md:pl-5">
      <nav className="bg-[rgba(255,255,255,0.02)] border self-center flex min-h-[90px] w-full max-w-[1273px] flex-col justify-center p-[17px] rounded-[130px] border-[rgba(255,255,255,0.1)] border-solid max-md:max-w-full">
        <div className="flex w-full max-w-[1220px] items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
          <div className="self-stretch flex min-w-60 items-center gap-[15px] my-auto">
            <div className="self-stretch flex w-[59px] shrink-0 h-[57px] my-auto" />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/6ce38532e69e9e0b71a35d96d216f690f1024a2c?placeholderIfAbsent=true"
              className="aspect-[7.81] object-contain w-[187px] self-stretch shrink-0 my-auto"
              alt="Daily Logo"
            />
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
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/9413e0a6c2a4bc763190a27dec2cae6d282fa969?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-10 self-stretch min-h-10 shrink-0 my-auto"
              alt="Arrow"
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
