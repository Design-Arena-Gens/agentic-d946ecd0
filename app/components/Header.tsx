'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 no-underline">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">&lt;/&gt;</span>
            </div>
            <span className="text-2xl font-bold text-dark hover:text-primary">Code Tricks</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="font-semibold hover:text-secondary no-underline">
              Home
            </Link>
            <Link href="/articles" className="font-semibold hover:text-secondary no-underline">
              Articles
            </Link>
            <Link href="/about" className="font-semibold hover:text-secondary no-underline">
              About
            </Link>
            <button className="btn-primary">
              Subscribe
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-4">
              <Link href="/" className="font-semibold hover:text-secondary no-underline">
                Home
              </Link>
              <Link href="/articles" className="font-semibold hover:text-secondary no-underline">
                Articles
              </Link>
              <Link href="/about" className="font-semibold hover:text-secondary no-underline">
                About
              </Link>
              <button className="btn-primary w-full">
                Subscribe
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
