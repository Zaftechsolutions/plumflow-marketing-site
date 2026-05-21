import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400","500","600","700","800","900"] });

export const metadata: Metadata = {
  title: "PlumFlow AI — The Sales System Built for Commercial Plumbing",
  description: "Stop depending on referrals. PlumFlow finds the right decision-makers, writes the right message, sends it at the right time, and tells you exactly who to follow up with next.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
