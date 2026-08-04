import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Bricolage_Grotesque, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import Chatbot from "@/components/Chatbot";
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
  // The card image itself comes from app/opengraph-image.png and
  // app/twitter-image.png. Those file conventions emit the image tags but
  // not the card type, and X defaults to the small "summary" card, so the
  // large one has to be asked for explicitly.
  twitter: {
    card: "summary_large_image",
    title: "PlumFlow · The outbound sales system for commercial plumbing",
    description:
      "Finds the right decision-makers, writes outreach that sounds like you, and tells you who to call next. Built for commercial plumbing companies across the United States.",
  },
  // Icons come from the app/ file conventions now: favicon.ico, icon.svg and
  // apple-icon.png. They used to be pointed at logo.png, which was still the
  // pre-rebrand cartoon mark, 1536x1024 and 2.3MB, so it was serving the wrong
  // brand as the tab and home-screen icon.
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
        <Chatbot />
      </body>
    </html>
  );
}
