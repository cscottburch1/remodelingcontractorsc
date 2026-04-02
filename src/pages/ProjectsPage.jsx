import CtaSection from '../components/CtaSection';
import ProjectCard from '../components/ProjectCard';
import Seo from '../components/Seo';
import SectionIntro from '../components/SectionIntro';
import { projects } from '../data/projects';
import { createBreadcrumbSchema } from '../lib/schema';

export default function ProjectsPage() {
  return (
    <>
      <Seo
        title="Projects | Remodeling Contractors SC"
        description="View garage, addition, deck, screened enclosure, and granny pod project highlights across Upstate South Carolina."
        path="/projects"
        schema={createBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Projects', path: '/projects' }
        ])}
      />
      <section className="section-pad">
        <div className="container">
          <SectionIntro
            eyebrow="Projects"
            title="Project-driven proof of craftsmanship and planning"
            text="Browse focused examples from garages, additions, decks, aluminum enclosures, and detached backyard structures."
          />
          <div className="grid-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
      <CtaSection
        title="Want examples matched to your project type?"
        text="Tell us what you are planning and we will share relevant project direction for your property."
      />
    </>
  );
}