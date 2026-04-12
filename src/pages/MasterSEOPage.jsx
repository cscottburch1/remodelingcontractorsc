import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { coreServices } from '../data/coreServices';
import { serviceAreas } from '../data/serviceAreas';
import { heroImageSet } from '../data/responsiveImages';
import Breadcrumbs from '../components/Breadcrumbs';
import PageFaq from '../components/PageFaq';
import CtaSection from '../components/CtaSection';

const masterFAQs = [
  {
    question: 'What services does Remodeling Contractors SC provide?',
    answer: 'We specialize in six core services across Upstate South Carolina: custom garage construction, home additions, screened porches, lake cabin screened porches, deck building, and accessory dwelling units (ADUs). Each service is delivered with quality craftsmanship, local permitting expertise, and neighborhood-appropriate design.'
  },
  {
    question: 'What areas of Upstate SC do you serve?',
    answer: 'We serve Mauldin, Simpsonville, Fountain Inn, Gray Court, Laurens, Woodruff, Clinton, Ora, and Joanna, along with surrounding communities in Greenville, Laurens, and Spartanburg counties.'
  },
  {
    question: 'How do I get started with a project?',
    answer: 'Request an estimate through our contact form or call us directly. We\'ll schedule a consultation to discuss your needs, evaluate your property, and outline project options with clear pricing and timelines.'
  },
  {
    question: 'Do you handle permits and inspections?',
    answer: 'Yes. We coordinate all required permits, engineering reviews, and inspections as part of our service. Our team is familiar with permitting requirements across Upstate SC jurisdictions.'
  },
  {
    question: 'Can you help with project financing?',
    answer: 'Yes. We work with homeowners to explore financing options and can connect you with trusted lenders who specialize in home improvement projects. Visit our financing page for more information.'
  },
  {
    question: 'How long do projects typically take?',
    answer: 'Project timelines vary by scope: garages typically take 4-8 weeks, additions 6-12 weeks, decks 2-4 weeks, screened porches 2-4 weeks, and ADUs 8-16 weeks. We provide detailed schedules during the planning phase.'
  }
];

export default function MasterSEOPage() {
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Upstate SC Services' }
  ];

  return (
    <>
      <Helmet>
        <title>Upstate SC Contractor | Garages, Additions, Decks, Screened Porches, ADUs</title>
        <meta 
          name="description" 
          content="Professional contractor serving Upstate South Carolina for custom garages, home additions, decks, screened porches, and ADUs. Quality construction in Simpsonville, Mauldin, Fountain Inn, and surrounding areas." 
        />
        <link rel="canonical" href="https://remodelingcontractorsc.com/upstate-sc-contractor" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-media">
            <picture>
              <source srcSet={heroImageSet.avifSrcSet} sizes={heroImageSet.sizes} type="image/avif" />
              <source srcSet={heroImageSet.webpSrcSet} sizes={heroImageSet.sizes} type="image/webp" />
              <img
                src={heroImageSet.defaultSrc}
                srcSet={heroImageSet.webpSrcSet}
                sizes={heroImageSet.sizes}
                alt="Upstate South Carolina exterior remodeling project"
                className="hero-bg-img"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width="960"
                height="525"
              />
            </picture>
            <div className="hero-media-overlay" />
          </div>
          <div className="hero-shell container">
            <div className="hero-grid">
              <div className="hero-copy">
                <p className="eyebrow">Upstate South Carolina Contractor</p>
                <h1 className="hero-title">
                  Garages, Additions, Decks, Screened Porches & ADUs
                </h1>
                <p className="hero-lead">
                  Professional contracting services across Upstate SC. We build custom garages, home additions, outdoor living spaces, and accessory dwelling units for homeowners who value quality craftsmanship, clear communication, and long-term value.
                </p>
                <div className="action-row">
                  <Link to="/contact" className="btn btn-primary">Request Estimate</Link>
                  <Link to="/projects" className="btn btn-soft">View Projects</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-bottom-fade" />
        </section>

        {/* Service Introduction */}
        <section className="section-pad">
          <div className="container">
            <Breadcrumbs items={breadcrumbs} />
            
            <div className="page-shell">
              <div className="section-intro">
                <h2>Complete Home Expansion Services Across Upstate South Carolina</h2>
                <p>
                  We serve homeowners in Simpsonville, Mauldin, Fountain Inn, Gray Court, Laurens, Woodruff, Clinton, Ora, and Joanna with garage construction, room additions, deck builds, screened porch installation, and ADU development.
                </p>
                <p>
                  Every project is built around your property's unique fit, local permitting requirements, and neighborhood character. From initial consultation through final walkthrough, we deliver clear communication, dependable timelines, and craftsmanship that adds lasting value to your home.
                </p>
              </div>

              {/* Five Core Services Grid */}
              <div>
                <h2>Our Six Core Services</h2>
                <p style={{ marginBottom: '1.5rem' }}>Choose the service that fits your needs, then explore local options for your area:</p>
                
                <div className="grid-3">
                  {coreServices.map(service => (
                    <Link key={service.slug} to={service.servicePath} className="card service-card">
                      <div>
                        <h3>{service.name}</h3>
                        <p>{service.summary}</p>
                        <span className="text-link">Learn more →</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Service Areas Grid */}
              <div>
                <h2>Areas We Serve in Upstate SC</h2>
                <p style={{ marginBottom: '1.5rem' }}>
                  We provide garage, addition, deck, screened porch, and ADU services across these communities:
                </p>
                
                <div className="related-link-grid">
                  {serviceAreas.map(area => (
                    <Link key={area.slug} to={area.servicePath} className="related-link-card">
                      <strong>{area.name}</strong>
                      <span>{area.county}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="page-content-card card">
                <h2>Why Upstate SC Homeowners Choose Us</h2>
                <p>
                  We've built our reputation on quality work, honest communication, and respect for your property and timeline. Here's what sets us apart:
                </p>
                <ul className="feature-list">
                  <li><strong>Local permitting expertise:</strong> We navigate Upstate SC building codes, setback rules, and jurisdiction-specific requirements so your project stays compliant and on schedule.</li>
                  <li><strong>Architectural compatibility:</strong> Every garage, addition, or outdoor structure is designed to complement your home's existing style and neighborhood character.</li>
                  <li><strong>Quality materials and craftsmanship:</strong> We use proven materials suited to South Carolina's climate and build with attention to structural integrity and long-term performance.</li>
                  <li><strong>Clear project communication:</strong> From estimate through completion, you'll know what to expect, when to expect it, and who to contact with questions.</li>
                  <li><strong>Full-service project management:</strong> We handle permitting, engineering coordination, inspections, and scheduling so you can focus on the outcome rather than the logistics.</li>
                </ul>
              </div>

              {/* Process Overview */}
              <div className="page-content-card card">
                <h2>Our Project Process</h2>
                <ol className="ordered-feature-list">
                  <li>
                    <strong>Consultation & Site Evaluation:</strong> We visit your property to understand your needs, assess lot fit, and discuss project options.
                  </li>
                  <li>
                    <strong>Design & Planning:</strong> We develop layout options, material selections, and structural plans tailored to your goals and budget.
                  </li>
                  <li>
                    <strong>Detailed Estimate:</strong> You receive a clear, itemized estimate with project scope, timeline, and payment structure.
                  </li>
                  <li>
                    <strong>Permitting & Engineering:</strong> We coordinate all required permits, engineering reviews, and pre-construction approvals.
                  </li>
                  <li>
                    <strong>Construction:</strong> Our team executes the project with quality workmanship, regular communication, and respect for your property.
                  </li>
                  <li>
                    <strong>Final Inspection & Walkthrough:</strong> We complete all inspections, address any final details, and walk you through your finished project.
                  </li>
                </ol>
              </div>

              {/* Featured Project Types */}
              <div>
                <h2>Common Project Types Across Upstate SC</h2>
                <div className="page-content-grid">
                  <div className="card page-content-card">
                    <h3>Custom Garage Construction</h3>
                    <ul className="feature-list">
                      <li>Two and three-car detached garages</li>
                      <li>Attached garages matching home design</li>
                      <li>Workshop garages with electrical packages</li>
                      <li>Garages with finished upper-level space</li>
                    </ul>
                  </div>

                  <div className="card page-content-card">
                    <h3>Home Additions</h3>
                    <ul className="feature-list">
                      <li>Primary suite additions with bath and closet</li>
                      <li>Family room and living space expansions</li>
                      <li>First-floor bedroom suites for aging in place</li>
                      <li>Bump-out additions for kitchens and baths</li>
                    </ul>
                  </div>

                  <div className="card page-content-card">
                    <h3>Decks & Screened Porches</h3>
                    <ul className="feature-list">
                      <li>Composite and pressure treated decks</li>
                      <li>Covered deck structures for shade</li>
                      <li>Aluminum screened porch enclosures</li>
                      <li>Multi-season outdoor living spaces</li>
                    </ul>
                  </div>

                  <div className="card page-content-card">
                    <h3>Accessory Dwelling Units</h3>
                    <ul className="feature-list">
                      <li>Detached backyard ADUs</li>
                      <li>Garage apartments with living space above</li>
                      <li>Attached in-law suites</li>
                      <li>Garage conversions to living space</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <PageFaq items={masterFAQs} />

              {/* Final CTA */}
              <CtaSection
                title="Ready to Start Your Project?"
                text="Request an estimate and we'll outline your options with clear pricing, realistic timelines, and practical recommendations for your property."
                primaryAction={{ label: 'Request Estimate', to: '/contact' }}
                secondaryAction={{ label: 'Learn About Financing', to: '/financing' }}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
