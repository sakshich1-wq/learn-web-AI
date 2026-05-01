export default function Footer() {
  const links = ['Privacy Policy', 'Terms of Service', 'GitHub', 'Discord'];

  return (
    <footer className="bg-surface-bright border-t border-primary/5 py-16" id="footer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="space-y-4 text-center md:text-left">
            <div className="text-2xl font-bold text-primary">LearnWeb AI</div>
            <p className="text-sm text-on-surface-variant font-medium opacity-60">
              © 2024 LearnWeb AI. Engineering Intellectual Flow.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {links.map((link) => (
              <a 
                key={link} 
                href="#" 
                className="text-[11px] uppercase tracking-[0.14em] font-bold text-on-surface-variant hover:text-secondary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
