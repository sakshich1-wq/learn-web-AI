import { motion } from 'motion/react';
import { Lightbulb, Library, Copy } from 'lucide-react';

const notes = [
  {
    title: "CSS Specificity Hierarchy",
    content: "Inline styles > IDs > Classes/Attributes > Elements. Use !important only as a last resort."
  },
  {
    title: "The Fetch API",
    content: "Modern way to make HTTP requests. Remember that fetch() returns a Promise that resolves to a Response object."
  }
];

const prompts = [
  "Refactor this JavaScript function for better performance...",
  "Generate a modern CSS glassmorphism card component with...",
  "Create a 12-column responsive layout structure using Tailwind..."
];

export default function KnowledgeResources() {
  return (
    <section className="py-24 scroll-mt-20" id="resources">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        {/* Revision Bites */}
        <div className="space-y-8 scroll-mt-24" id="notes">
          <div className="flex items-center gap-3">
            <Lightbulb className="w-8 h-8 text-secondary" />
            <h3 className="text-3xl font-bold">Revision Bites</h3>
          </div>
          <div className="space-y-4">
            {notes.map((note) => (
              <motion.div
                key={note.title}
                whileHover={{ x: 10 }}
                className="p-6 rounded-2xl bg-white border border-secondary/5 hover:border-secondary/20 hover:shadow-lg transition-all cursor-default"
              >
                <h4 className="font-bold text-lg mb-2">{note.title}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {note.content.split('>').map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && <span className="mx-1 text-secondary opacity-50">&gt;</span>}
                    </span>
                  ))}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Prompt Library */}
        <div className="space-y-8 scroll-mt-24" id="prompts">
          <div className="flex items-center gap-3">
            <Library className="w-8 h-8 text-secondary" />
            <h3 className="text-3xl font-bold">AI Prompts for Developers</h3>
          </div>
          <div className="space-y-4">
            {prompts.map((prompt) => (
              <motion.div
                key={prompt}
                whileHover={{ scale: 1.02 }}
                className="p-5 rounded-2xl bg-surface-container-low border border-secondary/5 flex items-center justify-between group cursor-pointer hover:bg-white transition-colors"
              >
                <span className="text-[15px] font-medium text-primary-container pr-4">"{prompt}"</span>
                <button className="p-2 rounded-lg text-on-surface-variant group-hover:text-secondary group-hover:bg-secondary/5 transition-all">
                  <Copy className="w-5 h-5" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
