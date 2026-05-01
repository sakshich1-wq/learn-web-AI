import { motion } from 'motion/react';

export default function Navbar() {
  const navLinks = [
    { label: 'Curriculum', href: '#professional-path' },
    { label: 'Projects', href: '#projects' },
    { label: 'Tools', href: '#ai-tools' },
    { label: 'Notes', href: '#notes' },
    { label: 'Prompt Library', href: '#prompts' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-md border-b border-primary/5 h-20"
      id="navbar"
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
        <div className="text-2xl font-extrabold tracking-tighter text-primary" id="logo">
          LearnWeb AI
        </div>
        
        <div className="hidden md:flex items-center gap-8" id="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold tracking-tight transition-colors hover:text-secondary text-on-surface-variant"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button className="cta-gradient text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-all active:scale-95 duration-150 shadow-lg shadow-primary/10">
          Get Started
        </button>
      </div>
    </motion.nav>
  );
}
