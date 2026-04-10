import { Link } from 'react-router-dom';
import CtaSection from '../components/CtaSection';
import Seo from '../components/Seo';
import SectionIntro from '../components/SectionIntro';
import { cityPages } from '../data/marketingPages';
import { createBreadcrumbSchema } from '../lib/schema';

export default function LocationsPage() {
  return (
    <>
      <Seo
        title="Locations | Remodeling Contractors SC"
        description="Local garage, addition, deck, screened enclosure, and ADU builders in major South Carolina Upstate markets."
        path="/locations"
        schema={createBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Locations', path: '/locations' }
        ])}
      />
      <section className="section-pad">
        <div className="container">
          <SectionIntro
            eyebrow="Locations"
            title="Local market pages for the Upstate cities we are prioritizing first"
            text="Choose a city page to view local intent content, related services, FAQs, and next-step estimate links."
          />
          <div className="grid-3">
            {cityPages.map((location) => (
              <article key={location.slug} className="card city-card">
                <h3>{location.city}</h3>
                <p>{location.intro}</p>
                <Link to={location.path} className="text-link">View {location.city} Page</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaSection
        title="Need service outside these listed cities?"
        text="Contact us to confirm coverage and scheduling options for your neighborhood."
      />
    </>
  );
}