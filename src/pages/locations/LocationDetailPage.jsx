import { Navigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CtaSection from '../../components/CtaSection';
import Seo from '../../components/Seo';
import SectionIntro from '../../components/SectionIntro';
import { projects } from '../../data/projects';
import { services } from '../../data/services';
import { locations } from '../../data/locations';
import { createBreadcrumbSchema } from '../../lib/schema';
import createOrganizationSchema from '../../lib/organizationSchema';

export default function LocationDetailPage() {
  const { slug } = useParams();
  const location = locations.find((item) => item.slug === slug);

  if (!location) {
    return <Navigate to="/locations" replace />;
  }

  const localProjects = projects.filter((project) => project.locationSlug === location.slug);
  // Author schema for E-E-A-T
  const authorSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': 'Chris Scott',
    'jobTitle': 'Licensed General Contractor',
    'worksFor': {
      '@type': 'Organization',
      'name': 'Remodeling Contractors SC',
      'url': 'https://remodelingcontractorsc.com/'
    },
    'identifier': 'SC CLG 118679',
    'hasCredential': [
      {
        '@type': 'EducationalOccupationalCredential',
        'credentialCategory': 'Contractor License',
        'identifier': 'SC CLG 118679'
      }
    ],
    'sameAs': [
      'https://www.facebook.com/remodelingcontractorsc',
      'https://www.instagram.com/remodelingcontractorsc',
      'https://burchcontracting.com/'
    ]
  };

  // FAQ schema from location questions
  const faqSchema = location.questions && location.questions.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: location.questions.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a
      }
    }))
  } : null;

  // Breadcrumb schema
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Locations', path: '/locations' },
    { name: location.name, path: `/locations/${location.slug}` }
  ]);

  // Organization schema
  const orgSchema = createOrganizationSchema();

  // dateModified schema
  const dateModified = location.lastUpdated || '2026-04-13';

  const schema = [
    breadcrumbSchema,
    orgSchema,
    authorSchema,
    ...(faqSchema ? [faqSchema] : []),
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': `${location.name} Service Area`,
      'url': `https://remodelingcontractorsc.com/locations/${location.slug}`,
      'dateModified': dateModified
    }
  ];

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
              {location.localContent}
            </p>

            {/* Citable local statistics */}
            {location.stats && location.stats.length > 0 && (
              <section>
                <h2>Local Project Statistics</h2>
                <ul>
                  {location.stats.map((stat, idx) => (
                    <li key={idx}><strong>{stat.label}:</strong> {stat.value} <em>({stat.source})</em></li>
                  ))}
                </ul>
              </section>
            )}

            {/* Question-based H2s */}
            {location.questions && location.questions.length > 0 && (
              <section>
                <h2>Frequently Asked Questions for {location.name}</h2>
                {location.questions.map((qa, idx) => (
                  <div key={idx} className="faq-block">
                    <h3>{qa.q}</h3>
                    <p>{qa.a}</p>
                  </div>
                ))}
              </section>
            )}

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

            <div className="last-updated">
              <small>Last updated: {location.lastUpdated || '2026-04-13'}</small>
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