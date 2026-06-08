import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-12 bg-slate-800 border-t border-slate-700">
      <div className="section-container-wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center">
              <span className="text-white font-mono text-sm font-semibold">RS</span>
            </div>
            <span className="text-sm text-slate-400">Rajswa Srivastava</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm text-slate-500 text-center"
          >
            Built with curiosity, experimentation, and continuous learning.
          </motion.p>

          <div className="flex items-center gap-4">
            <a
              href="mailto:rajswa.sri25@gmail.com"
              className="text-slate-500 hover:text-white transition-colors text-sm"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/rajswa-srivastava-marketing/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/rajswasrivastava"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors text-sm"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
