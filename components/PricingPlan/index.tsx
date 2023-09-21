import Automation from "@/components/Icons/Automation";
import BackPack from "@/components/Icons/Backpack";
import Message from "@/components/Icons/Message";
import Robot from "@/components/Icons/Robot";

type Props = {
  type: string;
  description: string;
  webCount: number;
  appCount: number;
  autoCount: string;
  content: string;
  fullDescription?: string;
  deliverTime: number;
  originalPricing: number;
  pricing: string;
};

const PricingPlan = ({
  type,
  description,
  appCount,
  webCount,
  autoCount,
  content,
  fullDescription,
  deliverTime,
  originalPricing,
  pricing,
}: Props) => {
  return (
    <div className="flex flex-col items-center bg-white text-black rounded-lg shadow-xl py-8 px-4 lg:px-8 m-4 max-w-md transition-all transform hover:bg-blue-700 hover:text-white hover:scale-105 duration-300">
      <div className="text-3xl font-extrabold mb-4">{type}</div>
      <div className="text-xl font-semibold mb-2">Chatbot Setup</div>
      <p className="text-gray-500 mb-4 text-center">{description}</p>
      <div className="line-through text-gray-400 text-xl mb-2">${originalPricing}</div>
      <div className="text-4xl font-bold mb-4">${pricing}</div>
      
      <ul className="mb-4 text-left space-y-3 w-full">
        <li className="flex items-center gap-x-3">
          <Robot width={24} height={24} className="text-blue-700" />
          <span>AI Integration with {webCount} website or app</span>
        </li>
        <li className="flex items-center gap-x-3">
          <Message width={24} height={24} className="text-blue-700" />
          <span>{appCount} Messaging app</span>
        </li>
        <li className="flex items-center gap-x-3">
          <Automation width={24} height={24} className="text-blue-700" />
          <span>{autoCount} Zapier process automation</span>
        </li>
        <li className="flex items-center gap-x-3">
          <BackPack width={24} height={24} className="text-blue-700" />
          <span>{content}</span>
        </li>
      </ul>
      
      <div className="text-md mb-4 font-medium">Delivery Time: {deliverTime} days</div>
      <button className="bg-blue-700 text-green py-2 px-6 rounded-lg text-lg border-2 border-blue-700 hover:bg-white hover:text-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Subscribe Now
      </button>
    </div>
  );
};

export default PricingPlan;
