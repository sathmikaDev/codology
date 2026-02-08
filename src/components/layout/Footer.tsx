"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone, Github, Linkedin, Twitter, Instagram, Sparkles } from "lucide-react";

const footerLinks = {
    services: [
        { label: "Web Development", href: "/services#web" },
        { label: "Mobile Apps", href: "/services#mobile" },
        { label: "UI/UX Design", href: "/services#design" },
        { label: "Cloud Solutions", href: "/services#cloud" },
        { label: "AI Integration", href: "/services#ai" },
    ],
    company: [
        { label: "About Us", href: "/about" },
        { label: "Our Work", href: "/work" },
        { label: "Careers", href: "/careers" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
    ],
};

const socialLinks = [
    { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:bg-sky-500" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:bg-blue-600" },
    //{ icon: Github, href: "https://github.com", label: "GitHub", color: "hover:bg-gray-700" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500" },
];

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-[#0a0f1e] via-[#0d1425] to-[#111827] text-white relative overflow-hidden">
            {/* Ambient background effects */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
                {/* CTA Section - Enhanced */}
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        {/* Gradient border effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 rounded-3xl opacity-75 group-hover:opacity-100 blur transition-all duration-500" />
                        
                        <div className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-sky-500 rounded-3xl p-12 md:p-16 overflow-hidden">
                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-400/10 rounded-full blur-2xl" />
                            
                            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="flex-1">
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-4">
                                        <Sparkles className="w-4 h-4" />
                                        <span>Let's Work Together</span>
                                    </div>
                                    <h2 className="font-['Plus_Jakarta_Sans'] text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight">
                                        Ready to scale your business?
                                    </h2>
                                    <p className="text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed">
                                        Let's build something extraordinary together. Transform your vision into reality.
                                    </p>
                                </div>
                                <Link href="/services">
                                    <motion.button
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="group flex items-center gap-3 px-8 py-5 bg-white text-blue-600 font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-white/20 transition-all duration-300"
                                    >
                                        Start a Project
                                        <ArrowUpRight className="w-6 h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </motion.button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Main Footer Content */}
                <div className="border-t border-white/5">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
                            {/* Brand Section - Enhanced */}
                            <div className="lg:col-span-4">
                                <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-sky-500 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-shadow">
                                        <span className="text-white font-bold text-xl">C</span>
                                    </div>
                                    <span className="font-['Plus_Jakarta_Sans'] font-bold text-2xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                        Codology
                                    </span>
                                </Link>
                                <p className="text-gray-400 mb-8 text-base leading-relaxed max-w-sm">
                                    We craft exceptional digital experiences that drive growth and transform businesses through innovative technology.
                                </p>
                                
                                {/* Social Links - Enhanced */}
                                <div className="flex gap-3">
                                    {socialLinks.map((social) => (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ y: -4, scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className={`w-11 h-11 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center ${social.color} hover:border-transparent transition-all duration-300 group`}
                                            aria-label={social.label}
                                        >
                                            <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            {/* Services */}
                            <div className="lg:col-span-2">
                                <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-base uppercase tracking-wider text-white mb-6">
                                    Services
                                </h4>
                                <ul className="space-y-3">
                                    {footerLinks.services.map((link, index) => (
                                        <motion.li
                                            key={link.label}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            <Link
                                                href={link.href}
                                                className="text-gray-400 hover:text-white transition-colors text-sm inline-flex items-center gap-2 group"
                                            >
                                                <span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                {link.label}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            {/* Company */}
                            <div className="lg:col-span-2">
                                <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-base uppercase tracking-wider text-white mb-6">
                                    Company
                                </h4>
                                <ul className="space-y-3">
                                    {footerLinks.company.map((link, index) => (
                                        <motion.li
                                            key={link.label}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            <Link
                                                href={link.href}
                                                className="text-gray-400 hover:text-white transition-colors text-sm inline-flex items-center gap-2 group"
                                            >
                                                <span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                {link.label}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            {/* Contact Info - Enhanced */}
                            <div className="lg:col-span-4">
                                <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-base uppercase tracking-wider text-white mb-6">
                                    Get in Touch
                                </h4>
                                <ul className="space-y-5">
                                    <motion.li
                                        whileHover={{ x: 4 }}
                                        className="flex items-start gap-4 group cursor-pointer"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                                            <Mail className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">Email</p>
                                            <a href="mailto:hello@Codology.dev" className="text-gray-300 hover:text-white transition-colors">
                                                hello@Codology.dev
                                            </a>
                                        </div>
                                    </motion.li>
                                    <motion.li
                                        whileHover={{ x: 4 }}
                                        className="flex items-start gap-4 group cursor-pointer"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-500/20 transition-colors">
                                            <Phone className="w-5 h-5 text-sky-400" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">Phone</p>
                                            <a href="tel:+15551234567" className="text-gray-300 hover:text-white transition-colors block">
                                                +94 (76) 606 0331
                                            </a>
                                            <a href="tel:+15551234567" className="text-gray-300 hover:text-white transition-colors block">
                                                +94 (71) 963 5705
                                            </a>
                                        </div>
                                    </motion.li>
                                    <motion.li
                                        whileHover={{ x: 4 }}
                                        className="flex items-start gap-4 group cursor-pointer"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                                            <MapPin className="w-5 h-5 text-cyan-400" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">Location</p>
                                            <span className="text-gray-300 group-hover:text-white transition-colors">
                                                XB5, Edmonton Rd.<br />Colombo 5, Sri Lanka
                                            </span>
                                        </div>
                                    </motion.li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar - Enhanced */}
                <div className="border-t border-white/5">
                    <div className="max-w-7xl mx-auto px-6 py-8">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <p className="text-gray-500 text-sm">
                                © {new Date().getFullYear()} Codology. All rights reserved. Crafted with{" "}
                                <span className="text-red-400">♥</span> in Sri Lanka
                            </p>
                            <div className="flex items-center gap-8">
                                <Link
                                    href="/privacy"
                                    className="text-gray-500 hover:text-white text-sm transition-colors relative group"
                                >
                                    Privacy Policy
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-sky-400 group-hover:w-full transition-all duration-300" />
                                </Link>
                                <Link
                                    href="/terms"
                                    className="text-gray-500 hover:text-white text-sm transition-colors relative group"
                                >
                                    Terms of Service
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-sky-400 group-hover:w-full transition-all duration-300" />
                                </Link>
                                <Link
                                    href="/cookies"
                                    className="text-gray-500 hover:text-white text-sm transition-colors relative group"
                                >
                                    Cookie Policy
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-sky-400 group-hover:w-full transition-all duration-300" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}