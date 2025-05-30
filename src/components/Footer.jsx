import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Images } from "@/data/images";
import { footerData, socialData } from "@/data/footerData";

export default function Footer() {
  return (
    <footer className="bg-dark-teal-blue text-white pt-6 pb-4 rounded-t-lg">
      <div className="container mx-auto px-4">
        <div className=" ">
          {/* Left Column: Logo, Title, Contact */}
          <div className="">
            <a href="#">
              <Image
                src={Images.footerLogo}
                alt="Health Compass Logo"
                width={321}
                height={74}
                className="mb-2"
              />
            </a>
          </div>

          {/* Right Column: Terms, Privacy, Social */}
          <div className="flex justify-between mt-14">
            <div className="text-sm text-alabaster font-normal">
              contact@gohealthcompass.com
            </div>
            <div className="flex flex-row gap-4 mb-1 justify-end">
              <Link
                target="_blank"
                href="/term-of-use"
                className="text-sm text-alabaster font-normal"
              >
                Terms of Use
              </Link>
              <Link
                target="_blank"
                href="/privacy-policy"
                className="text-sm text-alabaster font-normal"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        {/* Divider line */}
        <div className="border-t border-white/30 my-4" />

        {/* Bottom sical media icons */}
        <div className="flex flex-row gap-3 mt-4 justify-end">
          {socialData.map((item, index) => {
            const Icon = item.icon;
            const path = item.path;
            return (
              <a
                key={index}
                href={path}
                className="hover:text-teal-400 transition text-gray-200"
              >
                <Icon size={22} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
