import { Droplets, BarChart2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      <div>
        <h1>
          Your commercial plumbing company&apos;s<br />
          <span className="grad">first real sales system.</span>
        </h1>
        <p className="hero-sub">
          Stop depending on referrals. PlumFlow finds the right decision-makers, writes the right message, sends it at the right time, and tells you exactly who to follow up with next.
        </p>
        <div className="hero-btns">
          <a href="#" className="btn-hero-p">Book a Free Demo &rarr;</a>
          <a href="#how" className="btn-hero-s">&#9654;&nbsp; See How It Works</a>
        </div>
      </div>

      <div className="mockup-wrap">
        <div className="mockup-bar">
          <div className="mdot" style={{ background: "#ff5f57" }} />
          <div className="mdot" style={{ background: "#febc2e" }} />
          <div className="mdot" style={{ background: "#28c840" }} />
          <div className="mock-url">app.plumflow.ai / analytics</div>
        </div>
        <div className="mockup-inner">
          <div className="mock-sidebar">
            <div className="mock-brand">
              <Droplets size={14} strokeWidth={2.2} color="var(--cyan)" style={{ flexShrink: 0 }} />
              PlumFlow AI
            </div>
            <div className="sitem"><span className="sdot" /> Dashboard</div>
            <div className="sitem"><span className="sdot" /> Leads</div>
            <div className="sitem"><span className="sdot" /> Campaigns</div>
            <div className="sitem on"><span className="sdot live" /> Analytics</div>
            <div className="sitem"><span className="sdot" /> AI Advisor</div>
            <div className="sitem"><span className="sdot" /> Inbox</div>
            <div className="sitem"><span className="sdot" /> KPI Goals</div>
            <div className="sitem"><span className="sdot" /> Email Accounts</div>
          </div>
          <div className="mock-main">
            <div className="mock-h">
              <BarChart2 size={14} strokeWidth={2} color="rgba(255,255,255,0.5)" style={{ flexShrink: 0 }} />
              Email Tracking
            </div>
            <div className="mock-cards">
              <div className="mc">
                <div className="mc-lbl">Emails Sent</div>
                <div className="mc-val" style={{ color: "#f1f5f9" }}>1,284</div>
                <div className="mc-sub" style={{ color: "rgba(255,255,255,0.35)" }}>total delivered</div>
              </div>
              <div className="mc" style={{ borderColor: "rgba(96,165,250,0.3)", background: "rgba(59,130,246,0.08)" }}>
                <div className="mc-lbl" style={{ color: "#60a5fa" }}>👁 Opened</div>
                <div className="mc-val" style={{ color: "#60a5fa" }}>387</div>
                <div className="mc-sub" style={{ color: "#60a5fa" }}>30.1% open rate</div>
              </div>
              <div className="mc" style={{ borderColor: "rgba(167,139,250,0.3)", background: "rgba(139,92,246,0.08)" }}>
                <div className="mc-lbl" style={{ color: "#a78bfa" }}>🔗 Clicked</div>
                <div className="mc-val" style={{ color: "#a78bfa" }}>94</div>
                <div className="mc-sub" style={{ color: "#a78bfa" }}>7.3% click rate</div>
              </div>
              <div className="mc" style={{ borderColor: "rgba(52,211,153,0.3)", background: "rgba(16,185,129,0.08)" }}>
                <div className="mc-lbl" style={{ color: "#34d399" }}>↩ Replied</div>
                <div className="mc-val" style={{ color: "#34d399" }}>41</div>
                <div className="mc-sub" style={{ color: "#34d399" }}>3.2% reply rate</div>
              </div>
            </div>
            <div className="mock-thead">
              <span>Prospect</span><span>Company</span><span>Score</span><span>Status</span><span>Opens</span>
            </div>
            <div className="mock-row">
              <span style={{ color: "#fff", fontWeight: 600 }}>Michael Torres</span>
              <span>Harborview Hotels</span>
              <span><span className="sc sc-g">94</span></span>
              <span><span className="sp sp-o">Opened</span></span>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>x4</span>
            </div>
            <div className="mock-row">
              <span style={{ color: "#fff", fontWeight: 600 }}>Sarah Chen</span>
              <span>Pinnacle Properties</span>
              <span><span className="sc sc-g">88</span></span>
              <span><span className="sp sp-s">Sent</span></span>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>—</span>
            </div>
            <div className="mock-row">
              <span style={{ color: "#fff", fontWeight: 600 }}>James Walker</span>
              <span>SunCoast Facilities</span>
              <span><span className="sc sc-y">76</span></span>
              <span><span className="sp sp-o">Opened</span></span>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>x2</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
