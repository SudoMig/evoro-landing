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
import StickyROIBar from "@/components/StickyROIBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Top Beta Banner */}
      <div className="w-full bg-blue-900 text-blue-100 text-center text-sm sm:text-base py-3 px-4">
        <span className="inline-flex flex-wrap items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5">
            <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-blue-700 text-white rounded">
              Winter HVAC Beta
            </span>
            <span className="font-semibold">3 spots left</span>
          </span>
          <span className="hidden sm:inline text-blue-300">•</span>
          <span className="font-semibold">Ottawa + area</span>
          <span className="hidden sm:inline text-blue-300">•</span>
          <span className="font-semibold">
            $1,579 value — free for beta testers
          </span>
          <span className="hidden sm:inline text-blue-300">•</span>
          <a href="#join-beta" className="font-bold underline hover:text-white">
            Apply by Feb 28 →
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
                <span className="text-[11px] text-gray-500 -mt-1 hidden sm:block">
                  Turning missed HVAC calls into booked jobs.
                </span>
              </div>
            </div>
            {/* Right-side actions - Desktop Only */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href="https://missed-call-dashboard.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 hover:border-blue-300 transition-all"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Try Live Demo
              </a>
              <a
                href="#roi"
                className="inline-flex px-4 py-2 text-sm font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors"
              >
                See Your ROI
              </a>
            </div>
            {/* Mobile CTA */}
            <a
              href="https://calendly.com/migautomates/15-minute-product-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex px-4 py-2 text-sm font-semibold text-white bg-blue-700 rounded-lg"
            >
              Join Beta
            </a>
          </div>
        </div>
      </nav>
      {/* SEO Structured Data */}
      <Head>
        <script
          type="application/ld+json"
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
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, rgb(37, 99, 235) 1px, transparent 1px),
                      linear-gradient(to bottom, rgb(37, 99, 235) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
              animation: "gridSlide 20s linear infinite",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Beta Badge */}
            <div className="flex flex-col items-center gap-2 sm:mb-6">
              <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                <Zap className="w-4 h-4" />
                Winter HVAC Beta • 3 spots left • Ottawa + area • $1,579 value •
                free for beta testers
              </div>
            </div>

            {/* H1 - Mobile Optimized */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.1]">
              Never Lose a Lead to a{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Missed Call
              </span>
            </h1>

            {/* Subheadline - Condensed */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-10 leading-relaxed px-4 sm:px-0">
              When a &quot;no heat&quot; call hits while you&apos;re on a job,
              Evoro catches it, tags it as urgent and texts the homeowner back
              in seconds so they don&apos;t keep calling your competitors.
            </p>

            {/* CTA Block - Tightened */}
            <div
              id="join-beta"
              className="flex flex-col items-center justify-center gap-4 mb-8"
            >
              {/* Primary CTA */}
              <CalendlyButton variant="primary" />

              {/* Secondary Action */}
              <a
                href="#roi"
                className="text-base font-semibold text-blue-700 hover:text-blue-900 underline underline-offset-4"
              >
                Calculate your ROI first →
              </a>
            </div>

            {/* Trust Indicators - Simplified for Mobile */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-gray-500 px-4">
              <div className="flex items-center gap-2 w-48 sm:w-auto justify-start sm:justify-center">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>No credit card</span>
              </div>
              <div className="flex items-center gap-2 w-48 sm:w-auto justify-start sm:justify-center">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>5-min setup</span>
              </div>
              <div className="flex items-center gap-2 w-48 sm:w-auto justify-start sm:justify-center">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>No new number needed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Placeholders */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white/70 border-y border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
          <div className="text-sm font-semibold text-gray-600">
            Trusted by HVAC and home comfort pros
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium">
              Residential HVAC
            </span>
            <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium">
              Commercial HVAC
            </span>
            <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium">
              Furnace Service
            </span>
            <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium">
              AC Installations
            </span>
            <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium">
              24/7 Emergency Calls
            </span>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
              The Hidden Leak Costing HVAC Companies $30K to $60K a Year
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You&apos;re in a basement fixing a no-heat call. Meanwhile two
              more calls hit your line, go to voicemail and those homeowners
              just call the next company on Google. That&apos;s real money
              walking away.
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

      {/* ROI Calculator */}
      <section id="roi" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Calculate Your Missed-Call ROI
            </h3>
            <p className="text-lg text-gray-600">
              Estimate how much revenue you're losing and how much Evoro can
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

      {/* How It Works */}
      <section
        id="how-it-works"
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
              How Evoro Works
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              Three steps to stop revenue leaks and keep your pipeline full.
            </p>
            <p className="text-sm font-medium text-gray-500">
              24/7 AI assistant for your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              icon={<Phone className="w-8 h-8" />}
              title="Missed Call Detected"
              description="A homeowner calls about no heat at 10:47 PM while you're either on another job or finally off the clock. Evoro captures it instantly. No lost opportunity."
            />
            <StepCard
              number="2"
              icon={<Zap className="w-8 h-8" />}
              title="AI Transcribes & Scores"
              description="Voicemail is analyzed: name, intent, urgency and estimated job value."
            />
            <StepCard
              number="3"
              icon={<MessageSquare className="w-8 h-8" />}
              title="Instant Follow‑Up"
              description="You see the lead in your mobile dashboard tagged URGENT - No Heat so you know who to call back first. The customer gets an instant SMS confirmation so they stop shopping around."
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Everything You Need to Capture, Prioritize and Convert
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
              description="Never lose a lead again. Even after hours and weekends."
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title="AI Lead Scoring"
              description="See high‑value, urgent jobs first so you call back with confidence."
            />
            <FeatureCard
              icon={<MessageSquare className="w-6 h-6" />}
              title="Auto SMS Follow‑Up"
              description="Instant SMS confirms you got their call — so they stop searching for other contractors."
            />
            <FeatureCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Revenue Dashboard"
              description="See recovered revenue and pipeline value in real time."
            />
            <FeatureCard
              icon={<Phone className="w-6 h-6" />}
              title="Smart Transcriptions"
              description='Automatically tags issues like "No heat," "AC not cooling," or "Water tank leaking" so you can scan and prioritize in seconds.'
            />
            <FeatureCard
              icon={<CheckCircle className="w-6 h-6" />}
              title="On the Road Dashboard"
              description="See your hottest leads and their issues from your phone between jobs. No laptop or office staff required."
            />
          </div>
        </div>
      </section>

      {/* About — Founder Voice */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why I Built Evoro
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              I&apos;m Miguel, founder of Evoro. After talking with HVAC owners
              and home service companies, I kept seeing the same pattern: they
              were slammed on jobs and still losing money because no one could
              catch every call.
            </p>
            <p>
              You pay for ads, yard signs, and truck wraps. You shouldn&apos;t
              lose a no-heat lead just because you were under a furnace or
              driving between jobs. That&apos;s why I built Evoro, an AI safety
              net that makes sure every missed call is captured, followed up and
              turned into a real opportunity.
            </p>
            <p>
              You don&apos;t need to learn another software. I handle the setup,
              connect it to your existing HVAC line and show you in plain
              English how much revenue we&apos;re saving you each month.
            </p>
            <p className="font-semibold text-gray-900">
              We&apos;re in beta with owner-operators who want an unfair
              advantage this winter and who aren&apos;t afraid to give honest
              feedback so we can build the thing they actually wish existed.
            </p>
          </div>

          <div className="mt-8">
            <CalendlyButton variant="secondary" />
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
              q="What do I get as a beta user?"
              a="Full access to our top-tier system for one month completely free ($1,579 value) — no credit card required. In exchange, we ask for an honest testimonial. You'll also shape the product roadmap, lock in founder pricing for life, get priority support directly from me and gain first-mover advantage while competitors sleep on innovation."
            />
            <FAQItem
              q="Does this actually help during peak season?"
              a='Yes, that&apos;s when it matters most. When winter "no heat" or summer "no cooling" calls are flooding your line, Evoro catches the ones you can&apos;t answer, tags urgency and texts those customers back so they don&apos;t keep calling other HVAC companies.'
            />
            <FAQItem
              q="Can it tell the difference between an emergency and a quote request?"
              a='Yes. Evoro looks for phrases like "no heat," "AC not cooling," "water leaking," or "smell of gas" and flags those as high-urgency. Lower-urgency requests like maintenance, quotes, or filter changes are tagged differently so you can call back in the right order.'
            />
            <FAQItem
              q="Does this work for commercial HVAC too?"
              a="It does. Commercial inquiries get tagged separately so you can treat them differently if you want — for example routing them to a specific team member or prioritizing bigger contracts."
            />
            <FAQItem
              q="Do I have to change my phone number?"
              a="No. Evoro layers on top of your existing HVAC line. You keep your current number, your current call flows and we handle the missed-call safety net in the background."
            />
            <FAQItem
              q="What happens after a missed call?"
              a="Evoro logs the missed call, analyzes the voicemail or missed-call context, tags urgency, sends a confirmation text to the customer and puts the lead in your dashboard so you or your team can call back with the full context."
            />
            <FAQItem
              q="Is this replacing my dispatcher or office staff?"
              a="No. Evoro is there for the calls your team can't catch — after hours, weekends or when everyone is busy. It handles the boring part (logging, tagging, and texting) so your people can focus on talking to customers and booking jobs."
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
            See how Evoro turns every missed call into a booked opportunity and
            tracks ROI in real time.
          </p>
          <CalendlyButton
            variant="urgency"
            subtext="No setup headaches. Works with your existing phone line."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
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
                  <a
                    href="/checklist"
                    className="hover:text-white transition-colors"
                  >
                    Free Missed Call Guide
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      window.open(
                        "https://calendly.com/migautomates/15-minute-product-demo",
                        "_blank"
                      )
                    }
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Book a Call
                  </a>
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
      <StickyROIBar />
    </div>
  );
}

function ProblemCard({ stat, label }: { stat: string; label: string }) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-xl p-6 sm:p-8 text-center h-full flex flex-col justify-center min-h-[160px] sm:min-h-[200px]">
      <div className="text-4xl sm:text-5xl font-bold text-blue-700 mb-3 sm:mb-4">
        {stat}
      </div>
      <p className="text-gray-700 font-medium text-sm sm:text-base">{label}</p>
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
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sm:p-8 hover:shadow-xl transition-shadow min-h-[140px] sm:min-h-[220px] flex flex-col">
        <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg">
          {number}
        </div>

        {/* Icon + Title Side by Side (All Breakpoints) */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
            {icon}
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
            {title}
          </h3>
        </div>

        <p className="text-gray-600 leading-relaxed text-sm sm:text-base flex-grow">
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
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 sm:p-6 hover:bg-white/20 transition-all min-h-[140px] sm:min-h-[180px] flex flex-col">
      {/* Desktop: Icon Above Title */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center text-white flex-shrink-0">
          {icon}
        </div>
        <h3 className="text-base sm:text-lg font-bold">{title}</h3>
      </div>

      <p className="text-blue-100 text-xs sm:text-sm leading-relaxed flex-grow">
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
  const [missedCallsPerWeek, setMissedCallsPerWeek] = useState<number>(8);
  const [opportunityRate, setOpportunityRate] = useState<number>(40);
  const [avgJobValue, setAvgJobValue] = useState<number>(800);

  const metrics = useMemo(() => {
    const weeksPerYear = 52;
    const missedCallsYear = missedCallsPerWeek * weeksPerYear;
    const actualOpportunities = missedCallsYear * (opportunityRate / 100);
    const revenueAtRisk = actualOpportunities * avgJobValue;
    const evoroRecovery = revenueAtRisk * 0.6;

    return {
      missedCallsYear,
      actualOpportunities,
      revenueAtRisk,
      evoroRecovery,
    };
  }, [missedCallsPerWeek, opportunityRate, avgJobValue]);

  const currency = (n: number) =>
    n.toLocaleString("en-CA", {
      style: "currency",
      currency: "CAD",
      maximumFractionDigits: 0,
    });

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 max-w-2xl mx-auto">
      <div className="space-y-6">
        {/* Input 1 */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Estimated missed calls per week
          </label>
          <input
            type="number"
            value={missedCallsPerWeek}
            onChange={(e) => setMissedCallsPerWeek(Number(e.target.value))}
            min={0}
            max={100}
            step={1}
            className="w-full rounded-lg border-2 border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white px-4 py-3 text-lg font-semibold text-gray-900"
          />
        </div>

        {/* Result 1 */}
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">
              Missed calls per year
            </span>
            <span className="text-xl font-bold text-gray-900">
              ~{Math.round(metrics.missedCallsYear).toLocaleString()}
            </span>
          </div>
        </div>

        {/* Input 2 */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            % that are actual opportunities
            <span className="text-xs font-normal text-gray-500 ml-2">
              (Industry avg: 30-50%)
            </span>
          </label>
          <input
            type="number"
            value={opportunityRate}
            onChange={(e) => setOpportunityRate(Number(e.target.value))}
            min={0}
            max={100}
            step={1}
            className="w-full rounded-lg border-2 border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white px-4 py-3 text-lg font-semibold text-gray-900"
          />
        </div>

        {/* Result 2 */}
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">
              Actual opportunities per year
            </span>
            <span className="text-xl font-bold text-gray-900">
              ~{Math.round(metrics.actualOpportunities).toLocaleString()}
            </span>
          </div>
        </div>

        {/* Input 3 */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Average job value (CAD)
          </label>
          <input
            type="number"
            value={avgJobValue}
            onChange={(e) => setAvgJobValue(Number(e.target.value))}
            min={0}
            max={50000}
            step={50}
            className="w-full rounded-lg border-2 border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white px-4 py-3 text-lg font-semibold text-gray-900"
          />
        </div>

        {/* Big Result - Revenue at Risk */}
        <div className="bg-orange-50 rounded-lg p-6 border-2 border-orange-200">
          <div className="text-center">
            <div className="text-sm font-semibold text-orange-900 uppercase tracking-wide mb-2">
              Revenue You're Losing Per Year
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold text-orange-700">
              {currency(metrics.revenueAtRisk)}
            </div>
          </div>
        </div>

        {/* Evoro Impact */}
        <div className="bg-emerald-50 rounded-lg p-6 border-2 border-emerald-200">
          <div className="text-center">
            <div className="text-sm font-semibold text-emerald-900 uppercase tracking-wide mb-2">
              Revenue Recovered with Evoro (60% recovery)
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold text-emerald-700">
              {currency(metrics.evoroRecovery)}
            </div>
            <p className="text-xs text-emerald-700 mt-3">
              Based on faster response + automated follow-up
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
