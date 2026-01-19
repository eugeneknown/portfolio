"use client";

import React, { useState } from "react";
import SectionHeading from "./ui/section-heading";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("https://formsubmit.co/ajax/eugenegardose@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Email sent successfully!");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center px-4 mx-auto scroll-mt-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-400 -mt-6 mb-10">
        Please contact me directly at{" "}
        <a className="underline text-teal-400" href="mailto:eugenegardose@gmail.com">
          eugenegardose@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={handleSubmit}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-slate-800 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none dark:text-white border border-white/10"
          name="email"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          disabled={pending}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-slate-800 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none dark:text-white border border-white/10"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          disabled={pending}
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-teal-500 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-teal-600 active:scale-105 mx-auto disabled:scale-100 disabled:bg-opacity-65"
          disabled={pending}
        >
          {pending ? (
            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
          ) : (
            <>
              Submit{" "}
              <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </>
          )}
        </button>
      </form>
    </motion.section>
  );
}
