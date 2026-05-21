import { Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="cta-sec" id="cta-sec">
      <div className="wrap">
        <h2>Your next commercial contract is sitting in someone&apos;s inbox.<br />Go get it.</h2>
        <p>Plumbing companies that contact the right people with the right message at the right time win more contracts. PlumFlow makes that the default, not the exception.</p>
        <div className="cta-btns">
          <a href="https://app.plumflow.io" className="btn-cta">Book a Free Demo &rarr;</a>
          <a href="https://app.plumflow.io" className="btn-cta-o">
            <Phone size={16} strokeWidth={2.2} style={{ display: "inline-block", verticalAlign: -3 }} />
            Talk to Sales
          </a>
        </div>
      </div>
    </section>
  );
}
