import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <img src="/mark.svg" alt="" style={{ width: 28, height: 28, borderRadius: 7 }} />
              <b style={{ fontFamily: 'var(--font-d)', fontSize: 17, color: 'var(--d-tx)' }}>PlumFlow</b>
            </div>
            <p>
              The outbound sales system for commercial plumbing. Built inside a
              five-company plumbing group, tested on real facility managers,
              shipped because it worked.
            </p>
          </div>
          <div>
            <h4>Product</h4>
            <Link href="/platform">Platform</Link>
            <Link href="/results">Results</Link>
            <Link href="/pricing">Pricing</Link>
            <a href="https://app.plumflow.io">Sign in</a>
          </div>
          <div>
            <h4>Company</h4>
            <a href="mailto:hello@plumflow.io">hello@plumflow.io</a>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
          <div>
            <h4>Built for</h4>
            <span style={{ display: 'block', fontSize: 14.5, marginBottom: 11 }}>Commercial plumbing companies</span>
            <span style={{ display: 'block', fontSize: 14.5, marginBottom: 11 }}>Mechanical contractors</span>
            <span style={{ display: 'block', fontSize: 14.5 }}>Multi-OpCo trade groups</span>
          </div>
        </div>
        <div className="footer-btm">
          <span>© {new Date().getFullYear()} PlumFlow. All rights reserved.</span>
          <span>Built in the field, not in a lab.</span>
        </div>
      </div>
    </footer>
  );
}
