import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, X } from 'lucide-react';

const matrixData = [
  {
    problem: 'Pixel Attribution & Budget Leakage',
    market: 9,
    urgency: 9,
    feasibility: 8,
    aiSuitability: 9,
    total: 35,
    selected: true,
    reasoning: 'High financial pain point. Digital agencies burn thousands due to silent tracking failures. Perfect use case for AI-driven anomaly diagnosis.',
  },
  {
    problem: 'Manual Invoice Reconciliation',
    market: 6,
    urgency: 8,
    feasibility: 7,
    aiSuitability: 6,
    total: 27,
    selected: false,
    reasoning: 'Highly urgent but moderate market size. Often custom-tailored to specific legacy ERP configurations, reducing direct SaaS scalability.',
  },
  {
    problem: 'Influencer Coupon Misattribution',
    market: 7,
    urgency: 6,
    feasibility: 8,
    aiSuitability: 5,
    total: 26,
    selected: false,
    reasoning: 'Good scope, but solving tracking does not necessarily require AI—can be handled with simple deterministic lookup queries.',
  },
  {
    problem: 'Multi-channel Cold Content Scheduling',
    market: 8,
    urgency: 5,
    feasibility: 8,
    aiSuitability: 7,
    total: 28,
    selected: false,
    reasoning: 'Large market size, but low immediate urgency. High saturation of existing social media scheduling players with deep feature sets.',
  },
];

export default function ProblemMatrix() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-base-50">
      <div className="section-container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono font-medium text-accent-500 uppercase tracking-wider mb-3"
            >
              Problem Scoring Matrix
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-display font-bold text-slate-800"
            >
              How AdLeak AI was selected
            </motion.h2>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-slate-500 max-w-2xl mb-10"
        >
          Each problem was scored on a 1-10 scale across four dimensions, with a maximum possible score of 40.
        </motion.p>

        {/* Desktop Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:block overflow-x-auto rounded-xl border border-base-200 bg-white"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-base-200 bg-base-50">
                <th className="text-left text-xs font-mono font-medium text-slate-500 uppercase tracking-wider p-4">
                  Problem
                </th>
                <th className="text-center text-xs font-mono font-medium text-slate-500 uppercase tracking-wider p-4 w-16">
                  Market
                </th>
                <th className="text-center text-xs font-mono font-medium text-slate-500 uppercase tracking-wider p-4 w-16">
                  Urgency
                </th>
                <th className="text-center text-xs font-mono font-medium text-slate-500 uppercase tracking-wider p-4 w-16">
                  Feasibility
                </th>
                <th className="text-center text-xs font-mono font-medium text-slate-500 uppercase tracking-wider p-4 w-16">
                  AI Fit
                </th>
                <th className="text-center text-xs font-mono font-medium text-slate-500 uppercase tracking-wider p-4 w-20">
                  Total
                </th>
                <th className="text-center text-xs font-mono font-medium text-slate-500 uppercase tracking-wider p-4 w-20">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {matrixData.map((row, i) => (
                <motion.tr
                  key={row.problem}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.25 + i * 0.05 }}
                  className={`border-b border-base-200 last:border-b-0 ${row.selected ? 'bg-accent-50/50' : ''}`}
                >
                  <td className="p-4">
                    <p className="text-sm font-medium text-slate-800">{row.problem}</p>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed max-w-xs">{row.reasoning}</p>
                  </td>
                  <td className="p-4 text-center">
                    <span className="font-mono text-sm text-slate-700">{row.market}</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="font-mono text-sm text-slate-700">{row.urgency}</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="font-mono text-sm text-slate-700">{row.feasibility}</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="font-mono text-sm text-slate-700">{row.aiSuitability}</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className={`font-mono font-semibold ${row.selected ? 'text-accent-500' : 'text-slate-700'}`}>
                      {row.total}/40
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    {row.selected ? (
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-accent-100 text-accent-600 text-xs font-medium">
                        <Check size={12} /> Selected
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-slate-100 text-slate-500 text-xs">
                        <X size={12} /> Not Selected
                      </span>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {matrixData.map((row, i) => (
            <motion.div
              key={row.problem}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className={`p-5 rounded-xl border ${row.selected ? 'bg-accent-50/50 border-accent-200' : 'bg-white border-base-200'}`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-sm font-semibold text-slate-800">{row.problem}</h3>
                {row.selected ? (
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-accent-100 text-accent-600 text-xs font-medium flex-shrink-0">
                    <Check size={12} /> Selected
                  </span>
                ) : null}
              </div>
              <div className="grid grid-cols-4 gap-3 mb-4">
                <div className="text-center">
                  <p className="text-xs text-slate-400 mb-1">Market</p>
                  <p className="font-mono font-semibold text-slate-700">{row.market}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-400 mb-1">Urgency</p>
                  <p className="font-mono font-semibold text-slate-700">{row.urgency}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-400 mb-1">Feasibility</p>
                  <p className="font-mono font-semibold text-slate-700">{row.feasibility}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-400 mb-1">AI Fit</p>
                  <p className="font-mono font-semibold text-slate-700">{row.aiSuitability}</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-base-200">
                <span className="font-mono font-semibold text-accent-500">{row.total}/40</span>
                <span className="text-xs text-slate-500">Total Score</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
