/**
 * SINGLE SOURCE OF TRUTH for business profile and rating data
 * Used by LocalBusinessSchema.jsx - the ONLY place where AggregateRating schema is emitted
 */
export const BUSINESS_PROFILE = {
  businessName: 'Remodeling Contractors SC',
  siteUrl: 'https://remodelingcontractorsc.com',
  phone: '+1-864-724-4600',
  email: 'estimates@remodelingcontractorsc.com',
  yearsExperienceLabel: '35+ Years Experience',
  credentials: {
    googleRatingLabel: '5.0 Google Rating',
    bbbLabel: 'BBB A+',
    licenseLabel: 'SC Licensed',
  },
  address: {
    streetAddress: '30 Patewood Drive',
    addressLocality: 'Greenville',
    addressRegion: 'SC',
    postalCode: '29615',
    addressCountry: 'US',
  },
  // ONLY AggregateRating data for entire site - used in LocalBusinessSchema.jsx
  aggregateRating: {
    ratingValue: '5.0',
    reviewCount: '12',
    bestRating: '5',
    worstRating: '1',
  },
  serviceArea: [
    'Greenville SC',
    'Simpsonville SC',
    'Mauldin SC',
    'Fountain Inn SC',
    'Greer SC',
    'Taylors SC',
    'Travelers Rest SC',
    'Piedmont SC',
    'Easley SC',
  ],
};
