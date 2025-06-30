import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer?: string;
  icon: string;
}

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const faqItems: FAQItem[] = [
    {
      question: "Q: How quickly can we go live?",
      answer: "A: Full deployment in 21 days with our guided implementation. We handle integration, training, and optimization so you can focus on your business.",
      icon: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/ec629d02d68cd2784cf9d67bbbbe2d736e835580?placeholderIfAbsent=true"
    },
    {
      question: "Q: Will this disrupt our current operations?",
      icon: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/08bb481f9721f41fa0a2e5e74e6c25ca5022bcf0?placeholderIfAbsent=true"
    },
    {
      question: "Q: What if our team isn't technical?",
      icon: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/e5330a0557d5038c782f8f7624f67da490231b9c?placeholderIfAbsent=true"
    },
    {
      question: "Q: How do you ensure call quality?",
      icon: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/38bc87fc8c9d2bd9c894644f136d64ddf6d2ae8e?placeholderIfAbsent=true"
    },
    {
      question: "Q: Can we white-label this for clients?",
      icon: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/6ad2874588a464283dc42630b0b3266ec5b89664?placeholderIfAbsent=true"
    },
    {
      question: "Q: What about data security and compliance?",
      icon: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/23f3e3383898433cb230fd38b05c68361d14336a?placeholderIfAbsent=true"
    },
    {
      question: "Q: How does pricing work as we scale?",
      icon: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/47f939700b4d3553333c40bd5a4e9c4ca1abf75b?placeholderIfAbsent=true"
    },
    {
      question: "Q: What integrations do you support?",
      icon: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/6f153722f760a6ce099cb249d711b1bfaa760ec5?placeholderIfAbsent=true"
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section className="relative flex w-full max-w-[1056px] flex-col items-center mt-[130px] max-md:max-w-full max-md:mt-10">
      <div className="flex w-full flex-col items-center text-center">
        <h2 className="text-white text-[65px] font-normal leading-none tracking-[-1.3px] max-md:max-w-full max-md:text-[40px]">
          Frequently Asked Questions.
        </h2>
        <p className="text-[rgba(206,206,207,1)] text-lg font-light leading-7 mt-[30px] max-md:max-w-full">
          Got questions about building with Daily? We've gathered the most
          common ones to help you get started faster. From integration to
          pricing and compliance, find the answers you need right here.
        </p>
      </div>
      <div className="w-[860px] max-w-full mt-[50px] max-md:mt-10">
        {faqItems.map((item, index) => (
          <div key={index} className="mt-5 first:mt-0">
            {expandedIndex === index && item.answer ? (
              <div className="bg-[rgba(255,255,255,0.02)] border flex w-full flex-col justify-center pt-2 pb-[15px] px-2 rounded-[20px] border-[rgba(255,255,255,0.1)] border-solid max-md:max-w-full">
                <button
                  onClick={() => toggleExpanded(index)}
                  className="flex items-center gap-[40px_63px] text-2xl text-[rgba(240,240,240,1)] font-normal leading-none flex-wrap max-md:max-w-full w-full text-left"
                >
                  <div className="self-stretch w-[716px] my-auto max-md:max-w-full">
                    {item.question}
                  </div>
                  <img
                    src={item.icon}
                    className="aspect-[1] object-contain w-[45px] self-stretch shrink-0 my-auto rounded-[100px]"
                    alt="Expand/Collapse"
                  />
                </button>
                <div className="text-[rgba(206,206,207,1)] text-lg font-light leading-7 mt-2.5 max-md:max-w-full">
                  {item.answer}
                </div>
              </div>
            ) : (
              <button
                onClick={() => toggleExpanded(index)}
                className="bg-[rgba(255,255,255,0.02)] border flex min-h-[60px] w-full flex-col text-2xl text-[rgba(240,240,240,1)] font-normal leading-none justify-center p-2 rounded-[130px] border-[rgba(255,255,255,0.1)] border-solid max-md:max-w-full hover:opacity-80 transition-opacity"
              >
                <div className="flex items-center gap-[40px_63px] flex-wrap max-md:max-w-full">
                  <div className="self-stretch w-[716px] my-auto max-md:max-w-full text-left">
                    {item.question}
                  </div>
                  <img
                    src={item.icon}
                    className="aspect-[1] object-contain w-[45px] self-stretch shrink-0 my-auto rounded-[100px]"
                    alt="Expand/Collapse"
                  />
                </div>
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
