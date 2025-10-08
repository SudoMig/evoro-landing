import CalendlyButton from "@/components/CalendlyButton";
import {
  Phone,
  Zap,
  MessageSquare,
  Clock,
  TrendingUp,
  CheckCircle,
  Mail,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                Evoro
              </span>
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

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              AI-Powered Lead Capture
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Never Miss Another{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Lead
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-500 mb-10 leading-relaxed">
              Built for contractors, HVAC companies, and service businesses. AI
              captures every missed call, transcribes voicemails, scores
              urgency, and alerts you to high-value leads instantly—so you stop
              losing $30K-50K annually.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
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
                <span>5-minute setup</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Updated to Match LinkedIn Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Contractors Are Losing $30K-50K Per Year
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              HVAC companies, plumbers, electricians, and service businesses
              lose massive revenue from calls they can&apos;t answer on the job.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ProblemCard
              stat="67%"
              label="of calls go to voicemail during business hours"
            />
            <ProblemCard
              stat="$40K"
              label="average annual revenue lost from missed calls"
            />
            <ProblemCard
              stat="24 hours"
              label="slow response time destroys conversion rates"
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
              Three simple steps to never miss a lead again
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              icon={<Phone className="w-8 h-8" />}
              title="Customer Calls"
              description="A potential customer calls your business line while you're busy on a job site."
            />
            <StepCard
              number="2"
              icon={<Zap className="w-8 h-8" />}
              title="AI Captures & Analyzes"
              description="Our AI instantly transcribes the voicemail, extracts caller details, determines urgency, and estimates job value."
            />
            <StepCard
              number="3"
              icon={<MessageSquare className="w-8 h-8" />}
              title="Instant Follow-Up"
              description="Lead appears in your dashboard and caller receives an automatic SMS acknowledgment keeping them warm."
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Built For Home Service Pros
            </h2>
            <p className="text-xl text-blue-200">
              Everything you need to capture and convert leads 24/7
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Clock className="w-6 h-6" />}
              title="24/7 Monitoring"
              description="Never miss a call, even after hours or on weekends when competitors are closed."
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title="AI Lead Scoring"
              description="Automatically identifies high-value urgent jobs so you know who to call back first."
            />
            <FeatureCard
              icon={<MessageSquare className="w-6 h-6" />}
              title="Auto SMS Follow-Up"
              description="Instant acknowledgment text keeps leads warm while you finish current jobs."
            />
            <FeatureCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Revenue Tracking"
              description="See estimated job values and total pipeline at a glance in your dashboard."
            />
            <FeatureCard
              icon={<Phone className="w-6 h-6" />}
              title="Call Transcription"
              description="Full voicemail transcripts with caller intent and contact details extracted."
            />
            <FeatureCard
              icon={<CheckCircle className="w-6 h-6" />}
              title="Mobile Dashboard"
              description="Check leads from your phone between jobs—no laptop required."
            />
          </div>
        </div>
      </section>

      {/* About - Updated with Your Background */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Built by AI Automation Engineers
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Evoro was created to solve a simple problem: contractors, HVAC
            companies, and service businesses were losing $30K-50K per year from
            calls they couldn&apos;t answer while on job sites. Traditional
            answering services couldn&apos;t extract the details that
            matter—urgency, job type, estimated value.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our AI-powered system transcribes every voicemail, scores lead
            urgency, and alerts you to high-value opportunities instantly. The
            result? Businesses stop leaving revenue on the table from missed
            calls. While we started with contractors, Evoro works for any small
            business—lawyers, dentists, consultants—that can&apos;t afford to
            miss a single lead.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Ready to Stop Losing Leads?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            See exactly how Evoro captures and converts your missed calls into
            booked jobs.
          </p>
          <CalendlyButton />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Evoro</span>
              </div>
              <p className="text-sm">
                AI-powered lead capture for home service businesses.
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
                  <CalendlyButton />
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2025 Evoro. All rights reserved.</p>
            <p className="mt-2">Powered by AI • Secure & Compliant</p>
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
