import UniversalPageTemplate from '@/components/UniversalPageTemplate';

export const metadata = {
  title: 'About Burch Contracting | SC Licensed General Contractor Since 1989',
  description: 'Burch Contracting is a South Carolina licensed general contractor serving Upstate SC since 1989. 35+ years of experience, BBB A+ rated, SC License #RBS-46298.',
  alternates: {
    canonical: 'https://remodelingcontractorsc.com/about',
  },
  openGraph: {
    title: 'About Burch Contracting | SC Licensed General Contractor',
    description: 'SC licensed general contractor serving Upstate South Carolina since 1989. BBB A+ rated with 35+ years of residential remodeling experience.',
    url: 'https://remodelingcontractorsc.com/about',
  },
};

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Burch Contracting | Remodeling Contractors SC',
  url: 'https://remodelingcontractorsc.com/about',
  description: 'South Carolina licensed general contractor with 35+ years serving Upstate SC homeowners. Specializing in garages, room additions, ADUs, decks, screened porches, kitchen, bathroom, and basement remodeling.',
  about: {
    '@type': 'HomeAndConstructionBusiness',
    name: 'Burch Contracting / Remodeling Contractors SC',
    foundingDate: '1989',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '30 Patewood Drive',
      addressLocality: 'Greenville',
      addressRegion: 'SC',
      postalCode: '29615',
      addressCountry: 'US',
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'license',
        name: 'South Carolina Residential Builder License',
        recognizedBy: {
          '@type': 'Organization',
          name: 'South Carolina Contractor\'s Licensing Board',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'membership',
        name: 'BBB Accredited Business, A+ Rating',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Better Business Bureau',
        },
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <UniversalPageTemplate
      title="About Burch Contracting"
      subtitle="SC licensed general contractor serving Upstate South Carolina since 1989 — 35+ years of proven craftsmanship."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />

      <div className="space-y-10 text-slate-700">

        {/* Credentials bar */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 not-prose">
          {[
            { label: '35+ Years', sub: 'In Business Since 1989' },
            { label: 'BBB A+', sub: 'Accredited Business' },
            { label: 'SC Licensed', sub: 'General Contractor' },
            { label: '5.0 ★', sub: '12 Verified Reviews' },
          ].map((cred) => (
            <div key={cred.label} className="rounded-xl bg-emerald-50 border border-emerald-100 p-4 text-center">
              <p className="text-2xl font-bold text-emerald-700">{cred.label}</p>
              <p className="text-xs text-slate-600 mt-1">{cred.sub}</p>
            </div>
          ))}
        </div>

        {/* Who we are */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Who We Are</h2>
          <p>
            Burch Contracting is a South Carolina licensed general contractor serving homeowners across
            Upstate South Carolina since 1989. Founded by Scott Burch, the company has completed
            hundreds of residential remodeling projects in Greenville, Laurens, and Greenwood counties
            over 35+ years — building a track record based on honest estimates, code-compliant
            construction, and lasting quality.
          </p>
          <p className="mt-3">
            We specialize in custom garages, room additions, accessory dwelling units (ADUs), decks,
            screened porches, kitchen remodeling, bathroom remodeling, and basement finishing. Every
            project is built to Upstate SC building codes with proper permitting, inspections, and
            materials specified for our humid climate and local soil conditions.
          </p>
        </div>

        {/* Credentials + Licensing */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Credentials &amp; Licensing</h2>
          <ul className="space-y-2 list-disc pl-5">
            <li>
              <strong>SC Residential Builder License</strong> — SC Contractor&apos;s Licensing Board,
              State of South Carolina. All structural, electrical coordination, plumbing, and HVAC work
              is performed under proper licensure and permit.
            </li>
            <li>
              <strong>BBB A+ Accredited Business</strong> — Better Business Bureau of Upstate South
              Carolina. We have maintained an A+ rating through consistent delivery and transparent
              business practices.
            </li>
            <li>
              <strong>35+ Years Upstate SC Experience</strong> — Founded 1989. Deep familiarity with
              Greenville County, Laurens County, and Greenwood County permitting processes, soil
              conditions, and local building codes.
            </li>
            <li>
              <strong>Fully Insured</strong> — General liability and workers&apos; compensation coverage
              on all active project sites.
            </li>
          </ul>
        </div>

        {/* Service area */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Service Area</h2>
          <p>
            We serve homeowners across Upstate South Carolina including{' '}
            <strong>Mauldin, Simpsonville, Fountain Inn, Gray Court, Laurens, Woodruff, Clinton,
            Greenwood, Greer, Taylors, Duncan, Inman,</strong> and surrounding areas in Greenville,
            Laurens, and Greenwood counties. We also serve lake communities along{' '}
            <strong>Lake Greenwood</strong> and <strong>Lake Hartwell</strong> with screened porches,
            decks, and outdoor living projects designed for lakefront conditions.
          </p>
        </div>

        {/* Our approach */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Our Approach</h2>
          <p>
            Every project starts with a thorough site evaluation and a detailed, line-item written
            estimate. We don&apos;t offer ballpark guesses — we scope the project completely before
            signing anything so you know exactly what you&apos;re getting and what it costs. Change
            orders are the exception, not the rule.
          </p>
          <p className="mt-3">
            We pull all required permits, schedule inspections at each phase, and build to code from
            the foundation up. Permitted work matters at resale — lenders and buyers require documented
            proof of permit and inspection sign-off for any structural improvement. Our clients know
            their projects will pass any future home inspection with no surprises.
          </p>
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-slate-900 text-white p-8 not-prose">
          <h2 className="text-2xl font-bold mb-2">Ready to Start Your Project?</h2>
          <p className="text-slate-300 mb-5">
            Get a free, no-pressure estimate from a licensed Upstate SC contractor with 35+ years of
            experience. We respond within one business day.
          </p>
          <a
            href="/contact"
            className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Request a Free Estimate
          </a>
        </div>

      </div>
    </UniversalPageTemplate>
  );
}

