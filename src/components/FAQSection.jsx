import React, { useState } from "react";

const faqs = [
  { question: "Who is Intake for?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam." },
  { question: "Will it help my snoring?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam." },
  { question: "Why Nasal Breathing?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam." },
  { question: "Why magnets?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam." },
  { question: "How Intake helps", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam." },
  { question: "How Long It Take To Work?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam." },
  { question: "How it works", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam." },
  { question: "What about for workouts?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam." },
  { question: "What's the cost difference?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam." }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Common Questions</h2>

        {/* FAQ Grid */}
      <div className="grid md:grid-cols-2 gap-6" style={{ gridAutoFlow: "dense" }}>
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`bg-white border border-[#DADDE3] rounded-lg shadow-md transition-all duration-300 ${openIndex === index ? "row-span-2" : ""}`}
          >
            <button 
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left p-4 text-lg font-semibold"
            >
              {faq.question}
              <span className="text-xl">{openIndex === index ? "➖" : "➕"}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 border-t border-dotted border-[#DADDE3]">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
