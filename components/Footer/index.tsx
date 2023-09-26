import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import FaceBook from "../Icons/Facebook";
import YouTube from "../Icons/YouTube";
import Instagram from "../Icons/Instagram";
import Twitter from "../Icons/Twitter";
import Linkedin from "../Icons/Linkedin";

function Footer() {
  const router = useRouter();

  const goToLink = (link: string) => {
    router.push(link);
  };
  return (
    <div className="py-8 mt-12">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Footer Links */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 text-white">
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/termsofuse"
                className=" text-white hover:text-blue-500 transition duration-300"
              >
                Terms of Use
              </Link>
            </li>
            <li>
              <Link
                href="/privacypolicy"
                className=" text-white hover:text-blue-500 transition duration-300"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/solutions"
                className=" text-white hover:text-blue-500 transition duration-300"
              >
                Solutions
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className=" text-white hover:text-blue-500 transition duration-300"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* More Links */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 text-white">
          <h2 className="text-lg font-semibold mb-4">About Us</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="aboutus"
                className=" text-white hover:text-blue-500 transition duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="bookacall"
                className=" text-white hover:text-blue-500 transition duration-300"
              >
                Book a Call
              </Link>
            </li>
            <li>
              <Link
                href="/events"
                className=" text-white hover:text-blue-500 transition duration-300"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className=" text-white hover:text-blue-500 transition duration-300"
              >
                FAQ
              </Link>
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
      <div className="flex items-center justify-center space-x-4 my-5">
        <div className="flex gap-x-8">
          <FaceBook className="text-white hover:text-blue-500 transition duration-300 cursor-pointer" />
          <YouTube className="text-white hover:text-blue-500 transition duration-300 cursor-pointer" />
          <Instagram className="text-white hover:text-blue-500 transition duration-300 cursor-pointer" />
          <Twitter className="text-white hover:text-blue-500 transition duration-300 cursor-pointer" />
          <Linkedin className="text-white hover:text-blue-500 transition duration-300 cursor-pointer" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-center text-white">
        <p>&copy; 2023 FuzionFlow. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
