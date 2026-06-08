import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Workflow, Compass, BarChart3, Users, Rocket } from 'lucide-react';

const focusAreas = [
  {
    icon: Brain,
    title: 'AI Product Development',
    description: 'Translating business problems into functional, API-driven agents and system workflows.',
    metric: 'Zero to MVP',
    span: 'md:col-span-1'
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Connecting API nodes, databases, and LLM logical blocks to build touchless workflows.',
    metric: 'n8n & Webhooks',
    span: 'md:col-span-1'
  },
  {
    icon: Compass,
    title: 'Product Discovery',
    description: 'Iterative discovery frameworks, user interviews, and objective value scoring models.',
    metric: 'Validation-First',
    span: 'md:col-span-1'
  },
  {
    icon: BarChart3,
    title: 'Marketing Analytics',
    description: 'Diagnosing operational leaks, tracking attribution, and modeling customer acquisition costs.',
    metric: 'Performance Mapping',
    span: 'md:col-span-2'
  },
  {
    icon: Users,
    title: 'User Research',
    description: 'Structuring qualitative problem interviews and turning feedback loops into product requirements.',
    metric: 'User-Centric',
    span: 'md:col-span-1'
  },
  {
    icon: Rocket,
    title: 'Growth Strategy',
    description: 'Mapping customer acquisition channels and engineering low-cost growth loops.',
    metric: 'LTV/CAC Optimization',
    span: 'md:col-span-2'
  },
];

export default function CurrentFocus() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="focus" ref={ref} className="py-24 md:py-32 bg-base-50">
      <div className="section-container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono font-medium text-accent-500 uppercase tracking-wider mb-3"
            >
              Current Focus
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-display font-bold text-slate-800"
            >
              Where I'm directing my energy
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-slate-500 text-sm max-w-md"
          >
            Areas where product thinking, AI capabilities, and business understanding converge.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {focusAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
              whileHover={{ y: -4 }}
              className={`${area.span} group p-6 md:p-8 rounded-2xl bg-white border border-base-200 hover:border-accent-300 hover:shadow-xl hover:shadow-accent-500/5 transition-all duration-300 cursor-default`}
            >
              <div className="p-3 rounded-xl bg-base-100 text-accent-500 w-fit group-hover:bg-accent-50 transition-colors duration-300">
                <area.icon size={24} />
              </div>

              <h3 className="mt-6 text-lg font-display font-semibold text-slate-800">
                {area.title}
              </h3>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                {area.description}
              </p>

              <div className="mt-6 pt-4 border-t border-base-200">
                <span className="text-xs font-mono font-medium text-accent-500 bg-accent-50 px-2.5 py-1 rounded">
                  {area.metric}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
