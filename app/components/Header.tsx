"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-2xl font-light text-white">
            <span className="italic">Bliss </span>
            <span className="font-normal">Serenity</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-white hover:text-teal-200 transition px-4 py-2 rounded-full bg-teal-700"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-teal-200 transition"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-white hover:text-teal-200 transition"
          >
            Services
          </Link>
          <Link
            href="/page"
            className="text-white hover:text-teal-200 transition"
          >
            Page
          </Link>
        </nav>

        {/* Contact Button */}
        <Link
          href="/contact"
          className="bg-teal-700 text-white px-6 py-2.5 rounded-full hover:bg-teal-600 transition"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}
