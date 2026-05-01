import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-32" id="hero">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1 text-center md:text-left"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/5 text-primary text-[13px] font-semibold tracking-wider mb-6">
            INTELLECTUAL FLOW
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-on-background leading-[1.1] mb-6">
            Master Web Design <br />
            <span className="text-secondary italic">with AI</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
            Empowering school students to build the future. Learn industry-standard 
            development workflows accelerated by artificial intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="cta-gradient text-white font-bold px-8 py-4 rounded-xl text-lg shadow-xl shadow-secondary/20 hover:scale-105 transition-transform">
              Start Learning Now
            </button>
            <button className="bg-white border border-outline-variant text-primary font-bold px-8 py-4 rounded-xl text-lg hover:bg-surface-container-low transition-colors">
              Watch Demo
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative"
        >
          <div className="w-full aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10 border border-white/20">
            <img 
              referrerPolicy="no-referrer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_LmRx9Jj5N2pHmlhTOvRnF_KhDFDmYWE4cqHLnzopSNpd8QuwPDy1vYv_QIdbLF2ikF57g0AsAu0zxBi1uMnaUurwHDPiJLoyq3l6KkTOJK-qfTnC55Hi3hl9Mreod2zy3gqkmkdPypGsfFeAuIlJmlJ161V0fTH8kC-BNg3TizbRMRUdRm-mIFy0FAAgcqAdBxy5aje54CaDRMTh-NrqdJ-ontwM4dunbkPRBZQj7KY_Nq4R33xAHzJfKw8xEqnXVcoKhlkC9WuI" 
              alt="AI-Assisted Web Design" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative Glows */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl -z-0"></div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl -z-0"></div>
        </motion.div>
      </div>
    </section>
  );
}
