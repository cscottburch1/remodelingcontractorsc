import './globals.css';
import StickyHeader from '@/components/StickyHeader';
import SiteFooter from '@/components/SiteFooter';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';

const SITE_URL = 'https://remodelingcontractorsc.com';
const OG_IMAGE = `${SITE_URL}/burch-logo-320.webp`;

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Remodeling Contractors SC | Upstate South Carolina',
    template: '%s | Remodeling Contractors SC',
  },
  description: 'SC licensed remodeling contractor serving Upstate South Carolina with 35+ years of experience. Custom garages, room additions, ADUs, decks, screened porches, kitchen and bathroom remodeling, and basement finishing.',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Remodeling Contractors SC',
    title: 'Remodeling Contractors SC | Upstate South Carolina',
    description: 'SC licensed remodeling contractor serving Upstate South Carolina with 35+ years of experience. Custom garages, room additions, ADUs, decks, and more.',
    images: [
      {
        url: OG_IMAGE,
        width: 320,
        height: 320,
        alt: 'Remodeling Contractors SC logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Remodeling Contractors SC | Upstate South Carolina',
    description: 'SC licensed remodeling contractor with 35+ years of experience. Garages, room additions, ADUs, decks, screened porches, and more.',
    images: [OG_IMAGE],
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Remodeling Contractors SC',
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/?s={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Remodeling Contractors SC',
  alternateName: 'Burch Contracting',
  url: SITE_URL,
  logo: `${SITE_URL}/burch-logo-320.webp`,
  telephone: '+1-864-724-4600',
  email: 'estimates@remodelingcontractorsc.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '30 Patewood Drive',
    addressLocality: 'Greenville',
    addressRegion: 'SC',
    postalCode: '29615',
    addressCountry: 'US',
  },
  sameAs: [
    'https://www.facebook.com/remodelingcontractorsc',
    'https://www.instagram.com/remodelingcontractorsc',
    'https://www.linkedin.com/company/remodelingcontractorsc',
    'https://github.com/cscottburch1/remodelingcontractorsc',
    'https://burchcontracting.com/',
  ],
  foundingDate: '1989',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: 10,
  },
  knowsAbout: [
    'garage construction',
    'room additions',
    'accessory dwelling units',
    'deck building',
    'screened porch enclosures',
    'kitchen remodeling',
    'bathroom remodeling',
    'basement finishing',
    'residential remodeling Upstate South Carolina',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <LocalBusinessSchema />
        <StickyHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
