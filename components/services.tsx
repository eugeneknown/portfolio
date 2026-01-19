"use client";

import React from "react";
import SectionHeading from "./ui/section-heading";
import { servicesData } from "@/lib/data";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Services() {
    const { ref } = useSectionInView("Services");

    return (
        <section
            ref={ref}
            id="services"
            className="scroll-mt-28 mb-28 text-center sm:mb-40 px-4"
        >
            <SectionHeading>My Services</SectionHeading>
            <div className="flex flex-wrap gap-8 justify-center">
                {servicesData.map((service, index) => (
                    <motion.div
                        className="bg-slate-800 border border-white/10 p-8 rounded-xl flex flex-col items-center gap-4 max-w-[20rem] hover:bg-slate-700 transition cursor-default"
                        key={index}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-4xl text-teal-400 bg-slate-900 p-4 rounded-full border border-slate-700">
                            {service.icon}
                        </span>
                        <h3 className="text-xl font-bold text-slate-100">{service.title}</h3>
                        <p className="text-gray-400 leading-relaxed">
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
