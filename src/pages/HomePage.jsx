import { Link } from 'react-router-dom';
import CtaSection from '../components/CtaSection';
import EstimateForm from '../components/EstimateForm';
import Faq from '../components/Faq';
import Hero from '../components/Hero';
import HomeServiceCard from '../components/HomeServiceCard';
import Seo from '../components/Seo';
import SectionIntro from '../components/SectionIntro';
import Testimonials from '../components/Testimonials';
import { faqs } from '../data/faqs';
import { testimonials } from '../data/testimonials';
import { coreServices } from '../data/coreServices';
import { serviceAreas } from '../data/serviceAreas';
import { heroImageSet } from '../data/responsiveImages';
import {
  createAggregateRatingSchema,
  createBreadcrumbSchema,
  createFaqSchema,
  createLocalBusinessSchema,
  createReviewSchema,
  createWebSiteSchema,
} from '../lib/schema';
import createOrganizationSchema from '../lib/organizationSchema';

export default function HomePage() {
  const localBusinessSchema = createLocalBusinessSchema();
  localBusinessSchema.aggregateRating = createAggregateRatingSchema({
    ratingValue: 5,
    reviewCount: testimonials.length,
  });
  localBusinessSchema.review = createReviewSchema(testimonials);

  const schema = [
    localBusinessSchema,
    createOrganizationSchema(),
    createWebSiteSchema(),
    createFaqSchema(faqs),
    createBreadcrumbSchema([{ name: 'Home', path: '/' }])
  ];

  // Map coreServices to homeServices format for HomeServiceCard
  const mappedServices = coreServices.map(service => ({
    title: service.name,
    slug: service.slug,
    path: service.servicePath,
    description: service.summary,
    image: service.image,
    imageAlt: service.imageAlt,
    imageSrcSet: service.imageSrcSet,
    imageSizes: service.imageSizes
  }));

  return (
    <>
      <Seo
        title="Remodeling Contractors SC | Garages, Additions & ADUs"
        description="Upstate SC contractor for garages, additions, decks, porch enclosures, and ADUs. Serving Mauldin, Simpsonville, Fountain Inn, and nearby areas."
        suppressDescription
        suppressCanonical
        preloads={[
          {
            href: heroImageSet.defaultSrc,
            as: 'image',
            imageSrcSet: heroImageSet.webpSrcSet,
            imageSizes: heroImageSet.sizes,
            fetchPriority: 'high'
          }
        ]}
        schema={schema}
      />
      <Hero />

      <section className="home-byline-wrap" aria-label="Author and editorial review">
        <div className="container">
          <p className="home-byline">
            Reviewed April 13, 2026 by Scott Burch, SC Licensed General Contractor. Content is maintained by the
            Remodeling Contractors SC editorial team for homeowners in Upstate South Carolina.
          </p>
        </div>
      </section>

      <section className="home-services section-pad">
        <div className="container services-showcase">
          <SectionIntro
            eyebrow="Core Services"
            title="Six specialized services for space creation and outdoor living"
            text="We focus on garages, additions, decks, porch enclosures, lake cabin projects, and ADUs — projects that expand your home's functionality while preserving neighborhood character and long-term value."
          />
          <div className="home-services-grid">
            {mappedServices.map((service, index) => (
              <HomeServiceCard
                key={service.slug}
                service={service}
                prioritizeImage={index === 0}
              />
            ))}
          </div>

          <div className="services-showcase-actions action-row">
            <Link to="/services" className="btn btn-soft">View All Services</Link>
            <Link to="/request-estimate" className="btn btn-primary">Request Estimate</Link>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container stat-strip">
          <article className="card stat-card">
            <strong>5</strong>
            <p>Specialized core services</p>
          </article>
          <article className="card stat-card">
            <strong>9</strong>
            <p>Primary Upstate SC communities</p>
          </article>
          <article className="card stat-card">
            <strong>100%</strong>
            <p>Focused on quality space creation</p>
          </article>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <SectionIntro
            eyebrow="Process"
            title="Clear process from consultation through final walkthrough"
            text="We keep planning disciplined so structural decisions, permit requirements, and finish quality stay on track."
          />
          <div className="grid-3">
            <article className="card prose-card">
              <h3>1. Consultation & Site Evaluation</h3>
              <p>We visit your property to understand your needs, assess site conditions, and discuss practical project options.</p>
            </article>
            <article className="card prose-card">
              <h3>2. Design & Planning</h3>
              <p>Layout development, material selections, and permit coordination happen before construction begins.</p>
            </article>
            <article className="card prose-card">
              <h3>3. Construction & Closeout</h3>
              <p>Quality execution, regular communication, and professional project handoff with all final inspections complete.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <SectionIntro
            eyebrow="Service Areas"
            title="Serving nine communities across Upstate SC"
            text="Focused local coverage in Greenville, Laurens, and Spartanburg counties for responsive service and regional expertise."
          />
          <div className="chip-list">
            {serviceAreas.map((area) => (
              <Link key={area.slug} to={area.servicePath} className="chip-item">{area.name}</Link>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Faq />

      <section className="section-pad">
        <div className="container page-wrap">
          <SectionIntro
            eyebrow="Request Estimate"
            title="Tell us what you want to build"
            text="Share project goals and we'll follow up with realistic options for your property."
          />
          <div className="card form-card">
            <EstimateForm />
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to expand your home's potential?"
        text="We'll help you plan the right garage, addition, deck, porch enclosure, or ADU for your property and budget."
      />
    </>
  );
}