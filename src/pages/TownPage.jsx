import { Link, useLocation, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getServiceAreaBySlug, getNearbyTowns } from '../data/serviceAreas';
import { getLocalServicePagesByTown } from '../data/localServicePages';
import { heroImageSet, lakeCabinImageSet } from '../data/responsiveImages';
import Breadcrumbs from '../components/Breadcrumbs';
import CtaSection from '../components/CtaSection';
import SplitHero from '../components/SplitHero';

export default function TownPage() {
  const location = useLocation();
  const townSlug = location.pathname.replace('/', '');
  const town = getServiceAreaBySlug(townSlug);

  if (!town) {
    return <Navigate to="/service-areas" replace />;
  }

  const heroImage = town.slug === 'greenwood-sc' ? lakeCabinImageSet : heroImageSet;
  const heroAlt = town.slug === 'greenwood-sc'
    ? lakeCabinImageSet.alt
    : `${heroImageSet.alt} representing remodeling work for ${town.name} homeowners`;

  const localServicePages = getLocalServicePagesByTown(town.slug);
  const nearbyTowns = getNearbyTowns(town.slug);

  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Service Areas', to: '/service-areas' },
    { label: town.name }
  ];

  return (
    <>
      <Helmet>
        <title>{town.metaTitle}</title>
        <meta name="description" content={town.metaDescription} />
        <link rel="canonical" href={`https://remodelingcontractorsc.com${town.servicePath}`} />
      </Helmet>

      <main>
        <SplitHero
          eyebrow={town.county}
          title={`${town.name} Contractor`}
          text={town.intro}
          actions={[
            { label: 'Request Estimate', to: '/contact' },
            { label: 'View Projects', to: '/projects', variant: 'soft' },
          ]}
          highlights={town.commonProjects.slice(0, 3)}
          image={{
            ...heroImage,
            srcSet: heroImage.webpSrcSet,
            alt: heroAlt,
            width: 960,
            height: 600,
          }}
        />

        {/* Main Content */}
        <section className="section-pad">
          <div className="container">
            <Breadcrumbs items={breadcrumbs} />
            
            <div className="page-shell">
              {/* About the Town */}
              <div className="page-content-card card">
                <h2>About {town.name}</h2>
                <p>{town.about}</p>
                {town.population && (
                  <p style={{ marginTop: '1rem' }}>
                    <strong>Population:</strong> {town.population}
                  </p>
                )}
              </div>

              {/* Services Available in This Town */}
              <div>
                <h2>Our Services in {town.name}</h2>
                <p style={{ marginBottom: '1.5rem' }}>
                  We provide comprehensive construction services for {town.name} homeowners. Choose a service below for detailed local information and pricing:
                </p>
                
                <div className="grid-3">
                  {localServicePages.map(page => (
                    <Link key={page.slug} to={page.path} className="card service-card">
                      <div>
                        <h3>{page.serviceName}</h3>
                        <p>{page.serviceOverview}</p>
                        <span className="text-link">Learn more →</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Common Projects in This Town */}
              {town.commonProjects && town.commonProjects.length > 0 && (
                <div className="page-content-card card">
                  <h2>Common Projects in {town.name}</h2>
                  <p>
                    Homeowners in {town.name} frequently choose us for these types of construction projects:
                  </p>
                  <ul className="feature-list">
                    {town.commonProjects.map((project, index) => (
                      <li key={index}>{project}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Why Choose Us for Work in This Town */}
              <div className="page-content-card card">
                <h2>Why {town.name} Homeowners Choose Us</h2>
                <ul className="feature-list">
                  <li><strong>Local permitting expertise:</strong> We're familiar with {town.county} building codes, permitting processes, and inspection requirements.</li>
                  <li><strong>Neighborhood fit:</strong> We design garages, additions, and outdoor structures that complement {town.name}'s architectural character.</li>
                  <li><strong>Responsive service:</strong> Our proximity to {town.name} means faster site visits, reliable scheduling, and better project communication.</li>
                  <li><strong>Quality craftsmanship:</strong> Every project is built with attention to structural integrity, material performance, and long-term value.</li>
                  <li><strong>Clear communication:</strong> From estimate through completion, you'll know what to expect, when to expect it, and who to contact with questions.</li>
                </ul>
              </div>

              {/* Nearby Service Areas */}
              {nearbyTowns.length > 0 && (
                <div>
                  <h2>We Also Serve Communities Near {town.name}</h2>
                  <div className="related-link-grid">
                    {nearbyTowns.map(nearbyTown => (
                      <Link key={nearbyTown.slug} to={nearbyTown.servicePath} className="related-link-card">
                        <strong>{nearbyTown.name}</strong>
                        <span>{nearbyTown.county}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <CtaSection
                title={`Start Your ${town.name} Project Today`}
                text={`Request an estimate and we'll schedule a consultation to discuss your garage, addition, deck, screened porch, or ADU project in ${town.name}.`}
                primaryAction={{ label: 'Request Estimate', to: '/contact' }}
                secondaryAction={{ label: 'View All Service Areas', to: '/service-areas' }}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
