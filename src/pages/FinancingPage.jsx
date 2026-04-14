import CtaSection from '../components/CtaSection';
import Seo from '../components/Seo';
import createOrganizationSchema from '../lib/organizationSchema';
import SectionIntro from '../components/SectionIntro';
import { createBreadcrumbSchema, createFaqSchema } from '../lib/schema';

export default function FinancingPage() {
  const financingFaqs = [
    {
      question: 'Can I finance garage, addition, deck, and ADU projects?',
      answer: 'Many homeowners use financing for garage, addition, deck, porch enclosure, and ADU projects, depending on lender terms and eligibility.',
    },
    {
      question: 'Does Remodeling Contractors SC provide direct financing?',
      answer: 'We discuss financing-friendly scope options during planning, while final loan decisions and terms come from third-party lenders.',
    },
    {
      question: 'What should I prepare before requesting financing?',
      answer: 'Prepare project priorities, rough budget range, and timeline expectations so we can help structure phased scope options for your estimate.',
    },
  ];

  return (
    <>
      <Seo
        title="Financing | Remodeling Contractors SC"
        description="Financing guidance for garage builds, room additions, decks, aluminum screened enclosures, and ADU projects."
        path="/financing"
        schema={[
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Financing', path: '/financing' }
          ]),
          createFaqSchema(financingFaqs),
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
            eyebrow="Financing"
            title="Flexible budget planning for space-creation projects"
            text="Use financing to phase structural upgrades, outdoor living improvements, or detached structure builds without delaying your timeline."
          />

          <article className="card prose-card">
            <h3>Typical projects financed</h3>
            <ul className="link-list">
              <li>Detached and attached garage construction</li>
              <li>Room additions and second-story expansions</li>
              <li>Covered and composite deck builds</li>
              <li>Aluminum screened enclosures and screen rooms</li>
              <li>Detached ADUs and detached guest-house style structures</li>
            </ul>

            <h3>How we help</h3>
            <p>
              During consultation we can discuss scope tiers so you can align project priorities, timing, and budget
              strategy before finalizing construction planning.
            </p>

            <p>
              Financing availability and terms vary by provider. Final decisions are made by third-party lending
              partners and subject to eligibility.
            </p>
          </article>
        </div>
      </section>

      <CtaSection
        title="Need financing-friendly scope options?"
        text="Request an estimate and we will help you prioritize the highest-impact build phases first."
      />
    </>
  );
}