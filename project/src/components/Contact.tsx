import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'rajswa.sri25@gmail.com',
    href: 'mailto:rajswa.sri25@gmail.com',
    description: 'Start a conversation',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'rajswa-srivastava-marketing',
    href: 'https://www.linkedin.com/in/rajswa-srivastava-marketing/',
    description: 'Connect professionally',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'rajswasrivastava',
    href: 'https://github.com/rajswasrivastava',
    description: 'View my code',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 bg-white">
      <div className="section-container-wide">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono font-medium text-accent-500 uppercase tracking-wider mb-3"
          >
            Get in Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-slate-800"
          >
            Let's build something together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-4 text-slate-500 leading-relaxed"
          >
            Whether you're working on an AI product, need a product perspective, or just want to discuss ideas — I'm always open to meaningful conversations.
          </motion.p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-xl bg-base-50 border border-base-200 hover:border-accent-300 hover:bg-accent-50/30 transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-accent-50 text-accent-500 w-fit mb-4 group-hover:bg-accent-500 group-hover:text-white transition-colors duration-200">
                <link.icon size={24} />
              </div>
              <h3 className="text-base font-semibold text-slate-800 flex items-center gap-1">
                {link.label}
                <ExternalLink size={14} className="text-slate-300 group-hover:text-accent-500 transition-colors" />
              </h3>
              <p className="mt-1 text-sm text-slate-500 font-mono truncate">{link.value}</p>
              <p className="mt-2 text-xs text-slate-400">{link.description}</p>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="https://adleak-ai-965959390710.asia-southeast1.run.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 text-white text-base font-semibold rounded-lg hover:bg-accent-600 transition-colors shadow-lg shadow-accent-500/25"
          >
            Launch AdLeak AI
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
