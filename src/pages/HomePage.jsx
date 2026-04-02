import { Link } from 'react-router-dom';
import CtaSection from '../components/CtaSection';
import EstimateForm from '../components/EstimateForm';
import Faq from '../components/Faq';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import Seo from '../components/Seo';
import SectionIntro from '../components/SectionIntro';
import ServiceCard from '../components/ServiceCard';
import Testimonials from '../components/Testimonials';
import { faqs } from '../data/faqs';
import { locations } from '../data/locations';
import { projects } from '../data/projects';
import { services } from '../data/services';
import { createBreadcrumbSchema, createFaqSchema, createLocalBusinessSchema } from '../lib/schema';

export default function HomePage() {
  const schema = [
    createLocalBusinessSchema(),
    createFaqSchema(faqs),
    createBreadcrumbSchema([{ name: 'Home', path: '/' }])
  ];

  return (
    <>
      <Seo
        title="Remodeling Contractors SC | Garages, Additions, Decks, Enclosures, Granny Pods"
        description="South Carolina specialists for custom garages, room additions, deck construction, aluminum screened enclosures, and granny pods."
        schema={schema}
      />
      <Hero />

      <section className="section-pad">
        <div className="container stat-strip">
          <article className="card stat-card">
            <strong>5</strong>
            <p>Specialized build categories</p>
          </article>
          <article className="card stat-card">
            <strong>8</strong>
            <p>Target Upstate SC markets</p>
          </article>
          <article className="card stat-card">
            <strong>100%</strong>
            <p>Focused on space-creation projects</p>
          </article>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <SectionIntro
            eyebrow="Services"
            title="Built around what South Carolina homeowners ask for most"
            text="We specialize in projects that create more space, improve curb appeal, and increase practical property value."
          />
          <div className="grid-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <SectionIntro
            eyebrow="Projects"
            title="Project-driven results across Upstate South Carolina"
            text="Recent garages, additions, decks, enclosures, and detached backyard structure work."
          />
          <div className="grid-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <SectionIntro
            eyebrow="Process"
            title="A clear build process from estimate through final walkthrough"
            text="We keep planning disciplined so structural decisions, permit requirements, and finish quality stay on track."
          />
          <div className="grid-3">
            <article className="card prose-card">
              <h3>1. Consultation + Scope</h3>
              <p>We define your goals, priorities, and structural requirements before design details move forward.</p>
            </article>
            <article className="card prose-card">
              <h3>2. Planning + Build Strategy</h3>
              <p>Selections, scheduling, and trade coordination are outlined in advance for smoother execution.</p>
            </article>
            <article className="card prose-card">
              <h3>3. Construction + Closeout</h3>
              <p>You get organized communication, quality control checkpoints, and a professional handoff.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <SectionIntro
            eyebrow="Service Areas"
            title="Serving major Upstate South Carolina markets"
            text="Focused local coverage so you get responsive communication and region-specific project knowledge."
          />
          <div className="chip-list">
            {locations.map((location) => (
              <Link key={location.slug} to={`/locations/${location.slug}`} className="chip-item">{location.name}</Link>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Faq />

      <section className="section-pad">
        <div className="container page-wrap">
          <SectionIntro
            eyebrow="Request Estimate"
            title="Tell us what you want to build"
            text="Share project goals and we will follow up with realistic next steps for your home and lot."
          />
          <div className="card form-card">
            <EstimateForm />
          </div>
        </div>
      </section>

      <CtaSection
        title="Need more living space, storage, or outdoor comfort?"
        text="We can map the right garage, addition, deck, enclosure, or granny pod scope for your property."
      />
    </>
  );
}