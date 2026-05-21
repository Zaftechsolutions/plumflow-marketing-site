'use client';

const CALENDLY_URL = 'https://calendly.com/plumflowio/30min';

interface BookDemoButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function BookDemoButton({ className, children, onClick }: BookDemoButtonProps) {
  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick?.();
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ url: CALENDLY_URL });
    }
  };

  return (
    <a href="#" className={className} onClick={openCalendly}>
      {children}
    </a>
  );
}
