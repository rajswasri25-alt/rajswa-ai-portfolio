import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const paragraphs = [
    "I am a business and marketing student (BBA) who believes that the best way to understand technology is by building with it. Instead of collecting credentials or certificates, I choose to build live, working systems that solve real business bottlenecks.",
    "My focus sits at the intersection of Product Management, AI Engineering, and Growth Strategy. I design workflows, validate customer pain points, and structure technical operations. By using tools like n8n, Supabase, and Gemini APIs, I build bridges between complex code bases and real business metrics.",
    "Whether analyzing digital marketing leakages, modeling user behaviors, or validating 100+ separate business problems, I approach every project with systems thinking, clear validation criteria, and a bias towards rapid execution."
  ];

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 bg-white">
      <div className="section-container-wide">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Label column */}
          <div className="lg:col-span-3">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono font-medium text-accent-500 uppercase tracking-wider"
            >
              About Me
            </motion.p>
          </div>

          {/* Content column */}
          <div className="lg:col-span-9">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-800 leading-tight"
            >
              I build to learn.<br />
              <span className="text-accent-500">I learn to solve.</span>
            </motion.h2>

            <div className="mt-10 space-y-6">
              {paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="text-base md:text-lg text-slate-600 leading-relaxed"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {/* Contact links inline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 flex flex-wrap gap-6"
            >
              <a href="mailto:rajswa.sri25@gmail.com" className="text-sm font-medium text-slate-700 hover:text-accent-500 transition-colors">
                rajswa.sri25@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/rajswa-srivastava-marketing/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-700 hover:text-accent-500 transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/rajswasrivastava" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-700 hover:text-accent-500 transition-colors">
                GitHub
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
