import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = { title: 'Privacy — PlumFlow' };

export default function Privacy() {
  return (
    <>
      <Nav />
      <section className="sec" style={{ minHeight: '55vh' }}>
        <div className="wrap" style={{ maxWidth: 720 }}>
          <h1 className="h2" style={{ marginBottom: 24 }}>Privacy</h1>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontSize: 15.5, lineHeight: 1.75, color: 'var(--tx-2)' }}>
            <p>The short version, in plain language:</p>
            <p>We collect what you give us when you book a demo (name, email, company) and use it to talk to you about PlumFlow. We do not sell it, rent it, or share it with advertisers.</p>
            <p>Customer data inside the product (your leads, emails, campaign results) belongs to you. We access it to run and support the service, and for nothing else. If you leave, you take it with you.</p>
            <p>Demo scheduling runs on Calendly, which has its own privacy terms. Our sites use only the cookies needed to function.</p>
            <p>Questions, or want your data deleted? Email <a href="mailto:hello@plumflow.io" style={{ color: 'var(--accent)' }}>hello@plumflow.io</a> and a human will handle it.</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
