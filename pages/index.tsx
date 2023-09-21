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
      <div>
        <div className="h-screen flex items-center justify-center text-4xl xs:text-5xl sm:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl mx-auto">
          <div className="w-full text-center font-[900] leading-[0.9] px-2 sm:px-5 xl:px-10 2xl:px-12">
            We are AI and Automation Solutions company committed to empowering
            businesses and solving their problems.
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

        <TypewriterEffect
          text="We provide solutions that push boundaries, not buttons"
          speed={100}
        />

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
        </div>

        <div className="h-screen flex flex-col items-center justify-center px-4 lg:px-16 lg:gap-y-16">
          <div className="w-full text-center font-[900] text-4xl xs:text-5xl sm:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl leading-[0.9] px-2 sm:px-5 xl:px-10 2xl:px-12 pb-12">
            Audit Services for SMBs
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center pb-16">
            <div className="w-full">
              <div className="text-xl md:text-2xl font-normal text-center">
                Dive deep into the world of AI with our specialized audit
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
              pricing="500"
              description="Document and videos"
              deliverTime={5}
              originalPricing={1000}
            />
            <PricingPlan
              type="Pro Bot Powerhouse"
              webCount={1}
              appCount={2}
              autoCount="1-3"
              content="Free funnel template"
              pricing="1250"
              description="Free funnel template"
              deliverTime={15}
              originalPricing={2500}
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
            Happy Customers
          </div>
          <TestimonialCarousel />
        </div>

        <FAQ />

        
      </div>
    </Layout>
  );
}
