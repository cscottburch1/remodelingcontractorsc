import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';
import CtaSection from '../../components/CtaSection';
import PageFaq from '../../components/PageFaq';
import PageHero from '../../components/PageHero';
import ProjectCard from '../../components/ProjectCard';
import Seo from '../../components/Seo';
import { allMarketingPaths } from '../../data/marketingPages';
import { projects } from '../../data/projects';
import { createBreadcrumbSchema, createFaqSchema, createServiceSchema } from '../../lib/schema';

export default function MarketingServicePage({ page }) {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: page.name, path: page.path }
  ];
  const relatedProjects = projects.filter((project) => page.projectSlugs.includes(project.slug));
  const schema = [
    createServiceSchema({
      name: page.serviceType,
      description: page.metaDescription,
      url: page.path,
      areaServed: 'Upstate South Carolina'
    }),
    createBreadcrumbSchema(breadcrumbItems),
    createFaqSchema(page.faqs)
  ];

  return (
    <>
      <Seo
        title={page.metaTitle}
        description={page.metaDescription}
        path={page.path}
        image={page.image}
        schema={schema}
      />

      <section className="section-pad">
        <div className="container page-shell">
          <Breadcrumbs items={breadcrumbItems} />
          <PageHero
            eyebrow={page.eyebrow}
            title={page.title}
            text={page.intro}
            highlights={page.highlights}
            actions={page.actions}
          />

          <div className="page-content-grid">
            <article className="card prose-card page-content-card">
              <h2>What it is</h2>
              <p>{page.whatItIs}</p>

              <h3>Who it is for</h3>
              <ul className="feature-list">
                {page.whoItIsFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="card prose-card page-content-card">
              <h2>{page.optionsTitle}</h2>
              <div className="stacked-detail-list">
                {page.options.map((option) => (
                  <div key={option.title}>
                    <h3>{option.title}</h3>
                    <p>{option.body}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="page-content-grid page-content-grid-secondary">
            <article className="card prose-card page-content-card">
              <h2>Process</h2>
              <ol className="ordered-feature-list">
                {page.process.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </article>

            <article className="card prose-card page-content-card">
              <h2>Cost factors</h2>
              <ul className="feature-list">
                {page.costFactors.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h3>Local permitting and zoning note</h3>
              <p>{page.permittingNote}</p>
            </article>
          </div>

          <section className="page-section">
            <div className="section-intro compact-section-intro">
              <h2>Related pages</h2>
              <p>Use these supporting pages to move deeper into project type, local intent, and next-step planning.</p>
            </div>
            <div className="related-link-grid">
              {page.relatedPaths.map((path) => (
                <Link key={path} to={path} className="card related-link-card">
                  <strong>{allMarketingPaths.get(path) || path.replaceAll('/', '')}</strong>
                  <span>Open page</span>
                </Link>
              ))}
              <Link to="/contact" className="card related-link-card">
                <strong>Request Estimate</strong>
                <span>Start project planning</span>
              </Link>
            </div>
          </section>

          {relatedProjects.length ? (
            <section className="page-section">
              <div className="section-intro compact-section-intro">
                <h2>Related projects</h2>
                <p>Recent project examples that connect to this page’s planning and build approach.</p>
              </div>
              <div className="grid-3">
                {relatedProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </section>
          ) : null}

          <PageFaq items={page.faqs} text="Straight answers to the planning, permitting, and scope questions homeowners ask most often." />
        </div>
      </section>

      <CtaSection title={page.ctaTitle} text={page.ctaText} />
    </>
  );
}