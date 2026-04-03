import { Link } from 'react-router-dom';
import CtaSection from '../components/CtaSection';
import HomeServiceCard from '../components/HomeServiceCard';
import Seo from '../components/Seo';
import SectionIntro from '../components/SectionIntro';
import { homeServices } from '../data/homeServices';
import { priorityServicePages, supportingServicePages } from '../data/marketingPages';
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
            title="Priority service pages built for local search, easy scanning, and stronger next-step navigation"
            text="Start with the four highest-priority themes, then move into supporting child pages and broader project categories as needed."
          />
          <div className="home-services-grid">
            {priorityServicePages.map((service) => (
              <HomeServiceCard
                key={service.slug}
                service={{
                  title: service.name,
                  slug: service.slug,
                  path: service.path,
                  description: service.intro,
                  image: service.image,
                  imageAlt: service.imageAlt
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <SectionIntro
            eyebrow="Supporting Service Pages"
            title="Supporting child pages for focused service intent"
            text="These pages support more specific search intent around detached ADUs, attached family suites, master suite variations, and garage apartment additions."
          />
          <div className="grid-3">
            {supportingServicePages.map((subpage) => (
              <article key={subpage.slug} className="card prose-card">
                <p className="eyebrow">Supporting Page</p>
                <h3>{subpage.name}</h3>
                <p>{subpage.intro}</p>
                <Link to={subpage.path} className="text-link">View Page</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <SectionIntro
            eyebrow="Additional Build Categories"
            title="Broader core services still available across the site"
            text="These category pages support related project types, examples, and internal links across the rest of the site structure."
          />
          <div className="chip-list">
            {homeServices.map((service) => (
              <Link key={service.slug} to={`/services/${service.slug}`} className="chip-item">{service.title}</Link>
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