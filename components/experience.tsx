"use client";

import React from "react";
import SectionHeading from "./ui/section-heading";
import { experiencesData } from "@/lib/data";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section
      ref={ref}
      id="experience"
      className="scroll-mt-28 mb-28 sm:mb-40"
    >
      <div className="max-w-[50rem] mx-auto">
        <SectionHeading>My experience</SectionHeading>

        <div className="relative border-l border-slate-700 ml-4 md:ml-6 space-y-12">
          {experiencesData.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              {/* Icon / Bullet Point */}
              <motion.span
                className="absolute -left-[39px] md:-left-[43px] top-0 flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-700 text-teal-400 group-hover:scale-110 group-hover:border-teal-500/50 transition-all shadow-lg z-10"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {item.icon}
              </motion.span>

              {/* Content Card */}
              <motion.div
                className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-teal-500/30 transition shadow-md relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold capitalize text-xl text-slate-100">{item.title}</h3>
                <p className="font-normal !mt-0 text-slate-400 text-sm mb-2">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-400 leading-relaxed">
                  {item.description}
                </p>
                <span className="md:absolute md:top-6 md:right-6 text-sm text-slate-500 block font-mono md:border md:border-slate-700 md:px-2 md:py-1 md:rounded mt-2 md:mt-0 w-fit">
                  {item.date}
                </span>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
