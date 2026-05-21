import { Building2, Search, ShieldCheck, SlidersHorizontal, PenLine, Activity, LayoutDashboard, Repeat2, Bot } from "lucide-react";

export default function Features() {
  return (
    <section className="features-sec" id="features">
      <div className="wrap">
        <div style={{ textAlign: "center" }}>
          <span className="sec-tag">Everything Included</span>
        </div>
        <h2 className="sec-h" style={{ textAlign: "center", maxWidth: 620, margin: "16px auto 14px" }}>
          Built for commercial plumbing. Not a generic sales tool with a new coat of paint.
        </h2>
        <p className="sec-sub" style={{ textAlign: "center", maxWidth: 520, margin: "0 auto" }}>
          Every feature was built specifically for how commercial plumbing companies sell.
        </p>

        <div className="feat-grid">

          <div className="feat-card">
            <div className="feat-icon-wrap" style={{ background: "rgba(27,60,255,0.08)" }}>
              <Building2 size={26} strokeWidth={1.6} color="var(--blue)" />
            </div>
            <h3>Multi-Company Dashboard</h3>
            <p>Manage outreach for multiple plumbing companies from a single login. Each company gets its own leads, campaigns, mailboxes, and analytics.</p>
            <ul className="feat-bullets">
              <li>Separate profiles per operating company</li>
              <li>Filter all data by company instantly</li>
              <li>One seat manages your entire portfolio</li>
            </ul>
          </div>

          <div className="feat-card">
            <div className="feat-icon-wrap" style={{ background: "rgba(0,194,255,0.08)" }}>
              <Search size={26} strokeWidth={1.6} color="var(--cyan)" />
            </div>
            <h3>Lead Discovery and Import</h3>
            <p>Find commercial decision-makers by title, location, and property type. Or upload your own list. Either way, PlumFlow builds your target database for you.</p>
            <ul className="feat-bullets">
              <li>Search by Facility Manager, Property Manager, Building Owner</li>
              <li>CSV import with auto-field mapping</li>
              <li>Bulk exclude irrelevant contacts in one click</li>
            </ul>
          </div>

          <div className="feat-card">
            <div className="feat-icon-wrap" style={{ background: "rgba(0,229,142,0.09)" }}>
              <ShieldCheck size={26} strokeWidth={1.6} color="#00b86a" />
            </div>
            <h3>Email Verification</h3>
            <p>Every address is checked before you send. Invalid, bounced, and disposable emails are flagged automatically. Your sender reputation stays clean.</p>
            <ul className="feat-bullets">
              <li>Real-time verification on every lead</li>
              <li>Bounce detection before campaigns run</li>
              <li>Protects your domain deliverability score</li>
            </ul>
          </div>

          <div className="feat-card">
            <div className="feat-icon-wrap" style={{ background: "rgba(139,92,246,0.09)" }}>
              <SlidersHorizontal size={26} strokeWidth={1.6} color="#a78bfa" />
            </div>
            <h3>AI Lead Scoring</h3>
            <p>A four-tier scoring system ranks every contact from 0 to 100 based on their job title and decision-making authority over building maintenance.</p>
            <ul className="feat-bullets">
              <li>Tier 1: Facility Managers, Property Managers, Building Owners</li>
              <li>Hard disqualifiers: Realtors, HR, IT, Finance auto-excluded</li>
              <li>Bulk re-score your entire list with one click</li>
            </ul>
          </div>

          <div className="feat-card">
            <div className="feat-icon-wrap" style={{ background: "rgba(27,60,255,0.08)" }}>
              <PenLine size={26} strokeWidth={1.6} color="var(--blue)" />
            </div>
            <h3>Personalised Email Generation</h3>
            <p>PlumFlow writes every email individually using the contact&apos;s name, title, company, and city. Each message is written from scratch for that person specifically.</p>
            <ul className="feat-bullets">
              <li>Step 1 cold email and Step 2 follow-up sequences</li>
              <li>Professional formatting, never a wall of text</li>
              <li>Edit any email before it sends</li>
            </ul>
          </div>

          <div className="feat-card">
            <div className="feat-icon-wrap" style={{ background: "rgba(0,194,255,0.08)" }}>
              <Activity size={26} strokeWidth={1.6} color="var(--cyan)" />
            </div>
            <h3>Open and Click Tracking</h3>
            <p>Every email you send carries an invisible tracking pixel and smart link wrapping. Know the moment a prospect opens your message or clicks a link, including repeat opens.</p>
            <ul className="feat-bullets">
              <li>Real-time open notifications</li>
              <li>Click tracking on every link</li>
              <li>Drill into who engaged and when</li>
            </ul>
          </div>

          <div className="feat-card">
            <div className="feat-icon-wrap" style={{ background: "rgba(0,229,142,0.09)" }}>
              <LayoutDashboard size={26} strokeWidth={1.6} color="#00b86a" />
            </div>
            <h3>Analytics Dashboard</h3>
            <p>See exactly how your outreach is performing against industry benchmarks. Open rates, click rates, reply rates, and lead quality scores all in one view.</p>
            <ul className="feat-bullets">
              <li>Per-company and portfolio-wide analytics</li>
              <li>AI-generated &ldquo;What To Do Next&rdquo; recommendations</li>
              <li>KPI goal tracking with progress indicators</li>
            </ul>
          </div>

          <div className="feat-card">
            <div className="feat-icon-wrap" style={{ background: "rgba(251,146,60,0.09)" }}>
              <Repeat2 size={26} strokeWidth={1.6} color="#fb923c" />
            </div>
            <h3>Smart Follow-Up Sequences</h3>
            <p>PlumFlow tracks every prospect&apos;s engagement and tells you who to follow up with and when. Day 1, Day 4, Day 10. The right message at the right point in the sequence.</p>
            <ul className="feat-bullets">
              <li>Tracks who opened, clicked, or went cold</li>
              <li>Generates follow-up emails based on prior engagement</li>
              <li>Works even when your first email was sent manually</li>
            </ul>
          </div>

          <div className="feat-card">
            <div className="feat-icon-wrap" style={{ background: "rgba(139,92,246,0.09)" }}>
              <Bot size={26} strokeWidth={1.6} color="#a78bfa" />
            </div>
            <h3>AI Sales Advisor</h3>
            <p>A built-in advisor that knows your industry, your metrics, and your campaign history. Ask it anything about your outreach and get a direct, data-backed answer.</p>
            <ul className="feat-bullets">
              <li>Knows commercial plumbing ICPs in depth</li>
              <li>Diagnoses why campaigns are underperforming</li>
              <li>Recommends what to do next based on real data</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
