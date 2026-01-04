"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useBanner } from "@/context/BannerContext";
import "../../../public/codology-02.png";
import ButtonV2 from "../ui/ButtonV2";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { isBannerVisible } = useBanner();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed border-b border-[#040813]/10 ${
          isBannerVisible ? "top-14" : "top-0"
        } left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-3 bg-white" : "py-5 bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div>
              <img
                src="/codology-02.png"
                alt="Codology Logo"
                className="w-40"
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="relative">
                <span
                  className={`text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-[#7E9CFC]"
                      : "text-[#040813] hover:text-[#7E9CFC]"
                  }`}
                >
                  {link.label}
                </span>
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#7E9CFC]" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link href="/contact">
              {/* <button className="px-6 py-3 bg-dark text-white text-sm font-medium rounded-full hover:opacity-90 transition-opacity cursor-pointer">
                Start a Project
              </button> */}
              <ButtonV2 />
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#040813]" />
            ) : (
              <Menu className="w-6 h-6 text-[#040813]" />
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-white z-[100] flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#040813]/10">
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="w-10 h-10 rounded-md bg-[#7E9CFC] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <span className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-[#040813]">
                  Codology
                </span>
              </Link>
              <button
                className="p-2"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-[#040813]" />
              </button>
            </div>

            <nav className="flex flex-col px-6 py-6 gap-2 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-4 px-4 rounded-md text-lg font-medium ${
                    pathname === link.href
                      ? "bg-[#7E9CFC]/10 text-[#7E9CFC]"
                      : "text-[#040813]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {/* <button className="w-full py-4 bg-[#7E9CFC] text-white font-medium text-lg rounded-md">
                    Start a Project
                  </button> */}
                  <ButtonV2 />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
