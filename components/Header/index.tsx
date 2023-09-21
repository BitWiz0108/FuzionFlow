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
      } z-10 justify-between items-center gap-6 px-1 py-4 bg-[#1D2CF3] text-white`}
    >
      <div className="px-5">
        <h3 className="text-xl font-extrabold">FusionFlow</h3>
      </div>

      <div className="flex hidden md:flex">
        <div className="px-4 py-2 text-lg font-extrabold cursor-pointer" onClick={() =>{goToLink("/")}}>
          HOME
        </div>
        <div className="px-4 py-2 text-lg font-extrabold cursor-pointer" onClick={() =>{goToLink("/solutions")}}>
          Solutions
        </div>
        <div className="px-4 py-2 text-lg font-extrabold cursor-pointer" onClick={() =>{goToLink("/aboutus")}}>
          About US
        </div>
        <div className="px-4 py-2 text-lg font-extrabold cursor-pointer" onClick={() =>{goToLink("/blog")}}>
          Blog
        </div>
        <div className="px-4 py-2 text-lg font-extrabold cursor-pointer" onClick={() =>{goToLink("/bookacall")}}>
          Book a Call
        </div>
        <div className="px-4 py-2 text-lg font-extrabold cursor-pointer" onClick={() =>{goToLink("/events")}}>
          Events
        </div>
      </div>

      <button
        className="md:hidden focus:outline-none pr-8 text-2xl"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        ☰
      </button>

      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center md:hidden">
          <div
            className=" bg-transparent filter text-white p-8 rounded"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="mb-4 px-4 py-2 text-lg font-extrabold cursor-pointer">
              HOME
            </div>
            <div className="mb-4 px-4 py-2 text-lg font-extrabold cursor-pointer">
              Solutions
            </div>
            <div className="mb-4 px-4 py-2 text-lg font-extrabold cursor-pointer">
              About US
            </div>
            <div className="mb-4 px-4 py-2 text-lg font-extrabold cursor-pointer">
              Blog
            </div>
            <div className="mb-4 px-4 py-2 text-lg font-extrabold cursor-pointer">
              Book a call
            </div>
            <div className="mb-4 px-4 py-2 text-lg font-extrabold cursor-pointer">
              Events
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
