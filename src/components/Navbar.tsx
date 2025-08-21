"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const navItems = [
  { label: "About", to: "about" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200/40 dark:border-gray-800/40 backdrop-blur-sm bg-white/60 dark:bg-gray-900/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo with animation */}
        <div
          className="text-xl font-extrabold text-indigo-700 dark:text-indigo-300 tracking-tight cursor-pointer animate-popIn"
          onClick={() =>
            scroll.scrollToTop({ duration: 600, smooth: "easeInOutQuart" })
          }
        >
          <span className="hover:tracking-widest transition-all duration-300">
            MyPortfolio
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 dark:text-gray-200">
          <div className="flex gap-6 items-center">
            {navItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                smooth={true}
                duration={600}
                offset={-80}
                spy={true}
                activeClass="nav-active"
                className="text-sm uppercase tracking-wide hover:text-indigo-600 cursor-pointer transition relative px-1"
              >
                {item.label}
                <span className="nav-underline"></span>
              </ScrollLink>
            ))}
          </div>
          <Link
            href="/contact"
            className="ml-4 inline-flex items-center gap-2 rounded-full px-4 py-2 bg-indigo-600 text-white text-sm font-medium shadow-sm hover:bg-indigo-700 transition"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden px-6 py-4 space-y-3 border-t border-gray-200/40 dark:border-gray-800/40 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm animate-fadeInUp">
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth={true}
              duration={600}
              offset={-80}
              spy={true}
              activeClass="nav-active"
              className="block text-gray-800 dark:text-gray-200 hover:text-indigo-600 cursor-pointer py-1"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </ScrollLink>
          ))}
          <Link
            href="/contact"
            className="block text-gray-800 dark:text-gray-200 hover:text-indigo-600 py-1"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
