
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  icon: string;
}

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const faqItems: FAQItem[] = [
    {
      question: "Q: How quickly can we go live?",
      answer: "A: Full deployment in 21 days with our guided implementation. We handle integration, training, and optimization so you can focus on your business. Our dedicated onboarding team works with you step-by-step to ensure a smooth transition.",
      icon: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/ec629d02d68cd2784cf9d67bbbbe2d736e835580?placeholderIfAbsent=true"
    },
    {
      question: "Q: Will this disrupt our current operations?",
      answer: "A: Not at all. Our implementation is designed for zero downtime. We run parallel systems during transition and provide comprehensive training to your team. Most clients see improved efficiency within the first week of deployment.",
      icon: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/08bb481f9721f41fa0a2e5e74e6c25ca5022bcf0?placeholderIfAbsent=true"
    },
    {
      question: "Q: What if our team isn't technical?",
      answer: "A: No technical expertise required! Our platform is designed for business users with intuitive interfaces and comprehensive training. We provide 24/7 support and dedicated account management to ensure your success.",
      icon: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/e5330a0557d5038c782f8f7624f67da490231b9c?placeholderIfAbsent=true"
    },
    {
      question: "Q: How do you ensure call quality?",
      answer: "A: We maintain 99.9% uptime with global infrastructure, intelligent routing, and real-time quality monitoring. Our AI continuously optimizes call quality based on network conditions and provides automatic failover protection.",
      icon: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/38bc87fc8c9d2bd9c894644f136d64ddf6d2ae8e?placeholderIfAbsent=true"
    },
    {
      question: "Q: Can we white-label this for clients?",
      answer: "A: Absolutely! Our platform supports full white-labeling with custom branding, domain mapping, and co-branded solutions. You can present this as your own service while we handle the backend infrastructure.",
      icon: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/6ad2874588a464283dc42630b0b3266ec5b89664?placeholderIfAbsent=true"
    },
    {
      question: "Q: What about data security and compliance?",
      answer: "A: We're SOC 2 Type II certified, GDPR compliant, and HIPAA ready. All data is encrypted in transit and at rest. We provide detailed audit trails and work with your compliance team to meet industry-specific requirements.",
      icon: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/23f3e3383898433cb230fd38b05c68361d14336a?placeholderIfAbsent=true"
    },
    {
      question: "Q: How does pricing work as we scale?",
      answer: "A: Our pricing scales with your business. Start with our base plan and only pay for what you use. Volume discounts kick in automatically, and enterprise plans include dedicated support and custom SLAs.",
      icon: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/47f939700b4d3553333c40bd5a4e9c4ca1abf75b?placeholderIfAbsent=true"
    },
    {
      question: "Q: What integrations do you support?",
      answer: "A: We integrate with 200+ platforms including Salesforce, HubSpot, Slack, Microsoft Teams, and all major CRMs. Our API-first approach means we can connect to virtually any system your business uses.",
      icon: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/6f153722f760a6ce099cb249d711b1bfaa760ec5?placeholderIfAbsent=true"
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section className="relative flex w-full max-w-[1056px] flex-col items-center mt-[130px] px-4 max-md:max-w-full max-md:mt-10">
      <div className="flex w-full flex-col items-center text-center mb-12">
        <h2 className="text-white text-[65px] font-normal leading-none tracking-[-1.3px] max-md:max-w-full max-md:text-[40px]">
          Frequently Asked Questions.
        </h2>
        <p className="text-[rgba(206,206,207,1)] text-lg font-light leading-7 mt-[30px] max-w-[800px] max-md:max-w-full">
          Got questions about building with Avishkar AI? We've gathered the most
          common ones to help you get started faster. From integration to
          pricing and compliance, find the answers you need right here.
        </p>
      </div>
      <div className="w-full max-w-[860px]">
        {faqItems.map((item, index) => (
          <div key={index} className="mb-4 first:mb-0">
            {expandedIndex === index ? (
              <div className="bg-[rgba(255,255,255,0.02)] border flex w-full flex-col justify-center p-6 rounded-[20px] border-[rgba(255,255,255,0.1)] border-solid max-md:max-w-full">
                <button
                  onClick={() => toggleExpanded(index)}
                  className="flex items-center justify-between text-2xl text-[rgba(240,240,240,1)] font-normal leading-tight w-full text-left mb-4"
                >
                  <div className="flex-1 pr-4">
                    {item.question}
                  </div>
                  <img
                    src={item.icon}
                    className="w-[45px] h-[45px] object-contain rounded-full flex-shrink-0"
                    alt="Collapse"
                  />
                </button>
                <div className="text-[rgba(206,206,207,1)] text-lg font-light leading-7">
                  {item.answer}
                </div>
              </div>
            ) : (
              <button
                onClick={() => toggleExpanded(index)}
                className="bg-[rgba(255,255,255,0.02)] border flex min-h-[70px] w-full items-center text-2xl text-[rgba(240,240,240,1)] font-normal leading-tight justify-between p-6 rounded-[130px] border-[rgba(255,255,255,0.1)] border-solid max-md:max-w-full hover:opacity-80 transition-opacity"
              >
                <div className="flex-1 text-left pr-4">
                  {item.question}
                </div>
                <img
                  src={item.icon}
                  className="w-[45px] h-[45px] object-contain rounded-full flex-shrink-0"
                  alt="Expand"
                />
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
