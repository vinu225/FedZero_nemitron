import Link from "next/link";
import { ArrowLeft, Lock, FileText, CheckCircle2, ShieldCheck, Database, HardDrive, Cpu } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | FedZero Verifiable AI Protocol",
  description: "Privacy policy and cryptographic zero-knowledge data guarantees for the FedZero decentralized AI compute network by HighKernel.",
};

export default function PrivacyPage() {
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
                Privacy Policy
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
              href="/terms"
              className="hidden sm:inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg border-[1.5px] border-[#1C1917] bg-[#FAF7F2] hover:bg-[#1C1917] hover:text-white transition-all shadow-[2px_2px_0px_#1C1917]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Terms of Service</span>
            </Link>
          </div>
        </header>

        {/* Hero Title Banner */}
        <div className="border-b-[1.5px] border-[#1C1917] p-6 sm:p-12 bg-gradient-to-br from-[#FAF0E4] via-[#FAF7F2] to-[#FAF0E4] relative overflow-hidden">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 font-mono text-[10px] sm:text-xs font-bold text-emerald-800 uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Zero-Knowledge Architecture • Edge Privacy</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-[#1C1917] leading-tight">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base text-[#1C1917]/80 leading-relaxed font-sans">
              At FedZero, privacy is not merely a legal compliance checkbox; it is the fundamental architectural principle upon which our cryptographic AI network is built. This policy outlines how user telemetry, auth data, and verifiable proofs are handled by HighKernel.
            </p>
            <div className="pt-2 font-mono text-xs text-[#1C1917]/60">
              Effective Date & Last Updated: <strong className="text-[#1C1917]">{lastUpdated}</strong>
            </div>
          </div>
        </div>

        {/* Core Guarantee Highlight Card */}
        <div className="border-b-[1.5px] border-[#1C1917] p-6 sm:p-10 bg-[#FAF0E4] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="font-mono text-xs font-bold uppercase text-[#E05338] tracking-wider flex items-center space-x-2">
              <Lock className="w-4 h-4" />
              <span>The FedZero Zero-Raw-Data Guarantee</span>
            </div>
            <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-[#1C1917]">
              Your Local Training Data Never Leaves Your Device
            </h3>
            <p className="text-xs sm:text-sm text-[#1C1917]/80 font-sans leading-relaxed">
              When participating as an edge worker, your raw dataset (e.g. medical scans, proprietary financial tables, or private records) is processed strictly within your local machine&apos;s memory. Only mathematical weight gradients and zero-knowledge proof certificates are transmitted across the network.
            </p>
          </div>
          <div className="p-4 rounded-xl border-[1.5px] border-[#1C1917] bg-white text-center font-mono text-xs shrink-0 shadow-[2px_2px_0px_#1C1917]">
            <div className="text-emerald-600 font-bold text-sm">100% PRIVATE</div>
            <div className="text-[#1C1917]/70 text-[10px] uppercase">Cryptographic Isolation</div>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-12 space-y-10 font-sans text-sm sm:text-[15px] leading-relaxed text-[#1C1917]/90">

          {/* Section 1 */}
          <section className="space-y-3">
            <div className="flex items-center space-x-2.5 font-display font-black text-lg sm:text-xl text-[#1C1917] uppercase tracking-tight">
              <span className="w-7 h-7 rounded-lg bg-[#E05338] text-white flex items-center justify-center font-mono text-xs font-bold shrink-0">01</span>
              <h2>Information We Collect</h2>
            </div>
            <p>
              Depending on how you interact with the FedZero platform, we collect minimal data strictly necessary for authentication and network coordination:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-[#1C1917]/20 bg-white space-y-2">
                <div className="flex items-center space-x-2 text-[#E05338] font-bold text-xs font-mono uppercase">
                  <Database className="w-4 h-4" />
                  <span>Account Identity</span>
                </div>
                <p className="text-xs text-[#1C1917]/75">
                  Managed via Clerk Authentication. Includes your verified email address, display name, and unique user identifier.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[#1C1917]/20 bg-white space-y-2">
                <div className="flex items-center space-x-2 text-[#E05338] font-bold text-xs font-mono uppercase">
                  <HardDrive className="w-4 h-4" />
                  <span>Public Wallet Keys</span>
                </div>
                <p className="text-xs text-[#1C1917]/75">
                  Public blockchain wallet addresses (Arbitrum L2 or Solana) submitted by node operators to receive verifiable computation rewards.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[#1C1917]/20 bg-white space-y-2">
                <div className="flex items-center space-x-2 text-[#E05338] font-bold text-xs font-mono uppercase">
                  <Cpu className="w-4 h-4" />
                  <span>Node Telemetry</span>
                </div>
                <p className="text-xs text-[#1C1917]/75">
                  Non-identifying hardware capabilities (available VRAM, CPU architecture, OS, and local batch sizes) used for workload sharding.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <div className="flex items-center space-x-2.5 font-display font-black text-lg sm:text-xl text-[#1C1917] uppercase tracking-tight">
              <span className="w-7 h-7 rounded-lg bg-[#E05338] text-white flex items-center justify-center font-mono text-xs font-bold shrink-0">02</span>
              <h2>How Information is Utilized</h2>
            </div>
            <p>
              The telemetry and identity information collected is utilized exclusively for:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm">
              <li>Facilitating secure operator login and session management across the console.</li>
              <li>Executing Byzantine-fault-tolerant model aggregation (Federated Averaging / FedAvg).</li>
              <li>Verifying Halo2/Groth16 zero-knowledge proofs to confirm model weight validity before merging.</li>
              <li>Emitting on-chain contribution attestations and Solana incentive distributions.</li>
              <li>Preventing malicious denial-of-service traffic and automated scraping of coordinator endpoints.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <div className="flex items-center space-x-2.5 font-display font-black text-lg sm:text-xl text-[#1C1917] uppercase tracking-tight">
              <span className="w-7 h-7 rounded-lg bg-[#E05338] text-white flex items-center justify-center font-mono text-xs font-bold shrink-0">03</span>
              <h2>Third-Party Infrastructure & Data Processors</h2>
            </div>
            <p>
              We partner with industry-standard, secure infrastructure providers to operate the network reliably:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm">
              <li><strong>Clerk:</strong> Provides encrypted user authentication, multi-factor security, and session management.</li>
              <li><strong>Supabase (PostgreSQL):</strong> Encrypted database storing network status, telemetry history, and node registrations.</li>
              <li><strong>Amazon Web Services (AWS EC2):</strong> Hosts our coordinator backend services and WebSocket telemetry daemons in secure VPCs.</li>
              <li><strong>Public Blockchains (Arbitrum Sepolia & Solana Devnet):</strong> Records immutable proof hashes and reward transactions. Please note that transactions submitted to public blockchains are inherently public and cannot be modified or erased.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <div className="flex items-center space-x-2.5 font-display font-black text-lg sm:text-xl text-[#1C1917] uppercase tracking-tight">
              <span className="w-7 h-7 rounded-lg bg-[#E05338] text-white flex items-center justify-center font-mono text-xs font-bold shrink-0">04</span>
              <h2>Cookies & Local Browser Storage</h2>
            </div>
            <p>
              FedZero does not utilize third-party advertising trackers or invasive behavioral tracking pixels. We use only strictly necessary local storage items:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm">
              <li>Authentication session tokens managed by Clerk to maintain operator login state.</li>
              <li>Local application preferences (e.g. selected Network Tier between Community and Enterprise).</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <div className="flex items-center space-x-2.5 font-display font-black text-lg sm:text-xl text-[#1C1917] uppercase tracking-tight">
              <span className="w-7 h-7 rounded-lg bg-[#E05338] text-white flex items-center justify-center font-mono text-xs font-bold shrink-0">05</span>
              <h2>Your Rights (GDPR & CCPA Compliance)</h2>
            </div>
            <p>
              Under applicable data protection regulations (including the EU General Data Protection Regulation and California Consumer Privacy Act), you retain the right to:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm">
              <li>Request an export of all account profile records associated with your email.</li>
              <li>Request the complete deletion of your Clerk account and associated database profile records.</li>
              <li>Revoke device node registrations from the Compute Registry console.</li>
            </ul>
            <p className="text-xs text-[#1C1917]/70 italic pt-1">
              * Note: In accordance with the immutable nature of distributed ledger technology, zero-knowledge proof attestations already published to public blockchain blocks cannot be altered or removed.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3 pt-4 border-t border-[#1C1917]/20">
            <div className="flex items-center space-x-2.5 font-display font-black text-lg sm:text-xl text-[#1C1917] uppercase tracking-tight">
              <span className="w-7 h-7 rounded-lg bg-[#E05338] text-white flex items-center justify-center font-mono text-xs font-bold shrink-0">06</span>
              <h2>Data Controller & Privacy Inquiries</h2>
            </div>
            <p>
              To exercise your data protection rights or submit questions regarding our cryptographic privacy architecture, contact the data protection officer at HighKernel:
            </p>
            <div className="p-4 rounded-xl border border-[#1C1917]/20 bg-[#FAF0E4]/60 font-mono text-xs space-y-1.5">
              <div>Organization: <strong>HighKernel</strong></div>
              <div>Data Privacy & Security: <a href="mailto:fedzeroofficial@gmail.com" className="text-[#E05338] underline font-bold">fedzeroofficial@gmail.com</a></div>
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
            <Link href="/terms" className="hover:text-[#E05338] transition-colors">Terms of Service</Link>
            <Link href="/dashboard" className="hover:text-[#E05338] transition-colors">Console</Link>
          </div>
        </footer>

      </div>
    </div>
  );
}
