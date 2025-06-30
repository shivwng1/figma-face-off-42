import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-[rgba(255,255,255,0.02)] border self-stretch flex w-full flex-col items-center mt-[129px] pt-[76px] pb-[30px] px-20 border-[rgba(255,255,255,0.1)] border-solid max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="flex items-center gap-5">
        <div className="self-stretch flex w-[79px] shrink-0 h-[76px] my-auto" />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/40aadd5b30c7a5b460e9d8e41a3b777b0ee60013?placeholderIfAbsent=true"
          className="aspect-[7.75] object-contain w-[249px] self-stretch min-w-60 my-auto"
          alt="Daily Logo"
        />
      </div>
      <nav className="flex gap-[22px] text-base text-white font-normal whitespace-nowrap leading-loose flex-wrap mt-10 max-md:max-w-full">
        <div className="p-4">Platform</div>
        <div className="self-stretch gap-2.5 p-4">Docs</div>
        <div className="self-stretch gap-2.5 p-4">Customers</div>
        <div className="self-stretch gap-2.5 p-4">Pricing</div>
        <div className="self-stretch gap-2.5 p-4">More</div>
      </nav>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/76ba181240597b9efe08272f0ed49f5c7f3fe0d7?placeholderIfAbsent=true"
        className="aspect-[3.65] object-contain w-[164px] max-w-full mt-[30px]"
        alt="Social media icons"
      />
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
