import Link from 'next/link';
import { UserX, MailX, EyeOff, Search, PenLine, Send, BarChart3, ArrowRight, Check } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Fx from '@/components/Fx';
import BookDemoButton from '@/components/BookDemoButton';
import CountUp from '@/components/CountUp';

export default function Home() {
  return (
    <>
      <Fx />
      <Nav />

      {/* ── HERO ── */}
      <header className="hero">
        {/* Decorative only. muted + playsInline are what let mobile browsers
            autoplay at all; without them iOS silently refuses. The poster
            covers the gap before the first frame, and reduced-motion users
            never load the video, they keep the still. */}
        <video
          className="hero-video"
          poster="/hero-poster.webp"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
          tabIndex={-1}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="spec-strip" aria-hidden>
          <div className="spec-strip-in">
            <span>Outbound system <b>/</b> commercial plumbing</span>
            <span>Decision-makers, not directories</span>
            <span>For contractors across the United States</span>
          </div>
        </div>
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <h1 className="h1 rv">
                Referrals built
                <br />
                your business.
                <br />
                <span className="hero-accent">Outbound will triple&nbsp;it.</span>
              </h1>
              <p className="hero-sub rv" data-d="1">
                PlumFlow finds the facility managers who sign maintenance
                contracts, writes outreach that sounds like you, and tells you
                exactly who to call next. No SDR salary. No agency retainer.
              </p>
              <div className="hero-ctas rv" data-d="2">
                <BookDemoButton className="btn btn-copper">
                  Book a demo <ArrowRight size={16} />
                </BookDemoButton>
                <Link href="/platform" className="link-plain">See the platform ↗</Link>
              </div>
            </div>

            {/* A dispatch ticket, not another dashboard mockup */}
            <div className="ticket-stack rv" data-d="2" aria-hidden>
              <div className="ticket-behind" />
              <div className="ticket">
                <div className="tk-hd">
                  <b>PlumFlow · Lead ticket</b>
                  <span>#0847</span>
                </div>
                <div className="tk-body">
                  <div className="tk-row"><small>Prospect</small><span>Dana Whitfield</span></div>
                  <div className="tk-row"><small>Title</small><span>Facility Manager</span></div>
                  <div className="tk-row"><small>Property</small><span>Harborview Hotels · 3 sites</span></div>
                  <div className="tk-row"><small>Fit score</small><span className="tk-good">92 · Tier 1</span></div>
                  <div className="tk-row"><small>Angle</small><span>After-hours response time</span></div>
                  <div className="tk-row"><small>Activity</small><span>Opened ×4 · replied Tue 9:14am</span></div>
                  <div className="tk-stamp">Meeting booked</div>
                </div>
              </div>
            </div>
          </div>

          {/* Signature animation: a lead moving through the pipeline */}
          <div className="pipeline rv" data-d="3">
            <div className="pipe-stages">
              <div className="pipe-line"><i /></div>
              {[
                ['Found', 'Real buildings, real buyers'],
                ['Scored', 'Decision-makers only'],
                ['Written', 'In your voice'],
                ['Sent', 'From your own inbox'],
                ['Meeting', 'On your calendar'],
              ].map(([name, sub], i) => (
                <div key={name} className={`pipe-stage${i === 4 ? ' hot' : ''}`}>
                  <div className="pipe-dot" />
                  <div className="pipe-name">{name}</div>
                  <div className="pipe-sub">{sub}</div>
                </div>
              ))}
            </div>
            <div className="pipe-rail" aria-hidden>
              <div className="pipe-chip">Facility Manager <small>· Harborview Hotels</small> <span className="ok">92</span></div>
              <div className="pipe-chip">Property Manager <small>· Crown Point Plaza</small> <span className="ok">88</span></div>
              <div className="pipe-chip">Ops Director <small>· Meridian Senior Living</small> <span className="ok">85</span></div>
            </div>
          </div>
        </div>
      </header>

      {/* ── TICKER ── */}
      <div className="tick" aria-hidden>
        <div className="tick-track">
          {[0, 1].map(k => (
            <span key={k} style={{ display: 'contents' }}>
              <span>every email written for <b>one person</b>, not a list</span>
              <span>one system for <b>every branch and market</b></span>
              <span>follow-ups stop <b>the moment</b> someone replies</span>
              <span>sends only <b>weekdays, 8am to 5pm</b> in your prospect&apos;s timezone</span>
              <span>every percentage reported <b>with its raw count</b></span>
              <span>plain-text emails <b>on purpose</b></span>
            </span>
          ))}
        </div>
      </div>

      {/* ── PROBLEM ── */}
      <section className="sec dark dark-grid">
        <div className="wrap">
          <span className="eyebrow rv">Why outreach fails</span>
          <h2 className="h2 rv" data-d="1" style={{ maxWidth: 640, margin: '18px 0 14px' }}>
            Most plumbing companies quit outbound before it works.
          </h2>
          <p className="lead rv" data-d="2" style={{ maxWidth: 560, marginBottom: 52 }}>
            It is not your service and it is not your pricing. It is a broken
            process that burns hours on the wrong people with the wrong message.
          </p>
          <div className="grid-3">
            <div className="card rv" data-d="1">
              <div className="icon-tile"><UserX size={20} /></div>
              <h3 className="h3" style={{ marginBottom: 10 }}>You are emailing the wrong people</h3>
              <p style={{ fontSize: 15, color: 'var(--d-tx-2)', lineHeight: 1.7 }}>
                Bought lists are full of realtors, HR managers, and finance staff
                who will never hire a plumber. Every one of them is a wasted
                send and a hit to your domain reputation.
              </p>
            </div>
            <div className="card rv" data-d="2">
              <div className="icon-tile"><MailX size={20} /></div>
              <h3 className="h3" style={{ marginBottom: 10 }}>One email, then silence</h3>
              <p style={{ fontSize: 15, color: 'var(--d-tx-2)', lineHeight: 1.7 }}>
                Commercial contracts take five to eight touches. Sending one
                email and hoping is not a strategy. Without disciplined
                follow-up, the pipeline stays empty.
              </p>
            </div>
            <div className="card rv" data-d="3">
              <div className="icon-tile"><EyeOff size={20} /></div>
              <h3 className="h3" style={{ marginBottom: 10 }}>No idea what happened next</h3>
              <p style={{ fontSize: 15, color: 'var(--d-tx-2)', lineHeight: 1.7 }}>
                Who opened it? Who needs a call today? When outreach lives in
                Outlook and a spreadsheet, every decision is a guess made from
                memory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT ── */}
      <section className="sec">
        <div className="wrap">
          <span className="eyebrow rv">The system</span>
          <h2 className="h2 rv" data-d="1" style={{ maxWidth: 620, margin: '18px 0 14px' }}>
            One screen tells you <span style={{ color: 'var(--accent)' }}>who to call today.</span>
          </h2>
          <p className="lead rv" data-d="2" style={{ maxWidth: 560, marginBottom: 48 }}>
            Every lead, every send, every open, every reply. Scored, tracked,
            and queued so the next action is always obvious.
          </p>

          <div className="frame rv" data-d="2">
            <div className="frame-bar">
              <i style={{ background: '#FF5F57' }} /><i style={{ background: '#FEBC2E' }} /><i style={{ background: '#28C840' }} />
              <span className="frame-url">app.plumflow.io / dashboard</span>
            </div>
            <div className="dash">
              <div className="dash-side">
                <b>PlumFlow</b>
                <span className="on">Dashboard</span>
                <span>Leads</span>
                <span>Campaigns</span>
                <span>Inbox</span>
                <span>Analytics</span>
                <span>Weekly Report</span>
                <span>AI Advisor</span>
              </div>
              <div>
                <div className="dash-stats">
                  <div className="dash-stat"><small>Emails sent</small><b>1,284</b><i>▲ this month</i></div>
                  <div className="dash-stat"><small>Human replies</small><b>41</b><i>3.2% reply rate</i></div>
                  <div className="dash-stat"><small>Meetings booked</small><b>9</b><i>▲ +3 this week</i></div>
                  <div className="dash-stat"><small>Follow-ups due</small><b>17</b><i>queued for today</i></div>
                </div>
                <div className="dash-table">
                  <div className="dash-row hd"><span>Prospect</span><span>Company</span><span>Score</span><span>Status</span></div>
                  <div className="dash-row"><span>Michael Torres</span><span>Harborview Hotels</span><span>94</span><span className="dash-pill p1">Meeting booked</span></div>
                  <div className="dash-row"><span>Sarah Chen</span><span>Pinnacle Properties</span><span>88</span><span className="dash-pill p2">Replied</span></div>
                  <div className="dash-row"><span>James Walker</span><span>SunCoast Facilities</span><span>76</span><span className="dash-pill p3">Follow up today</span></div>
                  <div className="dash-row"><span>Karen Mills</span><span>Meridian Senior Living</span><span>85</span><span className="dash-pill p2">Opened ×4</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS (condensed) ── */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="grid-2" style={{ gap: 64, alignItems: 'start' }}>
            <div>
              <span className="eyebrow rv">How it works</span>
              <h2 className="h2 rv" data-d="1" style={{ margin: '18px 0 14px' }}>
                From cold list to booked meeting, without hiring anyone.
              </h2>
              <p className="lead rv" data-d="2" style={{ marginBottom: 28 }}>
                You approve. It executes. Nothing sends without your rules, and
                everything it learns shows up in Friday&apos;s report.
              </p>
              <Link href="/platform" className="btn btn-ink rv" data-d="3">
                See the full platform <ArrowRight size={16} />
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {([
                [Search, 'Find and score', 'Pulls real commercial buildings in your service area, finds the decision-maker, and scores them 0 to 100. Realtors and HR contacts are excluded automatically.'],
                [PenLine, 'Write in your voice', 'Every email is written one at a time for that person, that building, that industry. No templates, no mail merge, no "I hope this finds you well."'],
                [Send, 'Send and follow up', 'Sends from your own inbox at a pace that protects your domain. Follow-ups go out on day 3, 5, and 10, and stop the second someone replies.'],
                [BarChart3, 'Report every Friday', 'A weekly scoreboard with reply rates, meetings, and what to change next week. Every percentage carries its raw count. Small samples are flagged, not hidden.'],
              ] as const).map(([Icon, title, body], i) => (
                <div key={title} className="card rv" data-d={String(i + 1)} style={{ display: 'flex', gap: 18, padding: 24 }}>
                  <div className="icon-tile" style={{ marginBottom: 0, flexShrink: 0 }}><Icon size={19} /></div>
                  <div>
                    <h3 className="h3" style={{ marginBottom: 6 }}>{title}</h3>
                    <p style={{ fontSize: 14.5, color: 'var(--tx-2)', lineHeight: 1.65 }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ECONOMICS ── */}
      <section className="sec dark dark-grid">
        <div className="wrap">
          <span className="eyebrow rv">The math</span>
          <h2 className="h2 rv" data-d="1" style={{ maxWidth: 620, margin: '18px 0 52px' }}>
            One contract pays for everything else.
          </h2>
          <div className="grid-3" style={{ gap: 44 }}>
            <div className="rv" data-d="1">
              <div className="stat-big"><CountUp value={50} prefix="$" suffix="k+" /></div>
              <div className="stat-lbl">what a single commercial maintenance contract can be worth every year, before emergency work is even counted</div>
            </div>
            <div className="rv" data-d="2">
              <div className="stat-big">5 <em>to</em> 8</div>
              <div className="stat-lbl">touches it typically takes to win one. PlumFlow runs every touch, on time, and stops the moment they reply</div>
            </div>
            <div className="rv" data-d="3">
              <div className="stat-big"><CountUp value={75} prefix="$" suffix="k" /></div>
              <div className="stat-lbl">the salary of a sales hire who makes those calls. PlumFlow does the finding, writing, and following up for a fraction</div>
            </div>
          </div>
          <p className="rv" data-d="3" style={{ marginTop: 44, fontSize: 14, color: 'var(--d-tx-3)', maxWidth: 560 }}>
            <Link href="/results" style={{ color: 'var(--accent-lt)' }}>See the full economics →</Link>
          </p>
        </div>
      </section>

      {/* ── THE EMAIL ── */}
      <section className="sec">
        <div className="wrap">
          <div className="grid-2" style={{ gap: 64, alignItems: 'center' }}>
            <div>
              <span className="eyebrow rv">The writing</span>
              <h2 className="h2 rv" data-d="1" style={{ margin: '18px 0 14px' }}>
                Emails a facility manager <span style={{ color: 'var(--accent)' }}>actually answers.</span>
              </h2>
              <p className="lead rv" data-d="2" style={{ marginBottom: 24 }}>
                Written one at a time, in plain text, about their building and
                their problems. The AI knows what a grease trap failure costs a
                kitchen and when backflow certs come due.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  'Plain text on purpose. Rich HTML from a young domain lands in spam.',
                  'Subject lines tested weekly against your own reply data.',
                  'Follow-ups bring a new angle, never "just checking in."',
                ].map((t, i) => (
                  <li key={i} className="rv" data-d={String(i + 1)} style={{ display: 'flex', gap: 10, fontSize: 15, color: 'var(--tx-2)' }}>
                    <Check size={17} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 3 }} /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="letter rv" data-d="2">
              <div className="letter-hd">
                <span>To: m.torres@harborviewhotels.com</span>
                <b>Subject: after-hours plumber</b>
              </div>
              <div className="letter-body">
                <p>Michael,</p>
                <p>
                  When a guest bathroom floods at 11pm, the difference between a
                  bad night and a bad week is who picks up the phone. Most
                  hotel groups find out their plumber&apos;s real response
                  time the hard way.
                </p>
                <p>
                  We keep crews on call for commercial properties across the
                  metro. If Harborview does not have a guaranteed after-hours
                  response in writing, worth a ten-minute call?
                </p>
                <p>Dan<br />Ironline Commercial Plumbing</p>
              </div>
              <div className="letter-note">Written by PlumFlow · sent from the company&apos;s own inbox · step 1 of 4</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="sec dark dark-grid" style={{ textAlign: 'center' }}>
        <div className="wrap">
          <h2 className="h1 rv" style={{ fontSize: 'clamp(36px, 4.6vw, 60px)', maxWidth: 760, margin: '0 auto 18px' }}>
            See it running <span style={{ color: 'var(--accent-lt)' }}>on your leads.</span>
          </h2>
          <p className="lead rv" data-d="1" style={{ maxWidth: 520, margin: '0 auto 36px' }}>
            Bring a list of 50 buildings you want as customers. We will score
            them, write to three of them, and show you the system live.
          </p>
          <div className="rv" data-d="2">
            <BookDemoButton className="btn btn-copper">
              Book a 30-minute demo <ArrowRight size={16} />
            </BookDemoButton>
          </div>
          <p className="rv" data-d="3" style={{ marginTop: 18, fontSize: 13.5, color: 'var(--d-tx-3)' }}>
            No deck. No discovery call maze. Just the product on real data.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
