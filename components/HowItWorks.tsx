export default function HowItWorks() {
  return (
    <section className="how" id="how">
      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: 8 }}>
          <span className="sec-tag">How It Works</span>
        </div>
        <h2 className="sec-h" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 14px" }}>
          From zero to a full outreach engine in one afternoon
        </h2>
        <p className="sec-sub" style={{ textAlign: "center", maxWidth: 520, margin: "0 auto" }}>
          Eight steps. No sales training. No complex setup. PlumFlow walks you through the whole process.
        </p>

        <div className="how-steps">

          <div className="how-step">
            <div className="step-num-wrap">
              <div className="step-circle">1</div>
              <div className="step-line" />
            </div>
            <div className="step-body">
              <div className="step-tag">Company Setup</div>
              <h3>Add your company profile</h3>
              <p>Start by telling PlumFlow about your business. Your company name, service area, what types of commercial properties you serve. This is what every AI-written email is based on. The more detail you add, the more specific and convincing your outreach becomes.</p>
            </div>
            <div className="step-visual">
              <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text3)", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 12 }}>Company Profile</div>
              <div className="sv-row"><span className="sv-label">Company</span><span style={{ color: "var(--text2)", fontSize: 12 }}>Central Plumbing LLC</span></div>
              <div className="sv-row"><span className="sv-label">Service Area</span><span style={{ color: "var(--text2)", fontSize: 12 }}>Baton Rouge, LA</span></div>
              <div className="sv-row"><span className="sv-label">Specialty</span><span style={{ color: "var(--text2)", fontSize: 12 }}>Commercial Maintenance</span></div>
              <div className="sv-row"><span className="sv-label">Target ICP</span><span style={{ color: "var(--text2)", fontSize: 12 }}>Hotels, Office Parks</span></div>
            </div>
          </div>

          <div className="how-step">
            <div className="step-num-wrap">
              <div className="step-circle">2</div>
              <div className="step-line" />
            </div>
            <div className="step-body">
              <div className="step-tag">Lead Discovery</div>
              <h3>Find the right decision-makers</h3>
              <p>Search for Facility Managers, Property Managers, Building Owners, and Hotel GMs in your target area. Import your own list or use PlumFlow&apos;s built-in lead finder. Every result is a real person with authority to sign a maintenance contract.</p>
            </div>
            <div className="step-visual">
              <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text3)", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 12 }}>Lead Search Results</div>
              <div className="sv-row"><span className="sv-label">Michael Torres</span><span className="sv-val v-green">Facility Manager</span></div>
              <div className="sv-row"><span className="sv-label">Sarah Chen</span><span className="sv-val v-green">Property Manager</span></div>
              <div className="sv-row"><span className="sv-label">James Walker</span><span className="sv-val v-blue">VP Operations</span></div>
              <div className="sv-row"><span className="sv-label">Karen Mills</span><span className="sv-val v-green">Building Owner</span></div>
            </div>
          </div>

          <div className="how-step">
            <div className="step-num-wrap">
              <div className="step-circle">3</div>
              <div className="step-line" />
            </div>
            <div className="step-body">
              <div className="step-tag">Email Verification</div>
              <h3>Verify every email address before you send</h3>
              <p>Bounced emails damage your sender reputation and get your domain flagged. PlumFlow verifies every email address in your list before a single message goes out. Only valid, deliverable addresses make it through to your campaigns.</p>
            </div>
            <div className="step-visual">
              <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text3)", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 12 }}>Verification Results</div>
              <div className="sv-row"><span style={{ fontSize: 12, color: "var(--text2)" }}>m.torres@harborview.com</span><span className="sv-val v-green">Valid</span></div>
              <div className="sv-row"><span style={{ fontSize: 12, color: "var(--text2)" }}>s.chen@pinnacle.com</span><span className="sv-val v-green">Valid</span></div>
              <div className="sv-row"><span style={{ fontSize: 12, color: "var(--text2)" }}>j.walker@suncoast.net</span><span className="sv-val v-green">Valid</span></div>
              <div className="sv-row"><span style={{ fontSize: 12, color: "var(--text2)" }}>old@company.com</span><span className="sv-val v-red">Bounced</span></div>
            </div>
          </div>

          <div className="how-step">
            <div className="step-num-wrap">
              <div className="step-circle">4</div>
              <div className="step-line" />
            </div>
            <div className="step-body">
              <div className="step-tag">AI Lead Scoring</div>
              <h3>Score every contact by their buying authority</h3>
              <p>Not every name on a list is worth contacting. PlumFlow&apos;s 4-tier AI scoring system ranks every contact 0 to 100 based on their role. Facility Managers and Property Managers score highest. Realtors, HR directors, and finance staff are automatically flagged and excluded from your campaigns.</p>
            </div>
            <div className="step-visual">
              <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text3)", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 12 }}>AI Scores</div>
              <div className="sv-row"><span className="sv-label">Facility Manager</span><span className="sv-val v-green">Tier 1 — 92</span></div>
              <div className="sv-row"><span className="sv-label">Property Manager</span><span className="sv-val v-green">Tier 1 — 88</span></div>
              <div className="sv-row"><span className="sv-label">VP Operations</span><span className="sv-val v-blue">Tier 2 — 74</span></div>
              <div className="sv-row"><span className="sv-label">Real Estate Agent</span><span className="sv-val v-red">Excluded — 11</span></div>
            </div>
          </div>

          <div className="how-step">
            <div className="step-num-wrap">
              <div className="step-circle">5</div>
              <div className="step-line" />
            </div>
            <div className="step-body">
              <div className="step-tag">Email Generation</div>
              <h3>Generate personalised emails for every contact</h3>
              <p>Click one button. PlumFlow writes a personalised cold email for every contact using their name, title, company, and city. Each email sounds like it was written by a skilled salesperson who knows the commercial plumbing industry. No templates. No mail merges. No &ldquo;I hope this email finds you well.&rdquo;</p>
            </div>
            <div className="step-visual dark">
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", marginBottom: 8, textTransform: "uppercase", letterSpacing: ".08em" }}>Generated — Step 1 Cold Email</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.85)", marginBottom: 8 }}>Subject: Commercial plumbing for Harborview Hotels</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.65 }}>
                Hi Michael,<br /><br />
                Running facilities across a hotel portfolio means plumbing issues can not wait. A burst pipe at 2am is not just an inconvenience, it is a guest complaint and a liability claim.<br /><br />
                Central Plumbing works with commercial properties across Baton Rouge. Can we set up a quick call this week?
              </div>
            </div>
          </div>

          <div className="how-step">
            <div className="step-num-wrap">
              <div className="step-circle">6</div>
              <div className="step-line" />
            </div>
            <div className="step-body">
              <div className="step-tag">Send and Track</div>
              <h3>Send from your own address and track every open</h3>
              <p>Emails go out from your own inbox using your company email address. Every message carries an invisible tracking pixel and smart link wrapping. The moment a prospect opens your email or clicks a link, PlumFlow captures it. You see exactly who engaged, when, and how many times.</p>
            </div>
            <div className="step-visual">
              <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text3)", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 12 }}>Live Tracking</div>
              <div className="sv-row"><span className="sv-label">Michael Torres</span><span className="sv-val v-blue">Opened x4</span></div>
              <div className="sv-row"><span className="sv-label">Sarah Chen</span><span className="sv-val v-green">Clicked link</span></div>
              <div className="sv-row"><span className="sv-label">James Walker</span><span className="sv-val v-blue">Opened x2</span></div>
              <div className="sv-row"><span className="sv-label">Karen Mills</span><span className="sv-val v-gray">Sent, not opened</span></div>
            </div>
          </div>

          <div className="how-step">
            <div className="step-num-wrap">
              <div className="step-circle">7</div>
              <div className="step-line" />
            </div>
            <div className="step-body">
              <div className="step-tag">Smart Follow-Up</div>
              <h3>Know exactly who to follow up with and when</h3>
              <p>PlumFlow tracks every prospect&apos;s behaviour across your entire campaign. It identifies who opened but did not reply, who clicked but went cold, and who has not engaged at all. Then it generates the right follow-up message for each one at the right time in the sequence. No guessing. No spreadsheet tracking. No leads falling through the cracks.</p>
            </div>
            <div className="step-visual">
              <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text3)", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 12 }}>Follow-Up Queue</div>
              <div className="sv-row"><span className="sv-label">Michael Torres</span><span className="sv-val v-green">Follow up today</span></div>
              <div className="sv-row"><span className="sv-label">James Walker</span><span className="sv-val v-blue">Follow up Day 4</span></div>
              <div className="sv-row"><span className="sv-label">Karen Mills</span><span className="sv-val v-blue">Follow up Day 10</span></div>
              <div className="sv-row"><span className="sv-label">Sarah Chen</span><span className="sv-val v-green">Replied</span></div>
            </div>
          </div>

          <div className="how-step">
            <div className="step-num-wrap">
              <div className="step-circle">8</div>
            </div>
            <div className="step-body">
              <div className="step-tag">AI Sales Advisor</div>
              <h3>Ask your AI Sales Advisor anything</h3>
              <p>Your built-in AI Sales Advisor knows the commercial plumbing industry in detail. It knows your ICPs, your metrics, your campaign history, and what good looks like. Ask it why your open rate dropped, which OpCo is performing best, what subject lines to test next, or how to handle a tricky reply. It gives you a direct answer based on your actual data.</p>
            </div>
            <div className="step-visual dark">
              <div className="iq-chat">
                <div>
                  <div className="iq-lbl you">You</div>
                  <div className="iq-msg q">Why did my open rate drop this week?</div>
                </div>
                <div>
                  <div className="iq-lbl ai">AI Advisor</div>
                  <div className="iq-msg a">Your last 3 subject lines were longer than 7 words. Shorter subjects average 34% higher open rates in your category. Try: &ldquo;Commercial plumbing for [Company]&rdquo;. It has performed best in your previous campaigns.</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
