"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Hero() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const roles = ["Full-Stack Developer", "Microservices Architect", "Python/Django Developer", "GCP Specialist"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28 mx-auto flex flex-col items-center justify-center min-h-[90vh] py-20"
    >
      <div className="flex items-center justify-center mb-8">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              duration: 0.5,
            }}
          >
            <div className="h-64 w-64 rounded-full border-[0.4rem] border-white/10 p-1 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-blue-500/20 group-hover:opacity-0 transition-opacity z-10"></div>
              <Image
                src="/profile.jpg"
                alt="Eugene P. Gardose"
                width={300}
                height={300}
                quality={95}
                priority={true}
                className="h-full w-full rounded-full object-cover shadow-inner bg-slate-800"
              />
            </div>
          </motion.div>

          {/* Subtle Glow Background */}
          <div className="absolute -inset-4 bg-teal-500/10 blur-3xl -z-10 rounded-full"></div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-teal-400 uppercase bg-teal-400/10 rounded-full border border-teal-400/20">
          Available for new projects
        </span>

        <motion.h1
          className="mb-10 mt-4 px-4 text-3xl font-bold !leading-[1.2] sm:text-6xl text-slate-100 tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.12, delayChildren: 0.2 }}
        >
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Eugene</span>.
          </motion.span>
          <br />
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            I'm a <span className="relative inline-block w-full sm:w-auto text-left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  className="relative z-10 italic block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 font-bold whitespace-normal sm:whitespace-nowrap"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {roles[index]}
                </motion.span>
              </AnimatePresence>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-teal-500/20 -z-10 -rotate-1 rounded-sm transition-all duration-300"></span>
            </span>
          </motion.span>
        </motion.h1>

        <p className="mb-10 px-4 text-lg font-medium !leading-[1.6] sm:text-xl text-slate-400 max-w-[40rem] mx-auto">
          With <span className="text-white font-bold underline decoration-teal-500/50 underline-offset-4">5+ years</span> of experience building
          <span className="italic text-white"> robust & performance-driven</span> web applications using modern technologies.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <Link
          href="#contact"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          className="group bg-slate-100 text-slate-950 px-8 py-4 flex items-center gap-3 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-100 transition-all font-bold shadow-xl shadow-teal-500/5 hover:bg-white"
        >
          Work With Me
          <BsArrowRight className="opacity-70 group-hover:translate-x-1.5 transition" />
        </Link>

        <Link
          className="group bg-slate-950 text-white px-8 py-4 flex items-center gap-3 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-100 transition border border-white/10 backdrop-blur-sm hover:border-white/20"
          href="/cv"
          target="_blank"
        >
          View CV
          <HiDownload className="opacity-60 group-hover:translate-y-0.5 transition" />
        </Link>

        <div className="flex gap-3">
          <a
            className="bg-slate-950 p-4 text-white/60 hover:text-white flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition border border-white/10 hover:border-white/20"
            href="https://github.com"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
