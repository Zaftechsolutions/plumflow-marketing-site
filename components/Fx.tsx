'use client';

import { useEffect } from 'react';

// Activates .rv scroll reveals. Falls back to visible-by-default: elements
// only get hidden once JS confirms an observer exists, so content can never
// be stuck invisible (no-JS, crawlers, reduced motion).
export default function Fx() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.rv').forEach(el => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      entries => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    );
    document.querySelectorAll('.rv').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
