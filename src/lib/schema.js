export function createLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Remodeling Contractors SC',
    url: 'https://remodelingcontractorsc.com',
    telephone: '+1-803-555-0147',
    areaServed: [
      'Greenville',
      'Simpsonville',
      'Fountain Inn',
      'Greer',
      'Mauldin',
      'Laurens',
      'Anderson',
      'Spartanburg'
    ],
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'SC',
      addressCountry: 'US'
    }
  };
}

export function createServiceSchema(service, path) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.seo || service.summary,
    areaServed: 'South Carolina',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Remodeling Contractors SC'
    },
    url: `https://remodelingcontractorsc.com${path}`
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