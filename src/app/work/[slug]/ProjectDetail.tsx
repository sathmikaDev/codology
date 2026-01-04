"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Building,
  Code,
  CheckCircle2,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  client: string;
  duration: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  color: string;
}

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#FAFAFC] relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-md blur-3xl -translate-y-1/2 translate-x-1/3 opacity-30"
          style={{ backgroundColor: project.color }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-[#64648c] hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 bg-[#E0D9FF]/50 rounded-md text-sm font-medium text-primary mb-6">
                {project.category}
              </span>
              <h1 className="font-['Plus_Jakarta_Sans'] text-5xl md:text-6xl font-bold text-[#1a1a2e] mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-[#64648c] mb-8">
                {project.description}
              </p>

              {/* Meta Info */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="flex items-center gap-2 text-[#64648c] text-sm mb-1">
                    <Building className="w-4 h-4" />
                    Client
                  </div>
                  <div className="font-semibold text-[#1a1a2e]">
                    {project.client}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-[#64648c] text-sm mb-1">
                    <Calendar className="w-4 h-4" />
                    Year
                  </div>
                  <div className="font-semibold text-[#1a1a2e]">
                    {project.year}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-[#64648c] text-sm mb-1">
                    <Clock className="w-4 h-4" />
                    Duration
                  </div>
                  <div className="font-semibold text-[#1a1a2e]">
                    {project.duration}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Project Visual */}
            <ScrollReveal delay={0.2}>
              <motion.div
                className="relative aspect-[4/3] rounded-2xl overflow-hidden"
                style={{ backgroundColor: project.color }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-2xl bg-white/50 backdrop-blur flex items-center justify-center">
                    <Code className="w-12 h-12 text-primary" />
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <Section background="white">
        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal>
            <div className="bg-[#FAFAFC] rounded-2xl p-8">
              <h2 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#1a1a2e] mb-4">
                The Challenge
              </h2>
              <p className="text-[#64648c] leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-[#E0D9FF]/20 rounded-2xl p-8">
              <h2 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#1a1a2e] mb-4">
                Our Solution
              </h2>
              <p className="text-[#64648c] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Results */}
      <Section>
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#D6F5F0]/50 rounded-md text-sm font-medium text-primary mb-4">
              Impact
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-4xl font-bold text-[#1a1a2e]">
              Key Results
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {project.results.map((result, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className="bg-white rounded-2xl p-6 text-center shadow-[0_4px_20px_rgba(59,40,204,0.06)]"
                whileHover={{ y: -4 }}
              >
                <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-4" />
                <p className="font-semibold text-[#1a1a2e]">{result}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Technologies */}
      <Section background="white">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#E0D9FF]/50 rounded-md text-sm font-medium text-primary mb-4">
              Tech Stack
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-4xl font-bold text-[#1a1a2e]">
              Technologies Used
            </h2>
          </div>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-4">
          {project.technologies.map((tech, index) => (
            <ScrollReveal key={tech} delay={index * 0.05}>
              <motion.div
                className="px-6 py-3 bg-[#FAFAFC] rounded-md border border-[#E0D9FF]/50 text-[#1a1a2e] font-medium"
                whileHover={{ scale: 1.05, backgroundColor: "#E0D9FF" }}
              >
                {tech}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <ScrollReveal>
          <div className="bg-gradient-to-br from-primary to-[#7c3aed] rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-md blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
              <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl font-bold mb-4">
                Want Similar Results?
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                Lets discuss your project and explore how we can help you
                achieve your goals.
              </p>
              <Link href="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Start Your Project
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
