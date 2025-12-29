"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  Target,
  Lightbulb,
  Users,
  Award,
  Rocket,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Link from "next/link";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description:
      "We love what we do. Every project is an opportunity to create something amazing.",
    color: "#E0D9FF",
  },
  {
    icon: Target,
    title: "Precision",
    description:
      "Attention to detail in every line of code and every pixel of design.",
    color: "#D6F5F0",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay ahead of the curve, embracing new technologies and methodologies.",
    color: "#FFF4D6",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Your success is our success. We work as an extension of your team.",
    color: "#E0D9FF",
  },
];

const team = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    bio: "10+ years building scalable web applications",
    initials: "AC",
    color: "#E0D9FF",
  },
  {
    name: "Sarah Miller",
    role: "Lead Designer",
    bio: "Award-winning UI/UX designer",
    initials: "SM",
    color: "#D6F5F0",
  },
  {
    name: "David Park",
    role: "Tech Lead",
    bio: "Full-stack wizard with a passion for clean code",
    initials: "DP",
    color: "#FFF4D6",
  },
  {
    name: "Emily Rodriguez",
    role: "Project Manager",
    bio: "Keeping projects on track and clients happy",
    initials: "ER",
    color: "#E0D9FF",
  },
  {
    name: "Michael Lee",
    role: "Senior Developer",
    bio: "Backend specialist & cloud architecture expert",
    initials: "ML",
    color: "#D6F5F0",
  },
  {
    name: "Jessica Wong",
    role: "Mobile Developer",
    bio: "React Native & Flutter expert",
    initials: "JW",
    color: "#FFF4D6",
  },
];

const milestones = [
  {
    year: "2022",
    title: "Founded",
    description:
      "Codology was born with a vision to transform digital experiences",
  },
  {
    year: "2023",
    title: "First Major Client",
    description: "Partnered with Fortune 500 company for enterprise solution",
  },
  {
    year: "2024",
    title: "Team Growth",
    description: "Expanded to 15+ talented professionals",
  },
  {
    year: "2025",
    title: "Global Reach",
    description: "Serving clients in over 10 countries",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#FAFAFC] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E0D9FF]/30 rounded-md blur-3xl -translate-y-1/2 -translate-x-1/3" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#D6F5F0]/30 rounded-md blur-3xl translate-y-1/2 translate-x-1/3" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-[#E0D9FF]/50 rounded-md text-sm font-medium text-primary mb-6">
                About Us
              </span>
              <h1 className="font-['Plus_Jakarta_Sans'] text-5xl md:text-6xl font-bold text-[#1a1a2e] mb-6">
                We Build Digital{" "}
                <span className="bg-gradient-to-r from-primary to-[#7c3aed] bg-clip-text text-transparent">
                  Experiences
                </span>
              </h1>
              <p className="text-xl text-[#64648c]">
                A passionate team of developers, designers, and strategists
                dedicated to transforming your ideas into powerful digital
                solutions.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Section */}
      <Section background="surface">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#E0D9FF]/50 rounded-md text-sm font-medium text-primary mb-4">
                Our Story
              </span>
              <h2 className="font-['Plus_Jakarta_Sans'] text-4xl font-bold text-[#1a1a2e] mb-6">
                From Vision to Reality
              </h2>
              <div className="space-y-4 text-[#64648c] leading-relaxed">
                <p>
                  Codology was founded in 2022 with a simple mission: to bridge
                  the gap between innovative ideas and exceptional digital
                  products. What started as a small team of passionate
                  developers has grown into a full-service digital agency.
                </p>
                <p>
                  We believe that great software is more than just code—it's
                  about understanding your users, solving real problems, and
                  creating experiences that delight. That's why we take the time
                  to understand your business before writing a single line of
                  code.
                </p>
                <p>
                  Today, we work with startups and enterprises alike, helping
                  them transform their digital presence and achieve their
                  business goals through thoughtful design and robust
                  engineering.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative">
              <motion.div
                className="bg-gradient-to-br from-primary to-[#7c3aed] rounded-3xl p-8 text-white"
                whileHover={{ scale: 1.02 }}
              >
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4">
                    <Award className="w-10 h-10 mx-auto mb-3 opacity-80" />
                    <div className="text-4xl font-bold mb-1">50+</div>
                    <div className="text-sm text-white/70">
                      Projects Delivered
                    </div>
                  </div>
                  <div className="text-center p-4">
                    <Users className="w-10 h-10 mx-auto mb-3 opacity-80" />
                    <div className="text-4xl font-bold mb-1">15+</div>
                    <div className="text-sm text-white/70">Team Members</div>
                  </div>
                  <div className="text-center p-4">
                    <Rocket className="w-10 h-10 mx-auto mb-3 opacity-80" />
                    <div className="text-4xl font-bold mb-1">2+</div>
                    <div className="text-sm text-white/70">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center p-4">
                    <Heart className="w-10 h-10 mx-auto mb-3 opacity-80" />
                    <div className="text-4xl font-bold mb-1">100%</div>
                    <div className="text-sm text-white/70">
                      Client Satisfaction
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Values Section */}
      <Section>
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#E0D9FF]/50 rounded-md text-sm font-medium text-primary mb-4">
              Core Values
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4">
              What Drives Us
            </h2>
            <p className="text-[#64648c] text-lg max-w-2xl mx-auto">
              Our values guide every decision we make and every line of code we
              write.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <ScrollReveal key={value.title} delay={index * 0.1}>
              <motion.div
                className="bg-white rounded-2xl p-6 text-center shadow-[0_4px_20px_rgba(59,40,204,0.06)] h-full"
                whileHover={{ y: -8 }}
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: value.color }}
                >
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#1a1a2e] mb-2">
                  {value.title}
                </h3>
                <p className="text-[#64648c] text-sm">{value.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Timeline Section */}
      <Section background="surface">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#E0D9FF]/50 rounded-md text-sm font-medium text-primary mb-4">
              Our Journey
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-4xl md:text-5xl font-bold text-[#1a1a2e]">
              Key Milestones
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#E0D9FF] hidden md:block" />

          <div className="space-y-8 md:space-y-0">
            {milestones.map((milestone, index) => (
              <ScrollReveal key={milestone.year} delay={index * 0.1}>
                <div
                  className={`flex items-center gap-8 md:gap-16 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(59,40,204,0.06)]">
                      <div className="text-2xl font-bold text-primary mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#1a1a2e] mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-[#64648c]">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 rounded-md bg-primary relative z-10" />
                  <div className="flex-1 hidden md:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section>
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#E0D9FF]/50 rounded-md text-sm font-medium text-primary mb-4">
              Our Team
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4">
              Meet the Experts
            </h2>
            <p className="text-[#64648c] text-lg max-w-2xl mx-auto">
              A diverse team of talented individuals passionate about creating
              exceptional digital experiences.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <ScrollReveal key={member.name} delay={index * 0.1}>
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(59,40,204,0.06)]"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-16 h-16 rounded-md flex items-center justify-center text-xl font-bold text-primary"
                    style={{ backgroundColor: member.color }}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#1a1a2e]">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary">{member.role}</p>
                  </div>
                </div>
                <p className="text-[#64648c] text-sm">{member.bio}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="surface">
        <ScrollReveal>
          <div className="bg-gradient-to-br from-primary to-[#7c3aed] rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-md blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
              <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl font-bold mb-4">
                Want to Join Our Team?
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                We're always looking for talented individuals who share our
                passion for excellence.
              </p>
              <Link href="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
