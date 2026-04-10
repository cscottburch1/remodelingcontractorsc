import { Link, Navigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import CtaSection from '../../components/CtaSection';
import Breadcrumbs from '../../components/Breadcrumbs';
import { projects } from '../../data/projects';
import { coreServices } from '../../data/coreServices';
import { serviceAreas } from '../../data/serviceAreas';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const location = serviceAreas.find((item) => item.slug === project.locationSlug);

  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Projects', to: '/projects' },
    { label: project.title }
  ];

  return (
    <>
      <Helmet>
        <title>{project.title} | Remodeling Contractors SC</title>
        <meta 
          name="description" 
          content={`${project.location} project spotlight: ${project.description}`} 
        />
        <link rel="canonical" href={`https://remodelingcontractorsc.com/projects/${project.slug}`} />
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
                <p className="eyebrow">{project.location}</p>
                <h1 className="hero-title">
                  {project.title}
                </h1>
                <p className="hero-lead">
                  {project.description}
                </p>
                <div className="action-row">
                  <Link to="/contact" className="btn btn-primary">Request Estimate</Link>
                  <Link to="/projects" className="btn btn-soft">View All Projects</Link>
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
              {/* Project Image */}
              <div className="page-content-card">
                <img 
                  src={project.image} 
                  alt={project.imageAlt} 
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                  loading="eager" 
                />
              </div>

              {/* Project Details */}
              <div className="page-content-card card">
                <h2>Project Overview</h2>
                <p>{project.description}</p>
                <p style={{ marginTop: '1rem' }}>
                  <strong>Location:</strong> {project.location}
                </p>
              </div>

              {/* Project Focus */}
              <div className="page-content-card card">
                <h2>Project Focus</h2>
                <p>
                  This project demonstrates our approach to planning, structural execution, and finish details for 
                  specialized home expansion and outdoor living builds in Upstate South Carolina.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  Every project is tailored to the specific needs of the homeowner, site conditions, and local 
                  architectural character. We prioritize quality craftsmanship, clear communication, and long-term value.
                </p>
              </div>

              {/* Related Location Link */}
              {location && (
                <div className="page-content-card card">
                  <h2>Learn More About {location.name}</h2>
                  <p>
                    We serve homeowners throughout {location.name} and {location.county}. 
                    View our full range of services available in this area.
                  </p>
                  <Link to={location.servicePath} className="btn btn-soft" style={{ marginTop: '1rem' }}>
                    View {location.name} Services →
                  </Link>
                </div>
              )}

              {/* CTA */}
              <CtaSection
                title="Want Similar Results at Your Property?"
                text="Request an estimate and we'll outline options matched to your lot, scope, and timeline."
                primaryAction={{ label: 'Request Estimate', to: '/contact' }}
                secondaryAction={{ label: 'View More Projects', to: '/projects' }}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}