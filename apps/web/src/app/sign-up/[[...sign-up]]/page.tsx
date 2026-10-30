"use client";

import { SignUp } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1917] flex flex-col justify-center items-center p-4 selection:bg-[#E05338] selection:text-white">
      {/* Back to Home Link */}
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-[#78716C] hover:text-[#E05338] transition-colors py-1.5 px-3 rounded-lg border border-[#1C1917]/20 bg-[#F4EFE6] retro-shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO HOME</span>
        </Link>
      </div>

      {/* Brand Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#141416] border-2 border-[#1C1917] flex items-center justify-center retro-shadow-sm overflow-hidden">
          <img src="/fedzero_emblem.png" alt="FedZero" className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="font-display font-black text-xl text-[#1C1917] tracking-tight uppercase">
            Join FedZero
          </h1>
          <p className="text-[11px] font-mono text-[#78716C]">
            Register as a Federated Edge Contributor
          </p>
        </div>
      </div>

      {/* In-App Native Clerk Sign Up */}
      <div className="retro-shadow rounded-2xl border-2 border-[#1C1917] bg-[#FAF7F2] overflow-hidden p-2">
        <SignUp
          path="/sign-up"
          routing="path"
          signInUrl="/sign-in"
          fallbackRedirectUrl="/dashboard"
          appearance={{
            elements: {
              card: "shadow-none border-0 bg-transparent",
              formButtonPrimary:
                "bg-[#E05338] hover:bg-[#1C1917] text-white font-mono font-bold text-xs uppercase tracking-wider border-2 border-[#1C1917] retro-shadow-sm",
              headerTitle: "font-display font-black text-lg text-[#1C1917] uppercase",
              headerSubtitle: "font-sans text-xs text-[#78716C]",
              socialButtonsBlockButton:
                "border-2 border-[#1C1917] retro-shadow-sm bg-[#FAF7F2] font-mono font-bold text-xs hover:bg-[#F4EFE6]",
              footerActionLink: "text-[#E05338] font-bold hover:underline",
            },
          }}
        />
      </div>
    </div>
  );
}
