import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Fx from '@/components/Fx';
import BookDemoButton from '@/components/BookDemoButton';
import CountUp from '@/components/CountUp';

export const metadata: Metadata = {
  title: 'Results — PlumFlow',
  description:
    'How a five-company commercial plumbing group replaced ad-hoc referral selling with a working outbound system. Real numbers, including the parts that went wrong.',
};

export default function Results() {
  return (
    <>
      <Fx />
      <Nav />

      <header className="page-hero">
        <div className="wrap">
          <span className="eyebrow rv">Field report</span>
          <h1 className="h1 rv" data-d="1" style={{ maxWidth: 880, margin: '18px 0 20px', fontSize: 'clamp(38px, 4.8vw, 62px)' }}>
            One operator. Five plumbing companies.
            <span className="h-serif" style={{ color: 'var(--copper)' }}> A working pipeline.</span>
          </h1>
          <p className="lead rv" data-d="2" style={{ maxWidth: 640 }}>
            PlumFlow was not built as a product first. It was built inside a
            private-equity-backed group of five commercial plumbing companies
            because one outreach manager could not run five markets from
            Outlook and spreadsheets. This is what happened, including the
            parts that went wrong.
          </p>
        </div>
      </header>

      {/* Numbers */}
      <section className="sec-tight dark dark-grid">
        <div className="wrap">
          <div className="grid-3" style={{ gap: 44, textAlign: 'left' }}>
            <div className="rv" data-d="1">
              <div className="stat-big"><CountUp value={15000} suffix="+" /></div>
              <div className="stat-lbl">leads imported and scored across five markets in the Southeast</div>
            </div>
            <div className="rv" data-d="2">
              <div className="stat-big"><CountUp value={3} /> <em>meetings</em></div>
              <div className="stat-lbl">booked in one week of a single cold email campaign</div>
            </div>
            <div className="rv" data-d="3">
              <div className="stat-big"><CountUp value={2} /> <em>vendor deals</em></div>
              <div className="stat-lbl">national vendor registrations opened directly from replies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="sec">
        <div className="wrap" style={{ maxWidth: 780 }}>
          <div className="rv">
            <span className="eyebrow">The situation</span>
            <h2 className="h2" style={{ margin: '16px 0 18px' }}>Five companies, one person, zero system</h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.75, color: 'var(--tx-2)', marginBottom: 16 }}>
              Each operating company had its own market, its own mailbox, and
              its own half-finished lead list. Cold emails were written one at
              a time and sent from Outlook. Nobody knew which messages worked
              because nothing was tracked. Follow-up happened when someone
              remembered.
            </p>
            <p style={{ fontSize: 16.5, lineHeight: 1.75, color: 'var(--tx-2)' }}>
              The group&apos;s leadership wanted pipeline they could inspect. The
              outreach manager wanted his evenings back. Those are the two
              problems PlumFlow was built to solve.
            </p>
          </div>

          <div className="rv" style={{ marginTop: 64 }}>
            <span className="eyebrow">What changed</span>
            <h2 className="h2" style={{ margin: '16px 0 18px' }}>The system took over the grunt work</h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.75, color: 'var(--tx-2)', marginBottom: 16 }}>
              Fifteen thousand leads went in and got scored. The obvious
              time-wasters, realtors, HR contacts, agencies, were cut before a
              single email went out. The AI wrote each message for the specific
              building and industry, sent from each company&apos;s own mailbox at a
              pace that protects the domain, and queued follow-ups for day 3,
              5, and 10.
            </p>
            <p style={{ fontSize: 16.5, lineHeight: 1.75, color: 'var(--tx-2)' }}>
              Replies landed in one inbox with AI-suggested responses. Meetings
              got booked with facility managers, a church administrator, a
              national facilities vendor. Two vendor registration doors opened
              from cold replies. LinkedIn ran alongside email with a 27.8%
              connection accept rate, every invite approved by a human first.
            </p>
          </div>

          <div className="rv" style={{ marginTop: 64 }}>
            <span className="eyebrow">The part that went wrong</span>
            <h2 className="h2" style={{ margin: '16px 0 18px' }}>One bad week, and what it taught the product</h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.75, color: 'var(--tx-2)', marginBottom: 16 }}>
              In July, reply rates collapsed for a week. The cause was not the
              copy and not the market: a backlog of stale drafts from May had
              been quietly going out weeks late, tripling daily volume and
              sending follow-ups that no longer made sense. Mailbox reputation
              took the hit.
            </p>
            <p style={{ fontSize: 16.5, lineHeight: 1.75, color: 'var(--tx-2)' }}>
              The fix is now built into PlumFlow for every customer: drafts
              expire instead of sending late, daily limits are enforced across
              manual and automated sends together, and pausing a mailbox
              actually pauses everything. We tell this story on purpose. A
              vendor who has never broken deliverability is a vendor who has
              never really run outreach.
            </p>
          </div>

          <div className="rv" style={{ marginTop: 64 }}>
            <span className="eyebrow">Where it stands</span>
            <h2 className="h2" style={{ margin: '16px 0 18px' }}>Every Friday, leadership gets the truth</h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.75, color: 'var(--tx-2)' }}>
              The week ends with a report: sends, replies with raw counts,
              meetings, which subject families won, and proposed changes the
              operator approves or dismisses. The group&apos;s leadership reads the
              same numbers the operator sees. No rounding up, no vanity
              metrics, and small samples are labeled as exactly that.
            </p>
          </div>
        </div>
      </section>

      <section className="sec dark dark-grid" style={{ textAlign: 'center' }}>
        <div className="wrap">
          <h2 className="h2 rv" style={{ maxWidth: 620, margin: '0 auto 16px' }}>
            Want this running in <span className="h-serif" style={{ color: 'var(--copper-lt)' }}>your market?</span>
          </h2>
          <p className="lead rv" data-d="1" style={{ maxWidth: 480, margin: '0 auto 34px' }}>
            We will show you the exact system above, live, on your own service
            area.
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
