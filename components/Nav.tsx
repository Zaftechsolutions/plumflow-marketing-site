'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BookDemoButton from './BookDemoButton';

const LINKS = [
  { href: '/platform', label: 'Platform' },
  { href: '/results', label: 'Results' },
  { href: '/pricing', label: 'Pricing' },
];

export default function Nav() {
  const path = usePathname();
  return (
    <nav className="nav">
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
        </div>
      </div>
    </nav>
  );
}
