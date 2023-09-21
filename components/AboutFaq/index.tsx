import { useState } from "react";
import Plus from "../Icons/Plus";
import Minus from "../Icons/Minus";

type Question = {
  title: string;
  content: string;
};

type FAQProps = {
  questions: Question[];
};

const questionsText = [
  {
    title: "Why Choose Fuzion Flow?",
    content:
      "At Fuzion Flow Digital Automation Company, we're not just about automation; we're about transformation. Here's why we stand out:",
  },
  {
    title: "Tailored Solutions for Your Business",
    content:
      "We specialize in empowering small to mid-sized businesses. Our digital automation solutions are tailored to your unique needs, ensuring that you get the best fit for your operations.",
  },
  {
    title: "Proven Track Record",
    content:
      "Our success stories speak for themselves. With significant savings and productivity boosts for our clients, our results-driven approach ensures that you get the maximum benefit from our services.",
  },
  {
    title: "Forward-Thinking Vision",
    content:
      "We're not just keeping up with the digital world; we're shaping it. Our forward-thinking vision is all about leading businesses into a future filled with unmatched innovation and service.",
  },
  {
    title: "More Than Just Automation",
    content:
      "In today's rapidly changing world, adaptability is key. Fuzion Flow is not just another automation company. We are the champions of small to mid-sized businesses, guiding them from the initial idea phase to post-deployment with unwavering commitment.",
  },
  {
    title: "Unparalleled Service",
    content:
      "Our dedication to your success is unmatched. We stand as a beacon of innovation, ensuring that your business thrives in an ever-evolving digital landscape.",
  },
];

const AboutFaq: React.FC = ({}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-gray-900">
      <div className="container max-w-4xl px-6 py-10 mx-auto">
        <div className="mt-12 space-y-8">
          {questionsText.map((question, index) => (
            <div
              key={index}
              className="border-2 border-blue-400 rounded-lg transition-shadow hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(index === openIndex ? null : index)}
                className="flex items-center justify-between w-full p-8 transition-colors hover:bg-blue-400 text-white"
              >
                <div className="text-xl font-semibold">{question.title}</div>
                <span className="text-white bg-blue-600 rounded-full p-1">
                  {index === openIndex ? <Minus /> : <Plus />}
                </span>
              </button>
              {index === openIndex && (
                <>
                  <hr className="border-blue-400" />
                  <p className="p-8 text-lg text-blue-200">
                    {question.content}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="w-full text-center text-4xl px-2 sm:px-5 xl:px-10 2xl:px-12 pb-12 text-white pt-16">
          Choose Fuzion Flow, and let's shape the future together
        </div>
      </div>
    </section>
  );
};

export default AboutFaq;
