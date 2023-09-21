import React from "react";
import { useRouter } from "next/router";

function Footer() {
  const router = useRouter();

  const goToLink = (link: string) => {
    router.push(link);
  };
  return (
    <div className="py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Footer Links */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 text-white">
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="/termsofuse"
                className=" text-white hover:text-blue-500 transition duration-300"
              >
                Terms of Use
              </a>
            </li>
            <li>
              <a
                href="/privacypolicy"
                className=" text-white hover:text-blue-500 transition duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/solutions"
                className=" text-white hover:text-blue-500 transition duration-300"
              >
                Solutions
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className=" text-white hover:text-blue-500 transition duration-300"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* More Links */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 text-white">
          <h2 className="text-lg font-semibold mb-4">About Us</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="aboutus"
                className=" text-white hover:text-blue-500 transition duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="bookacall"
                className=" text-white hover:text-blue-500 transition duration-300"
              >
                Book a Call
              </a>
            </li>
            <li>
              <a
                href="/events"
                className=" text-white hover:text-blue-500 transition duration-300"
              >
                Events
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 text-white">
          <h2 className="text-lg font-semibold mb-4">Contact Info</h2>
          <address className="space-y-2">
            <p className=" text-white hover:text-blue-500 transition duration-300 cursor-pointer">
              FuzionFlow
            </p>
            <p className=" text-white hover:text-blue-500 transition duration-300 cursor-pointer">
              Phone: (678) 679-9972
            </p>
          </address>
        </div>
      </div>
      {/* Divider */}
      <hr className="border-t border-gray-700 my-4" />

      {/* Copyright */}
      <div className="text-center text-white">
        <p>&copy; 2023 FuzionFlow. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
