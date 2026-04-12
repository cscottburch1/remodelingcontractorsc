import { Link, Navigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import CtaSection from '../../components/CtaSection';
import Breadcrumbs from '../../components/Breadcrumbs';
import SplitHero from '../../components/SplitHero';
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
        <SplitHero
          eyebrow={project.location}
          title={project.title}
          text={project.description}
          actions={[
            { label: 'Request Estimate', to: '/contact' },
            { label: 'View All Projects', to: '/projects', variant: 'soft' },
          ]}
          highlights={location ? [location.county, 'Project spotlight', 'Real completed work'] : ['Project spotlight', 'Real completed work']}
          image={{
            defaultSrc: project.image,
            srcSet: project.imageSrcSet,
            sizes: project.imageSizes || '(max-width: 759px) 100vw, 85vw',
            alt: project.imageAlt,
            width: 900,
            height: 600,
            objectPosition: project.imagePosition,
          }}
        />

        {/* Main Content */}
        <section className="section-pad">
          <div className="container">
            <Breadcrumbs items={breadcrumbs} />
            
            <div className="page-shell">
              {/* Project Image */}
              <div className="page-content-card">
                <img 
                  src={project.image} 
                  srcSet={project.imageSrcSet}
                  sizes="(max-width: 759px) calc(100vw - 2rem), (max-width: 899px) calc(50vw - 1.7rem), 42vw"
                  alt={project.imageAlt} 
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                  loading="eager" 
                  decoding="async"
                  width="900"
                  height="600"
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