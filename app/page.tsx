"use client";

import CalendlyButton from "@/components/CalendlyButton";
import Head from "next/head";
import React, { useMemo, useState } from "react";
import {
  Phone,
  Zap,
  MessageSquare,
  Clock,
  TrendingUp,
  CheckCircle,
  Mail,
  Shield,
  Star,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Top Beta Banner */}
      <div className="w-full bg-blue-900 text-blue-100 text-center text-sm sm:text-base py-3">
        <span className="inline-flex items-center gap-2">
          <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-blue-700 text-white rounded">
            Beta
          </span>
          <span className="font-semibold">
            Early access for select service businesses.
          </span>
          <a href="#join-beta" className="underline hover:text-white">
            Join the beta
          </a>
        </span>
      </div>

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                  Evoro
                </span>
                <span className="text-[11px] text-gray-500 -mt-1">
                  Turning missed calls into closed deals.
                </span>
              </div>
            </div>
            <a
              href="mailto:miguel@evoroai.io"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              miguel@evoroai.io
            </a>
          </div>
        </div>
      </nav>
      {/* SEO Structured Data */}
      <Head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "SoftwareApplication"],
              name: "Evoro",
              url: "https://evoroai.io",
              logo: "https://evoroai.io/logo.png",
              email: "mailto:miguel@evoroai.io",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description:
                "Evoro is an AI safety net for missed calls. It captures, transcribes, scores, and follows up leads automatically so service businesses stop losing revenue.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "CAD",
                description:
                  "Founder-led beta access. No credit card required.",
                url: "https://evoroai.io",
              },
              founder: { "@type": "Person", name: "Miguel L." },
            }),
          }}
        />
      </Head>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              AI Safety Net for Missed Calls — Beta
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Never Lose Another{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Lead
              </span>{" "}
              — or Dollar — to a Missed Call
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed">
              Evoro captures every missed call, transcribes details, ranks
              urgency, and messages leads instantly — so you stop losing
              thousands while staying focused on the work that matters.
              Currently in{" "}
              <span className="font-semibold text-gray-800">beta testing</span>{" "}
              with select service businesses.
            </p>

            <div
              id="join-beta"
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <CalendlyButton />
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-gray-700 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                See How It Works
              </a>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>
                  5-minute setup — works with your existing phone line
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Placeholder */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white/70 border-y border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-3">
          <div className="text-sm text-gray-600">
            Trusted by beta users across home services
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-gray-500">
            <span className="px-3 py-1 rounded-full bg-gray-100">Plumbing</span>
            <span className="px-3 py-1 rounded-full bg-gray-100">HVAC</span>
            <span className="px-3 py-1 rounded-full bg-gray-100">
              Electrical
            </span>
            <span className="px-3 py-1 rounded-full bg-gray-100">Roofing</span>
            <span className="px-3 py-1 rounded-full bg-gray-100">
              Landscaping
            </span>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The Hidden Leak Costing Service Businesses $30K–$50K/Year
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              While you’re serving customers, new leads go to voicemail, grow
              cold, and hire your competitor.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ProblemCard
              stat="67%"
              label="of calls hit voicemail during business hours"
            />
            <ProblemCard
              stat="$40K"
              label="average annual revenue lost from missed calls"
            />
            <ProblemCard
              stat="24 hrs"
              label="slow response time crushes conversion rates"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              How Evoro Works
            </h2>
            <p className="text-xl text-gray-600">
              Three steps to stop revenue leaks and keep your pipeline full.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              icon={<Phone className="w-8 h-8" />}
              title="Missed Call Detected"
              description="A customer calls while you’re on a job. Evoro captures it instantly — no lost opportunity."
            />
            <StepCard
              number="2"
              icon={<Zap className="w-8 h-8" />}
              title="AI Transcribes & Scores"
              description="Voicemail is analyzed: name, intent, urgency, and estimated job value."
            />
            <StepCard
              number="3"
              icon={<MessageSquare className="w-8 h-8" />}
              title="Instant Follow‑Up"
              description="Lead appears in your dashboard and receives an automatic SMS so they feel taken care of."
            />
          </div>

          <p className="text-center text-gray-500 mt-10">
            It’s like having a personal assistant who never sleeps.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Everything You Need to Capture, Prioritize, and Convert —
              Automatically
            </h2>
            <p className="text-xl text-blue-200">
              Automation that enhances the human touch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Clock className="w-6 h-6" />}
              title="24/7 Monitoring"
              description="Never lose a lead again — even after hours and weekends."
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title="AI Lead Scoring"
              description="See high‑value, urgent jobs first so you call back with confidence."
            />
            <FeatureCard
              icon={<MessageSquare className="w-6 h-6" />}
              title="Auto SMS Follow‑Up"
              description="Instant acknowledgment keeps leads warm while you finish current jobs."
            />
            <FeatureCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Revenue Dashboard"
              description="See recovered revenue and pipeline value in real time."
            />
            <FeatureCard
              icon={<Phone className="w-6 h-6" />}
              title="Smart Transcriptions"
              description="Caller details and intent extracted — no endless voicemail replay."
            />
            <FeatureCard
              icon={<CheckCircle className="w-6 h-6" />}
              title="Mobile Dashboard"
              description="Manage leads anywhere — no laptop required."
            />
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section id="roi" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Calculate Your Missed-Call ROI
            </h3>
            <p className="text-lg text-gray-600">
              Estimate how much revenue you’re losing — and how much Evoro can
              recover. Amounts shown in CAD.
            </p>
          </div>
          <ROICalculator />
          <p className="text-xs text-gray-400 text-center mt-4">
            Assumptions are editable. This calculator provides estimates, not
            guarantees.
          </p>
        </div>
      </section>

      {/* About — Founder Voice */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why I Built Evoro
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            I’m Miguel — solo founder of Evoro. After working closely with
            service businesses, I kept seeing the same painful pattern: owners
            were losing $30K–$50K a year simply because they couldn’t answer
            every call.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            I built Evoro to fix that. A simple AI safety net that captures,
            organizes, and follows up on every missed call — so no lead,
            opportunity, or dollar slips through the cracks. We’re currently in{" "}
            <span className="font-semibold text-gray-800">beta</span>,
            partnering with owners to refine the product before full launch.
          </p>
          <div className="mt-8">
            <CalendlyButton />
            <p className="text-sm text-gray-500 mt-2">
              Join the beta program — limited spots.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            FAQ
          </h2>
          <div className="divide-y divide-gray-200 bg-white rounded-2xl shadow">
            <FAQItem
              q="Does Evoro work with my current phone system?"
              a="Yes. Evoro layers on top of your existing phone line — no hardware or migration required."
            />
            <FAQItem
              q="What happens after a missed call?"
              a="Evoro logs the call, transcribes the voicemail, ranks urgency, sends an instant SMS, and surfaces the lead in your dashboard."
            />
            <FAQItem
              q="Is this replacing my team?"
              a="No — Evoro removes the inefficiencies so your team can focus on high‑value work. It enhances the human touch; it doesn’t replace it."
            />
            <FAQItem
              q="How secure is my data?"
              a="We follow best‑practice security standards and data minimization. You own your customer data."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Stop Losing Leads. Start Closing More Jobs.
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            See how Evoro turns every missed call into a booked opportunity —
            and tracks ROI in real time.
          </p>
          <CalendlyButton />
          <p className="text-sm text-gray-500 mt-3">
            No setup headaches. Works with your existing phone line.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Evoro</span>
              </div>
              <p className="text-sm">
                AI safety net for missed calls. Turning missed calls into closed
                deals.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3">Contact</h3>
              <a
                href="mailto:miguel@evoroai.io"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                miguel@evoroai.io
              </a>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#how-it-works"
                    className="hover:text-white transition-colors"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#roi" className="hover:text-white transition-colors">
                    ROI Calculator
                  </a>
                </li>
                <li>
                  <CalendlyButton />
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3">Trust</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-400" /> Secure &
                  compliant
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-blue-400" /> Founder‑led beta
                  program
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2025 Evoro. All rights reserved.</p>
            <p className="mt-2">Built with care for service businesses.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProblemCard({ stat, label }: { stat: string; label: string }) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-xl p-8 text-center h-full flex flex-col justify-center min-h-[200px]">
      <div className="text-5xl font-bold text-blue-700 mb-4">{stat}</div>
      <p className="text-gray-700 font-medium text-base">{label}</p>
    </div>
  );
}

function StepCard({
  number,
  icon,
  title,
  description,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="relative">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow min-h-[320px] flex flex-col">
        <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
          {number}
        </div>
        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center text-blue-600 mb-6 flex-shrink-0">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-base flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all min-h-[220px] flex flex-col">
      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-white mb-4 flex-shrink-0">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-3">{title}</h3>
      <p className="text-blue-100 text-sm leading-relaxed flex-grow">
        {description}
      </p>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="px-6 py-5 hover:bg-gray-50 transition">
      <summary className="cursor-pointer list-none">
        <div className="flex items-start justify-between gap-4">
          <h4 className="text-base sm:text-lg font-semibold text-gray-900">
            {q}
          </h4>
        </div>
      </summary>
      <p className="text-gray-600 mt-3 text-sm sm:text-base">{a}</p>
    </details>
  );
}
function ROICalculator() {
  const [callsPerWeek, setCallsPerWeek] = useState<number>(10);
  const [answerRate, setAnswerRate] = useState<number>(70); // % answered live
  const [avgJobValue, setAvgJobValue] = useState<number>(500);
  const [closeRate, setCloseRate] = useState<number>(40); // % of contacted leads that convert
  const [evoroRecoveryRate, setEvoroRecoveryRate] = useState<number>(60); // % of missed-lead revenue recovered by Evoro

  const metrics = useMemo(() => {
    const weeksPerYear = 52;
    const totalCallsYear = callsPerWeek * weeksPerYear;
    const missedRate = Math.max(0, 100 - answerRate) / 100;
    const missedCallsYear = totalCallsYear * missedRate;

    const revenuePerLead = avgJobValue * (closeRate / 100);
    const missedRevenueYear = missedCallsYear * revenuePerLead;

    const recoveredRevenue = missedRevenueYear * (evoroRecoveryRate / 100);

    return {
      totalCallsYear,
      missedCallsYear,
      missedRevenueYear,
      recoveredRevenue,
    };
  }, [callsPerWeek, answerRate, avgJobValue, closeRate, evoroRecoveryRate]);

  const currency = (n: number) =>
    n.toLocaleString("en-CA", {
      style: "currency",
      currency: "CAD",
      maximumFractionDigits: 0,
    });

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
      <div className="grid md:grid-cols-2 gap-8 text-gray-600 font-bold ">
        {/* Inputs */}
        <div className="space-y-5">
          <InputRow
            label="Calls per week"
            value={callsPerWeek}
            setValue={setCallsPerWeek}
            min={0}
            max={500}
            step={1}
          />
          <InputRow
            label="Live answer rate (%)"
            value={answerRate}
            setValue={setAnswerRate}
            min={0}
            max={100}
            step={1}
          />
          <InputRow
            label="Average job value (CAD)"
            value={avgJobValue}
            setValue={setAvgJobValue}
            min={0}
            max={100000}
            step={50}
          />
          <InputRow
            label="Close rate when contacted (%)"
            value={closeRate}
            setValue={setCloseRate}
            min={0}
            max={100}
            step={1}
          />
          <InputRow
            label="Evoro recovery rate (%)"
            value={evoroRecoveryRate}
            setValue={setEvoroRecoveryRate}
            min={0}
            max={100}
            step={1}
          />
        </div>

        {/* Outputs */}
        <div className="space-y-4">
          <StatLine
            label="Total calls / year"
            value={metrics.totalCallsYear.toLocaleString()}
          />
          <StatLine
            label="Missed calls / year"
            value={Math.round(metrics.missedCallsYear).toLocaleString()}
          />
          <StatLine
            label="Estimated missed revenue / year"
            value={currency(metrics.missedRevenueYear)}
            highlight
          />
          <div className="border-t border-gray-200 pt-4">
            <StatLine
              label="Potential revenue recovered with Evoro / year"
              value={currency(metrics.recoveredRevenue)}
              highlight
              strong
            />
            <p className="text-xs text-gray-500 mt-2">
              Recovery rate reflects faster response + automated follow-up
              keeping leads warm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputRow({
  label,
  value,
  setValue,
  min = 0,
  max = 100,
  step = 1,
}: {
  label: string;
  value: number;
  setValue: (v: number) => void;
  min?: number;
  max?: number;
  step?: number;
}) {
  return (
    <label className="block">
      <div className="text-sm font-medium text-gray-700 mb-1">{label}</div>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        min={min}
        max={max}
        step={step}
        className="w-full rounded-lg border-gray-300 focus:border-blue-600 focus:ring-blue-600"
      />
    </label>
  );
}

function StatLine({
  label,
  value,
  highlight = false,
  strong = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  strong?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between py-2 ${
        highlight ? "bg-blue-50 px-3 rounded" : ""
      }`}
    >
      <span className="text-sm text-gray-600">{label}</span>
      <span
        className={`text-base ${strong ? "font-extrabold" : "font-semibold"} ${
          highlight ? "text-blue-900" : "text-gray-900"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
