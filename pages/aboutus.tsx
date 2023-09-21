import { useRouter } from "next/router";

import Layout from "@/components/Layout";
import TypewriterEffect from "@/components/TypeWriter";
import ButtonOutline from "@/components/ButtonOutline";
import Phone from "@/components/Icons/Phone";
import PricingPlan from "@/components/PricingPlan";
import TestimonialCarousel from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import AboutFaq from "@/components/AboutFaq";

export default function Home() {
  return (
    <Layout>
      <div>
        <div className="h-screen flex items-center justify-center text-3xl xs:text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl mx-auto">
          <div className="w-full text-center font-[900] leading-[1] px-2 sm:px-5 xl:px-10 2xl:px-12">
            Our solutions will harness the power of AI and automation to
            increase productivity, increase sales and enhance customer
            satisfaction for your business.
          </div>
        </div>

        <div className="h-screen flex flex-col items-center justify-center px-4 lg:px-16 lg:gap-y-16">
          <div className="w-full text-center font-[900] text-4xl xs:text-5xl sm:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl leading-[0.9] px-2 sm:px-5 xl:px-10 2xl:px-12 pb-12">
            Our Story
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="w-full px-4 mb-8">
              <p className="text-center text-xl lg:text-2xl">
                Incorporated in 2020 in Riverside, California, Fuzion Flow
                Digital Automation Company (formerly ThinQ Business
                Transformation Agency) was initially established with a vision
                to provide a spectrum of services to aid businesses in their
                growth trajectory, spanning from project management to marketing
                and sales strategy, down to business processes optimization. But
                as with many ventures, adaptability became the key to longevity.
                The pandemic became a revelation for Fuzion Flow. It exposed the
                fragile infrastructures of businesses across the spectrum,
                revealing glaring weaknesses especially among small to mid-sized
                enterprises. With a majority lacking the digital infrastructure
                to pivot effectively, these businesses grappled with an array of
                challenges, from compromised customer satisfaction, potential
                employee burnout, to plunging sales. Notably, the prevalent pain
                points encompassed a lack of automation, an inability to match
                customer demand, and inconsistent leads. It was in this crucible
                of challenges that Fuzion Flow discerned its real purpose.
                Pivoting its business model, the company transitioned to a
                digital automation consulting firm. Unlike the competition,
                Fuzion Flow took a laser-focused approach by specializing
                exclusively in digital automation solutions. From
                conceptualization to post-deployment support, their aim became
                singular: championing the success of small to mid-sized
                businesses. One poignant testament to their efficacy was the
                transformation they brought about for a copywriting agency. By
                merely implementing an internal knowledge bot, the agency saved
                around $25,000 annually in research time, ramped up their
                productivity by a staggering 25%, and provided an added value of
                approximately $12,500 per employee. As Fuzion Flow marches into
                the future, its blueprint is clear. Alongside adding to its
                robust suite of services, the firm is primed to unveil
                groundbreaking products, one of which is a generative AI 2-way
                voice chatbot aimed at amplifying both external and internal
                chatbot interactions. Furthermore, the company will champion the
                pioneering concept of `Automation as a Service,` revolutionizing
                how businesses approach and implement automation. In the fluid
                landscape of today and tomorrow, Fuzion Flow Digital Automation
                Company stands as a beacon, illuminating the path of innovation,
                adaptability, and unparalleled service.
              </p>
            </div>
          </div>
        </div>

        <div className="h-screen flex items-center justify-center text-2xl xs:text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl mx-5 lg:mx-32">
          <div className="w-full text-center font-[750] leading-[1.5] px-2 sm:px-5 xl:px-10 2xl:px-12">
            Fuzion Flow Digital Automation Company specializes in empowering
            small to mid-sized businesses with tailored digital automation
            solutions. Our track record, highlighted by significant savings and
            productivity boosts for clients, drives our forward-thinking vision.
            we remain committed to leading businesses into a future of unmatched
            innovation and service.
          </div>
        </div>
        <div className="h-screen flex items-center justify-center text-2xl xs:text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl mx-5 lg:mx-32">
          <div className="w-full text-center font-[750] leading-[1.5] px-2 sm:px-5 xl:px-10 2xl:px-12">
            In a world where adaptability is paramount, Fuzion Flow stands as a
            beacon of innovation and unparalleled service. We are not just
            another automation company; we are the champions of small to
            mid-sized businesses, dedicated to their success through our
            specialized digital automation solutions. From the seed of an idea
            to post-deployment, our commitment is unwavering.
          </div>
        </div>

        <AboutFaq />
        <FAQ />
      </div>
    </Layout>
  );
}
