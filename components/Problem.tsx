import { Crosshair, MailX, EyeOff } from "lucide-react";

export default function Problem() {
  return (
    <section className="problem">
      <div className="wrap" style={{ textAlign: "center" }}>
        <span className="sec-tag" style={{ background: "rgba(0,194,255,0.1)", color: "#00c2ff" }}>Why Outreach Fails</span>
        <h2 className="sec-h" style={{ color: "#fff", maxWidth: 680, margin: "0 auto 16px" }}>
          Most plumbing companies quit outreach before it works. Here is why.
        </h2>
        <p className="sec-sub" style={{ color: "rgba(255,255,255,0.45)", maxWidth: 560, margin: "0 auto" }}>
          The problem is not your service. It is not your pricing. It is a broken process that wastes your time on the wrong people with the wrong message.
        </p>
        <div className="prob-grid">
          <div className="prob-card">
            <div className="prob-icon-wrap" style={{ background: "rgba(239,68,68,0.12)" }}>
              <Crosshair size={28} strokeWidth={1.6} color="#f87171" />
            </div>
            <h3>You are contacting the wrong people</h3>
            <p>Up to 40% of commercial lead lists are filled with realtors, HR managers, finance directors, and others who will never hire a plumbing company. Every email to them is a wasted touchpoint and a sender reputation risk.</p>
          </div>
          <div className="prob-card">
            <div className="prob-icon-wrap" style={{ background: "rgba(251,146,60,0.12)" }}>
              <MailX size={28} strokeWidth={1.6} color="#fb923c" />
            </div>
            <h3>One email and done</h3>
            <p>The average commercial contract takes 5 to 8 touches before someone responds. Sending one email and waiting is not a sales strategy. It is wishful thinking. Without follow-up, your pipeline stays empty.</p>
          </div>
          <div className="prob-card">
            <div className="prob-icon-wrap" style={{ background: "rgba(148,163,184,0.1)" }}>
              <EyeOff size={28} strokeWidth={1.6} color="#94a3b8" />
            </div>
            <h3>No visibility, no feedback loop</h3>
            <p>When you send emails manually, you have no idea what happens next. Who opened it? Who clicked? Who needs a follow-up today? Without that data, every decision is a guess.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
