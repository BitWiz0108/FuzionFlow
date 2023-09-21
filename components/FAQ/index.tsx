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
    title: "What is generative AI?",
    content:
      "Generative AI refers to a subset of artificial intelligence that focuses on creating new content, whether it's text, images, music, or other forms of data. It's designed to produce outputs that are novel and not just replicate existing patterns. At Fuzion Flow, we utilize advanced generative AI techniques to offer innovative solutions for businesses.",
  },
  {
    title:
      "How does robotic process automation (RPA) differ from traditional automation?",
    content:
      "RPA is a technology that uses software robots or `bots` to automate repetitive tasks that were previously performed by humans. Unlike traditional automation which requires coding and integration, RPA bots mimic human actions and can be easily configured to work with existing software applications without the need for extensive programming.",
  },
  {
    title: "How can generative AI benefit my business?",
    content:
      "Generative AI can help businesses in content creation, design, product development, and more. It can generate new ideas, optimize existing processes, and provide personalized solutions for customers, leading to increased efficiency and innovation.",
  },
  {
    title: "Is RPA suitable for all business processes?",
    content:
      "While RPA is versatile, it's most effective for tasks that are repetitive, rule-based, and have a clear structure. Processes that require complex decision-making or human judgment might not be ideal candidates for RPA. Our team at Fuzion Flow can help assess which processes in your business are best suited for automation.",
  },
  {
    title: "How secure is your AI and RPA technology?",
    content:
      "At Fuzion Flow, we prioritize security. Our AI and RPA solutions are built with the latest security protocols to ensure data integrity and confidentiality. We also offer regular security audits and updates to keep your business data safe.",
  },
  {
    title: "What industries can benefit from your AI and RPA solutions?",
    content:
      "Our solutions cater to a wide range of industries, including finance, healthcare, retail, manufacturing, and more. Any industry with repetitive tasks or a need for innovative content generation can benefit from our services.",
  },
  {
    title: "How long does it take to implement RPA in my business?",
    content:
      "The implementation time can vary based on the complexity of the processes being automated and the specific needs of your business. Typically, simpler processes can be automated within weeks, while more complex ones might take a few months.",
  },
  {
    title: "Will RPA replace human jobs in my company?",
    content:
      "RPA is designed to handle repetitive tasks, allowing human employees to focus on more value-added activities. While it can reduce the need for certain roles, it often leads to the creation of new, more strategic positions. Our goal is to enhance productivity, not replace human talent.",
  },
  {
    title: "How do I know if my business is ready for AI and RPA?",
    content:
      "If your business has repetitive tasks, a desire to innovate, or a need to optimize processes, it's likely ready for AI and RPA. Our team at Fuzion Flow offers consultations to assess your business's readiness and guide you through the implementation process.",
  },
  {
    title: "What kind of support does Fuzion Flow offer post-implementation?",
    content:
      "We provide ongoing support to ensure the smooth functioning of our AI and RPA solutions. This includes regular updates, troubleshooting, training sessions, and 24/7 customer support to address any concerns or queries.",
  },
  {
    title: "What is a generative AI chatbot?",
    content:
      "A generative AI chatbot is a type of chatbot that uses advanced artificial intelligence to generate responses in real-time, rather than relying on pre-defined scripts. This allows the chatbot to provide more natural and contextually relevant interactions with users.",
  },
  {
    title: "How can a generative AI chatbot benefit my customer service?",
    content:
      "Generative AI chatbots can handle a wide range of customer queries 24/7, reducing wait times and improving customer satisfaction. Their ability to understand context and provide tailored responses can enhance the customer experience, making interactions more personalized and efficient.",
  },
  {
    title: "Can generative AI chatbots be used for internal employee support?",
    content:
      "Absolutely! Generative AI chatbots can be deployed internally to assist employees with common queries, IT support, HR-related questions, and more. This can streamline internal processes and free up human resources for more complex tasks.",
  },
  {
    title: "How do generative AI chatbots differ from traditional chatbots?",
    content:
      "Traditional chatbots typically rely on decision trees or scripted pathways. In contrast, generative AI chatbots can create responses on the fly, allowing for more dynamic and adaptable conversations that aren't limited to predefined scripts.",
  },
  {
    title: "Are generative AI chatbots able to understand multiple languages?",
    content:
      "Yes, many generative AI chatbots are equipped with multilingual capabilities, allowing them to interact with users in various languages and offer translations when necessary.",
  },
  {
    title: "How do I train a generative AI chatbot for my business?",
    content:
      "Training involves feeding the chatbot with relevant data, including historical customer interactions, FAQs, and other domain-specific information. Over time, with continuous feedback and adjustments, the chatbot becomes more proficient in addressing user queries specific to your business.",
  },
  {
    title:
      "What if the chatbot provides incorrect information to a customer or employee?",
    content:
      "While generative AI chatbots are advanced, they're not infallible. It's essential to have a feedback mechanism in place for users to report inaccuracies. Regular monitoring and training can help in refining the chatbot's responses over time.",
  },
  {
    title:
      "Can I integrate a generative AI chatbot with my existing CRM or ERP system?",
    content:
      "Yes, most generative AI chatbots can be integrated with existing systems, allowing for seamless data exchange and more informed interactions with users based on real-time data.",
  },
  {
    title:
      "How secure are generative AI chatbots? Will my customer data be safe?",
    content:
      "At Fuzion Flow, we prioritize data security. Our generative AI chatbots are designed with robust encryption and security protocols to ensure data privacy. Regular security audits and updates further ensure the safety of customer and business data.",
  },
  {
    title: "How can I measure the effectiveness of a generative AI chatbot?",
    content:
      "Effectiveness can be measured using various metrics, including user satisfaction scores, resolution rates, reduction in human intervention, and feedback received. Regular analysis of these metrics can provide insights into the chatbot's performance and areas of improvement.",
  },
  {
    title: "How are your services priced?",
    content:
      "Our pricing is based on the complexity and scope of the project. We offer both package-based pricing for standard solutions and customized quotes for bespoke projects. Please reach out to our sales team for a detailed quote tailored to your needs.",
  },
  {
    title:
      "What is the typical timeline for implementing one of your solutions?",
    content:
      "The timeline varies based on the specific service and the complexity of your requirements. On average, standard implementations can take anywhere from a few weeks to a couple of months. For a more accurate estimate, our project managers will assess your needs and provide a detailed timeline.",
  },
  {
    title: "Do you offer any discounts or promotions?",
    content:
      "Yes, we occasionally offer promotions for new clients or for specific services. We also provide discounts for long-term contracts and bulk purchases. Stay tuned to our website or subscribe to our newsletter for the latest offers.",
  },
  {
    title: "What is your refund policy?",
    content:
      "We strive for customer satisfaction. If you're not satisfied with our services, we offer a 30-day refund policy from the date of purchase, with certain terms and conditions applied. Please refer to our terms of service for detailed information.",
  },
  {
    title: "Can I upgrade or downgrade my service package after purchase?",
    content:
      "Absolutely! We understand that business needs can change. You can upgrade or downgrade your service package. If you choose to upgrade, you'll only pay the difference. For downgrades, the difference will be credited to your account for future services.",
  },
  {
    title: "Are there any hidden fees or additional costs?",
    content:
      "Transparency is crucial to us. All potential costs will be outlined in our initial quote. Any additional services or features requested after the start of the project may incur additional charges, but these will always be communicated and approved by you beforehand.",
  },
  {
    title: "How do you handle project delays or unforeseen challenges?",
    content:
      "While we always aim to stick to our timelines, unforeseen challenges can arise. In such cases, our project managers will communicate any delays promptly and work diligently to get things back on track. We prioritize open communication and will always keep you informed.",
  },
  {
    title: "Do you offer post-implementation support and maintenance?",
    content:
      "Yes, we offer various post-implementation support packages, ranging from basic support to 24/7 premium support. Maintenance, updates, and regular check-ins are part of our commitment to ensuring our solutions continue to serve your business effectively.",
  },
  {
    title: "Can I get a trial or demo before purchasing a service?",
    content:
      "Certainly! We offer demos for most of our services, and in some cases, trial periods are available. Please contact our sales team to schedule a demo or inquire about trial options.",
  },
  {
    title:
      "How do I get in touch if I have issues or concerns after purchasing a service?",
    content:
      "Our dedicated customer support team is available to assist you with any issues or concerns. You can reach out to us via email, phone, or through our website's support portal. We aim to address all queries promptly and efficiently.",
  },
];

const FAQ: React.FC = ({}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="">
      <div className="container max-w-4xl px-6 py-10 mx-auto">
        <div className="w-full text-center font-[900] text-4xl xs:text-5xl sm:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl leading-[0.9] px-2 sm:px-5 xl:px-10 2xl:px-12 pb-12 text-white">
          FAQs
        </div>
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
      </div>
    </section>
  );
};

export default FAQ;
