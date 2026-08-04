'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import BookDemoButton from './BookDemoButton';

const LINKS = [
  { href: '/platform', label: 'Platform' },
  { href: '/results', label: 'Why it pays' },
  { href: '/pricing', label: 'Pricing' },
];

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the sheet whenever the route changes
  useEffect(() => { setOpen(false); }, [path]);

  // The home hero is dark, so the bar rides transparent over it and only
  // takes its glass background once you scroll past. Every other route is
  // on porcelain and keeps the glass from the first pixel.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // The open sheet needs a solid background to be readable, so it drops
  // the transparent treatment even at the top of the page.
  const overHero = path === '/' && !scrolled && !open;

  return (
    <nav className={overHero ? 'nav nav-over' : 'nav'}>
      <div className="nav-in">
        <Link href="/" className="nav-logo">
          <img src="/mark.svg" alt="" />
          <b>PlumFlow</b>
        </Link>
        <div className="nav-links">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} className={path === l.href ? 'on' : ''}>
              {l.label}
            </Link>
          ))}
        </div>
        <div className="nav-cta">
          <a href="https://app.plumflow.io" className="nav-signin">Sign in</a>
          <BookDemoButton className="nav-book">Book a demo</BookDemoButton>
          <button
            className="nav-burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="nav-sheet">
          {LINKS.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={path === l.href ? 'on' : ''}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a href="https://app.plumflow.io">Sign in</a>
        </div>
      )}
    </nav>
  );
}
