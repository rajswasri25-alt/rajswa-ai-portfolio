import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, Zap, Database, Bot, Workflow } from 'lucide-react';

const architectureNodes = [
  {
    icon: Zap,
    title: 'Meta Ads API',
    description: 'Pulls campaign performance, pixel mismatch errors, and CPA trends in real-time.',
  },
  {
    icon: Workflow,
    title: 'n8n Workflow Node',
    description: 'Orchestrates the scheduled cron fetch, formats payloads, and streams data batches.',
  },
  {
    icon: Database,
    title: 'Supabase Database',
    description: 'Stores historic baselines, threshold limits, and records anomaly detections.',
  },
  {
    icon: Bot,
    title: 'AI Analysis Engine',
    description: 'Processes data through contextual prompts to spot attribution anomalies and generate immediate resolution strategies.',
  },
];

export default function FlagshipProject() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expanded, setExpanded] = useState<'problem' | 'approach' | null>(null);

  return (
    <section id="flagship" ref={ref} className="py-24 md:py-32 bg-slate-800">
      <div className="section-container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono font-medium text-accent-400 uppercase tracking-wider mb-3"
            >
              The Flagship Experiment
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white"
            >
              AdLeak AI
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            href="https://adleak-ai-965959390710.asia-southeast1.run.app/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-500 text-white text-sm font-semibold rounded-lg hover:bg-accent-600 transition-colors"
          >
            Launch Live App
            <ExternalLink size={14} />
          </motion.a>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 max-w-3xl mb-12"
        >
          Precision analysis of wasted digital advertising spend using automated agent checks.
        </motion.p>

        {/* Problem & Approach Cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {/* Problem Definition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="p-6 rounded-xl bg-slate-700/50 border border-slate-600"
          >
            <button
              onClick={() => setExpanded(expanded === 'problem' ? null : 'problem')}
              className="w-full flex items-start justify-between gap-4 text-left"
            >
              <div>
                <span className="text-xs font-mono text-accent-400 uppercase tracking-wider">Problem</span>
                <h3 className="mt-2 text-base font-semibold text-white">
                  Identifying Wasted Ad Spend
                </h3>
              </div>
              {expanded === 'problem' ? (
                <ChevronUp size={20} className="text-slate-400 flex-shrink-0 mt-1" />
              ) : (
                <ChevronDown size={20} className="text-slate-400 flex-shrink-0 mt-1" />
              )}
            </button>
            <motion.div
              initial={false}
              animate={{ height: expanded === 'problem' ? 'auto' : 0, opacity: expanded === 'problem' ? 1 : 0 }}
              className="overflow-hidden"
            >
              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                Marketers and agency founders struggle to identify wasted advertising spend in real-time. Tracking setups break, non-performing campaigns bleed cash for days, and pixel discrepancies misattribute conversions. Performance managers often spend 10+ hours a week digging through spreadsheets just to notice leaking budget.
              </p>
            </motion.div>
          </motion.div>

          {/* Scientific Discovery Approach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-xl bg-slate-700/50 border border-slate-600"
          >
            <button
              onClick={() => setExpanded(expanded === 'approach' ? null : 'approach')}
              className="w-full flex items-start justify-between gap-4 text-left"
            >
              <div>
                <span className="text-xs font-mono text-accent-400 uppercase tracking-wider">Approach</span>
                <h3 className="mt-2 text-base font-semibold text-white">
                  Scientific Discovery Method
                </h3>
              </div>
              {expanded === 'approach' ? (
                <ChevronUp size={20} className="text-slate-400 flex-shrink-0 mt-1" />
              ) : (
                <ChevronDown size={20} className="text-slate-400 flex-shrink-0 mt-1" />
              )}
            </button>
            <motion.div
              initial={false}
              animate={{ height: expanded === 'approach' ? 'auto' : 0, opacity: expanded === 'approach' ? 1 : 0 }}
              className="overflow-hidden"
            >
              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                Instead of starting with a solution, the project kicked off with high-velocity problem exploration, listing over 100 real-world business bottlenecks. A structured validation framework scored each problem based on critical criteria (market size, problem urgency, execution feasibility, and suitability for AI systems). Wasted ad spend emerged as the highest-scoring opportunity.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Architecture Nodes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <p className="text-xs font-mono text-accent-400 uppercase tracking-wider mb-4">
            Architectural Pipeline
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {architectureNodes.map((node, i) => (
              <motion.div
                key={node.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                className="p-5 rounded-xl bg-slate-700/30 border border-slate-600/50 hover:bg-slate-700/50 hover:border-slate-500 transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-accent-500/10 text-accent-400 w-fit mb-4">
                  <node.icon size={20} />
                </div>
                <h4 className="text-sm font-semibold text-white">{node.title}</h4>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">{node.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-accent-500/10 border border-accent-500/30"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-500"></span>
          </span>
          <span className="text-sm font-medium text-accent-200">
            Validation & Automation Stage
          </span>
        </motion.div>
      </div>
    </section>
  );
}
