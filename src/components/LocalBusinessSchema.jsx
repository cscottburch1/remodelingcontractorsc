import { BUSINESS_PROFILE } from '@/data/businessProfile';

export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS_PROFILE.businessName,
    url: BUSINESS_PROFILE.siteUrl,
    telephone: BUSINESS_PROFILE.phone,
    email: BUSINESS_PROFILE.email,
    address: {
      '@type': 'PostalAddress',
      ...BUSINESS_PROFILE.address,
    },
    areaServed: BUSINESS_PROFILE.serviceArea,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '12',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
