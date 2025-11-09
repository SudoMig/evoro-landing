import CalendlyButton from "@/components/CalendlyButton";
import Link from "next/link";

export default function ChecklistPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Simple Nav */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent"
          >
            Evoro
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            How Much Are Missed Calls Costing You?
          </h1>
          <p className="text-xl text-gray-600">
            5 fixes to stop the bleed + a smarter way to automate it all
          </p>
        </div>

        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed">
            Most service businesses aren't losing money because they need more
            leads, they're losing it because they can't keep the ones they
            already have.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This quick guide shows you how much you're really losing each month,
            5 fixes to plug the leaks, and a smarter way to automate it all
            (without losing the human touch).
          </p>
        </div>

        {/* Step 1: Calculator */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-2xl p-6 sm:p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Step 1: Find Out Exactly What You're Losing
          </h2>
          <p className="text-gray-700 mb-4">Take 60 seconds to calculate it.</p>
          <Link
            href="/#roi"
            className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors"
          >
            Use Free ROI Calculator →
          </Link>
        </div>

        {/* Step 2: 5 Fixes */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Step 2: The 5 Fixes to Stop the Bleed
          </h2>
          <div className="space-y-6">
            <FixItem
              number="1"
              title="Track every missed call"
              description="Even one lost lead can cost hundreds. Start logging every missed number today."
            />
            <FixItem
              number="2"
              title="Respond fast"
              description="A quick text reply within minutes keeps leads warm and prevents drop-off."
            />
            <FixItem
              number="3"
              title="Rank urgency"
              description="If a client calls twice — that's your hot lead. Prioritize it."
            />
            <FixItem
              number="4"
              title="Centralize your data"
              description="Keep call logs, names, and notes in one place so nothing slips."
            />
            <FixItem
              number="5"
              title="Measure ROI"
              description="Know what you're gaining — not just what you're spending. Numbers bring clarity."
            />
          </div>
        </div>

        {/* Step 3: Automation */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-6 sm:p-8 mb-12">
          <h2 className="text-2xl font-bold mb-3">Step 3: Automate It</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Doing all this manually? That's where most owners burn out.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Evoro tracks every missed call, texts leads automatically, and
            calculates your ROI in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://missed-call-dashboard.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-gray-900 bg-white rounded-lg hover:bg-gray-100 transition-colors"
            >
              Watch 2-Min Demo →
            </a>
            <Link
              href="/#roi"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white border-2 border-white rounded-lg hover:bg-white/10 transition-colors"
            >
              Try ROI Calculator
            </Link>
          </div>
        </div>

        {/* Optional Email Gate */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 sm:p-8 mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Want This as a PDF Checklist?
          </h3>
          <p className="text-gray-600 mb-4">
            Get the full guide + bonus ROI worksheet sent to your inbox.
          </p>
          <iframe
            src="https://noteforms.com/forms/leads-tu8utt"
            className="w-full h-96 border-0 rounded-lg"
          />
        </div>

        {/* Final CTA */}
        <div className="text-center bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <p className="text-lg text-gray-600 mb-6 italic">
            "Fix the foundation, not the funnel. That's how real growth starts."
          </p>
          <CalendlyButton variant="primary" />
          <p className="text-sm text-gray-500 mt-4">
            Built by Miguel Louis, Evoro Founder
          </p>
        </div>
      </div>
    </div>
  );
}

function FixItem({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
