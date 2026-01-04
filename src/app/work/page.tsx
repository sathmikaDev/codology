"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Code } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Section from "@/components/ui/Section";

const categories = [
  "All",
  "Fintech",
  "Healthcare",
  "E-commerce",
  "SaaS",
  "AI/ML",
];

const projects = [
  {
    id: "fintech-dashboard",
    title: "FinanceFlow",
    category: "Fintech",
    description:
      "A comprehensive financial dashboard for modern banking with real-time analytics.",
    color: "#E0D9FF",
    year: "2024",
  },
  {
    id: "health-app",
    title: "VitalTrack",
    category: "Healthcare",
    description:
      "Patient monitoring and health tracking application for clinics.",
    color: "#D6F5F0",
    year: "2024",
  },
  {
    id: "ecommerce-platform",
    title: "ShopNest",
    category: "E-commerce",
    description:
      "Next-gen shopping experience with AI-powered recommendations.",
    color: "#FFF4D6",
    year: "2024",
  },
  {
    id: "saas-analytics",
    title: "DataPulse",
    category: "SaaS",
    description: "Business intelligence platform with customizable dashboards.",
    color: "#E0D9FF",
    year: "2023",
  },
  {
    id: "ai-assistant",
    title: "NeuralChat",
    category: "AI/ML",
    description: "Conversational AI assistant for enterprise customer support.",
    color: "#D6F5F0",
    year: "2023",
  },
  {
    id: "health-platform",
    title: "MediConnect",
    category: "Healthcare",
    description:
      "Telemedicine platform connecting patients with doctors remotely.",
    color: "#FFF4D6",
    year: "2023",
  },
  {
    id: "crypto-wallet",
    title: "CryptoVault",
    category: "Fintech",
    description: "Secure cryptocurrency wallet with multi-chain support.",
    color: "#E0D9FF",
    year: "2023",
  },
  {
    id: "marketplace",
    title: "ArtisanHub",
    category: "E-commerce",
    description: "Marketplace connecting artisans with global buyers.",
    color: "#D6F5F0",
    year: "2023",
  },
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#FAFAFC] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#D6F5F0]/30 rounded-md blur-3xl -translate-y-1/2 -translate-x-1/3" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-[#E0D9FF]/50 rounded-md text-sm font-medium text-primary mb-6">
                Our Portfolio
              </span>
              <h1 className="font-['Plus_Jakarta_Sans'] text-5xl md:text-6xl font-bold text-[#1a1a2e] mb-6">
                Work That{" "}
                <span className="bg-gradient-to-r from-primary to-[#7c3aed] bg-clip-text text-transparent">
                  Inspires
                </span>
              </h1>
              <p className="text-xl text-[#64648c]">
                Explore our portfolio of successful projects across various
                industries.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter & Projects */}
      <Section background="white">
        {/* Category Filter */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all ${activeCategory === category
                    ? "bg-primary text-white shadow-[0_4px_20px_rgba(59,40,204,0.3)]"
                    : "bg-[#E0D9FF]/30 text-[#64648c] hover:bg-[#E0D9FF]/50"
                  }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link href={`/work/${project.id}`}>
                  <motion.div
                    className="group relative rounded-2xl overflow-hidden cursor-pointer"
                    whileHover={{ y: -8 }}
                  >
                    {/* Project Image Placeholder */}
                    <div
                      className="aspect-[4/3] relative"
                      style={{ backgroundColor: project.color }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-2xl bg-white/50 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Code className="w-10 h-10 text-primary" />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 rounded-md bg-white flex items-center justify-center">
                          <ArrowUpRight className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6 bg-white">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-primary bg-[#E0D9FF]/50 px-3 py-1 rounded-md">
                          {project.category}
                        </span>
                        <span className="text-xs text-[#64648c]">
                          {project.year}
                        </span>
                      </div>
                      <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#1a1a2e] mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[#64648c]">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>
    </>
  );
}
