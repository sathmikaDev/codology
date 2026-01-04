"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Code,
  Cloud,
  Sparkles,
  Users,
  Clock,
  Award,
  Zap,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Section from "@/components/ui/Section";
import { BentoGrid, BentoItem } from "@/components/ui/BentoGrid";
import Button from "@/components/ui/Button";
import { useBanner } from "@/context/BannerContext";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";
import ButtonV2 from "./../components/ui/ButtonV2";

const stats = [
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Clock, value: "100%", label: "On-time Delivery" },
  { icon: Award, value: "2+", label: "Years Experience" },
  { icon: Zap, value: "24/7", label: "Support Available" },
];

const projects = [
  {
    id: "fintech-dashboard",
    title: "FinanceFlow",
    category: "Fintech",
    description: "A comprehensive financial dashboard",
  },
  {
    id: "health-app",
    title: "VitalTrack",
    category: "Healthcare",
    description: "Patient monitoring application",
  },
  {
    id: "ecommerce-platform",
    title: "ShopNest",
    category: "E-commerce",
    description: "Next-gen shopping experience",
  },
];

const AnchorIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg aria-hidden="true" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path
      d="M8.465,11.293c1.133-1.133,3.109-1.133,4.242,0L13.414,12l1.414-1.414l-0.707-0.707c-0.943-0.944-2.199-1.465-3.535-1.465 S7.994,8.935,7.051,9.879L4.929,12c-1.948,1.949-1.948,5.122,0,7.071c0.975,0.975,2.255,1.462,3.535,1.462 c1.281,0,2.562-0.487,3.536-1.462l0.707-0.707l-1.414-1.414l-0.707,0.707c-1.17,1.167-3.073,1.169-4.243,0 c-1.169-1.17-1.169-3.073,0-4.243L8.465,11.293z"
      fill="currentColor"
    />
    <path
      d="M12,4.929l-0.707,0.707l1.414,1.414l0.707-0.707c1.169-1.167,3.072-1.169,4.243,0c1.169,1.17,1.169,3.073,0,4.243 l-2.122,2.121c-1.133,1.133-3.109,1.133-4.242,0L10.586,12l-1.414,1.414l0.707,0.707c0.943,0.944,2.199,1.465,3.535,1.465 s2.592-0.521,3.535-1.465L19.071,12c1.948-1.949,1.948-5.122,0-7.071C17.121,2.979,13.948,2.98,12,4.929z"
      fill="currentColor"
    />
  </svg>
);

const MoonIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    height="24"
    viewBox="0 0 512 512"
    width="24"
    {...props}
  >
    <path
      d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
    />
  </svg>
);

const SunIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    height="24"
    viewBox="0 0 512 512"
    width="24"
    {...props}
  >
    <path
      d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={32}
    />
    <circle
      cx={256}
      cy={256}
      fill="none"
      r={80}
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={32}
    />
  </svg>
);

const defaultContent =
  "We build custom solutions tailored to your business needs using the latest technologies.";

const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop",
  },
  {
    quote: "This solution has significantly improved our team's productivity.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop",
  },
];

export default function Home() {
  const { isBannerVisible } = useBanner();

  return (
    <>
      <section
        className={`${
          isBannerVisible
            ? "mt-32 h-[calc(100vh-8rem)]"
            : "mt-20 h-[calc(100vh-5rem)]"
        } relative overflow-hidden bg-white`}
      >
        <div className="flex flex-col lg:flex-row h-full items-stretch">
          <div className="w-full lg:w-1/2 h-full flex justify-end items-center bg-white px-6 lg:px-16 xl:px-24 md:py-20 py-16">
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#7E9CFC]/10 rounded-md"
              >
                <Sparkles className="w-4 h-4 text-[#7E9CFC]" />
                <span className="text-sm font-medium text-[#040813]">
                  Modern Software Solutions
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="my-8"
              >
                <h1 className="font-['Plus_Jakarta_Sans'] text-5xl md:text-6xl font-bold leading-tight text-[#040813]">
                  Crafting Digital Experiences{" "}
                  <span className="text-[#7E9CFC]">That Define the Future</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg md:text-xl text-[#040813]/70 max-w-lg my-8"
              >
                We craft exceptional digital experiences that transform ideas
                into powerful, scalable applications.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex gap-4"
              >
                <Link href="/contact">
                  <ButtonV2 text="Book a Call" />
                </Link>
                {/* <Link href="/work">
                  <ButtonV2 text="View Our Work" variant="secondary" />
                </Link> */}
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-full lg:w-1/2 h-full relative hidden lg:block"
          >
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Team working"
              className="hero-image"
            />
          </motion.div>
        </div>
      </section>

      <Section background="white" id="services">
        <div className="flex flex-col lg:flex-row justify-between gap-20">
          <ScrollReveal>
            <div className="text-start mb-16 lg:mb-0">
              <span className="inline-block px-4 py-1.5 bg-[#7E9CFC]/10 rounded-md text-sm font-medium text-[#7E9CFC] mb-4">
                Our Services
              </span>
              <h2 className="font-['Plus_Jakarta_Sans'] text-4xl md:text-5xl font-bold text-[#040813] mb-4">
                What We Do Best
              </h2>
              <p className="text-[#040813]/60 text-lg max-w-md">
                From concept to deployment, we deliver end-to-end solutions.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex-1 max-w-xl">
            <Accordion className="font-['Plus_Jakarta_Sans'] text-[#040813]">
              <AccordionItem
                key="web"
                aria-label="Web Development"
                indicator={<AnchorIcon />}
                title="Web Development"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="mobile"
                aria-label="Mobile Apps"
                indicator={<MoonIcon />}
                title="Mobile Apps"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="design"
                aria-label="UI/UX Design"
                indicator={<SunIcon />}
                title="UI/UX Design"
              >
                {defaultContent}
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-12">
            <Link href="/services">
              <Button
                variant="secondary"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                View All Services
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </Section>

      <Section background="white" id="work">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#7E9CFC]/10 rounded-md text-sm font-medium text-[#7E9CFC] mb-4">
                Featured Work
              </span>
              <h2 className="font-['Plus_Jakarta_Sans'] text-4xl md:text-5xl font-bold text-[#040813]">
                Our Latest Projects
              </h2>
            </div>
            <Link href="/work">
              <Button
                variant="outline"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                View All Projects
              </Button>
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.15}>
              <Link href={`/work/${project.id}`}>
                <motion.div
                  className="group relative rounded-lg overflow-hidden border border-[#040813]/10"
                  whileHover={{ y: -4 }}
                >
                  <div className="aspect-[4/3] bg-[#7E9CFC] flex items-center justify-center">
                    <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center">
                      <Code className="w-8 h-8 text-[#7E9CFC]" />
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <span className="inline-block px-3 py-1 bg-[#040813] text-white rounded text-xs font-medium mb-3">
                      {project.category}
                    </span>
                    <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#040813] mb-1">
                      {project.title}
                    </h3>
                    <p className="text-[#040813]/60 text-sm">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section background="white" id="why-us">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#7E9CFC]/10 rounded-md text-sm font-medium text-[#7E9CFC] mb-4">
              Why Choose Us
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-4xl md:text-5xl font-bold text-[#040813] mb-4">
              Numbers That Speak
            </h2>
            <p className="text-[#040813]/60 text-lg max-w-2xl mx-auto">
              We measure our success by the results we deliver.
            </p>
          </div>
        </ScrollReveal>

        <BentoGrid>
          <BentoItem colSpan={2} variant="blue" delay={0.1}>
            <div className="h-full flex flex-col justify-between min-h-[200px]">
              <Sparkles className="w-8 h-8 mb-4" />
              <div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold mb-2">
                  Innovation-First Approach
                </h3>
                <p className="opacity-80">
                  We utilize cutting-edge technologies to deliver solutions that
                  stand the test of time.
                </p>
              </div>
            </div>
          </BentoItem>

          {stats.map((stat, index) => (
            <BentoItem
              key={stat.label}
              variant="white"
              delay={0.2 + index * 0.1}
            >
              <div className="text-center py-4">
                <stat.icon className="w-8 h-8 text-[#7E9CFC] mx-auto mb-3" />
                <div className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[#040813] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-[#040813]/60">{stat.label}</div>
              </div>
            </BentoItem>
          ))}

          <BentoItem colSpan={2} variant="dark" delay={0.5}>
            <div className="flex items-center gap-6">
              <Cloud className="w-12 h-12 flex-shrink-0" />
              <div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold mb-1">
                  Cloud-Native Architecture
                </h3>
                <p className="opacity-80">
                  Scalable, secure, and performant solutions built for the
                  modern web.
                </p>
              </div>
            </div>
          </BentoItem>
        </BentoGrid>
      </Section>

      <Section background="white" id="testimonials">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-[#7E9CFC]/10 rounded-md text-sm font-medium text-[#7E9CFC] mb-8">
              What Clients Say
            </span>
            <AnimatedTestimonials testimonials={testimonials} />
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
