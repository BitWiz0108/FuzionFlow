import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  const [isSticky, setIsSticky] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToLink = (link: string) => {
    router.push(link);
  };

  return (
    <div
      className={`flex ${
        isSticky ? "sticky top-0" : ""
      } z-10 justify-between items-center gap-4 px-1 py-4 bg-[#1D2CF3] text-white`}
    >
      <div className="px-5 text-md lg:text-lg">
        <h3 className="text-xl font-extrabold">FusionFlow</h3>
      </div>

      <div className="hidden lg:flex">
        <div
          className="px-4 py-2 text-md lg:text-lg font-extrabold cursor-pointer"
          onClick={() => {
            goToLink("/");
          }}
        >
          HOME
        </div>
        <div
          className="px-4 py-2 text-md lg:text-lg font-extrabold cursor-pointer"
          onClick={() => {
            goToLink("/solutions");
          }}
        >
          Solutions
        </div>
        <div
          className="px-4 py-2 text-md lg:text-lg hidden lg:flex font-extrabold cursor-pointer"
          onClick={() => {
            goToLink("/aboutus");
          }}
        >
          About US
        </div>
        <div
          className="px-4 py-2 text-md lg:text-lg flex lg:hidden font-extrabold cursor-pointer"
          onClick={() => {
            goToLink("/aboutus");
          }}
        >
          About
        </div>
        <div
          className="px-4 py-2 text-md lg:text-lg font-extrabold cursor-pointer"
          onClick={() => {
            goToLink("/blog");
          }}
        >
          Blog
        </div>
        <div
          className="px-4 py-2 text-md lg:text-lg flex lg:hidden font-extrabold cursor-pointer"
          onClick={() => {
            goToLink("/bookacall");
          }}
        >
          Book
        </div>
        <div
          className="px-4 py-2 text-md lg:text-lg hidden lg:flex font-extrabold cursor-pointer"
          onClick={() => {
            goToLink("/bookacall");
          }}
        >
          Book a Call
        </div>
        <div
          className="px-4 py-2 text-md lg:text-lg font-extrabold cursor-pointer"
          onClick={() => {
            goToLink("/events");
          }}
        >
          Events
        </div>
        <div
          className="px-4 py-2 text-md lg:text-lg font-extrabold cursor-pointer"
          onClick={() => {
            goToLink("/faq");
          }}
        >
          FAQ
        </div>
      </div>

      <button
        className="lg:hidden focus:outline-none pr-8 text-2xl"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        ☰
      </button>

      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center lg:hidden">
          <div
            className=" bg-transparent filter text-white p-8 rounded"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div
              className="mb-4 px-4 py-2 text-md lg:text-lg font-extrabold cursor-pointer"
              onClick={() => {
                goToLink("/");
              }}
            >
              HOME
            </div>
            <div
              className="mb-4 px-4 py-2 text-md lg:text-lg font-extrabold cursor-pointer"
              onClick={() => {
                goToLink("/solutions");
              }}
            >
              Solutions
            </div>
            <div
              className="mb-4 px-4 py-2 text-md lg:text-lg font-extrabold cursor-pointer"
              onClick={() => {
                goToLink("/aboutus");
              }}
            >
              About US
            </div>
            <div
              className="mb-4 px-4 py-2 text-md lg:text-lg font-extrabold cursor-pointer"
              onClick={() => {
                goToLink("/blog");
              }}
            >
              Blog
            </div>
            <div
              className="mb-4 px-4 py-2 text-md lg:text-lg font-extrabold cursor-pointer"
              onClick={() => {
                goToLink("/bookacall");
              }}
            >
              Book a call
            </div>
            <div
              className="mb-4 px-4 py-2 text-md lg:text-lg font-extrabold cursor-pointer"
              onClick={() => {
                goToLink("/events");
              }}
            >
              Events
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
