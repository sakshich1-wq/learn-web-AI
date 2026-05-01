import { motion } from 'motion/react';
import { MessageSquare, Terminal, Palette } from 'lucide-react';

const tools = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "ChatGPT for Architecture",
    desc: "Generate initial site maps, component structures, and content strategies in seconds."
  },
  {
    icon: <Terminal className="w-6 h-6" />,
    title: "GitHub Copilot for Logic",
    desc: "Write JavaScript functions with AI pair programming. Reduce syntax errors and learn faster."
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Canva for Visuals",
    desc: "Use AI-powered design assistants to create stunning UI assets and professional branding."
  }
];

export default function AISuperpowers() {
  return (
    <section className="py-24 bg-surface-container" id="ai-tools">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            Your AI Superpowers
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-on-surface-variant"
          >
            We don't just teach you to code; we teach you how to use AI tools to solve 
            complex problems and build faster.
          </motion.p>
          
          <div className="space-y-6">
            {tools.map((tool, idx) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-6 p-6 bg-white/40 rounded-2xl border border-white/60 hover:bg-white/60 transition-colors cursor-default"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-secondary">
                  {tool.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{tool.title}</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{tool.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 rounded-[3rem] shadow-2xl relative"
        >
          <div className="bg-slate-950 rounded-2xl p-8 font-mono text-sm leading-relaxed overflow-hidden shadow-inner border border-white/5">
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <pre className="text-blue-300">
              <span className="text-cyan-400 opacity-50">{"// GitHub Copilot: Create a navigation component"}</span><br />
              <span className="text-purple-400">{"const"}</span>{" Navigation = () => {"}<br />
              {"  "}<span className="text-purple-400">{"return"}</span>{" ("}<br />
              {"    <"}<span className="text-cyan-400">{"nav"}</span>{" className="}<span className="text-yellow-200">{'"flex justify-between items-center"'}</span>{">"}<br />
              {"      <"}<span className="text-cyan-400">{"Logo"}</span>{" />"}<br />
              {"      <"}<span className="text-cyan-400">{"ul"}</span>{" className="}<span className="text-yellow-200">{'"hidden md:flex gap-8"'}</span>{">"}<br />
              {"        {links."}<span className="text-cyan-400">{"map"}</span>{"(link => ("}<br />
              {"          <"}<span className="text-cyan-400">{"li"}</span>{" key={link.id}>{link.label}</"}<span className="text-cyan-400">{"li"}</span>{">"}<br />
              {"        ))}"}<br />
              {"      </"}<span className="text-cyan-400">{"ul"}</span>{">"}<br />
              {"    </"}<span className="text-cyan-400">{"nav"}</span>{">"}<br />
              {"  );"}<br />
              {"};"}
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
