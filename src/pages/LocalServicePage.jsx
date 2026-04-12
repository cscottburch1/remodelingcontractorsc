import { Link, useLocation, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getLocalServicePageBySlug, generateLocalServiceFAQs } from '../data/localServicePages';
import { getServiceBySlug } from '../data/coreServices';
import Breadcrumbs from '../components/Breadcrumbs';
import PageFaq from '../components/PageFaq';
import CtaSection from '../components/CtaSection';
import SplitHero from '../components/SplitHero';
import GarageCalculator from '../components/calculators/GarageCalculator';
import AdditionCalculator from '../components/calculators/AdditionCalculator';
import ScreenedPorchCalculator from '../components/calculators/ScreenedPorchCalculator';
import DeckCalculator from '../components/calculators/DeckCalculator';
import AduCalculator from '../components/calculators/AduCalculator';

export default function LocalServicePage() {
  const location = useLocation();
  const localSlug = location.pathname.replace('/', '');
  const page = getLocalServicePageBySlug(localSlug);

  if (!page) {
    return <Navigate to="/service-areas" replace />;
  }

  const service = getServiceBySlug(page.serviceSlug);
  const faqs = generateLocalServiceFAQs(page.serviceName, page.townName);

  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Service Areas', to: '/service-areas' },
    { label: page.townName, to: page.townPagePath },
    { label: page.serviceName }
  ];

  // Map service slug to calculator component
  const CalculatorComponent = {
    'garages': GarageCalculator,
    'additions': AdditionCalculator,
    'screened-porches': ScreenedPorchCalculator,
    'decks': DeckCalculator,
    'adus': AduCalculator
  }[page.serviceSlug];

  return (
    <>
      <Helmet>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <link rel="canonical" href={`https://remodelingcontractorsc.com${page.path}`} />
      </Helmet>

      <main>
        <SplitHero
          eyebrow={`${service.serviceType} in ${page.county}`}
          title={page.h1}
          text={page.intro}
          actions={[
            { label: 'Request Estimate', to: '/contact' },
            { label: `Learn About ${page.serviceName}`, to: page.parentServicePath, variant: 'soft' },
          ]}
          highlights={service.highlights?.slice(0, 3) || []}
          image={{
            defaultSrc: service.image,
            srcSet: service.imageSrcSet,
            sizes: service.imageSizes || '(max-width: 759px) 100vw, 85vw',
            alt: `${service.imageAlt} for ${page.townName} homeowners`,
            width: 900,
            height: 600,
          }}
        />

        {/* Main Content */}
        <section className="section-pad">
          <div className="container">
            <Breadcrumbs items={breadcrumbs} />
            
            <div className="page-shell">
              {/* Service Overview */}
              <div className="page-content-card card">
                <h2>{page.serviceName} Services in {page.townName}</h2>
                <p>{page.serviceOverview}</p>
                <p style={{ marginTop: '1rem' }}>{page.whyLocal}</p>
              </div>

              {/* Common Local Projects */}
              {page.commonLocalProjects && page.commonLocalProjects.length > 0 && (
                <div className="page-content-card card">
                  <h2>Common {page.serviceName} Projects in {page.townName}</h2>
                  <ul className="feature-list">
                    {page.commonLocalProjects.map((project, index) => (
                      <li key={index}>{project}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Calculator */}
              {CalculatorComponent && (
                <div>
                  <h2>Estimate Your {page.serviceName} Cost in {page.townName}</h2>
                  <p style={{ marginBottom: '1.5rem' }}>
                    Use our calculator to get a rough estimate for your {page.serviceName.toLowerCase()} project in {page.townName}:
                  </p>
                  <CalculatorComponent />
                </div>
              )}

              {/* Why Choose Us */}
              <div className="page-content-card card">
                <h2>Why {page.townName} Homeowners Choose Us for {page.serviceName}</h2>
                <ul className="feature-list">
                  <li><strong>Local expertise:</strong> We understand {page.townName} permitting requirements, lot considerations, and neighborhood expectations.</li>
                  <li><strong>Quality craftsmanship:</strong> Every {page.serviceName.toLowerCase().replace(/s$/, '')} project is built with quality materials, structural integrity, and long-term performance in mind.</li>
                  <li><strong>Clear communication:</strong> From estimate through completion, you'll know what to expect, when to expect it, and who to contact with questions.</li>
                  <li><strong>Full project management:</strong> We coordinate permitting, inspections, and scheduling so you can focus on the outcome rather than the logistics.</li>
                </ul>
              </div>

              {/* Process Overview */}
              {service && service.process && (
                <div className="page-content-card card">
                  <h2>Our {page.serviceName} Process in {page.townName}</h2>
                  <ol className="ordered-feature-list">
                    {service.process.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>
              )}

              {/* FAQs */}
              {faqs.length > 0 && (
                <PageFaq items={faqs} />
              )}

              {/* Internal Links - Nearby Towns */}
              {page.nearbyTownPaths && page.nearbyTownPaths.length > 0 && (
                <div>
                  <h2>{page.serviceName} Services in Nearby Areas</h2>
                  <p style={{ marginBottom: '1rem' }}>
                    We also provide {page.serviceName.toLowerCase()} services in these nearby communities:
                  </p>
                  <div className="chip-list">
                    {page.nearbyTownPaths.map((nearbyTown, index) => (
                      <Link key={index} to={nearbyTown.path} className="chip-item">
                        {nearbyTown.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Link Back to Parent Service & Town */}
              <div className="page-content-grid">
                <Link to={page.parentServicePath} className="card page-content-card">
                  <h3>Learn More About {page.serviceName}</h3>
                  <p>Explore our complete {page.serviceName.toLowerCase()} services, process, and project gallery.</p>
                  <span className="text-link">View {page.serviceName} →</span>
                </Link>

                <Link to={page.townPagePath} className="card page-content-card">
                  <h3>All Services in {page.townName}</h3>
                  <p>See all construction services we provide to {page.townName} homeowners.</p>
                  <span className="text-link">View {page.townName} Services →</span>
                </Link>
              </div>

              {/* CTA */}
              <CtaSection
                title={`Ready to Start Your ${page.serviceName} Project in ${page.townName}?`}
                text="Request an estimate and we'll schedule a consultation to discuss your specific needs, evaluate your property, and provide clear pricing and timeline information."
                primaryAction={{ label: 'Request Estimate', to: '/contact' }}
                secondaryAction={{ label: 'Call (864) 724-4600', to: 'tel:+18647244600' }}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
