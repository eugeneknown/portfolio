import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaServer, FaCode, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaDatabase, FaNetworkWired } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMysql, SiGit, SiPostman, SiPython, SiDjango, SiGooglecloud, SiAngular, SiMariadb, SiPostgresql } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Services",
    hash: "#services",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Developer",
    location: "Eighty20 Virtual, Inc.",
    description:
      "Developing and maintaining robust web applications since April 2022. Collaborating with cross-functional teams to deliver high-quality software solutions, optimizing backend performance, and ensuring responsive frontend designs.",
    icon: React.createElement(CgWorkAlt),
    date: "April 2022 - Present",
  },
  {
    title: "Bachelor of Science in Information Technology",
    location: "STI College of Davao",
    description:
      "Graduated with a focus on software engineering, networking, and system analysis. Built a strong foundation in programming logic and database management.",
    icon: React.createElement(LuGraduationCap),
    date: "Graduated Aug 2021",
  },
  {
    title: "Secondary Education",
    location: "Davao Wisdom Academy",
    description: "Completed secondary education with honors.",
    icon: React.createElement(LuGraduationCap),
    date: "Graduated 2014",
  },
] as const;

export const servicesData = [
  {
    title: "Full Stack Development",
    description: "I build robust, scalable web applications from scratch using modern technologies like React, Next.js, and Node.js.",
    icon: React.createElement(FaCode),
  },
  {
    title: "API Integration",
    description: "Seamlessly integrate third-party APIs (Stripe, PayPal, Google Maps) into your applications for enhanced functionality.",
    icon: React.createElement(FaServer),
  },
  {
    title: "Database Management",
    description: "Design and optimize database schemas (SQL/NoSQL) to ensure data integrity and high performance.",
    icon: React.createElement(FaDatabase),
  },
] as const;

export const projectsData = [
  {
    title: "SaaS Admin Dashboard",
    description:
      "A comprehensive analytics dashboard for managing users, revenue, and system metrics. Features dark mode, real-time data visualization, and role-based access control.",
    tags: ["React", "Next.js", "Tailwind", "Prisma", "PostgreSQL"],
    imageUrl: "/placeholder-project-1.jpg", 
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with cart functionality, payment gateway integration, and order tracking. Optimized for high performance and SEO.",
    tags: ["React", "TypeScript", "Node.js", "Stripe", "Redux"],
    imageUrl: "/placeholder-project-2.jpg",
  },
  {
    title: "Real-time Chat Application",
    description:
      "A responsive messaging app supporting private and group chats, file sharing, and instant notifications using WebSockets.",
    tags: ["Socket.io", "Express", "MongoDB", "React"],
    imageUrl: "/placeholder-project-3.jpg",
  },
] as const;

export const skillsData = [
  { name: "HTML5", icon: React.createElement(FaHtml5, { className: "text-orange-500" }) },
  { name: "CSS3", icon: React.createElement(FaCss3Alt, { className: "text-blue-500" }) },
  { name: "JavaScript", icon: React.createElement(FaJs, { className: "text-yellow-400" }) },
  { name: "TypeScript", icon: React.createElement(SiTypescript, { className: "text-blue-600" }) },
  { name: "React", icon: React.createElement(FaReact, { className: "text-cyan-400" }) },
  { name: "Next.js", icon: React.createElement(SiNextdotjs, { className: "text-white" }) },
  { name: "Tailwind", icon: React.createElement(SiTailwindcss, { className: "text-cyan-300" }) },
  { name: "Node.js", icon: React.createElement(FaServer, { className: "text-green-500" }) },
  { name: "PHP", icon: React.createElement(FaPhp, { className: "text-purple-400" }) },
  { name: "C#", icon: React.createElement(TbBrandCSharp, { className: "text-green-600" }) },
  { name: "Python", icon: React.createElement(SiPython, { className: "text-blue-500" }) },
  { name: "Django", icon: React.createElement(SiDjango, { className: "text-green-800" }) },
  { name: "GCP", icon: React.createElement(SiGooglecloud, { className: "text-red-500" }) },
  { name: "Angular", icon: React.createElement(SiAngular, { className: "text-red-600" }) },
  { name: "MySQL", icon: React.createElement(SiMysql, { className: "text-blue-300" }) },
  { name: "MariaDB", icon: React.createElement(SiMariadb, { className: "text-blue-500" }) },
  { name: "PostgreSQL", icon: React.createElement(SiPostgresql, { className: "text-blue-400" }) },
  { name: "Microservices", icon: React.createElement(FaNetworkWired, { className: "text-slate-400" }) },
  { name: "Git", icon: React.createElement(SiGit, { className: "text-orange-600" }) },
] as const;

export const personalInfo = {
  name: "Eugene P. Gardose",
  title: "Full Stack Developer",
  email: "eugenegardose@gmail.com",
  phone: "+63 947 781 3439",
  address: "Zone 3, St. Jude Buhangin, Davao City",
  socials: {
    facebook: "https://facebook.com/YuJin1022",
  }
};
