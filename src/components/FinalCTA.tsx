import { motion } from 'motion/react';

export default function FinalCTA() {
  return (
    <section className="py-24 px-6" id="cta">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto cta-gradient rounded-3xl md:rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl"
      >
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Start Your AI Journey Today
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto mb-12 font-medium">
            Join 5,000+ school students already building professional-grade web applications with AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-primary font-extrabold px-10 py-5 rounded-2xl text-xl shadow-lg hover:scale-105 transition-transform">
              Enroll Now
            </button>
            <button className="bg-transparent border-2 border-white/30 text-white font-extrabold px-10 py-5 rounded-2xl text-xl hover:bg-white/10 transition-colors">
              Curriculum Guide
            </button>
          </div>
        </div>
        
        {/* Abstract Background Effects */}
        <div className="absolute -top-1/2 -left-1/4 w-[600px] h-[600px] bg-secondary/30 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-1/2 -right-1/4 w-[600px] h-[600px] bg-primary/40 rounded-full blur-[120px]"></div>
      </motion.div>
    </section>
  );
}
