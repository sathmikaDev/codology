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
  Sparkles,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  budget: z.string().min(1, "Please select a budget or choose 'Not sure yet'"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@Codology.dev",
    description: "We'll respond within 24 hours",
    gradient: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-500/10 to-blue-600/10",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: ["+94 (76) 606 0331", "+94 (71) 963 5705"],
    description: "Mon-Fri, 9am-6pm EST",
    gradient: "from-sky-500 to-cyan-500",
    bgGradient: "from-sky-500/10 to-cyan-500/10",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "Colombo 5, Sri Lanka",
    description: "XB5, Edmonton Rd.",
    gradient: "from-indigo-500 to-blue-600",
    bgGradient: "from-indigo-500/10 to-blue-600/10",
  },
];

const budgetOptions = [
  { value: "", label: "Select a budget range" },
  { value: "not-sure", label: "Not sure yet – need guidance" },
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
      {/* Hero Section*/}
      <section className="pt-32 pb-24 bg-gradient-to-br from-[#FAFAFC] via-white to-blue-50/30 relative overflow-hidden">
        {/* Animated gradient orbs*/}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/20 via-sky-400/20 to-cyan-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-400/15 via-blue-400/15 to-sky-400/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
        
        {/* Floating decorative elements*/}
        <motion.div
          className="absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl backdrop-blur-sm"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-sky-500/20 to-cyan-500/20 rounded-full backdrop-blur-sm"
          animate={{
            y: [0, 20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              {/* Enhanced badge*/}
              <br />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-sky-500/10 backdrop-blur-sm border border-blue-200/50 rounded-full text-sm font-medium text-blue-700 mb-8 shadow-sm"
              >
                <Sparkles className="w-4 h-4" />
                <span>Let's Create Together</span>
              </motion.div>

              <h1 className="font-['Plus_Jakarta_Sans'] text-6xl md:text-7xl lg:text-8xl font-bold text-[#1a1a2e] mb-6 leading-tight">
                Let's Build Something{" "}
                <span className="bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 bg-clip-text text-transparent inline-block">
                  Extraordinary
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-[#64648c] max-w-2xl mx-auto leading-relaxed">
                Have a project in mind? We'd love to hear about it. Get in touch
                and let's create something extraordinary together.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info Cards*/}
      <Section background="white">
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {contactInfo.map((info, index) => (
            <ScrollReveal key={info.title} delay={index * 0.1}>
              <motion.div
                className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-100 hover:border-blue-200 transition-all duration-300 overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${info.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${info.gradient} mx-auto mb-5 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#1a1a2e] mb-2">
                    {info.title}
                  </h3>
                  {Array.isArray(info.value) ? (
                    info.value.map((v, i) => (
                      <p key={i} className="text-blue-600 font-semibold text-lg">
                        {v}
                      </p>
                    ))
                  ) : (
                    <p className="text-blue-600 font-semibold text-lg break-all">{info.value}</p>
                  )}
                  <p className="text-sm text-[#64648c] mt-2">{info.description}</p>
                </div>
                
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/5 to-transparent rounded-bl-3xl" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Contact Form & Info */}
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <ScrollReveal>
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 border border-gray-100 shadow-[0_8px_40px_rgba(59,130,246,0.1)]">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="text-center py-16"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", duration: 0.6 }}
                        className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 mx-auto mb-6 flex items-center justify-center shadow-2xl"
                      >
                        <CheckCircle2 className="w-12 h-12 text-white" />
                      </motion.div>
                      <h3 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[#1a1a2e] mb-4">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-[#64648c] text-lg mb-8 max-w-md mx-auto">
                        Thank you for reaching out. We'll get back to you within
                        24 hours with next steps.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => setIsSubmitted(false)}
                        icon={<ArrowRight className="w-5 h-5" />}
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
                          <label className="block text-sm font-semibold text-[#1a1a2e] mb-2">
                            Your Name *
                          </label>
                          <input
                            {...register("name")}
                            type="text"
                            placeholder="John Doe"
                            className={`w-full px-5 py-4 rounded-2xl border-2 ${
                              errors.name
                                ? "border-red-400 bg-red-50/50"
                                : "border-gray-200 bg-gray-50/50"
                            } focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 placeholder:text-gray-400`}
                          />
                          {errors.name && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mt-2 text-sm text-red-500 flex items-center gap-1"
                            >
                              {errors.name.message}
                            </motion.p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-[#1a1a2e] mb-2">
                            Email Address *
                          </label>
                          <input
                            {...register("email")}
                            type="email"
                            placeholder="john@company.com"
                            className={`w-full px-5 py-4 rounded-2xl border-2 ${
                              errors.email
                                ? "border-red-400 bg-red-50/50"
                                : "border-gray-200 bg-gray-50/50"
                            } focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 placeholder:text-gray-400`}
                          />
                          {errors.email && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mt-2 text-sm text-red-500"
                            >
                              {errors.email.message}
                            </motion.p>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-[#1a1a2e] mb-2">
                            Company
                          </label>
                          <input
                            {...register("company")}
                            type="text"
                            placeholder="Your Company"
                            className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 bg-gray-50/50 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 placeholder:text-gray-400"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-[#1a1a2e] mb-2">
                            Budget Range *
                          </label>
                          <select
                            {...register("budget")}
                            className={`w-full px-5 py-4 rounded-2xl border-2 ${
                              errors.budget
                                ? "border-red-400 bg-red-50/50"
                                : "border-gray-200 bg-gray-50/50"
                            } focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 cursor-pointer`}
                          >
                            {budgetOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                          {errors.budget && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mt-2 text-sm text-red-500"
                            >
                              {errors.budget.message}
                            </motion.p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#1a1a2e] mb-2">
                          Your Message *
                        </label>
                        <textarea
                          {...register("message")}
                          placeholder="Tell us about your project, goals, and timeline..."
                          rows={6}
                          className={`w-full px-5 py-4 rounded-2xl border-2 ${
                            errors.message
                              ? "border-red-400 bg-red-50/50"
                              : "border-gray-200 bg-gray-50/50"
                          } focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 resize-none placeholder:text-gray-400`}
                        />
                        {errors.message && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-2 text-sm text-red-500"
                          >
                            {errors.message.message}
                          </motion.p>
                        )}
                      </div>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
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
                          className="bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40"
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </motion.div>

                      <p className="text-sm text-center text-gray-500">
                        We respect your privacy. Your information is secure and will never be shared.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          </div>

          {/* Sidebar*/}
          <div className="lg:col-span-2">
            <ScrollReveal delay={0.2}>
              <div className="space-y-6 sticky top-24">
                {/* Quick Response */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-3xl p-6 border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-sky-500 flex items-center justify-center shadow-lg">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#1a1a2e]">
                      Quick Response
                    </h3>
                  </div>
                  <p className="text-[#64648c] leading-relaxed">
                    We typically respond to all inquiries within 24 hours. For
                    urgent matters, feel free to call us directly.
                  </p>
                </motion.div>

                {/* What to Expect */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-6 border border-cyan-100 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#1a1a2e]">
                      What to Expect
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Initial consultation to understand your needs",
                      "Detailed proposal with timeline and cost estimate",
                      "Transparent communication throughout the project",
                      "Ongoing support after launch",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 text-[#64648c]"
                      >
                        <div className="mt-0.5">
                          <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                        </div>
                        <span className="leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Office Hours */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#1a1a2e] mb-5">
                    Office Hours
                  </h3>
                  <div className="space-y-3">
                    {[
                      { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                      { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
                      { day: "Sunday", hours: "Closed" },
                    ].map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                      >
                        <span className="text-[#64648c] font-medium">{schedule.day}</span>
                        <span className="font-semibold text-[#1a1a2e] text-sm bg-blue-50 px-3 py-1 rounded-lg">
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>
    </>
  );
}