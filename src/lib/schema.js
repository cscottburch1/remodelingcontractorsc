const BUSINESS_NAME = 'Remodeling Contractors SC';
const SITE_URL = 'https://remodelingcontractorsc.com';
const BUSINESS_PHONE = '+1-864-724-4600';
const BUSINESS_EMAIL = 'estimates@remodelingcontractorsc.com';
const SERVICE_AREA_CITIES = [
  { name: 'Greenville', state: 'South Carolina' },
  { name: 'Simpsonville', state: 'South Carolina' },
  { name: 'Fountain Inn', state: 'South Carolina' },
  { name: 'Gray Court', state: 'South Carolina' },
  { name: 'Owings', state: 'South Carolina' },
  { name: 'Enoree', state: 'South Carolina' },
  { name: 'Woodruff', state: 'South Carolina' },
  { name: 'Greer', state: 'South Carolina' },
  { name: 'Mauldin', state: 'South Carolina' },
  { name: 'Laurens', state: 'South Carolina' },
  { name: 'Clinton', state: 'South Carolina' },
  { name: 'Joanna', state: 'South Carolina' }
];

export function createLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['GeneralContractor', 'LocalBusiness'],
    name: BUSINESS_NAME,
    url: SITE_URL,
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Greenville',
      addressRegion: 'SC',
      addressCountry: 'US'
    },
    areaServed: SERVICE_AREA_CITIES.map(({ name, state }) => ({
      '@type': 'City',
      name,
      containedInPlace: {
        '@type': 'State',
        name: state
      }
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '13:00'
      }
    ],
    sameAs: [
      'https://www.facebook.com/remodelingcontractorsc',
      'https://www.instagram.com/remodelingcontractorsc'
    ]
  };
}

export function createServiceSchema(service, path) {
  const normalized = typeof service === 'object' && 'url' in service
    ? service
    : {
        name: service.name,
        description: service.seo || service.summary,
        url: path,
        areaServed: 'Upstate South Carolina'
      };

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: normalized.name,
    description: normalized.description,
    areaServed: normalized.areaServed,
    provider: {
      '@type': 'GeneralContractor',
      name: BUSINESS_NAME,
      url: SITE_URL,
      telephone: BUSINESS_PHONE
    },
    url: `${SITE_URL}${normalized.url || path}`
  };
}

export function createFaqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };
}

export function createBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://remodelingcontractorsc.com${item.path}`
    }))
  };
}