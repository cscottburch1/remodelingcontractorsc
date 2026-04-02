import { Link } from 'react-router-dom';
import CtaSection from '../components/CtaSection';
import Seo from '../components/Seo';
import SectionIntro from '../components/SectionIntro';
import ServiceCard from '../components/ServiceCard';
import { services, supportServicePages } from '../data/services';
import { createBreadcrumbSchema } from '../lib/schema';

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Services | Remodeling Contractors SC"
        description="Garage builders, room additions, deck builders, aluminum screened enclosures, and granny pods across South Carolina."
        path="/services"
        schema={createBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' }
        ])}
      />
      <section className="section-pad">
        <div className="container">
          <SectionIntro
            eyebrow="Services"
            title="Specialist construction services for South Carolina homeowners"
            text="Our core services are built around space, structure, and lifestyle improvements that add measurable value."
          />
          <div className="grid-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <SectionIntro
            eyebrow="Supporting Service Pages"
            title="Detailed pages for common project variations"
            text="Explore focused sub-services to match your project type and property goals."
          />
          <div className="grid-3">
            {supportServicePages.map((subpage) => (
              <article key={`${subpage.parentSlug}-${subpage.slug}`} className="card prose-card">
                <p className="eyebrow">{subpage.parentName}</p>
                <h3>{subpage.name}</h3>
                <p>{subpage.summary}</p>
                <Link to={`/services/${subpage.parentSlug}/${subpage.slug}`} className="text-link">View Page</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Not sure which service path fits your home?"
        text="Request an estimate and we will map practical options for your lot, layout, and budget range."
      />
    </>
  );
}