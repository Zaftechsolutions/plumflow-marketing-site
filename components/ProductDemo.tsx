'use client'
import React, { useState } from 'react'

const tabs = [
  { id: 'analytics', label: 'Analytics' },
  { id: 'leads',     label: 'Leads' },
  { id: 'campaigns', label: 'Campaigns' },
  { id: 'advisor',   label: 'AI Advisor' },
]

function AnalyticsScreen() {
  return (
    <div style={{ padding: '28px 32px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><path d="M3 17l6-6 4 4 8-9"/></svg>
        <span style={{ fontSize: 18, fontWeight: 700, color: '#f1f5f9' }}>Email Tracking</span>
      </div>
      {/* Stat cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 28 }}>
        {[
          { label: 'EMAILS SENT',  value: '1,284', sub: 'total delivered',  color: '#94a3b8', accent: '#1e293b' },
          { label: 'OPENED',       value: '387',   sub: '30.1% open rate',  color: '#00C2FF', accent: 'rgba(0,194,255,0.08)', icon: '👁' },
          { label: 'CLICKED',      value: '94',    sub: '7.3% click rate',  color: '#a78bfa', accent: 'rgba(167,139,250,0.08)', icon: '🔗' },
          { label: 'REPLIED',      value: '41',    sub: '3.2% reply rate',  color: '#34d399', accent: 'rgba(52,211,153,0.08)', icon: '↩' },
        ].map(s => (
          <div key={s.label} style={{
            background: s.accent,
            border: `1px solid ${s.color === '#94a3b8' ? 'rgba(255,255,255,0.06)' : `${s.color}30`}`,
            borderRadius: 12, padding: '18px 16px',
          }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.1em', color: '#64748b', marginBottom: 6 }}>{s.label}</div>
            <div style={{ fontSize: 30, fontWeight: 800, color: s.color, letterSpacing: '-0.03em', lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontSize: 11, color: '#475569', marginTop: 4 }}>{s.sub}</div>
          </div>
        ))}
      </div>
      {/* Table */}
      <div style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 80px 90px 60px', padding: '10px 16px', background: 'rgba(255,255,255,0.03)' }}>
          {['PROSPECT','COMPANY','SCORE','STATUS','OPENS'].map(h => (
            <span key={h} style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.08em', color: '#475569' }}>{h}</span>
          ))}
        </div>
        {[
          { name: 'Michael Torres', co: 'Harborview Hotels',     score: 94, status: 'Opened',  opens: 'x4', sc: '#22c55e' },
          { name: 'Sarah Chen',     co: 'Pinnacle Properties',   score: 88, status: 'Sent',    opens: '—',  sc: '#3b82f6' },
          { name: 'James Walker',   co: 'SunCoast Facilities',   score: 76, status: 'Opened',  opens: 'x2', sc: '#f59e0b' },
          { name: 'Lisa Martinez',  co: 'Summit Medical Group',  score: 91, status: 'Replied', opens: 'x6', sc: '#22c55e' },
        ].map((r, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr 80px 90px 60px',
            padding: '13px 16px',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)',
          }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#e2e8f0' }}>{r.name}</span>
            <span style={{ fontSize: 12, color: '#94a3b8' }}>{r.co}</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: r.sc }}>{r.score}</span>
            <span>
              <span style={{
                fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 20,
                background: r.status === 'Replied' ? 'rgba(52,211,153,0.15)' : r.status === 'Opened' ? 'rgba(0,194,255,0.12)' : 'rgba(59,130,246,0.12)',
                color: r.status === 'Replied' ? '#34d399' : r.status === 'Opened' ? '#00C2FF' : '#60a5fa',
              }}>{r.status}</span>
            </span>
            <span style={{ fontSize: 12, color: '#64748b' }}>{r.opens}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function LeadsScreen() {
  return (
    <div style={{ padding: '28px 32px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg>
          <span style={{ fontSize: 18, fontWeight: 700, color: '#f1f5f9' }}>Lead Pipeline</span>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {['All (425)','Hot (38)','Warm (112)','Cold (275)'].map(f => (
            <span key={f} style={{
              fontSize: 11, padding: '4px 10px', borderRadius: 6,
              background: f.startsWith('All') ? 'rgba(0,194,255,0.15)' : 'rgba(255,255,255,0.05)',
              color: f.startsWith('All') ? '#00C2FF' : '#64748b',
              border: `1px solid ${f.startsWith('All') ? 'rgba(0,194,255,0.3)' : 'rgba(255,255,255,0.08)'}`,
              fontWeight: 600,
            }}>{f}</span>
          ))}
        </div>
      </div>
      <div style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 100px 80px 100px', padding: '10px 16px', background: 'rgba(255,255,255,0.03)' }}>
          {['COMPANY','CONTACT','INDUSTRY','SCORE','STATUS'].map(h => (
            <span key={h} style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.08em', color: '#475569' }}>{h}</span>
          ))}
        </div>
        {[
          { co: 'Marriott Charlotte',      contact: 'Keith M.',    ind: 'Hospitality',  score: 90, status: 'Hot',       sc: '#ef4444' },
          { co: 'Novant Health',           contact: 'Jay P.',      ind: 'Healthcare',   score: 88, status: 'Contacted', sc: '#3b82f6' },
          { co: 'Equity Commercial Props', contact: 'Diana K.',    ind: 'Prop. Mgmt',   score: 85, status: 'Hot',       sc: '#ef4444' },
          { co: "Bojangles' Rest.",        contact: 'Michael B.',  ind: 'Food & Bev',   score: 82, status: 'Warm',      sc: '#f59e0b' },
          { co: 'Wyndham Hotels',          contact: 'Duane S.',    ind: 'Hospitality',  score: 80, status: 'Contacted', sc: '#3b82f6' },
        ].map((r, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr 100px 80px 100px',
            padding: '12px 16px', borderTop: '1px solid rgba(255,255,255,0.05)',
          }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#e2e8f0' }}>{r.co}</span>
            <span style={{ fontSize: 12, color: '#94a3b8' }}>{r.contact}</span>
            <span style={{ fontSize: 11, color: '#64748b' }}>{r.ind}</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: r.sc }}>{r.score}</span>
            <span>
              <span style={{
                fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 20,
                background: r.status === 'Hot' ? 'rgba(239,68,68,0.12)' : r.status === 'Warm' ? 'rgba(245,158,11,0.12)' : 'rgba(59,130,246,0.12)',
                color: r.status === 'Hot' ? '#ef4444' : r.status === 'Warm' ? '#f59e0b' : '#60a5fa',
              }}>{r.status}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function CampaignsScreen() {
  return (
    <div style={{ padding: '28px 32px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg>
          <span style={{ fontSize: 18, fontWeight: 700, color: '#f1f5f9' }}>AI Outreach Campaigns</span>
        </div>
        <div style={{
          background: 'linear-gradient(135deg, #1B3CFF, #00C2FF)',
          borderRadius: 8, padding: '8px 16px',
          fontSize: 12, fontWeight: 700, color: '#fff',
        }}>Generate AI Messages</div>
      </div>
      {/* Email preview */}
      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '20px 22px', marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(0,194,255,0.1)', display: 'grid', placeItems: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00C2FF" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg>
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#e2e8f0' }}>Keith Morrison — Marriott Charlotte</div>
            <div style={{ fontSize: 11, color: '#475569' }}>General Manager · Hospitality · Fit score 90</div>
          </div>
          <span style={{ marginLeft: 'auto', fontSize: 11, padding: '3px 10px', borderRadius: 20, background: 'rgba(239,68,68,0.12)', color: '#ef4444', fontWeight: 600 }}>Hot</span>
        </div>
        <div style={{ fontSize: 11, color: '#475569', marginBottom: 6 }}>Subject: Grease trap compliance — Marriott Charlotte</div>
        <div style={{ fontSize: 12.5, color: '#94a3b8', lineHeight: 1.7, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 12 }}>
          Hi Keith,<br/><br/>
          With spring bringing the usual post-winter grease trap backups, I wanted to reach out about compliance maintenance at Marriott Charlotte. Commercial kitchens in your market are seeing 30% more health department inspections this quarter.<br/><br/>
          ER Plumbing specializes in commercial grease trap pumping and emergency backflow work across Mecklenburg County — we keep facilities compliant so General Managers don't get caught off guard.<br/><br/>
          Would a 15-minute call this week make sense?
        </div>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <div style={{ flex: 1, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 8, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"/></svg>
          <span style={{ fontSize: 12, color: '#64748b' }}>Edit message</span>
        </div>
        <div style={{ background: 'rgba(0,229,142,0.1)', border: '1px solid rgba(0,229,142,0.25)', borderRadius: 8, padding: '10px 18px', fontSize: 12, fontWeight: 600, color: '#00E58E' }}>
          Send Email →
        </div>
      </div>
    </div>
  )
}

function AdvisorScreen() {
  return (
    <div style={{ padding: '28px 32px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00E58E', boxShadow: '0 0 6px #00E58E' }} />
        <span style={{ fontSize: 18, fontWeight: 700, color: '#f1f5f9' }}>Ask Your AI Strategist</span>
        <span style={{ fontSize: 11, color: '#475569' }}>Knows your pipeline in real-time</span>
      </div>
      {/* Chat */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ background: 'rgba(27,60,255,0.15)', border: '1px solid rgba(27,60,255,0.25)', borderRadius: '14px 14px 4px 14px', padding: '11px 16px', maxWidth: '70%', fontSize: 13, color: '#c7d2fe' }}>
            Which industry should I focus on first?
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg,#1B3CFF,#00C2FF)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px 14px 14px 4px', padding: '14px 16px', maxWidth: '80%', fontSize: 13, color: '#94a3b8', lineHeight: 1.65 }}>
            Focus on Food and Beverage first. You have 38 uncontacted hot leads in that segment and spring is peak grease trap season. One property with two grease traps locks in $1,200 a year in recurring maintenance revenue. Start there, then move to Healthcare for backflow testing contracts.
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ background: 'rgba(27,60,255,0.15)', border: '1px solid rgba(27,60,255,0.25)', borderRadius: '14px 14px 4px 14px', padding: '11px 16px', maxWidth: '70%', fontSize: 13, color: '#c7d2fe' }}>
            What should my subject line say?
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg,#1B3CFF,#00C2FF)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px 14px 14px 4px', padding: '14px 16px', fontSize: 13, color: '#94a3b8', lineHeight: 1.65 }}>
            Try: <span style={{ color: '#00C2FF', fontWeight: 600 }}>"Grease trap compliance — [Restaurant Name]"</span>. Specific, problem-aware, no spam triggers. Avoid "following up" or anything with exclamation marks.
          </div>
        </div>
      </div>
    </div>
  )
}

const screens: Record<string, React.ReactElement> = {
  analytics: <AnalyticsScreen />,
  leads:     <LeadsScreen />,
  campaigns: <CampaignsScreen />,
  advisor:   <AdvisorScreen />,
}

export default function ProductDemo() {
  const [active, setActive] = useState('analytics')

  return (
    <section style={{ padding: '96px 20px', background: 'linear-gradient(180deg, #F8F9FF 0%, #EBF0FF 100%)' }}>
      <div style={{ maxWidth: 980, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <span style={{
            display: 'inline-block', fontSize: 11.5, fontWeight: 700,
            letterSpacing: '.1em', textTransform: 'uppercase',
            color: '#1B3CFF', background: 'rgba(27,60,255,0.08)',
            padding: '5px 14px', borderRadius: 20, marginBottom: 16,
          }}>Live Product Preview</span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#080D24', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 16 }}>
            A glimpse inside PlumFlow
          </h2>
          <p style={{ fontSize: 16, color: '#4B5882', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            From lead scoring to AI-written outreach to live reply tracking — here's a preview of what your team gets access to.
          </p>
        </div>

        {/* Browser mockup */}
        <div style={{
          borderRadius: 16,
          overflow: 'hidden',
          boxShadow: '0 32px 80px -12px rgba(8,13,36,0.25), 0 0 0 1px rgba(8,13,36,0.08)',
        }}>
          {/* Browser chrome */}
          <div style={{
            background: '#1a1f35',
            padding: '12px 16px',
            display: 'flex', alignItems: 'center', gap: 12,
            borderBottom: '1px solid rgba(255,255,255,0.07)',
          }}>
            {/* Traffic lights */}
            <div style={{ display: 'flex', gap: 6 }}>
              {['#ef4444','#f59e0b','#22c55e'].map(c => (
                <div key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c, opacity: 0.8 }} />
              ))}
            </div>
            {/* URL bar */}
            <div style={{
              flex: 1, maxWidth: 340, margin: '0 auto',
              background: 'rgba(255,255,255,0.06)',
              borderRadius: 6, padding: '5px 12px',
              fontSize: 11.5, color: '#64748b',
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              app.plumflow.io
            </div>
          </div>

          {/* Tabs row */}
          <div style={{
            background: '#0D1120',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            display: 'flex', gap: 4, padding: '0 16px',
          }}>
            {tabs.map(t => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                style={{
                  padding: '12px 18px',
                  background: 'none', border: 'none',
                  borderBottom: `2px solid ${active === t.id ? '#00C2FF' : 'transparent'}`,
                  color: active === t.id ? '#00C2FF' : '#475569',
                  fontSize: 13, fontWeight: active === t.id ? 600 : 400,
                  cursor: 'pointer', transition: 'all 0.15s',
                }}
              >{t.label}</button>
            ))}
          </div>

          {/* Screen content */}
          <div style={{ background: '#0A0F1C', minHeight: 420 }}>
            {screens[active]}
          </div>
        </div>

        {/* CTA below demo */}
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <p style={{ fontSize: 14, color: '#8E9AC0', marginBottom: 20 }}>
            Want to see the full platform in action with your own data?
          </p>
          <a href="https://calendly.com/zeeshanzafar1232/30min" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #1B3CFF, #00C2FF)',
            color: '#fff', textDecoration: 'none',
            padding: '14px 36px', borderRadius: 12,
            fontSize: 15, fontWeight: 700,
            boxShadow: '0 8px 28px rgba(27,60,255,0.35)',
            letterSpacing: '-0.01em',
          }}>
            Book a Demo →
          </a>
        </div>

      </div>
    </section>
  )
}
