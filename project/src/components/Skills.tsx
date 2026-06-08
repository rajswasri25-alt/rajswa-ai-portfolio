import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

type Category = 'All Segments' | 'Product' | 'AI' | 'Technical Stack' | 'Business & Growth';

const allSkills = {
  Product: ['Product Discovery', 'User Research', 'MVP Design', 'Product Thinking', 'User Journey Mapping', 'A/B Testing Frameworks'],
  AI: ['Gemini API', 'AI Workflows', 'Prompt Optimization', 'Automation Logic', 'Agentic Workflows', 'Retrieval-Augmented Generation'],
  'Technical Stack': ['n8n', 'Supabase & PostgreSQL', 'GitHub', 'REST APIs & Webhooks', 'TypeScript/JavaScript', 'Tailwind CSS'],
  'Business & Growth': ['Performance Marketing', 'SEO Audit & Architecture', 'Growth Strategy', 'Business Analysis', 'Cost Modeling', 'Cohort Retention Tracking'],
};

const categories: Category[] = ['All Segments', 'Product', 'AI', 'Technical Stack', 'Business & Growth'];

const categoryColors: Record<string, string> = {
  Product: 'bg-accent-50 text-accent-600 border-accent-200',
  AI: 'bg-blue-50 text-blue-600 border-blue-200',
  'Technical Stack': 'bg-slate-100 text-slate-600 border-slate-200',
  'Business & Growth': 'bg-emerald-50 text-emerald-600 border-emerald-200',
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState<Category>('All Segments');

  const filteredSkills = activeCategory === 'All Segments'
    ? Object.entries(allSkills)
    : [[activeCategory, allSkills[activeCategory as keyof typeof allSkills]]];

  return (
    <section id="skills" ref={ref} className="py-24 md:py-32 bg-white">
      <div className="section-container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono font-medium text-accent-500 uppercase tracking-wider mb-3"
            >
              Competency Matrix
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-display font-bold text-slate-800"
            >
              Strategy Stack
            </motion.h2>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-slate-500 max-w-2xl mb-8"
        >
          My toolkit spans product, AI, technology, and business — because real impact lives at the intersection.
        </motion.p>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-slate-800 text-white border-slate-800'
                  : 'bg-white text-slate-600 border-base-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-8">
          {filteredSkills.map(([category, skills], groupIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + groupIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-md text-xs font-mono font-medium border ${categoryColors[category]}`}>
                  {category}
                </span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.25 + skillIndex * 0.05 }}
                    whileHover={{ y: -2 }}
                    className="p-4 rounded-lg bg-base-50 border border-base-200 hover:border-slate-300 transition-all duration-200"
                  >
                    <span className="text-sm font-medium text-slate-700">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
