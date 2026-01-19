"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext, SectionName } from "@/context/active-section-context";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname === "/cv") {
    return null;
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, linkName: SectionName, hash: string) => {
    e.preventDefault();
    setActiveSection(linkName);
    setTimeOfLastClick(Date.now());
    setIsMobileMenuOpen(false);

    const targetElement = document.querySelector(hash);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      window.history.pushState(null, "", hash);
    }
  };

  return (
    <header className="z-[999] relative">
      <nav className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-slate-950/80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[initial] sm:rounded-full hidden sm:flex items-center justify-center -translate-x-1/2 px-2">
        <ul className="flex flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-400 sm:flex-nowrap sm:gap-2">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-4 py-3 hover:text-teal-300 transition-colors relative z-10",
                  {
                    "text-teal-400": activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={(e) => handleLinkClick(e, link.name, link.hash)}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-slate-800/80 rounded-full absolute inset-0 -z-10 border border-white/5 shadow-inner"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation Header */}
      <motion.div
        className={clsx(
          "sm:hidden fixed top-0 left-0 w-full p-4 flex justify-between items-center z-[1000] transition-colors duration-300",
          scrolled ? "bg-slate-950/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        )}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <Link
          href="#home"
          className="text-2xl font-black tracking-tighter"
          onClick={(e) => handleLinkClick(e, "Home", "#home")}
        >
          <span className="text-teal-400">EG</span>
          <span className="text-white">.</span>
        </Link>
        <button
          className="relative w-10 h-10 flex items-center justify-center text-slate-100 bg-slate-800/50 rounded-full border border-white/10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <FaTimes />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <FaBars />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </motion.div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[998] sm:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[70%] max-w-[300px] bg-slate-950 border-l border-white/10 shadow-2xl z-[999] sm:hidden pt-24 px-6"
            >
              <ul className="flex flex-col gap-6 text-xl font-semibold">
                {links.map((link, index) => (
                  <motion.li
                    key={link.hash}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      href={link.hash}
                      className={clsx(
                        "transition-all duration-200 block py-2 px-4 rounded-lg",
                        activeSection === link.name
                          ? "text-teal-400 bg-teal-400/10 border-l-4 border-teal-400"
                          : "text-gray-400 hover:text-white"
                      )}
                      onClick={(e) => handleLinkClick(e, link.name, link.hash)}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="absolute bottom-10 left-6 right-6 pt-6 border-t border-white/5">
                <p className="text-slate-500 text-sm mb-4">Let's connect</p>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-teal-400 font-bold text-xs">FB</div>
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-teal-400 font-bold text-xs">LI</div>
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-teal-400 font-bold text-xs">GH</div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
