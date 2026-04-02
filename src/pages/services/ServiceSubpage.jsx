import { Link, Navigate, useParams } from 'react-router-dom';
import CtaSection from '../../components/CtaSection';
import Seo from '../../components/Seo';
import SectionIntro from '../../components/SectionIntro';
import { locations } from '../../data/locations';
import { projects } from '../../data/projects';
import { services } from '../../data/services';
import { createBreadcrumbSchema, createServiceSchema } from '../../lib/schema';

export default function ServiceSubpage() {
  const { serviceSlug, subSlug } = useParams();
  const parentService = services.find((service) => service.slug === serviceSlug);
  const subpage = parentService?.subpages.find((item) => item.slug === subSlug);

  if (!parentService || !subpage) {
    return <Navigate to="/services" replace />;
  }

  const relatedProjects = projects.filter((project) => project.relatedServices.includes(subSlug));
  const schema = [
    createServiceSchema(subpage, `/services/${serviceSlug}/${subSlug}`),
    createBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: parentService.name, path: `/services/${serviceSlug}` },
      { name: subpage.name, path: `/services/${serviceSlug}/${subSlug}` }
    ])
  ];

  return (
    <>
      <Seo
        title={`${subpage.name} | Remodeling Contractors SC`}
        description={subpage.seo}
        path={`/services/${serviceSlug}/${subSlug}`}
        image={parentService.image}
        schema={schema}
      />

      <section className="section-pad">
        <div className="container page-wrap">
          <SectionIntro
            eyebrow={parentService.name}
            title={subpage.name}
            text={subpage.summary}
          />

          <article className="card prose-card">
            <p>
              Our {subpage.name.toLowerCase()} projects are planned around property layout, structural requirements,
              finish expectations, and long-term home value.
            </p>
            <p>
              We serve homeowners across {locations.map((location) => location.name).join(', ')} with a process built
              for clarity from estimate through final handoff.
            </p>

            <h3>More {parentService.name.toLowerCase()} options</h3>
            <div className="chip-list">
              {parentService.subpages.map((item) => (
                <Link key={item.slug} className="chip-item" to={`/services/${serviceSlug}/${item.slug}`}>
                  {item.name}
                </Link>
              ))}
            </div>

            <h3>Related projects</h3>
            <div className="chip-list">
              {relatedProjects.map((project) => (
                <Link key={project.slug} className="chip-item" to={`/projects/${project.slug}`}>
                  {project.title}
                </Link>
              ))}
              {relatedProjects.length === 0 ? <p>Request examples specific to this page during your estimate call.</p> : null}
            </div>
          </article>
        </div>
      </section>

      <CtaSection
        title={`Planning a ${subpage.name.toLowerCase()} project?`}
        text="Request an estimate and we will discuss scope, timing, and structural direction."
      />
    </>
  );
}