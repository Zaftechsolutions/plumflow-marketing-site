import { Droplets } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg,#1B3CFF,#00C2FF)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Droplets size={17} strokeWidth={2.2} color="#fff" />
              </div>
              <span style={{ fontSize: 16, fontWeight: 800, color: "#fff", letterSpacing: "-.02em" }}>
                PlumFlow <span style={{ color: "#00C2FF" }}>AI</span>
              </span>
            </div>
            <p>The sales system built for commercial plumbing companies. Find the right leads, send the right message, track every open, and follow up at the right time.</p>
          </div>
          <div className="foot-cols">
            <div className="foot-col">
              <div className="foot-col-h">Product</div>
              <a href="#">Features</a>
              <a href="#">How It Works</a>
              <a href="#">Pricing</a>
              <a href="#">Changelog</a>
            </div>
            <div className="foot-col">
              <div className="foot-col-h">Company</div>
              <a href="#">About</a>
              <a href="#">Blog</a>
              <a href="#">Contact</a>
              <a href="#">Careers</a>
            </div>
            <div className="foot-col">
              <div className="foot-col-h">Legal</div>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
              <a href="#">GDPR</a>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 PlumFlow AI. All rights reserved.</span>
          <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
            Built for commercial plumbing
            <Droplets size={13} strokeWidth={2} color="rgba(255,255,255,0.35)" />
          </span>
        </div>
      </div>
    </footer>
  );
}
