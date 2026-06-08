import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, Clock, Tag } from 'lucide-react';

const articles = [
  {
    type: 'Product Case Study',
    title: 'Deconstructing the 100 Problems Challenge',
    readTime: '6 min read',
    date: 'May 2026',
    tags: ['Product Discovery', 'Problem Validation', 'Market Sizing'],
    takeaways: [
      'Finding real-world problems: How I avoided the "solution searching for a problem" trap',
      'Constructing scoring axes: Urgency vs. Value capture vs. AI feasibility',
      'Behind the scores: Why 92 ideas failed the commercial test within the first hour',
    ],
  },
  {
    type: 'AI Orchestration',
    title: 'Low-Code vs Custom Scripts in AI Operations',
    readTime: '8 min read',
    date: 'April 2026',
    tags: ['Gemini API', 'n8n automation', 'Supabase Schema'],
    takeaways: [
      'Benchmarking n8n performance against local Node.js microservices for rapid API processing',
      'Schema Enforcement: Forcing JSON structures out of LLMs for predictable database entries',
      'Secrets isolation and secure API key management in autonomous server models',
    ],
  },
  {
    type: 'Marketing Insight',
    title: 'Attribution Leakage: The Silent Margin Killer',
    readTime: '5 min read',
    date: 'March 2026',
    tags: ['Performance Marketing', 'Ad Attribution', 'ROI Mapping'],
    takeaways: [
      'The anatomy of a tracking pixel break: Why standard dashboard monitors take 48h to notice',
      'Bridging technical analytics with marketing outcomes: Speaking the client\'s ROI language',
      'Creating early-warning alert loops via light-weight client webhook feeds',
    ],
  },
  {
    type: 'Build Log',
    title: 'The Blueprint of AdLeak AI Integration',
    readTime: '7 min read',
    date: 'June 2026',
    tags: ['System Architecture', 'DB Design', 'Prompt Engineering'],
    takeaways: [
      'Drafting database tables: Optimizing keys to keep read/write transactions fast and cheap',
      'Nesting prompts: Tuning system behavior to deliver crisp bulleted insights instead of conversational word-salad',
      'Validating fail-safe loops: Gracefully catching timeout errors without halting the core pipeline',
    ],
  },
];

const typeColors: Record<string, string> = {
  'Product Case Study': 'bg-accent-50 text-accent-600 border-accent-200',
  'AI Orchestration': 'bg-blue-50 text-blue-600 border-blue-200',
  'Marketing Insight': 'bg-emerald-50 text-emerald-600 border-emerald-200',
  'Build Log': 'bg-violet-50 text-violet-600 border-violet-200',
};

export default function LearningInPublic() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="insights" ref={ref} className="py-24 md:py-32 bg-base-50">
      <div className="section-container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono font-medium text-accent-500 uppercase tracking-wider mb-3"
            >
              Learning in Public
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-display font-bold text-slate-800"
            >
              Intel Stream
            </motion.h2>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-slate-500 max-w-2xl mb-10"
        >
          Sharing what I learn as I learn it. Transparent documentation accelerates growth.
        </motion.p>

        {/* Articles List */}
        <div className="space-y-4">
          {articles.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="rounded-xl border border-base-200 bg-white overflow-hidden"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-slate-50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-mono font-medium border ${typeColors[article.type]}`}>
                      {article.type}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Clock size={12} />
                      {article.readTime}
                    </span>
                    <span className="text-xs text-slate-400">{article.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">{article.title}</h3>
                </div>
                <motion.div
                  animate={{ rotate: expandedIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 mt-1"
                >
                  <ChevronDown size={20} className="text-slate-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      <div className="flex flex-wrap gap-2 mb-5">
                        {article.tags.map((tag) => (
                          <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-base-100 text-slate-600 text-xs">
                            <Tag size={10} />
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="space-y-3">
                        <p className="text-xs font-mono font-medium text-slate-500 uppercase tracking-wider">
                          Key Takeaways
                        </p>
                        {article.takeaways.map((takeaway, j) => (
                          <div key={j} className="flex items-start gap-3 p-4 rounded-lg bg-base-50">
                            <span className="w-5 h-5 rounded-full bg-accent-500 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                              {j + 1}
                            </span>
                            <p className="text-sm text-slate-600 leading-relaxed">{takeaway}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
