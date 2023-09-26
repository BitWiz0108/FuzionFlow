import { useRouter } from "next/router";

import Layout from "@/components/Layout";
import FAQ from "@/components/FAQ";
import AboutFaq from "@/components/AboutFaq";
import WaveText from "@/components/WaveText";

export default function Home() {
  return (
    <Layout>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="h-screen w-full 2xl:w-4/5 flex items-center justify-center text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl px-2">
          <div className="w-full text-center font-[900] leading-[1]">
            Every triumph has a tale behind it. Over the years, we've been
            privileged to be a part of countless success stories from small to
            mid-sized businesses. Their journeys have intertwined with ours, and
            now, we're eager to unveil our own story to you.
          </div>
        </div>

        <div className="h-fit flex flex-col items-center justify-center px-4 lg:px-16 lg:gap-y-16">
          <div className="w-full text-center font-[900] text-4xl xs:text-5xl sm:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl leading-[0.9] px-2 sm:px-5 xl:px-10 2xl:px-12 pb-12">
            Our Story
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="w-full 2xl:w-4/5 px-4 mb-8">
              <p className="text-center text-xl lg:text-2xl 2xl:text-3xl xl:leading-10">
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
                customer demand, and inconsistent leads. Pivoting its business
                model, the company transitioned to a digital automation
                consulting firm. Unlike the competition, Fuzion Flow took a
                laser-focused approach by specializing exclusively in digital
                automation solutions. From conceptualization to post-deployment
                support, their aim became singular: championing the success of
                small to mid-sized businesses. In the fluid landscape of today
                and tomorrow, Fuzion Flow Digital Automation Company stands as a
                beacon, illuminating the path of innovation, adaptability, and
                unparalleled service.
              </p>
            </div>
          </div>
        </div>

        <div className="h-screen flex flex-col items-center justify-center px-4 lg:px-16 lg:gap-y-16">
          <div className="w-full text-center font-[900] text-4xl xs:text-5xl sm:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-[0.9] px-2 sm:px-5 xl:px-10 2xl:px-12 pb-12">
            Our Mission
          </div>
          <div className="w-full 2xl:w-4/5 text-center leading-[1.5] px-2 sm:px-5 xl:px-10 2xl:px-12">
            <p className="text-center text-xl lg:text-3xl 2xl:text-4xl xl:leading-10">
              Fuzion Flow Digital Automation Company specializes in empowering
              small to mid-sized businesses with tailored digital automation
              solutions. Our track record, highlighted by significant savings
              and productivity boosts for clients, drives our forward-thinking
              vision. we remain committed to leading businesses into a future of
              unmatched innovation and service.
            </p>
          </div>
        </div>
        <div className="h-screen flex flex-col items-center justify-center px-4 lg:px-16 lg:gap-y-16">
          <div className="w-full text-center font-[900] text-4xl xs:text-5xl sm:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-[0.9] px-2 sm:px-5 xl:px-10 2xl:px-12 pb-12">
            Our Vision
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="w-full 2xl:w-4/5 px-4 mb-8">
              <p className="text-center text-xl lg:text-3xl 2xl:text-4xl xl:leading-10">
                In a world where adaptability is paramount, Fuzion Flow stands
                as a beacon of innovation and unparalleled service. We are not
                just another automation company; we are the champions of small
                to mid-sized businesses, dedicated to their success through our
                specialized digital automation solutions. From the seed of an
                idea to post-deployment, our commitment is unwavering.
              </p>
            </div>
          </div>
        </div>

        <div className="h-fit flex flex-col items-center justify-center px-4 lg:px-16 gap-y-12 lg:gap-y-24">
          <WaveText label="Why Choose Fuzion Flow?" />
          <div className="w-full">
            <p className="text-center text-xl lg:text-3xl 2xl:text-4xl xl:leading-10">
              At Fuzion Flow Digital Automation Company, we're not just about
              automation; we're about transformation. Here's why we stand out:
            </p>
          </div>

          <div className="w-4/5 sm:w-full h-fit p-2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 mb-10 gap-y-12 ">
            <div className="h-144 w-full flex-col items-center justify-center">
              <p className="w-full h-12 text-center text-2xl">
                Tailored Solutions for Your Business
              </p>
              <video
                preload="auto"
                loop
                muted
                autoPlay
                playsInline
                disablePictureInPicture
                className="w-full h-full object-fit filter"
                src={"assets/video/1.mp4"}
              />
            </div>
            <div className="h-144 w-full flex-col items-center justify-center">
              <p className="w-full h-12 text-center text-2xl">
                Proven Track Record
              </p>
              <video
                preload="auto"
                loop
                muted
                autoPlay
                playsInline
                disablePictureInPicture
                className="w-full h-full object-fit filter"
                src={"assets/video/2.mp4"}
              />
            </div>
            <div className="h-144 w-full flex-col items-center justify-center">
              <p className="w-full h-12 text-center text-2xl">
                Forward-Thinking Vision
              </p>
              <video
                preload="auto"
                loop
                muted
                autoPlay
                playsInline
                disablePictureInPicture
                className="w-full h-full object-fit filter"
                src={"assets/video/3.mp4"}
              />
            </div>
            <div className="h-144 w-full flex-col items-center justify-center">
              <p className="w-full h-12 text-center text-2xl">
                More Than Just Automation
              </p>
              <video
                preload="auto"
                loop
                muted
                autoPlay
                playsInline
                disablePictureInPicture
                className="w-full h-full object-fit filter"
                src={"assets/video/4.mp4"}
              />
            </div>
          </div>
          <div className="h-[90vh] w-full flex items-center justify-center py-16 px-6">
            <video
              preload="auto"
              loop
              muted
              autoPlay
              playsInline
              disablePictureInPicture
              className="w-full h-full object-fit filter"
              src={"assets/video/aboutlanding.mp4"}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
