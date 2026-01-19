"use client";

import React from "react";
import SectionHeading from "./ui/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 mx-auto px-4"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Information Technology</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        My favorite part of programming is the
        problem-solving aspect. I love the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and PHP
        </span>
        . I am also proficient with <span className="font-medium">Python (Django), Angular, and GCP</span>. I am always looking to
        learn new technologies. I am currently not working as of now.
      </p>

      <p>
        When I'm not coding, I enjoy playing
        video games and watching movies. I am also learning how to play the
        guitar.
      </p>
    </motion.section>
  );
}
