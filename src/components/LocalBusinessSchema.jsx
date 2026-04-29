import { BUSINESS_PROFILE } from '@/data/businessProfile';

/**
 * CRITICAL: This is the ONLY source of AggregateRating schema on the entire site.
 * DO NOT add review/rating schema anywhere else to avoid Google Search Console
 * "Review has multiple aggregate ratings" errors.
 * 
 * All rating data comes from businessProfile.js
 */
export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS_PROFILE.businessName,
    url: BUSINESS_PROFILE.siteUrl,
    telephone: BUSINESS_PROFILE.phone,
    email: BUSINESS_PROFILE.email,
    priceRange: '$$-$$$',
    image: 'https://remodelingcontractorsc.com/burch-logo-320.webp',
    address: {
      '@type': 'PostalAddress',
      ...BUSINESS_PROFILE.address,
    },
    areaServed: BUSINESS_PROFILE.serviceArea,
    // ONLY AggregateRating on entire site
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
