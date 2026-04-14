import { Navigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CtaSection from '../../components/CtaSection';
import Seo from '../../components/Seo';
import SectionIntro from '../../components/SectionIntro';

import { locations } from '../../data/locations';
import { projects } from '../../data/projects';
import { services } from '../../data/services';
import { serviceContent } from '../../data/serviceContent';
import { createBreadcrumbSchema, createServiceSchema } from '../../lib/schema';
import createOrganizationSchema from '../../lib/organizationSchema';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);
  const content = serviceContent[slug];

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedProjects = projects.filter((project) => project.relatedServices.includes(service.slug));
  const schema = [
    createServiceSchema(service, `/services/${service.slug}`),
    createBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: service.name, path: `/services/${service.slug}` }
    ]),
    createOrganizationSchema(),
    {
      '@type': 'WebPage',
      'datePublished': '2026-04-13',
      'dateModified': content?.lastUpdated || '2026-04-13'
    }
  ];

  return (
    <>
      <Seo
        title={`${service.name} | Remodeling Contractors SC`}
        description={service.seo}
        path={`/services/${service.slug}`}
        image={service.image}
        schema={schema}
      />
      <section className="section-pad">
        <div className="container page-wrap">
          <SectionIntro eyebrow="Service" title={service.name} text={service.summary} />
          <article className="card service-detail">
            <img src={service.image} alt={service.imageAlt} loading="eager" />
            <div>
              <h3>What this service includes</h3>
              <p>
                Every {service.name.toLowerCase()} project is scoped around structural requirements, lot conditions,
                budget priorities, and long-term usability.
              </p>
              <ul className="link-list">
                {service.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              {content?.questions && (
                <>
                  <h3>Frequently Asked Questions</h3>
                  <ul className="faq-list">
                    {content.questions.map((qa, idx) => (
                      <li key={idx}>
                        <strong>Q: {qa.q}</strong>
                        <br />A: {qa.a}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {content?.stats && (
                <>
                  <h3>Service Stats & Facts</h3>
                  <ul className="stats-list">
                    {content.stats.map((stat, idx) => (
                      <li key={idx}>
                        <strong>{stat.label}:</strong> {stat.value}
                        {stat.source && <span className="stat-source"> ({stat.source})</span>}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {content?.caseStudies && (
                <>
                  <h3>Case Study</h3>
                  {content.caseStudies.map((cs, idx) => (
                    <div key={idx} className="case-study">
                      <strong>{cs.title}</strong>
                      <p>{cs.summary}</p>
                      <ul>
                        <li><strong>Before:</strong> {cs.before}</li>
                        <li><strong>After:</strong> {cs.after}</li>
                      </ul>
                    </div>
                  ))}
                </>
              )}

              {content?.lastUpdated && (
                <div className="last-updated">Last updated: {content.lastUpdated}</div>
              )}

              <h3>Supporting pages</h3>
              <div className="chip-list">
                {service.subpages.map((subpage) => (
                  <Link
                    key={subpage.slug}
                    to={`/services/${service.slug}/${subpage.slug}`}
                    className="chip-item"
                  >
                    {subpage.name}
                  </Link>
                ))}
              </div>

              <h3>Typical service locations</h3>
              <p>{locations.map((location) => location.name).join(', ')}</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <SectionIntro
            eyebrow="Related Projects"
            title={`Recent ${service.name.toLowerCase()} work`}
            text="See project examples and then request an estimate tailored to your property goals."
          />
          <div className="chip-list">
            {relatedProjects.map((project) => (
              <Link key={project.slug} className="chip-item" to={`/projects/${project.slug}`}>
                {project.title}
              </Link>
            ))}
            {relatedProjects.length === 0 ? <p>No published projects yet for this category.</p> : null}
          </div>
        </div>
      </section>

      <CtaSection
        title={`Planning a ${service.name.toLowerCase()} project in South Carolina?`}
        text="Request an estimate and we will discuss structural approach, scope options, and scheduling."
      />
    </>
  );
}