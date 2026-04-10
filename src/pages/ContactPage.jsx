import CtaSection from '../components/CtaSection';
import EstimateForm from '../components/EstimateForm';
import Seo from '../components/Seo';
import SectionIntro from '../components/SectionIntro';
import { createBreadcrumbSchema } from '../lib/schema';

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact | Request Estimate | Remodeling Contractors SC"
        description="Request an estimate for garages, room additions, decks, aluminum screened enclosures, and ADUs in South Carolina."
        path="/contact"
        schema={createBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' }
        ])}
      />
      <section className="section-pad">
        <div className="container page-wrap">
          <SectionIntro
            eyebrow="Contact"
            title="Request your project estimate"
            text="Tell us what you are planning and our team will follow up with next-step recommendations."
          />
          <div className="card form-card">
            <EstimateForm />
          </div>
        </div>
      </section>
      <CtaSection
        title="Prefer to call first?"
        text="Call (864) 724-4600 to discuss project fit, expected timeline, and estimate planning."
      />
    </>
  );
}