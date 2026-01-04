"use client";

import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Palette,
  Cloud,
  Brain,
  Shield,
  Rocket,
  Database,
  Globe,
  Layers,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Link from "next/link";

const services = [
  {
    id: "web",
    icon: Code,
    title: "Web Development",
    description:
      "Custom web applications built with cutting-edge technologies. From responsive websites to complex enterprise platforms.",
    color: "#E0D9FF",
    features: [
      "Next.js & React Development",
      "Progressive Web Apps (PWA)",
      "E-commerce Solutions",
      "Custom CMS Development",
      "API Development & Integration",
      "Performance Optimization",
    ],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications that deliver seamless experiences across all devices.",
    color: "#D6F5F0",
    features: [
      "iOS App Development",
      "Android App Development",
      "React Native Apps",
      "Flutter Development",
      "App Store Optimization",
      "Push Notifications & Analytics",
    ],
  },
  {
    id: "design",
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces that captivate users and drive engagement through thoughtful design.",
    color: "#FFF4D6",
    features: [
      "User Research & Testing",
      "Wireframing & Prototyping",
      "Visual Design Systems",
      "Interaction Design",
      "Accessibility (WCAG)",
      "Design Handoff & Documentation",
    ],
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable, secure cloud infrastructure and DevOps practices for modern applications.",
    color: "#E0D9FF",
    features: [
      "AWS / Azure / GCP",
      "Docker & Kubernetes",
      "CI/CD Pipelines",
      "Serverless Architecture",
      "Cloud Migration",
      "Cost Optimization",
    ],
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI Integration",
    description:
      "Harness the power of artificial intelligence to automate, predict, and enhance your business processes.",
    color: "#D6F5F0",
    features: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision",
      "Chatbot Development",
      "Predictive Analytics",
      "AI-Powered Automation",
    ],
  },
  {
    id: "security",
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Protect your digital assets with enterprise-grade security measures and compliance frameworks.",
    color: "#FFF4D6",
    features: [
      "Security Audits",
      "Penetration Testing",
      "GDPR Compliance",
      "SOC 2 Certification",
      "Data Encryption",
      "Identity Management",
    ],
  },
];

const processSteps = [
  {
    icon: Layers,
    title: "Discovery",
    description:
      "We dive deep into understanding your business, goals, and challenges.",
  },
  {
    icon: Palette,
    title: "Design",
    description:
      "Creating intuitive interfaces and experiences that users love.",
  },
  {
    icon: Code,
    title: "Development",
    description:
      "Building robust, scalable solutions with clean, maintainable code.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "Deploying your solution and ensuring a smooth go-live experience.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-48 pb-20 bg-[#FAFAFC] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E0D9FF]/30 rounded-md blur-3xl -translate-y-1/2 translate-x-1/3" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-[#E0D9FF]/50 rounded-md text-sm font-medium text-primary mb-6">
                Our Services
              </span>
              <h1 className="font-['Plus_Jakarta_Sans'] text-5xl md:text-6xl font-bold text-[#1a1a2e] mb-6">
                Solutions That Drive{" "}
                <span className="bg-gradient-to-r from-primary to-[#7c3aed] bg-clip-text text-transparent">
                  Growth
                </span>
              </h1>
              <p className="text-xl text-[#64648c]">
                From concept to deployment, we deliver comprehensive digital
                solutions tailored to your unique business needs.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <Section background="white">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.1}>
              <motion.div
                id={service.id}
                className="group bg-white rounded-2xl p-8 h-full border border-[#E0D9FF]/30 shadow-[0_4px_20px_rgba(59,40,204,0.06)] hover:shadow-[0_8px_40px_rgba(59,40,204,0.12)] transition-all duration-300 scroll-mt-32"
                whileHover={{ y: -4 }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: service.color }}
                >
                  <service.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#1a1a2e] mb-3">
                  {service.title}
                </h3>

                <p className="text-[#64648c] mb-6">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-sm text-[#64648c]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section>
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#E0D9FF]/50 rounded-md text-sm font-medium text-primary mb-4">
              Our Process
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4">
              How We Work
            </h2>
            <p className="text-[#64648c] text-lg max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
              every time.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 0.15}>
              <div className="relative text-center">
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#E0D9FF] to-transparent" />
                )}

                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-md bg-[#E0D9FF]/50 mb-6">
                  <step.icon className="w-8 h-8 text-primary" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white text-sm font-bold rounded-md flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>

                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#1a1a2e] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#64648c] text-sm">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Technologies Section */}
      <Section background="white">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#E0D9FF]/50 rounded-md text-sm font-medium text-primary mb-4">
              Technology Stack
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4">
              Built With the Best
            </h2>
            <p className="text-[#64648c] text-lg max-w-2xl mx-auto">
              We use cutting-edge technologies to build robust, scalable
              solutions.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { name: "React", icon: Globe },
            { name: "Next.js", icon: Layers },
            { name: "TypeScript", icon: Code },
            { name: "Node.js", icon: Database },
            { name: "AWS", icon: Cloud },
            { name: "Python", icon: Brain },
          ].map((tech, index) => (
            <ScrollReveal key={tech.name} delay={index * 0.05}>
              <motion.div
                className="flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-[#E0D9FF]/30 hover:border-primary/30 hover:shadow-lg transition-all"
                whileHover={{ y: -4 }}
              >
                <tech.icon className="w-8 h-8 text-primary mb-3" />
                <span className="text-sm font-medium text-[#1a1a2e]">
                  {tech.name}
                </span>
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
                Ready to Get Started?
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                Lets discuss your project and explore how we can help bring your
                vision to life.
              </p>
              <Link href="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
