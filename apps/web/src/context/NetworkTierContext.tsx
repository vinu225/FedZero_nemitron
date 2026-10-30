"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type NetworkTier = "community" | "enterprise";

interface NetworkTierContextType {
  tier: NetworkTier;
  setTier: (tier: NetworkTier) => void;
  toggleTier: () => void;
  isCommunity: boolean;
  isEnterprise: boolean;
  tierLabel: string;
  badgeText: string;
  badgeBg: string;
  badgeTextColor: string;
  solanaNetwork: string;
  arbitrumNetwork: string;
  rewardToken: string;
  costLabel: string;
  slaDescription: string;
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
}

const NetworkTierContext = createContext<NetworkTierContextType | undefined>(undefined);

export function NetworkTierProvider({ children }: { children: React.ReactNode }) {
  const [tier, setTierState] = useState<NetworkTier>("community");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("fedzero_tier") as NetworkTier;
      if (saved === "community" || saved === "enterprise") {
        setTierState(saved);
      }
    } catch (e) {
      // Ignore localStorage access errors
    }
  }, []);

  const setTier = (newTier: NetworkTier) => {
    setTierState(newTier);
    try {
      localStorage.setItem("fedzero_tier", newTier);
    } catch (e) {
      // Ignore
    }
  };

  const toggleTier = () => {
    setTier(tier === "community" ? "enterprise" : "community");
  };

  const isCommunity = tier === "community";
  const isEnterprise = tier === "enterprise";

  const tierLabel = isCommunity ? "Community Tier (Free)" : "Enterprise Mainnet";
  const badgeText = isCommunity ? "🌱 COMMUNITY (FREE)" : "⚡ ENTERPRISE MAINNET";
  const badgeBg = isCommunity ? "bg-emerald-100 border-emerald-600/30" : "bg-amber-100 border-amber-600/40";
  const badgeTextColor = isCommunity ? "text-emerald-900" : "text-amber-900";

  const solanaNetwork = isCommunity ? "Solana Devnet (Free Faucet)" : "Solana Mainnet-Beta";
  const arbitrumNetwork = isCommunity ? "Arbitrum Sepolia Testnet" : "Arbitrum One L2";
  const rewardToken = isCommunity ? "TEST-SOL" : "Real SOL";
  const costLabel = isCommunity ? "₹0 / Free Faucet" : "Paid by Sponsor Pool";
  const slaDescription = isCommunity
    ? "Open to all students, indie developers, and researchers with zero crypto cost."
    : "Commercial-grade SLA with real SOL rewards, high-assurance zkML verification, and dedicated GPU clusters.";

  return (
    <NetworkTierContext.Provider
      value={{
        tier,
        setTier,
        toggleTier,
        isCommunity,
        isEnterprise,
        tierLabel,
        badgeText,
        badgeBg,
        badgeTextColor,
        solanaNetwork,
        arbitrumNetwork,
        rewardToken,
        costLabel,
        slaDescription,
        modalOpen,
        setModalOpen,
      }}
    >
      {children}
    </NetworkTierContext.Provider>
  );
}

export function useNetworkTier() {
  const context = useContext(NetworkTierContext);
  if (!context) {
    throw new Error("useNetworkTier must be used within a NetworkTierProvider");
  }
  return context;
}
