"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Loader2,
  Clock,
  MessageSquare,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@Codology.dev",
    description: "We'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 (555) 123-4567",
    description: "Mon-Fri, 9am-6pm EST",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "San Francisco, CA",
    description: "123 Innovation Drive",
  },
];

const budgetOptions = [
  { value: "", label: "Select a budget range" },
  { value: "5k-10k", label: "$5,000 - $10,000" },
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: "50k+", label: "$50,000+" },
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#FAFAFC] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D6F5F0]/30 rounded-md blur-3xl -translate-y-1/2 translate-x-1/3" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-[#E0D9FF]/50 rounded-md text-sm font-medium text-primary mb-6">
                Contact Us
              </span>
              <h1 className="font-['Plus_Jakarta_Sans'] text-5xl md:text-6xl font-bold text-[#1a1a2e] mb-6">
                Let's Build Something{" "}
                <span className="bg-gradient-to-r from-primary to-[#7c3aed] bg-clip-text text-transparent">
                  Amazing
                </span>
              </h1>
              <p className="text-xl text-[#64648c]">
                Have a project in mind? We'd love to hear about it. Get in touch
                and let's create something extraordinary together.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info Cards */}
      <Section background="white">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <ScrollReveal key={info.title} delay={index * 0.1}>
              <motion.div
                className="bg-[#FAFAFC] rounded-2xl p-6 text-center hover:bg-white hover:shadow-[0_8px_40px_rgba(59,40,204,0.1)] transition-all"
                whileHover={{ y: -4 }}
              >
                <div className="w-14 h-14 rounded-xl bg-[#E0D9FF]/50 mx-auto mb-4 flex items-center justify-center">
                  <info.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#1a1a2e] mb-1">
                  {info.title}
                </h3>
                <p className="text-primary font-medium mb-1">{info.value}</p>
                <p className="text-sm text-[#64648c]">{info.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Contact Form & Info */}
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(59,40,204,0.06)]">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 rounded-md bg-[#D6F5F0] mx-auto mb-6 flex items-center justify-center">
                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                      </div>
                      <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#1a1a2e] mb-3">
                        Message Sent!
                      </h3>
                      <p className="text-[#64648c] mb-6">
                        Thank you for reaching out. We'll get back to you within
                        24 hours.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-[#1a1a2e] mb-2">
                            Your Name *
                          </label>
                          <input
                            {...register("name")}
                            type="text"
                            placeholder="John Doe"
                            className={`w-full px-4 py-3 rounded-xl border ${errors.name
                                ? "border-red-400"
                                : "border-[#E0D9FF]/50"
                              } bg-[#FAFAFC] focus:outline-none focus:border-primary transition-colors`}
                          />
                          {errors.name && (
                            <p className="mt-1 text-sm text-red-500">
                              {errors.name.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#1a1a2e] mb-2">
                            Email Address *
                          </label>
                          <input
                            {...register("email")}
                            type="email"
                            placeholder="john@company.com"
                            className={`w-full px-4 py-3 rounded-xl border ${errors.email
                                ? "border-red-400"
                                : "border-[#E0D9FF]/50"
                              } bg-[#FAFAFC] focus:outline-none focus:border-primary transition-colors`}
                          />
                          {errors.email && (
                            <p className="mt-1 text-sm text-red-500">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-[#1a1a2e] mb-2">
                            Company
                          </label>
                          <input
                            {...register("company")}
                            type="text"
                            placeholder="Your Company"
                            className="w-full px-4 py-3 rounded-xl border border-[#E0D9FF]/50 bg-[#FAFAFC] focus:outline-none focus:border-primary transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#1a1a2e] mb-2">
                            Budget Range
                          </label>
                          <select
                            {...register("budget")}
                            className="w-full px-4 py-3 rounded-xl border border-[#E0D9FF]/50 bg-[#FAFAFC] focus:outline-none focus:border-primary transition-colors"
                          >
                            {budgetOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#1a1a2e] mb-2">
                          Your Message *
                        </label>
                        <textarea
                          {...register("message")}
                          placeholder="Tell us about your project..."
                          rows={5}
                          className={`w-full px-4 py-3 rounded-xl border ${errors.message
                              ? "border-red-400"
                              : "border-[#E0D9FF]/50"
                            } bg-[#FAFAFC] focus:outline-none focus:border-primary transition-colors resize-none`}
                        />
                        {errors.message && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.message.message}
                          </p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        fullWidth
                        disabled={isSubmitting}
                        icon={
                          isSubmitting ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                          ) : (
                            <Send className="w-5 h-5" />
                          )
                        }
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2">
            <ScrollReveal delay={0.2}>
              <div className="space-y-6">
                {/* Quick Response */}
                <div className="bg-[#E0D9FF]/30 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[#1a1a2e]">
                      Quick Response
                    </h3>
                  </div>
                  <p className="text-[#64648c] text-sm">
                    We typically respond to all inquiries within 24 hours. For
                    urgent matters, feel free to call us directly.
                  </p>
                </div>

                {/* What to Expect */}
                <div className="bg-[#D6F5F0]/30 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare className="w-6 h-6 text-primary" />
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[#1a1a2e]">
                      What to Expect
                    </h3>
                  </div>
                  <ul className="space-y-3 text-sm text-[#64648c]">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      Initial consultation to understand your needs
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      Detailed proposal with timeline and cost estimate
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      Transparent communication throughout the project
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      Ongoing support after launch
                    </li>
                  </ul>
                </div>

                {/* Office Hours */}
                <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(59,40,204,0.06)]">
                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[#1a1a2e] mb-4">
                    Office Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#64648c]">Monday - Friday</span>
                      <span className="font-medium text-[#1a1a2e]">
                        9:00 AM - 6:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#64648c]">Saturday</span>
                      <span className="font-medium text-[#1a1a2e]">
                        10:00 AM - 2:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#64648c]">Sunday</span>
                      <span className="font-medium text-[#1a1a2e]">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>
    </>
  );
}
