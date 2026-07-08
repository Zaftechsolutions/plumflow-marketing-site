import BookDemoButton from "./BookDemoButton";

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="wrap" style={{ textAlign: "center" }}>
        <span className="sec-tag">Pricing</span>
        <h2 className="sec-h" style={{ maxWidth: 520, margin: "16px auto 14px" }}>
          A fraction of one hire. One contract won covers years.
        </h2>
        <p className="sec-sub" style={{ maxWidth: 520, margin: "0 auto" }}>
          No hidden fees. No per-seat charges. Save 2 months with annual billing.
        </p>

        <div className="price-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", maxWidth: 1080, margin: "48px auto 0" }}>

          <div className="price-card">
            <div className="price-name">Starter</div>
            <div className="price-amt"><sup>$</sup>299</div>
            <div className="price-per">per month, one company</div>
            <ul className="price-feats">
              <li>1 sending mailbox</li>
              <li>500 new leads per month</li>
              <li>AI lead scoring for commercial fit</li>
              <li>AI email generation and sequences</li>
              <li>Automated follow-ups</li>
              <li>Open, click and reply tracking</li>
              <li className="off">LinkedIn outreach engine</li>
              <li className="off">AI Sales Advisor</li>
            </ul>
            <BookDemoButton className="btn-price">Book a Demo</BookDemoButton>
          </div>

          <div className="price-card pop">
            <div className="pop-tag">Most popular</div>
            <div className="price-name">Growth</div>
            <div className="price-amt"><sup>$</sup>599</div>
            <div className="price-per">per month, one company</div>
            <ul className="price-feats">
              <li>Everything in Starter</li>
              <li>Up to 3 sending mailboxes</li>
              <li>Unlimited leads</li>
              <li>LinkedIn outreach engine</li>
              <li>Unified email + LinkedIn inbox</li>
              <li>AI Sales Advisor and KPI goals</li>
              <li>Objection intelligence dataset</li>
              <li>Deliverability monitoring</li>
            </ul>
            <BookDemoButton className="btn-price">Book a Demo</BookDemoButton>
          </div>

          <div className="price-card">
            <div className="price-name">Multi-OpCo</div>
            <div className="price-amt"><sup>$</sup>399</div>
            <div className="price-per">per operating company / month, 3+ OpCos</div>
            <ul className="price-feats">
              <li>Everything in Growth, per OpCo</li>
              <li>Portfolio-wide dashboard</li>
              <li>Cross-OpCo lead deduplication</li>
              <li>Centralized billing, one contract</li>
              <li>Dedicated onboarding</li>
              <li>Built for PE-backed trade rollups</li>
            </ul>
            <a href="mailto:Zeeshanzafar1232@gmail.com" className="btn-price">Talk to Sales</a>
          </div>

        </div>

        {/* Done-for-you founding offer */}
        <div className="dfy-strip">
          <div style={{ textAlign: "left" }}>
            <div className="dfy-title">Prefer it done for you?</div>
            <div className="dfy-sub">
              We run PlumFlow for you: lead sourcing, sequences, follow-ups, LinkedIn. You just take the appointments.
              Founding-customer spots from <strong>$1,000/month</strong>, limited to 5 companies.
            </div>
          </div>
          <BookDemoButton className="btn-price dfy-btn">Claim a Spot</BookDemoButton>
        </div>

        {/* Cost comparison */}
        <h3 className="cmp-h">The math your CFO will ask for</h3>
        <div className="cmp-scroll">
          <table className="cmp-table">
            <thead>
              <tr>
                <th></th>
                <th className="cmp-hl">PlumFlow Growth</th>
                <th>In-house SDR</th>
                <th>Outbound agency</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cost per year</td>
                <td className="cmp-hl"><strong>$7,188</strong></td>
                <td>$65,000+ fully loaded</td>
                <td>$36,000–60,000</td>
              </tr>
              <tr>
                <td>Time to first outreach</td>
                <td className="cmp-hl"><strong>Days</strong></td>
                <td>2–3 months to hire and ramp</td>
                <td>2–4 weeks</td>
              </tr>
              <tr>
                <td>Follow-ups</td>
                <td className="cmp-hl"><strong>Automatic, never missed</strong></td>
                <td>Depends on CRM discipline</td>
                <td>Depends on account manager</td>
              </tr>
              <tr>
                <td>Knows commercial trades</td>
                <td className="cmp-hl"><strong>Built for plumbing &amp; HVAC</strong></td>
                <td>You train them</td>
                <td>Generic scripts</td>
              </tr>
              <tr>
                <td>Turnover risk</td>
                <td className="cmp-hl"><strong>None</strong></td>
                <td>~39% of SDRs leave yearly</td>
                <td>Contract lock-ins</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
