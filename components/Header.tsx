"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/page", label: "Page" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-3 transition-all duration-300 ${
        isScrolled ? "bg-white/10 backdrop-blur-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/blue-logo-removebg-preview 1.png"
            alt="Bliss Serenity"
            width={1000}
            height={1000}
            priority
            className="w-24 sm:w-32 md:w-[8vw]"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 w-10 h-10 flex flex-col justify-center items-end gap-1.5"
        >
          <span
            className={`h-0.5 bg-white transition-all duration-300 origin-right ${
              isOpen ? "w-full rotate-[-40deg] translate-y-[1px]" : "w-full"
            }`}
          />
          <span
            className={`h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "w-0 opacity-0" : "w-[80%]"
            }`}
          />
          <span
            className={`h-0.5 bg-white transition-all duration-300 origin-right ${
              isOpen ? "w-full rotate-[40deg] translate-y-[-1px]" : "w-[65%]"
            }`}
          />
        </button>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-white hover:opacity-80 transition px-4 py-2 rounded-full ${
                pathname === item.href ? "bg-secondary" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Contact Button */}
        <Link
          href="/contact"
          className="hidden md:block bg-primary text-white px-6 py-2.5 rounded-full hover:opacity-80 transition"
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-sm">
          <nav className="flex flex-col space-y-2 px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-white hover:opacity-80 transition px-4 py-2 rounded-full ${
                  pathname === item.href ? "bg-primary" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-white text-primary px-4 py-2 rounded-full hover:opacity-80 transition text-center"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
