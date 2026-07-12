import type { Metadata } from 'next';
import { ArrowRight, Check } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Fx from '@/components/Fx';
import BookDemoButton from '@/components/BookDemoButton';

export const metadata: Metadata = {
  title: 'Pricing — PlumFlow',
  description:
    'Priced like the hire it replaces, minus the salary. Pilot in 30 days, scale by operating company. Custom quote on a 30-minute call.',
};

export default function Pricing() {
  return (
    <>
      <Fx />
      <Nav />

      <header className="page-hero">
        <div className="wrap">
          <span className="eyebrow rv">Pricing</span>
          <h1 className="h1 rv" data-d="1" style={{ maxWidth: 860, margin: '18px 0 20px', fontSize: 'clamp(38px, 4.8vw, 62px)' }}>
            Priced like the hire it replaces.
            <span style={{ color: 'var(--copper)' }}> Minus the salary.</span>
          </h1>
          <p className="lead rv" data-d="2" style={{ maxWidth: 620 }}>
            A junior SDR costs $75,000 a year, takes six months to learn the
            trade, and leaves in eighteen. PlumFlow starts working the first
            week and never forgets what a backflow cert is.
          </p>
        </div>
      </header>

      {/* Comparison */}
      <section className="sec-tight">
        <div className="wrap">
          <div className="rv" style={{ overflowX: 'auto' }}>
            <table className="cmp">
              <thead>
                <tr>
                  <th style={{ width: '34%' }}></th>
                  <th>Hiring an SDR</th>
                  <th>Marketing agency</th>
                  <th style={{ color: 'var(--copper)' }}>PlumFlow</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Knows commercial plumbing</td><td className="no">After 6+ months</td><td className="no">Never deeply</td><td className="yes">Built into it</td></tr>
                <tr><td>Works every OpCo at once</td><td className="no">One territory</td><td className="no">Extra retainer each</td><td className="yes">Yes, one system</td></tr>
                <tr><td>Follow-up discipline</td><td className="no">Depends on the person</td><td className="no">Batch and blast</td><td className="yes">Day 3, 5, 10, then stop</td></tr>
                <tr><td>Reports you can audit</td><td className="no">Self-reported</td><td className="no">Vanity metrics</td><td className="yes">Raw counts, every Friday</td></tr>
                <tr><td>Annual cost</td><td className="no">$75,000+ plus ramp</td><td className="no">$36,000 to 90,000</td><td className="yes">A fraction of either</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Engagement model */}
      <section className="sec" style={{ paddingTop: 48 }}>
        <div className="wrap">
          <span className="eyebrow rv">How engagements work</span>
          <h2 className="h2 rv" data-d="1" style={{ margin: '16px 0 48px', maxWidth: 560 }}>
            Start with a pilot. Scale by company.
          </h2>
          <div className="grid-3">
            <div className="plan rv" data-d="1">
              <h3>Pilot</h3>
              <p className="plan-for">30 days, one operating company</p>
              <ul>
                {[
                  'Full setup: mailboxes, domains, deliverability checks',
                  'Lead sourcing and AI scoring for your service area',
                  'Live campaigns with human approval on every send rule',
                  'Weekly report from week one',
                  'Clear exit: keep the leads and the data either way',
                ].map(t => <li key={t}><Check size={15} /> {t}</li>)}
              </ul>
              <BookDemoButton className="btn btn-ghost" >Start with a call</BookDemoButton>
            </div>
            <div className="plan hl rv" data-d="2">
              <div className="plan-tag">Most common</div>
              <h3>Deployment</h3>
              <p className="plan-for">Ongoing, per operating company</p>
              <ul>
                {[
                  'Everything in Pilot, running continuously',
                  'Email plus LinkedIn outreach',
                  'Automated follow-up sequences with reply detection',
                  'Friday report with proposed changes you approve',
                  'Direct access to the team that built it',
                ].map(t => <li key={t}><Check size={15} /> {t}</li>)}
              </ul>
              <BookDemoButton className="btn btn-copper">Get a quote <ArrowRight size={15} /></BookDemoButton>
            </div>
            <div className="plan rv" data-d="3">
              <h3>Group</h3>
              <p className="plan-for">Multi-company and PE portfolios</p>
              <ul>
                {[
                  'Every OpCo on one system with one login',
                  'Portfolio dashboard across all markets',
                  'Cross-company learnings applied everywhere',
                  'Leadership reporting built for board decks',
                  'Volume pricing across the portfolio',
                ].map(t => <li key={t}><Check size={15} /> {t}</li>)}
              </ul>
              <BookDemoButton className="btn btn-ghost">Talk to us</BookDemoButton>
            </div>
          </div>
          <p className="rv" style={{ marginTop: 26, fontSize: 14, color: 'var(--tx-3)', maxWidth: 640 }}>
            Pricing depends on how many companies you run and how aggressive
            you want to be. You will have an exact number by the end of a
            30-minute call, and it will be a fraction of one hire.
          </p>
        </div>
      </section>

      {/* ROI */}
      <section className="sec dark dark-grid">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="eyebrow rv">The math</span>
          <h2 className="h2 rv" data-d="1" style={{ maxWidth: 680, margin: '16px auto 22px' }}>
            One maintenance contract pays for
            <span style={{ color: 'var(--copper-lt)' }}> the whole year.</span>
          </h2>
          <p className="lead rv" data-d="2" style={{ maxWidth: 560, margin: '0 auto 40px' }}>
            A typical commercial maintenance agreement runs $2,000 to 5,000 a
            month and renews for years. Land one, and everything after it is
            margin. That is the entire bet, and it is not a long shot: the
            system exists because it already landed meetings in its first weeks.
          </p>
          <div className="rv" data-d="3">
            <BookDemoButton className="btn btn-copper">
              Book the call <ArrowRight size={16} />
            </BookDemoButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <span className="eyebrow rv">Questions owners ask</span>
          <h2 className="h2 rv" data-d="1" style={{ margin: '16px 0 32px' }}>Straight answers</h2>
          {[
            ['Do we send from your domain or ours?', 'Yours. Emails go out from your own company mailboxes, so every reply lands in your inbox and every relationship belongs to you. We set up the technical records (SPF, DKIM, DMARC) as part of onboarding.'],
            ['How fast are we live?', 'Setup takes an afternoon. First sends go out as soon as your mailboxes are warmed enough to protect deliverability, usually within the first week. Meetings depend on your market, but the system starts learning from day one.'],
            ['What do you need from us?', 'A list of target buildings if you have one (we can source if you do not), access to a sending mailbox per company, and about an hour a week to review the Friday report and approve changes.'],
            ['What if it does not work for us?', 'The pilot has a defined end. If the numbers do not justify continuing, you walk away and keep every lead, every contact, and everything learned. No annual lock-in on the pilot.'],
            ['Will this get our domain flagged?', 'The guardrails exist specifically to prevent that: verified addresses only, daily caps, send gaps, business-hours windows, plain text, and follow-ups that stop on reply. We broke these rules once on our own campaigns so you do not have to.'],
            ['Who actually writes the emails?', 'The AI drafts every message individually, trained on commercial plumbing specifically. You control the rules and can review anything before it sends. Nothing goes out in bulk from a template.'],
          ].map(([q, a]) => (
            <details key={q} className="faq rv">
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
