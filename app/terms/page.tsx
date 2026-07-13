import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = { title: 'Terms · PlumFlow' };

export default function Terms() {
  return (
    <>
      <Nav />
      <section className="sec" style={{ minHeight: '55vh' }}>
        <div className="wrap" style={{ maxWidth: 720 }}>
          <h1 className="h2" style={{ marginBottom: 24 }}>Terms of service</h1>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontSize: 15.5, lineHeight: 1.75, color: 'var(--tx-2)' }}>
            <p>The essentials, in plain language:</p>
            <p>PlumFlow is provided as a service under a signed agreement with each customer. That agreement, not this page, governs the commercial relationship: scope, pricing, term, and exit.</p>
            <p>You agree to use the platform lawfully, including applicable email and telemarketing regulations in your jurisdiction (such as CAN-SPAM in the United States). The system is built to help you comply, but the outreach is yours and sent in your name.</p>
            <p>Your data stays yours. Our code stays ours. Neither of us should be surprised by anything in the signed agreement.</p>
            <p>Questions before signing anything? Email <a href="mailto:Info@plumflow.io" style={{ color: 'var(--accent)' }}>Info@plumflow.io</a>.</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
