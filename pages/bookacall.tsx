import { useRouter } from "next/router";

import BookButton from "@/components/BookButton";
import Phone from "@/components/Icons/Phone";
import Layout from "@/components/Layout";

export default function Home() {
  const router = useRouter();
  const goToLink = (link: string) => {
    router.push(link);
  };

  return (
    <Layout>
      <div>
        <div className="h-screen flex flex-col items-center justify-center px-4 lg:px-16 lg:gap-y-16">
          <div className="w-full text-center font-[900] text-4xl xs:text-5xl sm:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl leading-[0.9] px-2 sm:px-5 xl:px-10 2xl:px-12 pb-12">
            Discover the Future of Automation with Fuzion Flow
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center pb-16">
            <div className="w-full">
              <p className="text-2xl md:text-4xl 2xl:text-4xl leading-[1.5] text-center">
                In today&rsquo;s rapidly evolving digital landscape, staying ahead is
                not just an option—it&rsquo;s a necessity. At Fuzion Flow Digital
                Automation Solutions, we&rsquo;re pioneering the next wave of
                generative AI and robotic process automation solutions designed
                to transform your business operations and drive unparalleled
                efficiency.
              </p>
            </div>
          </div>
        </div>

        <div className="h-screen flex flex-col items-center justify-center px-4 lg:px-16 lg:gap-y-16">
          <div className="w-full text-center font-[900] text-4xl xs:text-5xl sm:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl leading-[0.9] px-2 sm:px-5 xl:px-10 2xl:px-12 pb-12">
            🌟 Take the Leap into Tomorrow
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center pb-16">
            <div className="w-full">
              <div className="text-xl md:text-2xl 2xl:text-4xl font-normal text-center">
                Don&rsquo;t get left behind in the digital race. Experience the power
                of generative AI and robotic process automation with Fuzion
                Flow. Let&rsquo;s co-create the future, one automated process at a
                time.
              </div>
            </div>
          </div>
        </div>

        <div className="h-screen flex flex-col items-center justify-center px-4 lg:px-16 lg:gap-y-16">
          <div className="w-full text-center font-[900] text-4xl xs:text-5xl sm:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl leading-[0.9] px-2 sm:px-5 xl:px-10 2xl:px-12 pb-12">
            👉 Book Your Demo Now 👈
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center pb-16">
            <div className="w-full">
              <div className="text-xl md:text-2xl 2xl:text-4xl font-normal text-center">
                Unlock the untapped potential in your business. Let Fuzion Flow
                guide the way.
              </div>
            </div>
          </div>
          <div>
            <BookButton
              label="Book A Call"
              icon={<Phone width={20} height={20} />}
              onClick={() => {
                goToLink(
                  "https://tq4wkz9bk7u.typeform.com/to/tAxOAGgo?typeform-source=www.google.com"
                );
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
