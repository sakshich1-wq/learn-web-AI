import { motion } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Portfolio Website",
    level: "Intermediate",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXnYWdeJ8fa6qb8rzofjoFmsIXr2oj7b9Hh5-5EXZCjC071LiOVY6-wcAUN6EJYaZ5Lw6cSu8GduBk7RkXI8aCNyr1mENFBB387V6cWQWAl5HVaoEeIC-6Nu66OxqH07nJlw_o_kzw0FVCyjZQ8ii0iAIRN9PbAai_iLtw5HtTRvJXx9DRqIj_ZHS1oylcMtx365Mela979bzyGJ2hrHVnT2VUsmmFikXlivihhjLSp9yeOGSO3hfdixmxXsbxW9mz1KVrHRgE-ZjG"
  },
  {
    title: "School Event Page",
    level: "Beginner",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVYQImmprCPhDizJus2Jegv1FO_34NHCMS_V3pYPtxZG4bFsl8Nlcp5HToQFn3Nxx2Ns8ryhG9qRlQHUR9y4cHpiDlV46HVFiSkoVX1kF6LQlz0lyTDpu3d7aHgqDV70bB7uz3Qu653Ll3mtE4Pz7Hr7gLnWautp9KI5lMYfrqJYHQ2rAJKjllfHPlQjQQIPfjLrlClK6aq3ZBd-YC0ga1cz_Z_EY0V-fqOZc9TzmW8Y2_2SwKm82FSDS7ZnyB4MZel6YjYeGFWjqr"
  }
];

export default function ProjectShowcase() {
  return (
    <section className="py-24" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Build Real Projects
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-on-surface-variant"
            >
              Theory is nothing without implementation. Build your professional portfolio today.
            </motion.p>
          </div>
          <button className="text-primary font-bold flex items-center gap-2 hover:translate-x-1 transition-transform group">
            View All Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="rounded-3xl overflow-hidden aspect-video mb-6 level-1-card relative">
                <img 
                  referrerPolicy="no-referrer"
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[13px] font-semibold text-primary uppercase tracking-widest bg-primary/5 px-2 py-1 rounded inline-block mb-2">
                    LEVEL: {project.level}
                  </span>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
                <div className="p-2 rounded-full bg-secondary/10 text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
