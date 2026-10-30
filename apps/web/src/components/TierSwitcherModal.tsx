"use client";

import React from "react";
import { useNetworkTier } from "@/context/NetworkTierContext";
import {
  Sparkles,
  Zap,
  Check,
  ShieldCheck,
  X,
  GraduationCap,
  Building2,
  Coins,
  ArrowRight,
} from "lucide-react";

export default function TierSwitcherModal() {
  const {
    tier,
    setTier,
    isCommunity,
    isEnterprise,
    modalOpen,
    setModalOpen,
  } = useNetworkTier();

  if (!modalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C1917]/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-2xl border-2 border-[#1C1917] retro-shadow-lg p-5 sm:p-7 space-y-5 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setModalOpen(false)}
          className="absolute top-4 right-4 p-1.5 rounded-lg border-2 border-[#1C1917] bg-[#F4EFE6] hover:bg-[#FAF7F2] text-[#1C1917] retro-shadow-sm cursor-pointer transition-all"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1 pr-8">
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-[#1C1917] text-white text-[11px] font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#E05338]" />
            <span>DUAL-TIER PROTOCOL ARCHITECTURE</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-[#1C1917] font-display uppercase tracking-tight">
            Choose Your Network Tier
          </h2>
          <p className="text-xs sm:text-sm text-[#57534E] font-medium">
            FedZero supports both free community learning for students &amp; researchers, and high-assurance production mainnet for enterprises.
          </p>
        </div>

        {/* Tier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          {/* 1. COMMUNITY TIER (FREE) */}
          <div
            className={`p-4 sm:p-5 rounded-xl border-2 transition-all flex flex-col justify-between space-y-4 ${
              isCommunity
                ? "border-emerald-700 bg-emerald-50/50 retro-shadow ring-2 ring-emerald-600/20"
                : "border-[#1C1917] bg-white retro-shadow-sm hover:border-emerald-700"
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold border border-emerald-600/30">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>FOR STUDENTS &amp; DEVS</span>
                </span>
                {isCommunity && (
                  <span className="text-[11px] font-bold text-emerald-800 flex items-center space-x-1 font-mono">
                    <Check className="w-3.5 h-3.5" />
                    <span>ACTIVE</span>
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-black text-[#1C1917] font-display uppercase">
                  Community Tier
                </h3>
                <div className="text-xl font-black text-emerald-700 font-display mt-0.5">
                  100% Free / ₹0
                </div>
                <p className="text-xs text-[#57534E] font-medium mt-1">
                  Built for college students, hackathons, open-source AI researchers, and hobbyists.
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-1.5 text-xs text-[#1C1917] pt-2 border-t border-[#1C1917]/10 font-medium">
                <div className="flex items-start space-x-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Zero crypto costs (no wallet funding needed)</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Uses Solana Devnet &amp; Arbitrum Sepolia</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Free automatic test token faucet</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Collaborative federated model training</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setTier("community");
                setModalOpen(false);
              }}
              className={`w-full py-2.5 px-3 rounded-lg border-2 border-[#1C1917] font-bold text-xs uppercase tracking-wider transition-transform cursor-pointer ${
                isCommunity
                  ? "bg-emerald-700 text-white cursor-default"
                  : "bg-[#FAF7F2] hover:bg-emerald-700 hover:text-white text-[#1C1917] retro-shadow-sm hover:-translate-y-0.5"
              }`}
            >
              {isCommunity ? "Currently Active" : "Select Community Tier"}
            </button>
          </div>

          {/* 2. ENTERPRISE MAINNET */}
          <div
            className={`p-4 sm:p-5 rounded-xl border-2 transition-all flex flex-col justify-between space-y-4 ${
              isEnterprise
                ? "border-amber-600 bg-amber-50/50 retro-shadow ring-2 ring-amber-500/20"
                : "border-[#1C1917] bg-white retro-shadow-sm hover:border-amber-600"
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-bold border border-amber-600/30">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>ENTERPRISE &amp; HEALTHCARE</span>
                </span>
                {isEnterprise && (
                  <span className="text-[11px] font-bold text-amber-800 flex items-center space-x-1 font-mono">
                    <Check className="w-3.5 h-3.5" />
                    <span>ACTIVE</span>
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-black text-[#1C1917] font-display uppercase">
                  Enterprise Mainnet
                </h3>
                <div className="text-xl font-black text-amber-900 font-display mt-0.5">
                  Real SOL Settlement
                </div>
                <p className="text-xs text-[#57534E] font-medium mt-1">
                  Built for commercial AI deployments, medical research institutions, and enterprises.
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-1.5 text-xs text-[#1C1917] pt-2 border-t border-[#1C1917]/10 font-medium">
                <div className="flex items-start space-x-2">
                  <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>Real SOL &amp; USDC micropayouts to workers</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>Solana Mainnet-Beta &amp; Arbitrum One L2</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>Audited zkML Groth16 cryptographic proof</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>Dedicated GPU clusters (H100 / A100 / 4090)</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setTier("enterprise");
                setModalOpen(false);
              }}
              className={`w-full py-2.5 px-3 rounded-lg border-2 border-[#1C1917] font-bold text-xs uppercase tracking-wider transition-transform cursor-pointer ${
                isEnterprise
                  ? "bg-[#1C1917] text-white cursor-default"
                  : "bg-[#E05338] hover:bg-[#d4482f] text-white retro-shadow-sm hover:-translate-y-0.5"
              }`}
            >
              {isEnterprise ? "Currently Active" : "Switch to Enterprise Mainnet"}
            </button>
          </div>
        </div>

        {/* Informative Footer Callout */}
        <div className="p-3 bg-[#F4EFE6] rounded-xl border border-[#1C1917]/20 flex items-center justify-between text-xs text-[#57534E]">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>
              Both tiers provide <strong>100% private on-device training</strong>. Raw data never leaves your system.
            </span>
          </div>
          <button
            type="button"
            onClick={() => setModalOpen(false)}
            className="text-xs font-bold text-[#1C1917] hover:underline cursor-pointer shrink-0 ml-3"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
