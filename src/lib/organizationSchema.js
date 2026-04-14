// Organization schema for GEO audit
export default function createOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Remodeling Contractors SC',
    'url': 'https://remodelingcontractorsc.com/',
    'logo': 'https://remodelingcontractorsc.com/assets/screen-porch-hero-8vtRdG8L.webp',
    'sameAs': [
      'https://www.facebook.com/remodelingcontractorsc',
      'https://www.instagram.com/remodelingcontractorsc',
      'https://www.linkedin.com/company/remodelingcontractorsc',
      'https://burchcontracting.com/'
    ],
    'contactPoint': [{
      '@type': 'ContactPoint',
      'telephone': '+1-864-724-4600',
      'contactType': 'customer service',
      'email': 'estimates@remodelingcontractorsc.com'
    }],
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Mauldin',
      'addressRegion': 'SC',
      'postalCode': '29662',
      'addressCountry': 'US'
    }
  };
}
