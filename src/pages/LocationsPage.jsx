import { Link } from 'react-router-dom';
import CtaSection from '../components/CtaSection';
import Seo from '../components/Seo';
import SectionIntro from '../components/SectionIntro';
import { locations } from '../data/locations';
import { createBreadcrumbSchema } from '../lib/schema';

export default function LocationsPage() {
  return (
    <>
      <Seo
        title="Locations | Remodeling Contractors SC"
        description="Local garage, addition, deck, screened enclosure, and granny pod builders in major South Carolina Upstate markets."
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
            title="Serving major South Carolina Upstate markets"
            text="Choose your city page for local service details, project types, and estimate options."
          />
          <div className="grid-3">
            {locations.map((location) => (
              <article key={location.slug} className="card city-card">
                <h3>{location.name}</h3>
                <p>{location.summary}</p>
                <Link to={`/locations/${location.slug}`} className="text-link">View {location.name} Page</Link>
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