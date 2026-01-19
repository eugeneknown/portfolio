"use client";

import React, { useRef } from "react";
import SectionHeading from "./ui/section-heading";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28 px-4"
    >
      <div className="max-w-[50rem] mx-auto">
        <SectionHeading>My projects</SectionHeading>
        <div className="flex flex-col gap-12">
          {projectsData.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-8 last:mb-0"
    >
      <div className="bg-slate-800/40 max-w-[42rem] border border-white/10 rounded-3xl overflow-hidden relative sm:min-h-[22rem] hover:bg-slate-800/60 transition mx-auto backdrop-blur-md">

        <div className="pt-10 pb-10 px-6 sm:pl-10 sm:pr-2 sm:pt-12 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[50%]">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="mt-2 leading-relaxed text-slate-400 text-sm sm:text-base">
            {description}
          </p>
          <ul className="flex flex-wrap mt-6 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-slate-900/60 border border-teal-500/20 px-3 py-1 text-[0.65rem] uppercase tracking-wider text-teal-400 rounded-full font-bold shadow-sm"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* Enhanced Visual Placeholder */}
        <div className="absolute top-10 -right-24 w-[28.25rem] h-[24rem] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition 
          group-hover:scale-[1.05]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2

          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2

          group-even:right-[initial] group-even:-left-24
          
          bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 hidden sm:flex flex-col p-4
        ">
          {/* Visual elements to make it look like a real app */}
          <div className="flex gap-1.5 mb-4">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/50"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/50"></div>
          </div>
          <div className="flex flex-col items-center justify-center h-full gap-4 text-center px-20">
            <div className="w-16 h-16 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
              <span className="text-teal-400 text-2xl font-bold">{title[0]}</span>
            </div>
            <div className="space-y-2 w-full">
              <div className="h-2 w-full bg-white/5 rounded-full"></div>
              <div className="h-2 w-3/4 bg-white/5 rounded-full mx-auto"></div>
            </div>
            <span className="text-slate-600 font-medium text-sm tracking-wide mt-4 opacity-50 uppercase">Project UI Live</span>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
