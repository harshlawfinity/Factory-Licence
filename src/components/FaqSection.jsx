import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Is a factory license required for small-scale manufacturing units?",
    answer: "Yes, if the unit employs 10 or more workers with power or 20 or more without power.",
  },
  {
    question: "Can I operate my factory while the application is pending?",
    answer: "No, you must receive the license before commencing manufacturing operations.",
  },
  {
    question: "What is the validity of a factory license?",
    answer: "Typically valid for 1 year; some states offer up to 5 years with renewal options.",
  },
  {
    question: "Is the process online or offline?",
    answer: "Most states, including Delhi, Haryana and UP, offer online applications and processing.",
  },
  {
    question: "Who issues the Factory License in Delhi?",
    answer: "The Labour Department, Government of NCT of Delhi.",
  },
  {
    question: "Is physical inspection mandatory?",
    answer: "Yes, the concerned authority inspects the premises before issuing the license.",
  },
  {
    question: "Can Lawfinity help with inspections and renewals?",
    answer: "Yes, we offer end-to-end support including pre-inspection readiness and timely renewal services.",
  },
  {
    question: "Are fire and pollution NOCs mandatory?",
    answer: "Yes, especially for medium to large factories or those involved in chemical or hazardous production.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (  
    <section className="bg-gradient-to-b from-[#f9f9ff] to-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[#000000] mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow transition-all duration-300 ease-in-out"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left px-6 py-5 sm:py-3 font-medium text-gray-800 hover:text-[#7A3EF2] focus:outline-none"
              >
                <span className="text-base">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-[#7A3EF2]" />
                ) : (
                  <ChevronDown className="text-gray-400" />
                )}
              </button>

              <div
                className={`overflow-hidden px-6 transition-all duration-300 text-gray-600 text-base ${
                  openIndex === index ? 'max-h-96 pb-2' : 'max-h-0'
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
