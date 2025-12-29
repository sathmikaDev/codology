"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Code,
  Palette,
  Smartphone,
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

// Services Data
const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom web applications built with cutting-edge technologies for optimal performance.",
    color: "#E0D9FF",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile solutions that deliver exceptional user experiences.",
    color: "#D6F5F0",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces that captivate users and drive engagement.",
    color: "#FFF4D6",
  },
];

// Featured Projects
const projects = [
  {
    id: "fintech-dashboard",
    title: "FinanceFlow",
    category: "Fintech",
    description: "A comprehensive financial dashboard for modern banking",
    image: "/projects/fintech.jpg",
    color: "#E0D9FF",
  },
  {
    id: "health-app",
    title: "VitalTrack",
    category: "Healthcare",
    description: "Patient monitoring and health tracking application",
    image: "/projects/health.jpg",
    color: "#D6F5F0",
  },
  {
    id: "ecommerce-platform",
    title: "ShopNest",
    category: "E-commerce",
    description: "Next-gen shopping experience with AI recommendations",
    image: "/projects/ecommerce.jpg",
    color: "#FFF4D6",
  },
];

// Stats for Bento Grid
const stats = [
  {
    icon: Users,
    value: "50+",
    label: "Happy Clients",
    color: "lavender" as const,
  },
  {
    icon: Clock,
    value: "100%",
    label: "On-time Delivery",
    color: "mint" as const,
  },
  {
    icon: Award,
    value: "2+",
    label: "Years Experience",
    color: "buttercream" as const,
  },
  {
    icon: Zap,
    value: "24/7",
    label: "Support Available",
    color: "lavender" as const,
  },
];

const AnchorIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height="24"
      role="presentation"
      viewBox="0 0 24 24"
      width="24"
      {...props}
    >
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
};

const MoonIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height="24"
      role="presentation"
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
};

const defaultContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const SunIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height="24"
      role="presentation"
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
};

// testimonials
const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Home() {
  const { isBannerVisible } = useBanner();

  return (
    <>
      {/* Hero Section */}
      <section
        className={`${
          isBannerVisible
            ? "mt-32 h-[calc(100vh-8rem)]"
            : "mt-20 h-[calc(100vh-5rem)]"
        } relative overflow-hidden`}
      >
        <div className="flex flex-col lg:flex-row h-full items-stretch">
          {/* Left Content Side */}
          <div className="w-full lg:w-1/2 h-full flex justify-end items-center bg-[#FAFAFC] px-6 lg:px-16 xl:px-24 md:py-20 py-16">
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-amber-200/50 to-lime-200/50 rounded-md"
              >
                <Sparkles className="w-4 h-4 text-black" />
                <span className="text-sm font-medium text-black">
                  Modern Software Solutions
                </span>
              </motion.div>

              {/* <StaggerText
                text="Crafting Digital Experiences That Define the Future"
                className="font-['Plus_Jakarta_Sans'] text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-[#21215f] leading-tight mb-6 text-blue-200"
                tag="h1"
              /> */}

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-lg md:text-xl max-w-lg my-8"
              >
                <h1 className="font-['Plus_Jakarta_Sans'] text-5xl md:text-6xl lg:text-6xl xl:text-6xl font-bold  leading-tight text-[#191919] ">
                  Crafting Digital Experiences{" "}
                  <span className="text-blue-400">That Define the Future</span>
                </h1>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-lg md:text-xl text-[#64648c] max-w-lg my-8"
              >
                We craft exceptional digital experiences that transform ideas
                into powerful, scalable applications. Your vision, our
                expertise.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex gap-4 text-sm"
              >
                <Link href="/contact">
                  <Button icon={<ArrowRight className="w-5 h-5" />}>
                    Book a Call
                  </Button>
                </Link>
                <Link href="/work">
                  <Button variant="outline">View Our Work</Button>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right Image Side - Full Height */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-full lg:w-1/2 h-full relative hidden lg:block"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1580983568724-329ea199c2ac?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Team working on software development"
              className="hero-image"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <Section background="surface" id="services">
        <div className="flex justify-between gap-20">
          <ScrollReveal>
            <div className="text-start mb-16">
              <span className="inline-block px-4 py-1.5 bg-[#E0D9FF]/50 rounded-md text-sm font-medium text-primary-dark mb-4">
                Our Services
              </span>
              <h2 className="font-['Plus_Jakarta_Sans'] text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4">
                What We Do Best
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl">
                From concept to deployment, we deliver end-to-end solutions
                tailored to your business needs.
              </p>
            </div>
          </ScrollReveal>

          <Accordion className="font-['Plus_Jakarta_Sans'] mt-40">
            <AccordionItem
              key="anchor"
              aria-label="Web Development"
              indicator={<AnchorIcon />}
              title="Web Development"
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key="moon"
              aria-label="Moon"
              indicator={<MoonIcon />}
              title="Moon"
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key="sun"
              aria-label="Sun"
              indicator={<SunIcon />}
              title="Sun"
            >
              {defaultContent}
            </AccordionItem>
          </Accordion>
        </div>

        <ScrollReveal delay={0.4}>
          <div className="text-strat mt-12">
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

      {/* Featured Work Section */}
      <Section id="work">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#E0D9FF]/50 rounded-md text-sm font-medium text-primary mb-4">
                Featured Work
              </span>
              <h2 className="font-['Plus_Jakarta_Sans'] text-4xl md:text-5xl font-bold text-[#1a1a2e]">
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
                  className="group relative rounded-2xl overflow-hidden"
                  whileHover={{ y: -8 }}
                >
                  {/* Project Image Placeholder */}
                  <div
                    className="aspect-[4/3] relative"
                    style={{ backgroundColor: project.color }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-2xl bg-white/50 backdrop-blur flex items-center justify-center">
                        <Code className="w-10 h-10 text-primary" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/80 via-transparent to-transparent" />
                  </div>

                  {/* Project Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur rounded-md text-xs font-medium mb-3">
                      {project.category}
                    </span>
                    <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold mb-1">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Why Us - Bento Grid */}
      <Section background="surface" id="why-us">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#E0D9FF]/50 rounded-md text-sm font-medium text-primary mb-4">
              Why Choose Us
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4">
              Numbers That Speak
            </h2>
            <p className="text-[#64648c] text-lg max-w-2xl mx-auto">
              We measure our success by the results we deliver for our clients.
            </p>
          </div>
        </ScrollReveal>

        <BentoGrid>
          {/* Large Feature Card */}
          <BentoItem colSpan={2} accent="lavender" delay={0.1}>
            <div className="h-full flex flex-col justify-between min-h-[200px]">
              <div>
                <Sparkles className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#1a1a2e] mb-2">
                  Innovation-First Approach
                </h3>
                <p className="text-[#64648c]">
                  We stay ahead of the curve, utilizing cutting-edge
                  technologies and methodologies to deliver solutions that stand
                  the test of time.
                </p>
              </div>
            </div>
          </BentoItem>

          {/* Stats Cards */}
          {stats.map((stat, index) => (
            <BentoItem
              key={stat.label}
              accent={stat.color}
              delay={0.2 + index * 0.1}
            >
              <div className="text-center py-4">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[#1a1a2e] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-[#64648c]">{stat.label}</div>
              </div>
            </BentoItem>
          ))}

          {/* Wide Card */}
          <BentoItem colSpan={2} accent="mint" delay={0.5}>
            <div className="flex items-center gap-6">
              <Cloud className="w-12 h-12 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#1a1a2e] mb-1">
                  Cloud-Native Architecture
                </h3>
                <p className="text-[#64648c]">
                  Scalable, secure, and performant solutions built for the
                  modern web.
                </p>
              </div>
            </div>
          </BentoItem>
        </BentoGrid>
      </Section>

      {/* Testimonial Section */}
      <Section id="testimonials">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-[#E0D9FF]/50 rounded-md text-sm font-medium text-primary mb-8">
              What Clients Say
            </span>
            <AnimatedTestimonials testimonials={testimonials} />
            {/* <blockquote className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-medium text-[#1a1a2e] mb-8 leading-relaxed">
              &ldquo;Codology transformed our digital presence completely. Their
              attention to detail and commitment to excellence exceeded all our
              expectations. The team delivered a product that truly represents
              our brand.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-md bg-[#E0D9FF] flex items-center justify-center">
                <span className="font-bold text-primary">JD</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-[#1a1a2e]">John Doe</div>
                <div className="text-sm text-[#64648c]">
                  CEO, TechStart Inc.
                </div>
              </div>
            </div> */}
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
