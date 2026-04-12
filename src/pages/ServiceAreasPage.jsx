import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { serviceAreas } from '../data/serviceAreas';
import Breadcrumbs from '../components/Breadcrumbs';
import CtaSection from '../components/CtaSection';

export default function ServiceAreasPage() {
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Service Areas' }
  ];

  return (
    <>
      <Helmet>
        <title>Service Areas | Upstate SC Contractor</title>
        <meta 
          name="description" 
          content="We serve homeowners across Upstate South Carolina including Mauldin, Simpsonville, Fountain Inn, Gray Court, Laurens, Woodruff, Clinton, Ora, and Joanna. Professional garage, addition, deck, screened porch, and ADU services." 
        />
        <link rel="canonical" href="https://remodelingcontractorsc.com/service-areas" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-media">
            <div className="hero-media-overlay" />
          </div>
          <div className="hero-shell container">
            <div className="hero-grid">
              <div className="hero-copy">
                <p className="eyebrow">Where We Work</p>
                <h1 className="hero-title">
                  Service Areas Across Upstate SC
                </h1>
                <p className="hero-lead">
                  We proudly serve homeowners in nine communities across Greenville, Laurens, and Spartanburg counties with professional garage construction, home additions, decks, screened porches, and ADU services.
                </p>
                <div className="action-row">
                  <Link to="/contact" className="btn btn-primary">Request Estimate</Link>
                  <Link to="/services" className="btn btn-soft">View Services</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-bottom-fade" />
        </section>

        {/* Main Content */}
        <section className="section-pad">
          <div className="container">
            <Breadcrumbs items={breadcrumbs} />
            
            <div className="page-shell">
              <div className="section-intro">
                <h2>Communities We Serve</h2>
                <p>
                  Our work spans Mauldin, Simpsonville, Fountain Inn, Gray Court, Laurens, Woodruff, Clinton, Ora, and Joanna. Each community has unique neighborhood character, local permitting requirements, and property considerations. We bring that local knowledge to every project.
                </p>
              </div>

              {/* Service Area Cards */}
              <div className="grid-3">
                {serviceAreas.map(area => (
                  <Link key={area.slug} to={area.servicePath} className="card service-card">
                    <div>
                      <h3>{area.name}</h3>
                      <p className="eyebrow" style={{ fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                        {area.county}
                      </p>
                      <p>{area.intro}</p>
                      <span className="text-link">View {area.name} services →</span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Coverage Map Info */}
              <div className="page-content-card card">
                <h2>Our Service Coverage in Upstate South Carolina</h2>
                <p>
                  We focus on nine primary communities across Greenville, Laurens, and Spartanburg counties, with additional coverage in surrounding areas. This focused service region allows us to:
                </p>
                <ul className="feature-list">
                  <li><strong>Maintain local expertise:</strong> We understand permitting processes, building codes, and neighborhood expectations in each area we serve.</li>
                  <li><strong>Provide responsive service:</strong> Our proximity means faster site visits, better communication, and reliable project timelines.</li>
                  <li><strong>Build lasting relationships:</strong> We're not just passing through—we work in these communities consistently and stand behind our projects long-term.</li>
                  <li><strong>Respect your time:</strong> Focused service areas mean we can schedule efficiently and minimize delays caused by excessive travel or coordination issues.</li>
                </ul>
              </div>

              {/* Why Local Matters */}
              <div className="page-content-grid">
                <div className="card page-content-card">
                  <h3>Local Permitting Knowledge</h3>
                  <p>
                    Every jurisdiction has different requirements for setbacks, lot coverage, structural review, and HOA approval. We navigate these local rules daily and know how to keep your project moving through the approval process.
                  </p>
                </div>

                <div className="card page-content-card">
                  <h3>Neighborhood Compatibility</h3>
                  <p>
                    Garages, additions, and outdoor structures should complement your home and neighborhood. Our familiarity with local architectural styles helps us design projects that fit naturally rather than standing out as afterthoughts.
                  </p>
                </div>

                <div className="card page-content-card">
                  <h3>Site-Specific Planning</h3>
                  <p>
                    Upstate SC properties vary widely in lot size, slope, drainage, and access. We evaluate your specific site conditions and recommend solutions that work for your property's unique challenges.
                  </p>
                </div>

                <div className="card page-content-card">
                  <h3>Regional Material Performance</h3>
                  <p>
                    Materials that work well in South Carolina's humid, variable climate aren't the same as those suited to other regions. We select materials proven to perform in our local weather conditions.
                  </p>
                </div>
              </div>

              {/* Services Available Everywhere */}
              <div className="page-content-card card">
                <h2>Services Available in All Areas</h2>
                <p>
                  Regardless of which Upstate SC community you call home, we provide the same six core services with consistent quality and professionalism:
                </p>
                <div className="chip-list" style={{ marginTop: '1rem' }}>
                  <Link to="/garages" className="chip-item">Custom Garages</Link>
                  <Link to="/additions" className="chip-item">Home Additions</Link>
                  <Link to="/screened-porches" className="chip-item">Screened Porches</Link>
                  <Link to="/decks" className="chip-item">Decks</Link>
                  <Link to="/adus" className="chip-item">ADUs</Link>
                                  <Link to="/lake-cabin-screened-porches" className="chip-item">Lake Cabin Screened Porches</Link>
                </div>
              </div>

              {/* CTA */}
              <CtaSection
                title="Ready to Discuss Your Project?"
                text="Whether you're in Mauldin, Simpsonville, Fountain Inn, or any of our service areas, we're ready to help. Request an estimate and we'll schedule a consultation to discuss your needs."
                primaryAction={{ label: 'Request Estimate', to: '/contact' }}
                secondaryAction={{ label: 'View Our Services', to: '/services' }}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
