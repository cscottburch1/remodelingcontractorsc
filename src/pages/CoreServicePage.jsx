import { Link, useLocation, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { coreServices, getServiceBySlug } from '../data/coreServices';
import { getLocalServicePagesByService } from '../data/localServicePages';
import Breadcrumbs from '../components/Breadcrumbs';
import PageFaq from '../components/PageFaq';
import CtaSection from '../components/CtaSection';
import SplitHero from '../components/SplitHero';
import GarageCalculator from '../components/calculators/GarageCalculator';
import AdditionCalculator from '../components/calculators/AdditionCalculator';
import ScreenedPorchCalculator from '../components/calculators/ScreenedPorchCalculator';
import DeckCalculator from '../components/calculators/DeckCalculator';
import AduCalculator from '../components/calculators/AduCalculator';

export default function CoreServicePage() {
  const location = useLocation();
  const serviceSlug = location.pathname.replace('/', '');
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const localServicePages = getLocalServicePagesByService(service.slug);

  // Generate FAQs based on service type
  const generateServiceFAQs = () => {
    const baseFAQs = [
      {
        question: `What does ${service.name.toLowerCase()} construction include?`,
        answer: service.whatItIs
      },
      {
        question: `Who should consider ${service.name.toLowerCase()}?`,
        answer: `${service.name} are ideal for: ${service.whoItsFor?.join('; ') || 'various homeowners'}.`
      },
      {
        question: `What factors affect ${service.name.toLowerCase()} cost?`,
        answer: `Cost factors include: ${service.costFactors?.join('; ') || 'size, materials, and complexity'}.`
      },
      {
        question: `What is your ${service.name.toLowerCase()} construction process?`,
        answer: `Our process includes: ${service.process?.join('; ') || 'planning, permitting, and construction'}.`
      }
    ];
    
    return baseFAQs;
  };

  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: service.name }
  ];

  // Map service slug to calculator component
  const CalculatorComponent = {
    'garages': GarageCalculator,
    'additions': AdditionCalculator,
    'screened-porches': ScreenedPorchCalculator,
    'decks': DeckCalculator,
    'adus': AduCalculator
  }[service.slug];

  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <link rel="canonical" href={`https://remodelingcontractorsc.com${service.servicePath}`} />
      </Helmet>

      <main>
        <SplitHero
          eyebrow={service.serviceType}
          title={`${service.name} in Upstate SC`}
          text={service.intro}
          actions={[
            { label: 'Request Estimate', to: '/contact' },
            { label: 'View Service Areas', to: '/service-areas', variant: 'soft' },
          ]}
          highlights={service.highlights || []}
          image={{
            defaultSrc: service.image,
            srcSet: service.imageSrcSet,
            sizes: service.imageSizes || '(max-width: 759px) 100vw, 85vw',
            alt: service.imageAlt,
            width: 900,
            height: 600,
          }}
        />

        {/* Main Content */}
        <section className="section-pad">
          <div className="container">
            <Breadcrumbs items={breadcrumbs} />
            
            <div className="page-shell">
              {/* What It Is */}
              <div className="page-content-card card">
                <h2>What Are {service.name}?</h2>
                <p>{service.whatItIs}</p>
              </div>

              {/* Who It's For */}
              {service.whoItsFor && service.whoItsFor.length > 0 && (
                <div className="page-content-card card">
                  <h2>Who Should Consider {service.name}?</h2>
                  <p>{service.name} are ideal for:</p>
                  <ul className="feature-list">
                    {service.whoItsFor.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Common Projects */}
              {service.commonProjects && service.commonProjects.length > 0 && (
                <div className="page-content-card card">
                  <h2>Common {service.name} Projects We Build</h2>
                  <ul className="feature-list">
                    {service.commonProjects.map((project, index) => (
                      <li key={index}>{project}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Calculator Section */}
              {CalculatorComponent && (
                <div>
                  <h2>Estimate Your {service.name} Project Cost</h2>
                  <p style={{ marginBottom: '1.5rem' }}>
                    Use our calculator to get a rough estimate for your {service.name.toLowerCase()} project in Upstate SC:
                  </p>
                  <CalculatorComponent />
                </div>
              )}

              {/* Process */}
              {service.process && service.process.length > 0 && (
                <div className="page-content-card card">
                  <h2>Our {service.name} Construction Process</h2>
                  <ol className="ordered-feature-list">
                    {service.process.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Cost Factors */}
              {service.costFactors && service.costFactors.length > 0 && (
                <div className="page-content-card card">
                  <h2>What Affects {service.name} Cost?</h2>
                  <p>Project costs vary based on several factors:</p>
                  <ul className="feature-list">
                    {service.costFactors.map((factor, index) => (
                      <li key={index}>{factor}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Local Context */}
              <div className="page-content-card card">
                <h2>{service.name} in Upstate South Carolina</h2>
                <p>{service.localContext}</p>
              </div>

              {/* Local Service Areas */}
              <div>
                <h2>{service.name} Services by Town</h2>
                <p style={{ marginBottom: '1.5rem' }}>
                  We provide {service.name.toLowerCase()} services across Upstate SC. Choose your area for local information and pricing:
                </p>
                <div className="related-link-grid">
                  {localServicePages.map(page => (
                    <Link key={page.slug} to={page.path} className="related-link-card">
                      <strong>{service.name} in {page.townName}</strong>
                      <span>{page.county}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <PageFaq items={generateServiceFAQs()} />

              {/* CTA */}
              <CtaSection
                title={`Ready to Start Your ${service.name} Project?`}
                text="Request an estimate and we'll outline your options with clear pricing, realistic timelines, and practical recommendations for your property."
                primaryAction={{ label: 'Request Estimate', to: '/contact' }}
                secondaryAction={{ label: 'View Projects', to: '/projects' }}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
