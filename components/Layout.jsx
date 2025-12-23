"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Mic, Home, User, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

export function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl tracking-tight text-stone-900">
            CT
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
              Home
            </Link>
            <Link href="/about-cherice" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
              About
            </Link>
            <Link href="/podcast-episodes" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
              Podcast
            </Link>
            <Link href="/contact" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
              Contact
            </Link>
            <Link href="/mfeg" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
              MFEG
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-stone-600 hover:text-stone-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-100 px-6 py-4">
            <div className="flex flex-col gap-4">
              <Link href="/" className="flex items-center gap-3 text-stone-600 hover:text-stone-900" onClick={() => setMobileMenuOpen(false)}>
                <Home className="w-5 h-5" />
                <span>Home</span>
              </Link>
              <Link href="/about-cherice" className="flex items-center gap-3 text-stone-600 hover:text-stone-900" onClick={() => setMobileMenuOpen(false)}>
                <User className="w-5 h-5" />
                <span>About</span>
              </Link>
              <Link href="/podcast-episodes" className="flex items-center gap-3 text-stone-600 hover:text-stone-900" onClick={() => setMobileMenuOpen(false)}>
                <Mic className="w-5 h-5" />
                <span>Podcast</span>
              </Link>
              <Link href="/contact" className="flex items-center gap-3 text-stone-600 hover:text-stone-900" onClick={() => setMobileMenuOpen(false)}>
                <Mail className="w-5 h-5" />
                <span>Contact</span>
              </Link>
              <Link href="/mfeg" className="flex items-center gap-3 text-stone-600 hover:text-stone-900" onClick={() => setMobileMenuOpen(false)}>
                <span className="w-5 h-5 flex items-center justify-center font-serif text-xs font-bold border border-current rounded-sm">M</span>
                <span>MFEG</span>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="font-serif text-xl tracking-tight text-stone-900">Cherice Taylor</p>
              <p className="text-xs text-stone-400 mt-1 mb-4">Educator • Podcast Host • Mentor</p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="https://www.facebook.com/cherice.f.taylor" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-900 transition-colors hover:-translate-y-1 transition-transform">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/chericeflanagan/" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-900 transition-colors hover:-translate-y-1 transition-transform">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/chericetaylor/" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-900 transition-colors hover:-translate-y-1 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="flex gap-8 text-sm text-stone-500">
              <Link href="/" className="hover:text-stone-900 transition-colors">Home</Link>
              <Link href="/about-cherice" className="hover:text-stone-900 transition-colors">About</Link>
              <Link href="/podcast-episodes" className="hover:text-stone-900 transition-colors">Podcast</Link>
              <Link href="/contact" className="hover:text-stone-900 transition-colors">Contact</Link>
              <Link href="/mfeg" className="hover:text-stone-900 transition-colors">MFEG</Link>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-stone-100 text-center text-xs text-stone-400">
            <p>© {new Date().getFullYear()} Cherice Taylor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
