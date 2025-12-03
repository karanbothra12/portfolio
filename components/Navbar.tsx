"use client";

import * as React from "react";
import Link from "next/link";
import {
  Home,
  User,
  Briefcase,
  Code2,
  FolderOpen,
  Mail,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Services", href: "#services", icon: Sparkles },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Skills", href: "#skills", icon: Code2 },
  { name: "Projects", href: "#projects", icon: FolderOpen },
  { name: "Contact", href: "#contact", icon: Mail },
];

export function Navbar() {
  const [activeSection, setActiveSection] = React.useState("hero");

  // Improved scroll spy with IntersectionObserver
  React.useEffect(() => {
    const sections = navItems.map((item) => item.href.substring(1));

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -65% 0px", // adjust highlight window
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (window.scrollY < 120) {
        setActiveSection("hero");
        return;
      }

      if (scrollPosition >= documentHeight - 10) {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto flex flex-col md:flex-row md:items-center gap-2 rounded-full border border-gray-200 bg-white/80 p-2 shadow-lg backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 px-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:text-gray-50 dark:hover:bg-gray-800",
                activeSection === item.href.substring(1)
                  ? "bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900"
                  : "text-gray-500 dark:text-gray-400"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Icon Nav */}
        <nav className="flex md:hidden items-center justify-between gap-2 px-2 w-full">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800",
                activeSection === item.href.substring(1)
                  ? "bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900"
                  : ""
              )}
            >
              <item.icon className="h-4 w-4" />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
