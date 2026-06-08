import { ArrowRight, CheckCircle2 } from 'lucide-react';

const skills = [
  'Product Thinking',
  'Problem Validation',
  'User Research',
  'Automation',
  'AI Workflows',
  'Systems Thinking',
];

const archSteps = [
  { label: 'Meta Ads', position: 'start' },
  { label: 'n8n', position: 'middle' },
  { label: 'Supabase', position: 'middle' },
  { label: 'AI Analysis Engine', position: 'end' },
];

export default function FeaturedProject() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-white">
      <div className="section-container">
        <p className="text-sm font-medium text-warm-500 uppercase tracking-wider mb-3">Featured Project</p>
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 leading-tight">
          AdLeak AI
        </h2>
        <p className="mt-4 text-lg text-charcoal-600 max-w-2xl leading-relaxed">
          Helping marketers identify and eliminate wasted advertising spend through intelligent analysis and automation.
        </p>

        <div className="mt-14 grid lg:grid-cols-5 gap-10">
          {/* Main content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Problem */}
            <div className="p-6 rounded-xl bg-charcoal-50/60 border border-charcoal-100/80">
              <h3 className="text-sm font-semibold text-warm-600 uppercase tracking-wider mb-2">The Problem</h3>
              <p className="text-charcoal-700 leading-relaxed">
                Marketers struggle to identify wasted advertising spend. Budget leaks go unnoticed, optimization happens too late, and decisions are made on intuition rather than evidence.
              </p>
            </div>

            {/* Approach */}
            <div className="p-6 rounded-xl bg-charcoal-50/60 border border-charcoal-100/80">
              <h3 className="text-sm font-semibold text-warm-600 uppercase tracking-wider mb-2">The Approach</h3>
              <p className="text-charcoal-700 leading-relaxed">
                Started with problem discovery — validated opportunities, scored multiple problems across impact and feasibility, and selected ad-spend leakage as the strongest opportunity to pursue.
              </p>
            </div>

            {/* Architecture */}
            <div className="p-6 rounded-xl bg-charcoal-50/60 border border-charcoal-100/80">
              <h3 className="text-sm font-semibold text-warm-600 uppercase tracking-wider mb-4">Current Architecture</h3>
              <div className="flex items-center justify-between gap-2 flex-wrap">
                {archSteps.map((step, i) => (
                  <div key={step.label} className="flex items-center gap-2">
                    <div className="px-4 py-2 rounded-lg bg-white border border-charcoal-200 text-sm font-medium text-charcoal-700 whitespace-nowrap">
                      {step.label}
                    </div>
                    {i < archSteps.length - 1 && (
                      <ArrowRight size={16} className="text-warm-400 hidden sm:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-warm-50 border border-warm-200">
              <span className="w-2 h-2 rounded-full bg-warm-500 animate-pulse" />
              <span className="text-sm font-medium text-warm-700">Validation + Automation Stage</span>
            </div>
          </div>

          {/* Skills sidebar */}
          <div className="lg:col-span-2">
            <div className="p-6 rounded-xl bg-charcoal-800 text-white">
              <h3 className="text-sm font-semibold text-warm-400 uppercase tracking-wider mb-5">
                Skills Demonstrated
              </h3>
              <ul className="space-y-3">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-warm-400 flex-shrink-0" />
                    <span className="text-sm text-charcoal-100">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
