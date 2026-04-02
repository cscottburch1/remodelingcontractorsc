import { Link, Navigate, useParams } from 'react-router-dom';
import CtaSection from '../../components/CtaSection';
import Seo from '../../components/Seo';
import SectionIntro from '../../components/SectionIntro';
import { locations } from '../../data/locations';
import { projects } from '../../data/projects';
import { services, supportServicePages } from '../../data/services';
import { createBreadcrumbSchema } from '../../lib/schema';

const serviceLookup = new Map([
  ...services.map((service) => [service.slug, service]),
  ...supportServicePages.map((subpage) => [subpage.slug, subpage])
]);

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const location = locations.find((item) => item.slug === project.locationSlug);
  const schema = createBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: project.title, path: `/projects/${project.slug}` }
  ]);

  return (
    <>
      <Seo
        title={`${project.title} | Remodeling Contractors SC`}
        description={`${project.location} project spotlight for ${project.relatedServices.join(', ')}.`}
        path={`/projects/${project.slug}`}
        image={project.image}
        schema={schema}
      />

      <section className="section-pad">
        <div className="container page-wrap">
          <SectionIntro
            eyebrow={project.location}
            title={project.title}
            text={project.description}
          />

          <article className="card service-detail">
            <img src={project.image} alt={project.imageAlt} loading="eager" />
            <div>
              <h3>Project focus</h3>
              <p>
                This project demonstrates our approach to planning, structural execution, and finish details for
                specialized home expansion and outdoor living builds.
              </p>

              <h3>Related services</h3>
              <div className="chip-list">
                {project.relatedServices.map((serviceSlug) => {
                  const item = serviceLookup.get(serviceSlug);
                  const href = 'parentSlug' in (item || {})
                    ? `/services/${item.parentSlug}/${item.slug}`
                    : `/services/${item?.slug}`;

                  return item ? (
                    <Link key={serviceSlug} to={href} className="chip-item">{item.name}</Link>
                  ) : null;
                })}
              </div>

              {location ? (
                <p>
                  Local market page: <Link className="text-link" to={`/locations/${location.slug}`}>{location.name}</Link>
                </p>
              ) : null}
            </div>
          </article>
        </div>
      </section>

      <CtaSection
        title="Want similar results at your property?"
        text="Request an estimate and we will outline options matched to your lot, scope, and timeline."
      />
    </>
  );
}