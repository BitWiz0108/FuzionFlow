import { useRouter } from "next/router";

import Layout from "@/components/Layout";
import TypewriterEffect from "@/components/TypeWriter";
import ButtonOutline from "@/components/ButtonOutline";
import Phone from "@/components/Icons/Phone";
import PricingPlan from "@/components/PricingPlan";
import TestimonialCarousel from "@/components/Testimonial";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <Layout>
      <div className="w-full">
        <div className="h-screen w-full flex items-center justify-center text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl px-2">
          <div className="w-full text-center font-[900] leading-[1]">
            Our solutions will harness the power of artificial intelligence  and automation to increase productivity, increase sales and enhance customer
            satisfaction for your business.
          </div>
        </div>

        <div className="h-[90vh] w-11/12 md:w-9/12 lg:w-8/12 xl:w-11/12 mx-auto my-16">
          <video
            preload="auto"
            loop
            muted
            autoPlay
            playsInline
            disablePictureInPicture
            className="w-full h-full object-fit filter"
            src={"/assets/video/landing.mp4"}
          />
        </div>

        <div className="h-screen flex flex-col items-center justify-center px-4 lg:px-16 lg:gap-y-16">
          <div className="w-full text-center font-[900] text-4xl xs:text-5xl sm:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl leading-[0.9] px-2 sm:px-5 xl:px-10 2xl:px-12 pb-12">
            Generative AI Chatbots
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-center">
                Customized Solutions
              </div>
              <p className="text-center text-xl lg:text-2xl">
                Engaging chatbots tailored for your customers and employees
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-center">
                Advanced Training
              </div>
              <p className="text-center text-xl lg:text-2xl">
                State-of-the-art AI models for continuous chatbot evolution
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-center">
                Integration Expertise
              </div>
              <p className="text-center text-xl lg:text-2xl">
                Effortless chatbot integration into existing systems
              </p>
            </div>
          </div>
          <div>
            <ButtonOutline
              label="Book A Call"
              icon={<Phone width={20} height={20} />}
              onClick={() => {}}
            />
          </div>
        </div>

        <div className="h-screen flex flex-col items-center justify-center px-4 lg:px-16 lg:gap-y-16">
          <div className="w-full text-center font-[900] text-4xl xs:text-5xl sm:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl leading-[0.9] px-2 sm:px-5 xl:px-10 2xl:px-12 pb-12">
            Robotic Process Automation (RPA)
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-center">
                Process Optimization
              </div>
              <p className="text-center text-xl lg:text-2xl">
                Boost efficiency by automating repetitive tasks
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-center">
                End-to-End Implementation
              </div>
              <p className="text-center text-xl lg:text-2xl">
                Comprehensive services from business analysis to bot deployment
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-center">
                Maintenance & Support
              </div>
              <p className="text-center text-xl lg:text-2xl">
                Ensuring smooth operations and adaptability
              </p>
            </div>
          </div>
          <div>
            <ButtonOutline
              label="Book A Call"
              icon={<Phone width={20} height={20} />}
              onClick={() => {}}
            />
          </div>
        </div>

        <div className="h-screen flex flex-col items-center justify-center px-4 lg:px-16 lg:gap-y-16">
          <div className="w-full text-center font-[900] text-4xl xs:text-5xl sm:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl leading-[0.9] px-2 sm:px-5 xl:px-10 2xl:px-12 pb-12">
            Audit Services for SMBs
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center pb-16">
            <div className="w-full">
              <div className="text-xl md:text-2xl font-normal text-center">
                Dive deep into the world of artificial intelligence with our specialized audit
                services. Our experts assess your chatbot&rsquo;s efficiency,
                training, and integration, ensuring they&rsquo;re tailored perfectly
                for your audience. On the RPA front, we pinpoint process
                inefficiencies, evaluate implementation strategies, and ensure
                smooth bot operations. From chatbot responsiveness to robotic
                task automation, we&rsquo;re here to optimize, implement, and support
                your tech endeavors, driving efficiency and adaptability in your
                business.
              </div>
            </div>
          </div>
          <div>
            <ButtonOutline
              label="Book A Call"
              icon={<Phone width={20} height={20} />}
              onClick={() => {}}
            />
          </div>
        </div>

        <div className="lg:h-screen flex flex-col items-center justify-center px-4 lg:px-16 lg:gap-y-16">
          <div className="w-full text-center font-[900] text-4xl xs:text-5xl sm:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl leading-[0.9] px-2 sm:px-5 xl:px-10 2xl:px-12 pb-12">
            Promo Packages
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <PricingPlan
              type="Essential Bot Boost"
              webCount={1}
              appCount={1}
              autoCount="1"
              content="Documentation and videos"
              pricing="750"
              description="Document and videos"
              deliverTime={5}
              originalPricing={1500}
            />
            <PricingPlan
              type="Pro Bot Powerhouse"
              webCount={1}
              appCount={2}
              autoCount="1-3"
              content="Free funnel template"
              pricing="1500"
              description="Free funnel template"
              deliverTime={15}
              originalPricing={3000}
            />
            <PricingPlan
              type="Elite Bot Powerhouse"
              webCount={2}
              appCount={3}
              autoCount="1-8"
              content="Fully automated funnel setup"
              pricing="2500"
              description="Fully automated funnel setup"
              deliverTime={30}
              originalPricing={5000}
            />
          </div>
        </div>

        <div className="h-screen flex flex-col items-center justify-center px-4 lg:px-16 lg:gap-y-16">
          <div className="w-full text-center font-[900] text-4xl xs:text-5xl sm:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl leading-[0.9] px-2 sm:px-5 xl:px-10 2xl:px-12 pb-12">
            Our 3 step process
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-center">
                Discover
              </div>
              <p className="text-center text-xl lg:text-2xl">
                We initiate by understanding your unique business needs. Our
                team collaborates with you to conceptualize the ideal artificial intelligence and
                robotic automation solution tailored for your operations.
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-center">
                Design
              </div>
              <p className="text-center text-xl lg:text-2xl">
                Leveraging our expertise, we design a robust and scalable
                solution. Every detail is meticulously planned to ensure
                seamless integration with your existing systems.
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-center">
                Deliver
              </div>
              <p className="text-center text-xl lg:text-2xl">
                Once designed, we deploy the solution, ensuring it aligns
                perfectly with your business objectives. Our support team is
                always on standby to assist with any questions or adjustments.
              </p>
            </div>
          </div>
          <div>
            <ButtonOutline
              label="Book A Call"
              icon={<Phone width={20} height={20} />}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
