import BookDemoButton from "./BookDemoButton";

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="wrap" style={{ textAlign: "center" }}>
        <span className="sec-tag">Pricing</span>
        <h2 className="sec-h" style={{ maxWidth: 480, margin: "16px auto 14px" }}>
          One contract won covers a full year.
        </h2>
        <p className="sec-sub" style={{ maxWidth: 480, margin: "0 auto" }}>
          No hidden fees. No per-seat charges. One straightforward price per operating company.
        </p>
        <div className="price-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: 820, margin: '48px auto 0' }}>

          <div className="price-card pop">
            <div className="price-name">Pro</div>
            <div className="price-amt"><sup>$</sup>499</div>
            <div className="price-per">per month, per company</div>
            <ul className="price-feats">
              <li>Unlimited leads</li>
              <li>AI lead scoring with bulk re-score</li>
              <li>Email verification</li>
              <li>Email generation (Step 1 and 2)</li>
              <li>SMTP sending and CSV export</li>
              <li>Full open and click tracking</li>
              <li>Multi-company dashboard</li>
              <li>Smart follow-up sequences</li>
              <li>AI Sales Advisor</li>
              <li>KPI goal tracking</li>
            </ul>
            <BookDemoButton className="btn-price">Book a Demo</BookDemoButton>
          </div>

          <div className="price-card">
            <div className="price-name">Enterprise</div>
            <div className="price-amt" style={{ fontSize: 38, paddingTop: 7 }}>Custom</div>
            <div className="price-per">for multi-site operators</div>
            <ul className="price-feats">
              <li>All Pro features</li>
              <li>Unlimited companies</li>
              <li>Dedicated onboarding</li>
              <li>Custom AI training</li>
              <li>API access</li>
              <li>White-label option</li>
              <li>SLA guarantee</li>
              <li>Custom integrations</li>
            </ul>
            <a href="mailto:Zeeshanzafar1232@gmail.com" className="btn-price">Talk to Sales</a>
          </div>

        </div>
      </div>
    </section>
  );
}
