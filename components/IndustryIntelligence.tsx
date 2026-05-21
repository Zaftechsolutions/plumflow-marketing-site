export default function IndustryIntelligence() {
  return (
    <div className="iq-banner">
      <div className="iq-inner">
        <div className="iq-left">
          <span className="sec-tag" style={{ background: "rgba(0,194,255,0.1)", color: "#00c2ff" }}>Built-In Industry Intelligence</span>
          <h2>PlumFlow knows commercial plumbing. Your generic CRM does not.</h2>
          <p>Most sales tools know nothing about your industry. PlumFlow is built with deep knowledge of how commercial facilities buy plumbing services, who makes the decisions, what their objections are, and what language gets a response. That knowledge is baked into every email it writes.</p>
          <div className="iq-tags">
            <span className="iq-tag">Facility Management ICPs</span>
            <span className="iq-tag">Hotel and Hospitality</span>
            <span className="iq-tag">Office Park Managers</span>
            <span className="iq-tag">Multi-Site Operators</span>
            <span className="iq-tag">Commercial vs Residential</span>
            <span className="iq-tag">Maintenance Contract Sales</span>
            <span className="iq-tag">Property Management Groups</span>
            <span className="iq-tag">Building Owners</span>
          </div>
        </div>
        <div className="iq-right">
          <div className="iq-chat">
            <div>
              <div className="iq-lbl you">You</div>
              <div className="iq-msg q">What should my subject line say for a hotel GM?</div>
            </div>
            <div>
              <div className="iq-lbl ai">AI Advisor</div>
              <div className="iq-msg a">Hotel GMs respond best to subjects that reference their property type directly. Try: &ldquo;Plumbing coverage for [Hotel Name]&rdquo; or &ldquo;Commercial plumbing for your property.&rdquo; Avoid words like &ldquo;partnership&rdquo; or &ldquo;solution&rdquo;. They filter as generic sales emails.</div>
            </div>
            <div>
              <div className="iq-lbl you">You</div>
              <div className="iq-msg q">Which leads should I prioritise this week?</div>
            </div>
            <div>
              <div className="iq-lbl ai">AI Advisor</div>
              <div className="iq-msg a">Michael Torres opened your email 4 times but did not reply. That is the strongest buying signal in your current pipeline. Follow up today while you are top of mind.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
