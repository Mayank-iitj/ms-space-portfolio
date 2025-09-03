"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const SOCIAL_LINKS = [
  {
    alt: 'LinkedIn',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f4cf68ac-4224-41d1-b72e-20703ea573d6-space-portolio-vercel-app/assets/svgs/instagram-1.svg?',
    href: 'https://linkedin.com',
  },
  {
    alt: 'GitHub',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f4cf68ac-4224-41d1-b72e-20703ea573d6-space-portolio-vercel-app/assets/svgs/discord-3.svg?',
    href: 'https://github.com',
  },
];

const logoAsset = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f4cf68ac-4224-41d1-b72e-20703ea573d6-space-portolio-vercel-app/assets/images/next-452722-NavLogo.png?";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full h-[65px] px-4 sm:px-10 bg-[#03001417] shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md">
      <div className="relative w-full h-full flex flex-row items-center justify-between m-auto">
        {/* Logo */}
        <Link href="#home" className="h-auto w-auto flex flex-row items-center">
          <Image
            src={logoAsset}
            alt="MS Logo"
            width={70}
            height={70}
            className="cursor-pointer"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            MAYANK SHARMA
          </span>
        </Link>

        {/* Desktop Navigation (Centered) */}
        <nav className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block w-auto">
          <div
            className="flex items-center justify-around h-[46px] border border-[#7042f861] bg-[#0300145e] px-[20px] rounded-full text-gray-200"
            style={{ width: '485px' }}
          >
            {NAV_LINKS.map((link) => (
              <Link key={link.label} href={link.href} className="cursor-pointer whitespace-nowrap">
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Right side: Socials (Desktop) & Hamburger (Mobile) */}
        <div className="flex items-center gap-5">
          <div className="hidden md:flex flex-row gap-5">
            {SOCIAL_LINKS.map((social) => (
              <a key={social.alt} href={social.href} target="_blank" rel="noopener noreferrer">
                <Image src={social.src} alt={social.alt} width={24} height={24} />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-200">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[65px] left-0 w-full bg-[#030014f0] backdrop-blur-sm shadow-lg shadow-[#2A0E61]/50 flex flex-col items-center gap-y-6 py-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-200 text-lg hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-row gap-8 mt-4">
            {SOCIAL_LINKS.map((social) => (
              <a key={social.alt} href={social.href} target="_blank" rel="noopener noreferrer">
                <Image src={social.src} alt={social.alt} width={28} height={28} />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;