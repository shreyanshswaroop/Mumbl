"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const columns = [
  {
    title: "Product",
    links: ["Notetaker", "Dictation", "Voice actions"],
  },
  {
    title: "Platform",
    links: ["FlowVoice AI", "Personal vocabulary", "App context"],
  },
  {
    title: "Industries",
    links: ["Sales", "Recruiting", "Product teams"],
  },
  {
    title: "Customers",
    links: ["Founders", "Operators", "Creators"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Contact", "Security"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Changelog", "Blog", "Help center"],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#2f7f86] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/footer.png')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(36,126,135,0.96)_0%,rgba(43,132,139,0.7)_25%,rgba(20,55,55,0.18)_62%,rgba(10,32,28,0.46)_100%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[620px] max-w-[1320px] flex-col px-5 pb-8 pt-20 sm:px-8 md:min-h-[660px] md:px-12 md:pt-24 lg:px-16">
        <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="mb-5 text-[18px] font-semibold leading-none text-white md:text-[20px]">
                {column.title}
              </p>

              <div className="space-y-3.5">
                {column.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block w-fit text-[15px] font-medium leading-6 text-white/78 transition duration-200 hover:text-white md:text-[16px]"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-5 pt-24 text-[14px] font-medium text-white/72 md:flex-row md:items-center md:justify-between md:pt-16">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>© FlowVoice 2026</span>
            <a href="#" className="transition duration-200 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition duration-200 hover:text-white">
              Security
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-white">
            <span className="text-white/86">Get an AI summary of FlowVoice.</span>
        
            <a
              href="#"
              aria-label="GitHub"
              className="text-white/78 transition duration-200 hover:scale-110 hover:text-white"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="#"
              aria-label="X"
              className="text-white/78 transition duration-200 hover:scale-110 hover:text-white"
            >
              <FaXTwitter size={21} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-white/78 transition duration-200 hover:scale-110 hover:text-white"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


