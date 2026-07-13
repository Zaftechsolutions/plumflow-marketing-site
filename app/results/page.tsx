import type { Metadata } from 'next';
import { ArrowRight, FileCheck, CalendarClock, Scale } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Fx from '@/components/Fx';
import BookDemoButton from '@/components/BookDemoButton';
import CountUp from '@/components/CountUp';

export const metadata: Metadata = {
  title: 'The economics · PlumFlow',
  description:
    'What one commercial maintenance contract is worth, what it takes to win it, and why PlumFlow pays for itself with the first win.',
};

export default function Results() {
  return (
    <>
      <Fx />
      <Nav />

      <header className="page-hero">
        <div className="wrap">
          <span className="eyebrow rv">The economics</span>
          <h1 className="h1 rv" data-d="1" style={{ maxWidth: 880, margin: '18px 0 20px', fontSize: 'clamp(38px, 4.8vw, 62px)' }}>
            One contract pays for the system.
            <span style={{ color: 'var(--accent)' }}> Everything after is margin.</span>
          </h1>
          <p className="lead rv" data-d="2" style={{ maxWidth: 640 }}>
            Commercial maintenance agreements are the most valuable revenue in
            plumbing: recurring, predictable, and the first call when something
            bursts at 2am. Outbound is how you get in the room for them. Here
            is the math.
          </p>
        </div>
      </header>

      {/* The numbers that matter: the buyer's economics */}
      <section className="sec-tight dark dark-grid">
        <div className="wrap">
          <div className="grid-3" style={{ gap: 44, textAlign: 'left' }}>
            <div className="rv" data-d="1">
              <div className="stat-big"><CountUp value={50} prefix="$" suffix="k+" /></div>
              <div className="stat-lbl">what a single commercial maintenance contract can be worth per year, before emergency call-outs are counted</div>
            </div>
            <div className="rv" data-d="2">
              <div className="stat-big">5 <em>to</em> 8</div>
              <div className="stat-lbl">touches it typically takes before a facility manager responds. Almost nobody sustains that by hand</div>
            </div>
            <div className="rv" data-d="3">
              <div className="stat-big"><CountUp value={40} suffix="%" /></div>
              <div className="stat-lbl">of bought lead lists can be people who will never hire a plumber. PlumFlow scores them out before you pay to reach them</div>
            </div>
          </div>
        </div>
      </section>

      {/* The napkin math */}
      <section className="sec">
        <div className="wrap">
          <div className="grid-2" style={{ gap: 64, alignItems: 'center' }}>
            <div>
              <span className="eyebrow rv">The napkin math</span>
              <h2 className="h2 rv" data-d="1" style={{ margin: '18px 0 14px' }}>
                Run the numbers on <span style={{ color: 'var(--accent)' }}>one win.</span>
              </h2>
              <p className="lead rv" data-d="2" style={{ marginBottom: 24 }}>
                Contracts compound. The building you sign this quarter renews
                next year, adds emergency work in between, and refers the
                property manager&apos;s next building. That is why one win covers
                the system and then some.
              </p>
              <p className="rv" data-d="3" style={{ fontSize: 15, color: 'var(--tx-2)', lineHeight: 1.7 }}>
                And that math assumes email alone. It ignores the LinkedIn
                motion running beside it, the call list it builds for you, and
                every lead that replies six months later because the follow-up
                never dropped the ball.
              </p>
            </div>
            <div className="letter rv" data-d="2">
              <div className="letter-hd">
                <span>Worked example</span>
                <b>One maintenance agreement, held three years</b>
              </div>
              <div className="letter-body" style={{ fontFamily: 'var(--font-m)', fontSize: 14 }}>
                <p style={{ display: 'flex', justifyContent: 'space-between' }}><span>Year 1 contract value</span> <b>$50,000</b></p>
                <p style={{ display: 'flex', justifyContent: 'space-between' }}><span>Renewals, years 2 and 3</span> <b>$100,000</b></p>
                <p style={{ display: 'flex', justifyContent: 'space-between' }}><span>Emergency work on top</span> <b>$15,000+</b></p>
                <p style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--line)', paddingTop: 14 }}>
                  <span>One relationship</span> <b style={{ color: 'var(--accent)' }}>$165,000+</b>
                </p>
              </div>
              <div className="letter-note">Your rates will differ. The shape of the math will not.</div>
            </div>
          </div>
        </div>
      </section>

      {/* The 90-day motion */}
      <section className="sec dark">
        <div className="wrap">
          <span className="eyebrow rv">The first 90 days</span>
          <h2 className="h2 rv" data-d="1" style={{ maxWidth: 640, margin: '18px 0 52px' }}>
            What the system does before your first renewal conversation.
          </h2>
          <div className="grid-3">
            <div className="card rv" data-d="1">
              <div className="icon-tile"><FileCheck size={20} /></div>
              <h3 className="h3" style={{ marginBottom: 10 }}>Weeks 1 to 2: the list</h3>
              <p style={{ fontSize: 15, color: 'var(--d-tx-2)', lineHeight: 1.7 }}>
                Your service area is mapped: hotels, senior living, property
                management, restaurants, industrial. Every contact is scored,
                and the ones who can actually sign are separated from the ones
                who never will.
              </p>
            </div>
            <div className="card rv" data-d="2">
              <div className="icon-tile"><CalendarClock size={20} /></div>
              <h3 className="h3" style={{ marginBottom: 10 }}>Weeks 3 to 6: the campaigns</h3>
              <p style={{ fontSize: 15, color: 'var(--d-tx-2)', lineHeight: 1.7 }}>
                Emails go out in your name, from your own mailboxes, at a pace
                that protects your domain. Replies land in one inbox with
                suggested answers. Every open and click is tracked to a person.
              </p>
            </div>
            <div className="card rv" data-d="3">
              <div className="icon-tile"><Scale size={20} /></div>
              <h3 className="h3" style={{ marginBottom: 10 }}>Weeks 7 to 12: the compounding</h3>
              <p style={{ fontSize: 15, color: 'var(--d-tx-2)', lineHeight: 1.7 }}>
                Follow-up sequences mature, meetings reach your calendar, and
                the Friday report starts steering: which subject lines win,
                which industries answer, where to push next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers you can audit */}
      <section className="sec">
        <div className="wrap" style={{ maxWidth: 780 }}>
          <div className="rv">
            <span className="eyebrow">Numbers you can audit</span>
            <h2 className="h2" style={{ margin: '16px 0 18px' }}>We report like you answer to a board.</h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.75, color: 'var(--tx-2)', marginBottom: 16 }}>
              Every percentage in PlumFlow carries its raw count next to it. A
              50% reply rate on two sends says so. Small samples are labeled
              small. The Friday report your team reads shows the same numbers
              the system sees, with proposed changes you approve or dismiss,
              because nothing about your outreach should change without your
              sign-off.
            </p>
            <p style={{ fontSize: 16.5, lineHeight: 1.75, color: 'var(--tx-2)' }}>
              PlumFlow grew up inside a working multi-company commercial
              plumbing group before it was ever a product. Every feature exists
              because a contractor needed it on a Tuesday, not because a
              roadmap said so. That is also why the reporting is honest: it was
              built to be read by the people who sign the checks.
            </p>
          </div>
        </div>
      </section>

      <section className="sec dark dark-grid" style={{ textAlign: 'center' }}>
        <div className="wrap">
          <h2 className="h2 rv" style={{ maxWidth: 620, margin: '0 auto 16px' }}>
            Run the math on <span style={{ color: 'var(--accent-lt)' }}>your service area.</span>
          </h2>
          <p className="lead rv" data-d="1" style={{ maxWidth: 480, margin: '0 auto 34px' }}>
            Thirty minutes. We will pull real buildings from your market and
            show you exactly who the system would reach first.
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
