'use client';

import { useState } from "react";
import { Droplets, Menu, X } from "lucide-react";
import BookDemoButton from "./BookDemoButton";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav>
        <a href="#" className="logo">
          <div className="logo-icon">
            <Droplets size={20} strokeWidth={2.2} color="#fff" />
          </div>
          <div className="logo-text">Plum<span>Flow</span> AI</div>
        </a>
        <div className="nav-links">
          <a href="#how">How It Works</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#testimonials">Reviews</a>
        </div>
        <div className="nav-right">
          <a href="https://app.plumflow.io" className="btn-ghost">Sign In</a>
          <BookDemoButton className="btn-nav">Book a Demo</BookDemoButton>
        </div>
        {/* Mobile hamburger */}
        <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          {open
            ? <X size={22} strokeWidth={2.2} color="#080D24" />
            : <Menu size={22} strokeWidth={2.2} color="#080D24" />
          }
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`nav-mobile-menu${open ? " open" : ""}`}>
        <a href="#how" onClick={() => setOpen(false)}>How It Works</a>
        <a href="#features" onClick={() => setOpen(false)}>Features</a>
        <a href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
        <a href="#testimonials" onClick={() => setOpen(false)}>Reviews</a>
        <div className="nav-mobile-cta">
          <a href="https://app.plumflow.io" className="btn-ghost" onClick={() => setOpen(false)}>Sign In</a>
          <BookDemoButton className="btn-nav" onClick={() => setOpen(false)}>Book a Demo</BookDemoButton>
        </div>
      </div>
    </>
  );
}
