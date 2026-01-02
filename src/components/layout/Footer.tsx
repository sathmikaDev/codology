"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone, Github, Linkedin, Twitter, Instagram } from "lucide-react";

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
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

export default function Footer() {
    return (
        <footer className="bg-[#040813] text-white">
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="bg-[#7E9CFC] rounded-xl p-12 md:p-16">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl font-bold mb-3 text-white">
                                Ready to scale your business?
                            </h2>
                            <p className="text-white/80 text-lg max-w-md">
                                Let&apos;s build something extraordinary together.
                            </p>
                        </div>
                        <Link href="/contact">
                            <button className="flex items-center gap-2 px-8 py-4 bg-white text-[#040813] font-semibold rounded-md hover:opacity-90 transition-opacity">
                                Start a Project
                                <ArrowUpRight className="w-5 h-5" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div className="lg:col-span-1">
                            <Link href="/" className="flex items-center gap-2 mb-6">
                                <div className="w-10 h-10 rounded-md bg-[#7E9CFC] flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">C</span>
                                </div>
                                <span className="font-['Plus_Jakarta_Sans'] font-bold text-xl">
                                    Codology
                                </span>
                            </Link>
                            <p className="text-white/60 mb-6 text-sm leading-relaxed">
                                We craft exceptional digital experiences that drive growth.
                            </p>
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-md border border-white/20 flex items-center justify-center hover:bg-[#7E9CFC] hover:border-[#7E9CFC] transition-colors"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="font-['Plus_Jakarta_Sans'] font-semibold text-sm uppercase tracking-wider text-[#7E9CFC] mb-6">
                                Services
                            </h4>
                            <ul className="space-y-3">
                                {footerLinks.services.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-white/60 hover:text-white transition-colors text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-['Plus_Jakarta_Sans'] font-semibold text-sm uppercase tracking-wider text-[#7E9CFC] mb-6">
                                Company
                            </h4>
                            <ul className="space-y-3">
                                {footerLinks.company.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-white/60 hover:text-white transition-colors text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-['Plus_Jakarta_Sans'] font-semibold text-sm uppercase tracking-wider text-[#7E9CFC] mb-6">
                                Get in Touch
                            </h4>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <Mail className="w-5 h-5 text-[#7E9CFC] mt-0.5" />
                                    <span className="text-white/60 text-sm">hello@Codology.dev</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Phone className="w-5 h-5 text-[#7E9CFC] mt-0.5" />
                                    <span className="text-white/60 text-sm">+1 (555) 123-4567</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-[#7E9CFC] mt-0.5" />
                                    <span className="text-white/60 text-sm">
                                        123 Innovation Drive<br />San Francisco, CA 94102
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/40 text-sm">
                        © {new Date().getFullYear()} Codology. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="text-white/40 hover:text-white text-sm transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-white/40 hover:text-white text-sm transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
