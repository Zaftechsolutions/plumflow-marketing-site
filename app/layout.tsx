import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Bricolage_Grotesque, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-display" });
const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://plumflow.io"),
  title: "PlumFlow · The outbound sales system for commercial plumbing",
  description:
    "PlumFlow finds the facility managers who sign maintenance contracts, writes outreach that sounds like you, and tells you exactly who to call next. Built for commercial plumbing companies across the United States.",
  openGraph: {
    title: "PlumFlow · The outbound sales system for commercial plumbing",
    description:
      "Finds the right decision-makers, writes outreach that sounds like you, and tells you who to call next. Built for commercial plumbing companies across the United States.",
    url: "https://plumflow.io",
    siteName: "PlumFlow",
    type: "website",
  },
  icons: { icon: "/logo.svg", apple: "/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${bricolage.variable} ${instrument.variable} ${mono.variable}`}
    >
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </head>
      <body>
        {/* Pre-paint: mark that JS will drive reveals. Without JS this never
            runs and every .rv stays visible. Reduced-motion users also skip it. */}
        <Script id="fx-flag" strategy="beforeInteractive">
          {`try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('fx')}catch(e){}`}
        </Script>
        {children}
      </body>
    </html>
  );
}
