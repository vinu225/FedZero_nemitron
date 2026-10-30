import Link from "next/link";
import { ArrowLeft, Shield, FileText, CheckCircle2, AlertTriangle } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | FedZero Verifiable AI Protocol",
  description: "Terms of service and protocol participation conditions for the FedZero decentralized AI compute network by HighKernel.",
};

export default function TermsPage() {
  const lastUpdated = "October 19, 2026";

  return (
    <div className="min-h-screen bg-[#FBF7F0] text-[#1C1917] font-sans p-3 sm:p-6 md:p-10 lg:p-12 selection:bg-[#E05338] selection:text-white">
      {/* Master Framed Container */}
      <div className="max-w-[1100px] mx-auto border-[1.5px] border-[#1C1917] bg-[#FAF7F2] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Top Header Bar */}
        <header className="border-b-[1.5px] border-[#1C1917] px-6 sm:px-10 py-5 bg-[#FAF7F2] flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-9 h-9 rounded-xl bg-[#141416] flex items-center justify-center border-[1.5px] border-[#1C1917] shadow-[2px_2px_0px_#1C1917] group-hover:rotate-6 transition-transform shrink-0 overflow-hidden">
              <img src="/fedzero_emblem.png" alt="FedZero" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-display font-extrabold text-sm tracking-tight text-[#1C1917] uppercase">
                FedZero
              </div>
              <div className="font-mono text-[9px] tracking-widest text-[#1C1917]/70 uppercase">
                Terms of Service
              </div>
            </div>
          </Link>

          <div className="flex items-center space-x-3 text-xs font-mono font-bold">
            <Link
              href="/"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg border-[1.5px] border-[#1C1917] bg-[#FAF0E4] hover:bg-[#E05338] hover:text-white transition-all shadow-[2px_2px_0px_#1C1917] hover:shadow-[1px_1px_0px_#1C1917]"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Network</span>
            </Link>
            <Link
              href="/privacy"
              className="hidden sm:inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg border-[1.5px] border-[#1C1917] bg-[#FAF7F2] hover:bg-[#1C1917] hover:text-white transition-all shadow-[2px_2px_0px_#1C1917]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Privacy Policy</span>
            </Link>
          </div>
        </header>

        {/* Hero Title Banner */}
        <div className="border-b-[1.5px] border-[#1C1917] p-6 sm:p-12 bg-gradient-to-br from-[#FAF0E4] via-[#FAF7F2] to-[#FAF0E4] relative overflow-hidden">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E05338]/10 border border-[#E05338]/30 font-mono text-[10px] sm:text-xs font-bold text-[#E05338] uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5" />
              <span>Protocol Agreement • Version 2.4</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-[#1C1917] leading-tight">
              Terms & Conditions
            </h1>
            <p className="text-sm sm:text-base text-[#1C1917]/80 leading-relaxed font-sans">
              Welcome to the FedZero Protocol. These terms govern your access to the decentralized verifiable AI training framework, smart contracts, coordinator APIs, and edge worker clients maintained by HighKernel.
            </p>
            <div className="pt-2 font-mono text-xs text-[#1C1917]/60">
              Effective Date & Last Updated: <strong className="text-[#1C1917]">{lastUpdated}</strong>
            </div>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-12 space-y-10 font-sans text-sm sm:text-[15px] leading-relaxed text-[#1C1917]/90">

          {/* Section 1 */}
          <section className="space-y-3">
            <div className="flex items-center space-x-2.5 font-display font-black text-lg sm:text-xl text-[#1C1917] uppercase tracking-tight">
              <span className="w-7 h-7 rounded-lg bg-[#E05338] text-white flex items-center justify-center font-mono text-xs font-bold shrink-0">01</span>
              <h2>Acceptance of Terms & Decentralized Architecture</h2>
            </div>
            <p>
              By accessing the website at <strong className="text-[#1C1917]">fedzero.highkernel.com</strong>, using the API services at <strong className="text-[#1C1917]">api-fedzero.highkernel.com</strong>, interacting with our Arbitrum/Solana smart contracts, or launching the <code className="px-1.5 py-0.5 rounded bg-[#FAF0E4] border border-[#1C1917]/20 font-mono text-xs text-[#E05338]">fedzero_worker.py</code> daemon on edge hardware, you signify your full agreement to these Terms. If you do not agree, you must immediately cease all interactions with the protocol.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <div className="flex items-center space-x-2.5 font-display font-black text-lg sm:text-xl text-[#1C1917] uppercase tracking-tight">
              <span className="w-7 h-7 rounded-lg bg-[#E05338] text-white flex items-center justify-center font-mono text-xs font-bold shrink-0">02</span>
              <h2>Dual-Tier Protocol Model</h2>
            </div>
            <p>
              FedZero operates under a bifurcated network architecture designed to support open scientific exploration while facilitating institutional-grade enterprise machine learning:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border-[1.5px] border-[#1C1917] bg-[#FAF0E4] space-y-2">
                <div className="font-display font-bold text-xs uppercase text-[#E05338] tracking-wider flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Community Tier (100% Free)</span>
                </div>
                <p className="text-xs text-[#1C1917]/80">
                  Built specifically for students, researchers, and hobbyists. Completely free of gas fees or subscription costs. Operates over public testnets (Arbitrum Sepolia and Solana Devnet) with simulated computational faucets.
                </p>
              </div>
              <div className="p-4 rounded-xl border-[1.5px] border-[#1C1917] bg-white space-y-2">
                <div className="font-display font-bold text-xs uppercase text-[#1C1917] tracking-wider flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Enterprise Mainnet (Commercial)</span>
                </div>
                <p className="text-xs text-[#1C1917]/80">
                  Targeted at enterprise AI labs and commercial deployments requiring formal Service Level Agreements (SLAs), audited zk-SNARK circuits, dedicated sub-clusters, and production token settlements.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <div className="flex items-center space-x-2.5 font-display font-black text-lg sm:text-xl text-[#1C1917] uppercase tracking-tight">
              <span className="w-7 h-7 rounded-lg bg-[#E05338] text-white flex items-center justify-center font-mono text-xs font-bold shrink-0">03</span>
              <h2>Compute Providers & Edge Worker Participation</h2>
            </div>
            <p>
              Users who register hardware nodes and execute the local federated training script agree to:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm">
              <li>Supply honest, verifiable computational resources (CPU/GPU cycles) allocated through standard PyTorch runtimes.</li>
              <li>Refrain from injecting corrupted weight vectors, intentionally poisoned training batches, or Sybil nodes to manipulate global convergence.</li>
              <li>Acknowledge that local training logs and performance telemetry are transmitted to the coordinator for consensus calculation.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <div className="flex items-center space-x-2.5 font-display font-black text-lg sm:text-xl text-[#1C1917] uppercase tracking-tight">
              <span className="w-7 h-7 rounded-lg bg-[#E05338] text-white flex items-center justify-center font-mono text-xs font-bold shrink-0">04</span>
              <h2>Zero-Knowledge Proofs & Cryptographic Verification</h2>
            </div>
            <p>
              Model weight deltas generated across participants are validated via zero-knowledge proofs (zkML utilizing Halo2 and Groth16 cryptographic proof systems). Proof verification algorithms executed on-chain via smart contracts are deterministic. If an edge node submits a weight delta that fails zk-SNARK verification, the contribution will be automatically rejected by the network coordinator without compensation.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <div className="flex items-center space-x-2.5 font-display font-black text-lg sm:text-xl text-[#1C1917] uppercase tracking-tight">
              <span className="w-7 h-7 rounded-lg bg-[#E05338] text-white flex items-center justify-center font-mono text-xs font-bold shrink-0">05</span>
              <h2>Incentives, Tokens & Financial Disclaimers</h2>
            </div>
            <div className="p-4 rounded-xl border border-amber-300 bg-amber-50 text-amber-900 text-xs sm:text-sm space-y-2">
              <div className="font-bold flex items-center space-x-1.5 uppercase font-mono text-xs">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Notice Regarding Community Testnet Tokens</span>
              </div>
              <p>
                Tokens, credits, or rewards distributed within the Community Tier on Solana Devnet or Arbitrum Sepolia hold <strong>no monetary or financial value</strong> and are not redeemable for legal tender or securities. FedZero and HighKernel do not provide financial, investment, or legal advice.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <div className="flex items-center space-x-2.5 font-display font-black text-lg sm:text-xl text-[#1C1917] uppercase tracking-tight">
              <span className="w-7 h-7 rounded-lg bg-[#E05338] text-white flex items-center justify-center font-mono text-xs font-bold shrink-0">06</span>
              <h2>Prohibited Uses & Slashing Conditions</h2>
            </div>
            <p>
              You agree not to utilize FedZero infrastructure for:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm">
              <li>Training or fine-tuning models intended for unlawful cyber exploitation, biological weapons research, or malicious surveillance.</li>
              <li>Reverse-engineering coordinator endpoints to execute denial-of-service (DDoS) attacks against AWS EC2 or Supabase instances.</li>
              <li>Attempting to reconstruct private training data from model gradients via adversarial inversion attacks.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <div className="flex items-center space-x-2.5 font-display font-black text-lg sm:text-xl text-[#1C1917] uppercase tracking-tight">
              <span className="w-7 h-7 rounded-lg bg-[#E05338] text-white flex items-center justify-center font-mono text-xs font-bold shrink-0">07</span>
              <h2>Disclaimer of Warranties & Limitation of Liability</h2>
            </div>
            <p className="text-xs sm:text-sm text-[#1C1917]/80">
              THE FEDZERO PROTOCOL AND ASSOCIATED SERVICES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR ACCURACY OF TRAINED ARTIFICIAL INTELLIGENCE WEIGHTS. HIGHKERNEL TECHNOLOGIES AND ITS AFFILIATES SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM YOUR PARTICIPATION IN THE NETWORK.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3 pt-4 border-t border-[#1C1917]/20">
            <div className="flex items-center space-x-2.5 font-display font-black text-lg sm:text-xl text-[#1C1917] uppercase tracking-tight">
              <span className="w-7 h-7 rounded-lg bg-[#E05338] text-white flex items-center justify-center font-mono text-xs font-bold shrink-0">08</span>
              <h2>Contact & Governance Inquiries</h2>
            </div>
            <p>
              For legal inquiries, enterprise agreements, or protocol compliance, reach out directly to the HighKernel legal and protocol governance team:
            </p>
            <div className="p-4 rounded-xl border border-[#1C1917]/20 bg-[#FAF0E4]/60 font-mono text-xs space-y-1.5">
              <div>Entity: <strong>HighKernel</strong></div>
              <div>Protocol: <strong>FedZero Decentralized AI Network</strong></div>
              <div>Official Contact: <a href="mailto:fedzeroofficial@gmail.com" className="text-[#E05338] underline font-bold">fedzeroofficial@gmail.com</a></div>
            </div>
          </section>

        </div>

        {/* Footer */}
        <footer className="border-t-[1.5px] border-[#1C1917] p-6 sm:p-8 bg-[#FAF7F2] font-mono text-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[#1C1917]/60">
            © 2026 FedZero Protocol Consortium & HighKernel. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/" className="hover:text-[#E05338] transition-colors">Home</Link>
            <Link href="/privacy" className="hover:text-[#E05338] transition-colors">Privacy Policy</Link>
            <Link href="/dashboard" className="hover:text-[#E05338] transition-colors">Console</Link>
          </div>
        </footer>

      </div>
    </div>
  );
}
