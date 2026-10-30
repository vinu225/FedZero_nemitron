"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  Cpu,
  Database,
  ShieldCheck,
  Coins,
  UserCheck,
  Network,
  Server,
  Layers,
  Home,
  Sparkles,
  ArrowUpRight,
  X,
  ChevronDown
} from "lucide-react";
import { useNetworkTier } from "@/context/NetworkTierContext";

interface SidebarProps {
  mobileOpen?: boolean;
  onClose?: () => void;
}

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: Activity },
  { name: "Training", href: "/training", icon: Layers, badge: "STUDIO" },
  { name: "Models", href: "/models", icon: Database },
  { name: "Contributions", href: "/contributions", icon: Cpu },
  { name: "ZK Proofs", href: "/proofs", icon: ShieldCheck },
  { name: "Rewards", href: "/rewards", icon: Coins, badge: "SOL" },
  { name: "AI Passport", href: "/passport", icon: UserCheck },
  { name: "Compute Providers", href: "/providers", icon: Server },
  { name: "Network", href: "/network", icon: Network },
];

export default function Sidebar({ mobileOpen = false, onClose }: SidebarProps) {
  const pathname = usePathname();
  const { isCommunity, isEnterprise, setModalOpen } = useNetworkTier();

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {mobileOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* Main Retro Sidebar Drawer */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 border-r-2 border-[#1C1917] bg-[#FAF7F2] flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Brand Header */}
        <div className="h-[72px] border-b-2 border-[#1C1917] flex items-center justify-between px-5 bg-[#FAF7F2]">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-9 h-9 rounded-xl border-2 border-[#1C1917] bg-[#141416] flex items-center justify-center retro-shadow-sm group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform overflow-hidden">
              <img src="/fedzero_emblem.png" alt="FedZero" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-display font-black text-lg tracking-tight text-[#1C1917] leading-none uppercase">
                FedZero
              </div>
              <div className="text-[10px] font-mono tracking-wider text-[#78716C] font-bold mt-0.5 uppercase">
                Verifiable AI Network
              </div>
            </div>
          </Link>

          {/* Close button for mobile drawer */}
          <button
            type="button"
            onClick={onClose}
            className="lg:hidden p-1.5 rounded-lg border-2 border-[#1C1917] bg-[#F4EFE6] hover:bg-[#FAF7F2] text-[#1C1917] retro-shadow-sm cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Prominent Back to Landing Page Button */}
        <div className="p-3 border-b-2 border-[#1C1917]/20 bg-[#FAF7F2]">
          <Link
            href="/"
            onClick={onClose}
            className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#F7F4EE] hover:bg-[#F2ECE1] border-2 border-[#1C1917] retro-shadow-sm text-xs font-mono font-bold text-[#1C1917] transition-all group"
          >
            <div className="flex items-center space-x-2">
              <Home className="w-4 h-4 text-[#E05338]" />
              <span>← Landing Page</span>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#78716C] group-hover:text-[#E05338] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Nav List */}
        <nav className="flex-1 p-3 space-y-1.5 overflow-y-auto">
          <div className="px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#78716C]">
            Dashboard Modules
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 ${
                  isActive
                    ? "bg-[#1C1917] text-[#FAF7F2] retro-shadow-sm font-bold"
                    : "text-[#44403C] hover:text-[#1C1917] hover:bg-[#F2ECE1] border border-transparent hover:border-[#1C1917]/20"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon className={`w-4 h-4 transition-colors ${isActive ? "text-[#E05338]" : "text-[#78716C]"}`} />
                  <span className="font-display tracking-tight text-[13px]">{item.name}</span>
                </div>
                {item.badge && (
                  <span className={`px-1.5 py-0.5 rounded text-[9px] font-mono font-black border ${
                    isActive
                      ? "bg-[#E05338] text-white border-white/20"
                      : "bg-[#E5A638]/20 text-[#92400E] border-[#E5A638]/60"
                  }`}>
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Multi-Chain Infrastructure Badges & Tier Switcher */}
        <div className="p-4 border-t-2 border-[#1C1917] bg-[#F4EFE6] space-y-2.5">
          <div className="flex items-center justify-between text-[10px] font-mono font-bold text-[#78716C] uppercase tracking-wider">
            <span>Network Tier</span>
            <button
              type="button"
              onClick={() => {
                onClose?.();
                setModalOpen(true);
              }}
              className="text-[#E05338] hover:underline font-bold text-[10px] cursor-pointer"
            >
              Switch ↗
            </button>
          </div>

          {/* Clickable Tier Capsule */}
          <button
            type="button"
            onClick={() => {
              onClose?.();
              setModalOpen(true);
            }}
            className={`w-full flex items-center justify-between text-xs py-1.5 px-2.5 rounded-lg border-2 border-[#1C1917] retro-shadow-sm cursor-pointer transition-transform hover:-translate-y-0.5 ${
              isCommunity
                ? "bg-emerald-100 text-emerald-950 hover:bg-emerald-200"
                : "bg-amber-100 text-amber-950 hover:bg-amber-200"
            }`}
          >
            <span className="flex items-center space-x-1.5 font-bold font-mono text-[11px]">
              <span className={`w-2 h-2 rounded-full animate-pulse ${isCommunity ? "bg-emerald-600" : "bg-amber-600"}`}></span>
              <span>{isCommunity ? "Community (Free)" : "Enterprise Mainnet"}</span>
            </span>
            <ChevronDown className="w-3 h-3 opacity-60" />
          </button>

          <div className="flex items-center justify-between text-xs py-1.5 px-2.5 rounded-lg bg-[#FAF7F2] border border-[#1C1917]/30">
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]"></span>
              <span className="text-[#1C1917] font-bold text-[11px]">Arbitrum</span>
            </span>
            <span className="text-[10px] font-mono text-[#2563EB] font-bold">
              {isCommunity ? "Sepolia L2" : "One Mainnet"}
            </span>
          </div>

          <div className="flex items-center justify-between text-xs py-1.5 px-2.5 rounded-lg bg-[#FAF7F2] border border-[#1C1917]/30">
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-[#1C1917] font-bold text-[11px]">Solana</span>
            </span>
            <span className="text-[10px] font-mono text-emerald-700 font-bold">
              {isCommunity ? "Devnet (Free)" : "Mainnet-Beta"}
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}
