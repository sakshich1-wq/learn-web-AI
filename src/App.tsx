/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProfessionalPath from './components/ProfessionalPath';
import ProjectShowcase from './components/ProjectShowcase';
import AISuperpowers from './components/AISuperpowers';
import KnowledgeResources from './components/KnowledgeResources';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-secondary/20 selection:text-secondary">
      <Navbar />
      <main>
        <Hero />
        <ProfessionalPath />
        <ProjectShowcase />
        <AISuperpowers />
        <KnowledgeResources />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
