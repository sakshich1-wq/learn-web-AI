import { motion } from 'motion/react';
import { Layout, Codepen, BrainCircuit } from 'lucide-react';

const steps = [
  {
    icon: <Layout className="w-6 h-6" />,
    id: "01",
    title: "HTML/CSS Basics",
    desc: "Master the architecture of the web. Learn semantic structure and modern responsive styling with CSS Grid and Flexbox.",
    progress: "100%"
  },
  {
    icon: <Codepen className="w-6 h-6" />,
    id: "02",
    title: "JavaScript",
    desc: "Bring your designs to life. Control document flow, handle events, and create interactive experiences for your users.",
    progress: "40%"
  },
  {
    icon: <BrainCircuit className="w-6 h-6" />,
    id: "03",
    title: "AI Integration",
    desc: "The modern edge. Leverage Large Language Models to generate code, assets, and optimize your design system instantly.",
    progress: "20%"
  }
];

export default function ProfessionalPath() {
  return (
    <section className="py-24 bg-white" id="professional-path">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Your Professional Path
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-on-surface-variant max-w-2xl mx-auto"
          >
            A curriculum designed to move you from fundamental concepts to AI-augmented production.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-8 rounded-2xl bg-surface-bright level-1-card overflow-hidden group border border-primary/5 hover:border-secondary/20 transition-all"
            >
              <div 
                className="absolute top-0 left-0 h-1 bg-secondary transition-all duration-1000" 
                style={{ width: step.progress, opacity: step.id === "01" ? 1 : step.id === "02" ? 0.4 : 0.2 }}
              />
              
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{step.id}. {step.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
