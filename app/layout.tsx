import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yadavi Bhat — Software Engineer in the making",
  description:
    "Computer Science student at NMIT Bengaluru. Full-stack and AI-driven systems, student engineering leadership, hackathon finalist. Seeking a Software Engineering internship.",
  openGraph: {
    title: "Yadavi Bhat — Software Engineer in the making",
    description: "Full-stack and AI-driven systems, from first prototype to deployment.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0c",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@300;400;500&family=JetBrains+Mono:wght@400&display=swap"
          rel="stylesheet"
        />
        {/* If JavaScript is off, show everything instead of waiting for reveal animations */}
        <noscript>
          <style>{`.r{opacity:1!important;transform:none!important}#iris{display:none!important}.pre .n2{clip-path:inset(0)!important}.pre .pol img{filter:grayscale(1)!important}`}</style>
        </noscript>
      </head>
      <body className="pre" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
