import { Navigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CtaSection from '../../components/CtaSection';
import Seo from '../../components/Seo';
import SectionIntro from '../../components/SectionIntro';
import { projects } from '../../data/projects';
import { services } from '../../data/services';
import { locations } from '../../data/locations';
import { createBreadcrumbSchema } from '../../lib/schema';

export default function LocationDetailPage() {
  const { slug } = useParams();
  const location = locations.find((item) => item.slug === slug);

  if (!location) {
    return <Navigate to="/locations" replace />;
  }

  const localProjects = projects.filter((project) => project.locationSlug === location.slug);
  const schema = createBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Locations', path: '/locations' },
    { name: location.name, path: `/locations/${location.slug}` }
  ]);

  return (
    <>
      <Seo
        title={`${location.name} Garage, Addition, Deck & Enclosure Builder | Remodeling Contractors SC`}
        description={location.seo}
        path={`/locations/${location.slug}`}
        schema={schema}
      />
      <section className="section-pad">
        <div className="container page-wrap">
          <SectionIntro
            eyebrow="Location"
            title={`${location.name}, SC Service Area`}
            text={location.summary}
          />
          <article className="card prose-card">
            <p>
              Remodeling Contractors SC provides specialist construction services in {location.name}, including
              {` ${services.map((service) => service.name.toLowerCase()).join(', ')}.`}
            </p>
            <p>
              Our local approach is built around planning quality, structural execution, and clean project
              communication so homeowners can move from concept to completed build with confidence.
            </p>

            <h3>Core services in {location.name}</h3>
            <div className="chip-list">
              {services.map((service) => (
                <Link key={service.slug} to={`/services/${service.slug}`} className="chip-item">{service.name}</Link>
              ))}
            </div>

            <h3>Projects near {location.name}</h3>
            <div className="chip-list">
              {localProjects.map((project) => (
                <Link key={project.slug} to={`/projects/${project.slug}`} className="chip-item">{project.title}</Link>
              ))}
              {localProjects.length === 0 ? <p>Ask for nearby project examples during your estimate call.</p> : null}
            </div>
          </article>
        </div>
      </section>
      <CtaSection
        title={`Need a project estimate in ${location.name}?`}
        text="Tell us your property goals and we will recommend the right garage, addition, deck, enclosure, or pod strategy."
      />
    </>
  );
}