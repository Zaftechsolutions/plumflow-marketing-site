import { Droplets } from "lucide-react";

export default function Nav() {
  return (
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
        <a href="https://app.plumflow.io" className="btn-nav">Book a Demo</a>
      </div>
    </nav>
  );
}
