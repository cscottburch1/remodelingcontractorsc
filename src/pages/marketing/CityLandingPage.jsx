import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';
import CtaSection from '../../components/CtaSection';
import PageFaq from '../../components/PageFaq';
import PageHero from '../../components/PageHero';
import ProjectCard from '../../components/ProjectCard';
import Seo from '../../components/Seo';
import { allMarketingPaths } from '../../data/marketingPages';
import { projects } from '../../data/projects';
import { createBreadcrumbSchema, createFaqSchema } from '../../lib/schema';

export default function CityLandingPage({ page }) {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Locations', path: '/locations' },
    { name: `${page.city}, SC`, path: page.path }
  ];
  const relatedProjects = projects.filter((project) => page.projectSlugs.includes(project.slug));
  const schema = [createBreadcrumbSchema(breadcrumbItems), createFaqSchema(page.faqs)];

  return (
    <>
      <Seo title={page.metaTitle} description={page.metaDescription} path={page.path} schema={schema} />

      <section className="section-pad">
        <div className="container page-shell">
          <Breadcrumbs items={breadcrumbItems} />
          <PageHero
            eyebrow="City Page"
            title={page.title}
            text={page.intro}
            highlights={['Local market knowledge', 'Permitting-aware planning', 'Project-led construction scope']}
            actions={[
              { label: 'Request Estimate', to: '/contact', variant: 'primary' },
              { label: 'View Services', to: '/services', variant: 'soft' }
            ]}
          />

          <div className="page-content-grid">
            <article className="card prose-card page-content-card">
              <h2>{page.city} market overview</h2>
              <p>{page.marketNote}</p>

              <h3>Relevant services in {page.city}</h3>
              <div className="chip-list">
                {page.servicePaths.map((path) => (
                  <Link key={path} to={path} className="chip-item">{allMarketingPaths.get(path)}</Link>
                ))}
              </div>
            </article>

            <article className="card prose-card page-content-card">
              <h2>Local service pages</h2>
              <p>Explore city-and-service pages for more specific intent, content, and internal linking.</p>
              <div className="chip-list">
                {page.localServicePaths.length ? page.localServicePaths.map((path) => (
                  <Link key={path} to={path} className="chip-item">{allMarketingPaths.get(path)}</Link>
                )) : <p>No city-specific child pages published yet for this market.</p>}
              </div>

              <h3>Need to move fast?</h3>
              <p>
                <Link to="/contact" className="text-link">Request an estimate</Link> and we will help you narrow the right service path for your property.
              </p>
            </article>
          </div>

          {relatedProjects.length ? (
            <section className="page-section">
              <div className="section-intro compact-section-intro">
                <h2>Nearby project examples</h2>
                <p>Published projects that connect to the same local market and service priorities.</p>
              </div>
              <div className="grid-3">
                {relatedProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </section>
          ) : null}

          <PageFaq items={page.faqs} text={`Common ${page.city} planning questions around detached space, family additions, and permitting fit.`} />
        </div>
      </section>

      <CtaSection title={page.ctaTitle} text={page.ctaText} />
    </>
  );
}