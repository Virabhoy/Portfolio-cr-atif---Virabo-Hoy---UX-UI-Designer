"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/language-context";
import { Menu, X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const prefix = isHome ? "" : "/";
  const navLinks = [
    { href: `${prefix}#about`, label: t("nav.about") },
    { href: `${prefix}#projects`, label: t("nav.projects") },
    { href: `${prefix}#cours`, label: t("nav.courses") },
    { href: `${prefix}#skills`, label: t("nav.skills") },
    { href: `${prefix}#contact`, label: t("nav.contact") },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group">
          <Image
            src="/images/logo.png"
            alt="Virabo Hoy"
            width={56}
            height={56}
            className="transition-transform group-hover:scale-110"
            priority
            sizes="56px"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-medium transition-colors hover:text-primary",
                isScrolled ? "text-foreground" : "text-white"
              )}
            >
              {link.label}
            </Link>
          ))}

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className={cn(
              "flex items-center gap-2 px-3 py-1.5 rounded-full border-2 transition-all hover:bg-primary hover:text-white hover:border-primary",
              isScrolled
                ? "border-foreground text-foreground"
                : "border-white text-white"
            )}
            aria-label="Toggle language"
          >
            <Globe className="w-4 h-4" />
            <span className="text-sm font-medium uppercase">{language}</span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "md:hidden p-2 rounded-lg transition-colors",
            isScrolled ? "text-foreground" : "text-white"
          )}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container-custom py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              {link.label}
            </Link>
          ))}

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-foreground text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all w-fit"
          >
            <Globe className="w-4 h-4" />
            <span className="text-sm font-medium">
              {language === "fr" ? "English" : "Français"}
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}
