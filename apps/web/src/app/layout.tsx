import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import AppShell from "@/components/AppShell";

export const metadata: Metadata = {
  title: "FedZero | Decentralized Verifiable AI Network (FL & zkML)",
  description: "FedZero — Collaborative Federated Learning with Zero-Knowledge ML Proofs and Multi-Chain Infrastructure across Arbitrum, Solana, and Zcash Cryptographic Pavilion.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
};

const DEFAULT_CLERK_PUB_KEY =
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ||
  "pk_test_b3JpZW50ZWQtZm94aG91bmQtMjIwNC5jbGVyay5hY2NvdW50cy5kZXYk";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey={DEFAULT_CLERK_PUB_KEY}>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" type="image/png" href="/favicon.png" />
          <link rel="apple-touch-icon" href="/favicon.png" />
        </head>
        <body className="font-sans antialiased">
          <AppShell>{children}</AppShell>
        </body>
      </html>
    </ClerkProvider>
  );
}

