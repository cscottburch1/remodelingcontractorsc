import CtaSection from '../components/CtaSection';
import Seo from '../components/Seo';
import createOrganizationSchema from '../lib/organizationSchema';
import SectionIntro from '../components/SectionIntro';
import { createBreadcrumbSchema } from '../lib/schema';

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About | Remodeling Contractors SC"
        description="Learn how Remodeling Contractors SC plans and builds garages, additions, decks, screened enclosures, and ADUs in South Carolina."
        path="/about"
        schema={[
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' }
          ]),
          createOrganizationSchema(),
          {
            '@type': 'WebPage',
            'datePublished': '2026-04-13',
            'dateModified': '2026-04-13'
          }
        ]}
      />
      <section className="section-pad">
        <div className="container page-wrap">
          <SectionIntro
            eyebrow="About"
            title="A focused South Carolina contractor for high-value space creation projects"
            text="We are not a generic remodel-everything company. Our team specializes in structural projects that add practical square footage and long-term curb appeal."
          />
          <div className="card prose-card">
            <p>
              Remodeling Contractors SC was built around five categories homeowners request most when they need more
              usable space: garages, room additions, decks, aluminum screened enclosures, and ADU structures.
            </p>
            <p>
              Our process emphasizes planning, structural expertise, and construction discipline. From design direction
              to permit awareness and field execution, we prioritize clear communication and quality outcomes.
            </p>
          </div>
        </div>
      </section>
      <CtaSection
        title="Tell us what you need to build next"
        text="We will help you choose the right scope for your home, lot, and long-term goals."
      />
    </>
  );
}