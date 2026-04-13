import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { coreServices } from '../data/coreServices';
import { heroImageSet } from '../data/responsiveImages';
import Breadcrumbs from '../components/Breadcrumbs';
import CtaSection from '../components/CtaSection';
import SplitHero from '../components/SplitHero';
import { createBreadcrumbSchema, createFaqSchema } from '../lib/schema';

export default function ServicesPage() {
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Services' }
  ];

  const serviceFaqs = [
    {
      question: 'What services does Remodeling Contractors SC provide?',
      answer: 'We build garages, room additions, decks, porch enclosures, ADUs, and lake cabin enclosure projects across Upstate South Carolina.',
    },
    {
      question: 'Do you handle permits for service projects?',
      answer: 'Yes. We coordinate permitting and code-compliance planning based on your project scope and local jurisdiction requirements.',
    },
    {
      question: 'How do I get an estimate for my project?',
      answer: 'Use the contact form to request an estimate, and we will schedule a consultation to review scope, site conditions, and budget priorities.',
    },
  ];

  const schema = [
    createBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
    ]),
    createFaqSchema(serviceFaqs),
  ];

  return (
    <>
      <Helmet>
        <title>Services | Garages, Additions, Decks, Screened Porches, ADUs</title>
        <meta 
          name="description" 
          content="Professional construction services in Upstate SC: custom garages, home additions, decks, screened porches, and ADUs. Quality craftsmanship, local expertise, clear communication." 
        />
        <link rel="canonical" href="https://remodelingcontractorsc.com/services" />
        {schema.map((schemaItem, idx) => (
          <script key={idx} type="application/ld+json">{JSON.stringify(schemaItem)}</script>
        ))}
      </Helmet>

      <main>
        <SplitHero
          eyebrow="Our Services"
          title="Six Specialized Services for Upstate SC Homeowners"
          text="We specialize in custom garages, home additions, decks, screened porches, lake cabin screened porches, and ADUs. Each service is delivered with quality craftsmanship, local permitting expertise, and clear project communication."
          actions={[
            { label: 'Request Estimate', to: '/contact' },
            { label: 'View Service Areas', to: '/service-areas', variant: 'soft' },
          ]}
          highlights={[
            'Six focused build categories',
            'Permit-aware project planning',
            'Responsive Upstate South Carolina coverage',
          ]}
          image={{
            ...heroImageSet,
            srcSet: heroImageSet.webpSrcSet,
            alt: 'Accessory dwelling unit exterior representing the full remodeling service lineup in Upstate South Carolina',
            width: 960,
            height: 525,
          }}
        />

        {/* Services Grid */}
        <section className="section-pad">
          <div className="container">
            <Breadcrumbs items={breadcrumbs} />
            
            <div className="page-shell">
              <div className="section-intro">
                <h2>Professional Construction Services Across Upstate SC</h2>
                <p>
                  Choose the service that fits your needs. Each page includes detailed information, pricing calculators, process overview, and local service options for your area.
                </p>
              </div>

              <div className="grid-3">
                {coreServices.map(service => (
                  <Link key={service.slug} to={service.servicePath} className="card service-card">
                    <div>
                      <p className="eyebrow">{service.serviceType}</p>
                      <h3>{service.name}</h3>
                      <p>{service.summary}</p>
                      <div className="page-hero-highlights" style={{ marginTop: '1rem' }}>
                        {service.highlights.slice(0, 2).map((highlight, index) => (
                          <span key={index} style={{ fontSize: '0.75rem' }}>{highlight}</span>
                        ))}
                      </div>
                      <span className="text-link" style={{ marginTop: '1rem', display: 'inline-block' }}>
                        Learn more →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Why Choose Our Services */}
              <div className="page-content-card card">
                <h2>Why Homeowners Choose Our Services</h2>
                <ul className="feature-list">
                  <li>
                    <strong>Focused expertise:</strong> We specialize in six core services and deliver them exceptionally well rather than spreading too thin across dozens of project types.
                  </li>
                  <li>
                    <strong>Local permitting knowledge:</strong> We navigate Upstate SC building codes, setbacks, and jurisdiction-specific requirements daily.
                  </li>
                  <li>
                    <strong>Quality materials and craftsmanship:</strong> Every project uses materials suited to South Carolina's climate and is built with structural integrity in mind.
                  </li>
                  <li>
                    <strong>Transparent pricing:</strong> Use our online calculators for rough estimates, then receive detailed quotes with clear scope and timeline information.
                  </li>
                  <li>
                    <strong>Full project management:</strong> We coordinate permitting, engineering, inspections, and scheduling so you can focus on the outcome.
                  </li>
                </ul>
              </div>

              {/* Process Overview */}
              <div className="page-content-card card">
                <h2>Our Service Process</h2>
                <ol className="ordered-feature-list">
                  <li>
                    <strong>Consultation:</strong> We visit your property to understand your needs, assess site conditions, and discuss project options.
                  </li>
                  <li>
                    <strong>Design & Planning:</strong> We develop layout options, material selections, and structural plans tailored to your property.
                  </li>
                  <li>
                    <strong>Detailed Estimate:</strong> You receive a clear, itemized estimate with project scope, timeline, and payment structure.
                  </li>
                  <li>
                    <strong>Permitting:</strong> We coordinate all required permits, engineering reviews, and pre-construction approvals.
                  </li>
                  <li>
                    <strong>Construction:</strong> Our team executes the project with quality workmanship and regular communication.
                  </li>
                  <li>
                    <strong>Final Walkthrough:</strong> We complete inspections, address details, and walk you through your finished project.
                  </li>
                </ol>
              </div>

              {/* Service Areas CTA */}
              <CtaSection
                title="Ready to Get Started?"
                text="Request an estimate and we'll schedule a consultation to discuss your garage, addition, deck, screened porch, or ADU project."
                primaryAction={{ label: 'Request Estimate', to: '/contact' }}
                secondaryAction={{ label: 'View Service Areas', to: '/service-areas' }}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}