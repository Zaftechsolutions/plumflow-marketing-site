import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Fx from '@/components/Fx';
import BookDemoButton from '@/components/BookDemoButton';

export const metadata: Metadata = {
  title: 'Platform — PlumFlow',
  description:
    'Lead discovery, AI scoring, one-at-a-time email writing, deliverability discipline, automated follow-up, LinkedIn outreach, and a Friday report that tells the truth.',
};

const CAPS: {
  tag: string;
  title: string;
  body: string;
  panel: { label: string; rows: [string, string, ('ok' | 'warn' | 'mut' | '')?][] };
}[] = [
  {
    tag: 'Lead discovery',
    title: 'Real buildings, real buyers, in your service area',
    body: 'Search by trade and territory, import your own lists, or pull from public records. One team found 180 restaurants with failing health inspections and turned the worst scores into a call list. Every lead lands with company, contact, and address attached.',
    panel: {
      label: 'DISCOVERY RUN — CHARLOTTE METRO',
      rows: [
        ['Harborview Hotels', 'Facility Manager found', 'ok'],
        ['Crown Point Plaza', 'Property Manager found', 'ok'],
        ['Meridian Senior Living', 'Ops Director found', 'ok'],
        ['Registered agent LLC', 'Excluded, no operations staff', 'mut'],
      ],
    },
  },
  {
    tag: 'AI scoring',
    title: 'Decision-makers ranked, time-wasters removed',
    body: 'Every contact is scored 0 to 100 on buying authority. Facility and property managers rise to the top. Realtors, HR directors, and finance staff are excluded before they can waste a single send. Roughly 4 in 10 contacts on a bought list fail this test.',
    panel: {
      label: 'SCORING PASS',
      rows: [
        ['Facility Manager', 'Tier 1 · 92', 'ok'],
        ['Property Manager', 'Tier 1 · 88', 'ok'],
        ['VP Operations', 'Tier 2 · 74', ''],
        ['Real Estate Agent', 'Excluded · 11', 'mut'],
      ],
    },
  },
  {
    tag: 'Email verification',
    title: 'Bounces stopped before they hurt you',
    body: 'Every address is verified before anything sends. Hard bounces poison a sending domain fast, and a poisoned domain means even your good emails land in spam. Invalid addresses are flagged and quarantined automatically.',
    panel: {
      label: 'VERIFICATION',
      rows: [
        ['m.torres@harborview.com', 'Valid', 'ok'],
        ['s.chen@pinnacle.com', 'Valid', 'ok'],
        ['j.walker@suncoast.net', 'Valid', 'ok'],
        ['old@formercompany.com', 'Rejected before send', 'mut'],
      ],
    },
  },
  {
    tag: 'The writing',
    title: 'One email at a time, in your voice',
    body: 'No templates and no mail merge. Each message is written for that person, that building, that industry, with real trade knowledge behind it: grease trap cycles, backflow certification deadlines, what an after-hours failure actually costs. Banned-phrase rules keep it out of spam filters and out of cliche.',
    panel: {
      label: 'DRAFT — STEP 1 OF 4',
      rows: [
        ['Subject', 'after-hours plumber', ''],
        ['Angle', 'Guaranteed response time', ''],
        ['Personalization', 'Hotel portfolio, 3 sites', ''],
        ['Spam-trigger check', 'Passed, 0 flagged phrases', 'ok'],
      ],
    },
  },
  {
    tag: 'Deliverability',
    title: 'Discipline most agencies skip',
    body: 'Plain text on purpose. Daily send limits per mailbox. Ninety-second gaps between sends. Business hours only, in the prospect\'s timezone. Stale drafts expire instead of blasting out weeks late. These rules exist because we broke them once on our own campaigns and watched replies die.',
    panel: {
      label: 'SEND GUARDS',
      rows: [
        ['Daily cap', '15 per mailbox', ''],
        ['Send gap', '90 seconds minimum', ''],
        ['Window', 'Weekdays 8am to 5pm', ''],
        ['Stale drafts', 'Auto-expired after 14 days', 'ok'],
      ],
    },
  },
  {
    tag: 'Follow-up engine',
    title: 'Day 3, day 5, day 10. Then stop.',
    body: 'Most deals die from silence after the first email. Follow-ups go out automatically with a new angle each time, threaded into the original conversation. The moment a prospect replies, or says they are out of office until March, the sequence stops or reschedules itself.',
    panel: {
      label: 'FOLLOW-UP QUEUE',
      rows: [
        ['Michael Torres', 'Step 2 due today', 'warn'],
        ['Karen Mills', 'Step 3 due Thursday', ''],
        ['Sarah Chen', 'Replied, sequence stopped', 'ok'],
        ['Luis Ortega', 'OOO until Mar 4, rescheduled', ''],
      ],
    },
  },
  {
    tag: 'LinkedIn',
    title: 'A second channel, same discipline',
    body: 'Connection requests and openers for the same decision-makers, with daily limits and human approval before anything goes out. Replies and interest show up in the same weekly numbers as email, so you see the whole picture in one place.',
    panel: {
      label: 'LINKEDIN — THIS WEEK',
      rows: [
        ['Invites sent', '18 approved by you', ''],
        ['Accepted', '5 · 27.8%', 'ok'],
        ['Replies', '5 conversations', 'ok'],
        ['Interested', '2 flagged by AI', 'warn'],
      ],
    },
  },
  {
    tag: 'Friday report',
    title: 'A weekly scoreboard that tells the truth',
    body: 'Every Friday: sends, replies, meetings, which subject lines won, which industries answered, and 3 to 5 proposed changes for next week. You approve or dismiss each one; nothing changes itself. Every percentage carries its raw count, and small samples are labeled as small samples.',
    panel: {
      label: 'WEEKLY REPORT — EXCERPT',
      rows: [
        ['Reply rate', '3.2% · 41 of 1,284', ''],
        ['Best subject family', 'after-hours · 8.5%', 'ok'],
        ['Proposed change', 'Retire "grease trap" line', 'warn'],
        ['Your call', 'Approve or dismiss', ''],
      ],
    },
  },
];

export default function Platform() {
  return (
    <>
      <Fx />
      <Nav />

      <header className="page-hero">
        <div className="wrap">
          <span className="eyebrow rv">Platform</span>
          <h1 className="h1 rv" data-d="1" style={{ maxWidth: 860, margin: '18px 0 20px', fontSize: 'clamp(38px, 4.8vw, 62px)' }}>
            Everything between a cold list and a
            <span style={{ color: 'var(--accent)' }}> signed contract.</span>
          </h1>
          <p className="lead rv" data-d="2" style={{ maxWidth: 620 }}>
            Eight capabilities, one pipeline. Each one exists because outreach
            broke without it. Nothing here is decoration.
          </p>
        </div>
      </header>

      <section className="sec-tight">
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          {CAPS.map((c, i) => (
            <div
              key={c.tag}
              className="card rv"
              style={{
                display: 'grid',
                gridTemplateColumns: i % 2 ? '1fr 1.25fr' : '1.25fr 1fr',
                gap: 40,
                alignItems: 'center',
                padding: 40,
              }}
            >
              <div style={{ order: i % 2 ? 2 : 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                  <div className="step-num">{String(i + 1).padStart(2, '0')}</div>
                  <span className="eyebrow" style={{ fontSize: 11 }}>{c.tag}</span>
                </div>
                <h2 style={{ fontSize: 26, marginBottom: 12, lineHeight: 1.15 }}>{c.title}</h2>
                <p style={{ fontSize: 15.5, color: 'var(--tx-2)', lineHeight: 1.7 }}>{c.body}</p>
              </div>
              <div style={{ order: i % 2 ? 1 : 2 }}>
                <div style={{ background: 'var(--ink)', borderRadius: 12, padding: '18px 20px', boxShadow: 'var(--shadow-lg)' }}>
                  <div style={{ fontFamily: 'var(--font-m)', fontSize: 10, letterSpacing: '0.1em', color: 'var(--d-tx-3)', marginBottom: 14 }}>
                    {c.panel.label}
                  </div>
                  {c.panel.rows.map(([l, r, tone], j) => (
                    <div
                      key={j}
                      style={{
                        display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'baseline',
                        padding: '9px 0',
                        borderBottom: j < c.panel.rows.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                      }}
                    >
                      <span style={{ fontSize: 13.5, color: 'var(--d-tx)', fontWeight: 500 }}>{l}</span>
                      <span
                        style={{
                          fontFamily: 'var(--font-m)', fontSize: 12,
                          color: tone === 'ok' ? '#3FCE8F' : tone === 'warn' ? '#E9BE59' : tone === 'mut' ? 'var(--d-tx-3)' : 'var(--d-tx-2)',
                          textAlign: 'right',
                        }}
                      >
                        {r}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="sec dark dark-grid" style={{ textAlign: 'center' }}>
        <div className="wrap">
          <h2 className="h2 rv" style={{ maxWidth: 640, margin: '0 auto 16px' }}>
            Thirty minutes. Your service area. <span style={{ color: 'var(--accent-lt)' }}>Live.</span>
          </h2>
          <p className="lead rv" data-d="1" style={{ maxWidth: 480, margin: '0 auto 34px' }}>
            The fastest way to judge it is to watch it score your own market.
          </p>
          <div className="rv" data-d="2">
            <BookDemoButton className="btn btn-copper">
              Book a demo <ArrowRight size={16} />
            </BookDemoButton>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
