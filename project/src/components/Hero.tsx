import { motion } from 'framer-motion';
import { ExternalLink, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 md:pt-24 bg-base-50">
      <div className="section-container-wide py-16 md:py-24">
        <div className="max-w-4xl">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-100 border border-base-200 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-slate-600 uppercase tracking-wider">
                Available for Projects
              </span>
            </div>
          </motion.div>

          {/* Role tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {['AI Product & Growth', 'BBA Student', 'AI Builder', 'Product Thinker'].map((tag, i) => (
              <span
                key={tag}
                className="text-xs font-mono px-3 py-1 rounded-md bg-base-200 text-slate-600"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 leading-[1.05] tracking-tight"
          >
            Rajswa<br />
            <span className="text-accent-500">Srivastava</span>
          </motion.h1>

          {/* Headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 text-xl md:text-2xl lg:text-3xl font-display font-medium text-slate-700 leading-relaxed max-w-3xl"
          >
            Building AI Products, Growth Systems, and Real-World Solutions
          </motion.p>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-4 text-base md:text-lg text-slate-500 leading-relaxed"
          >
            BBA Student | AI Builder | Product Thinker | Marketing & Growth Enthusiast
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <motion.a
              href="https://adleak-ai-965959390710.asia-southeast1.run.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent-500 text-white text-sm font-semibold rounded-lg hover:bg-accent-600 transition-colors duration-200 shadow-lg shadow-accent-500/25"
            >
              Launch Live Web App
              <ExternalLink size={16} />
            </motion.a>
            <motion.a
              href="#flagship"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-800 text-white text-sm font-semibold rounded-lg hover:bg-slate-700 transition-colors duration-200"
            >
              Analyze Architecture
              <ArrowDown size={16} />
            </motion.a>
          </motion.div>

          {/* Bio Preview */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 pt-16 border-t border-base-200"
          >
            <p className="text-slate-500 text-sm leading-relaxed max-w-3xl">
              I am a business and marketing student (BBA) who believes that the best way to understand technology is by building with it. Instead of collecting credentials, I build live, working systems that solve real business bottlenecks.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
