/**
 * LOCAL SERVICE PAGES DATA
 * 
 * Generates all 45 local service landing pages (5 services × 9 towns)
 * Format: /[service-builder]-[town-slug]/
 */

import { coreServices } from './coreServices';
import { serviceAreas } from './serviceAreas';

/**
 * URL slug patterns for each service
 */
const serviceUrlPatterns = {
  'garages': 'garage-builder',
  'additions': 'home-addition-contractor',
  'screened-porches': 'screened-porch-builder',
  'decks': 'deck-builder',
  'adus': 'adu-builder',
  'lake-cabin-screened-porches': 'lake-cabins-and-screened-porch-builder'
};

/**
 * Generate all local service pages
 */
export const localServicePages = [];

// Generate a page for each service in each town
coreServices.forEach(service => {
  serviceAreas.forEach(town => {
    const servicePattern = serviceUrlPatterns[service.slug];
    const slug = `${servicePattern}-${town.slug}`;
    const path = `/${slug}`;
    
    localServicePages.push({
      slug,
      path,
      serviceSlug: service.slug,
      serviceName: service.name,
      townSlug: town.slug,
      townName: town.name,
      county: town.county,
      
      // SEO
      metaTitle: `${service.name} in ${town.name}, SC | ${service.serviceType}`,
      metaDescription: `Professional ${service.serviceType.toLowerCase()} in ${town.name}, South Carolina. Quality ${service.name.toLowerCase()} construction with local expertise, reliable service, and neighborhood-appropriate design.`,
      
      // Page content structure
      h1: `${service.name} in ${town.name}, SC`,
      
      intro: `We build ${service.name.toLowerCase()} for homeowners in ${town.name} who need ${service.summary.toLowerCase()} Our team brings local knowledge, quality craftsmanship, and clear communication to every ${service.name.toLowerCase().replace(/s$/, '')} project in ${town.county}.`,
      
      serviceOverview: service.summary,
      
      whyLocal: `${town.name} homeowners choose us for ${service.name.toLowerCase()} projects because we understand local permitting requirements, neighborhood character, and ${town.county} building expectations. Every project is planned for long-term fit, quality, and value.`,
      
      commonLocalProjects: town.commonProjects.filter(project => {
        const lower = project.toLowerCase();
        if (service.slug === 'garages') return lower.includes('garage');
        if (service.slug === 'additions') return lower.includes('addition');
        if (service.slug === 'screened-porches') return lower.includes('porch') || lower.includes('screen');
        if (service.slug === 'decks') return lower.includes('deck');
        if (service.slug === 'adus') return lower.includes('adu') || lower.includes('suite');
        return false;
      }),
      
      // Internal linking
      parentServicePath: service.servicePath,
      townPagePath: town.servicePath,
      nearbyTownPaths: town.nearbyTowns.map(nearbyTownName => {
        const nearbyTown = serviceAreas.find(area => area.name === nearbyTownName);
        if (!nearbyTown) return null;
        return {
          name: nearbyTownName,
          path: `/${servicePattern}-${nearbyTown.slug}`
        };
      }).filter(Boolean),
      
      // Calculator flag
      hasCalculator: true
    });
  });
});

/**
 * Helper function to get local service page by slug
 */
export function getLocalServicePageBySlug(slug) {
  return localServicePages.find(page => page.slug === slug);
}

/**
 * Helper function to get all local service pages for a specific town
 */
export function getLocalServicePagesByTown(townSlug) {
  return localServicePages.filter(page => page.townSlug === townSlug);
}

/**
 * Helper function to get all local service pages for a specific service
 */
export function getLocalServicePagesByService(serviceSlug) {
  return localServicePages.filter(page => page.serviceSlug === serviceSlug);
}

/**
 * Generate FAQ for local service pages
 */
export function generateLocalServiceFAQs(serviceName, townName) {
  const baseServiceName = serviceName.toLowerCase();
  
  const faqTemplates = {
    garages: [
      {
        question: `How much does a garage cost in ${townName}?`,
        answer: `Garage costs in ${townName} typically range from $25,000 to $65,000 depending on size, whether it's attached or detached, number of doors, and finish details. Use our calculator above for a rough estimate, then request a detailed quote for your specific project.`
      },
      {
        question: `Do I need a permit to build a garage in ${townName}?`,
        answer: `Yes, garage construction in ${townName} requires building permits. We handle all permit coordination, ensuring your garage meets local setback requirements, lot coverage rules, and structural standards.`
      },
      {
        question: `How long does it take to build a garage in ${townName}?`,
        answer: `Most garage projects in ${townName} take 4-8 weeks from permit approval to completion, depending on size, weather, and project complexity. We provide clear timelines during the planning phase.`
      }
    ],
    additions: [
      {
        question: `How much does a home addition cost in ${townName}?`,
        answer: `Home addition costs in ${townName} typically range from $40,000 to $150,000+ depending on size, whether it includes a bathroom, complexity of structural tie-in, and finish level. Use our calculator for an estimate, then request a detailed quote.`
      },
      {
        question: `Do I need a permit for a home addition in ${townName}?`,
        answer: `Yes, home additions in ${townName} require building permits and often structural engineering review. We coordinate all permitting, ensuring your addition meets setback rules, lot coverage limits, and structural requirements.`
      },
      {
        question: `Will my home addition match my existing house?`,
        answer: `Yes. We carefully match rooflines, siding, windows, and architectural details so your addition looks original to your ${townName} home rather than appearing tacked-on.`
      }
    ],
    'screened porches': [
      {
        question: `How much does a screened porch cost in ${townName}?`,
        answer: `Screened porch costs in ${townName} typically range from $12,000 to $40,000 depending on size, whether it includes a roof structure, ceiling finish upgrades, and electrical package. Use our calculator for a rough estimate.`
      },
      {
        question: `Do screened porches require permits in ${townName}?`,
        answer: `Yes, most screened porch projects in ${townName} require building permits, especially when they include roof structures or electrical work. We handle permit coordination as part of our service.`
      },
      {
        question: `What is the best base for a screened porch in ${townName}?`,
        answer: `In ${townName}, both concrete slab and deck bases work well. Slabs provide stable, low-maintenance foundations, while deck-based porches offer better drainage on sloped lots. We'll recommend the best option for your property.`
      }
    ],
    decks: [
      {
        question: `How much does a deck cost in ${townName}?`,
        answer: `Deck costs in ${townName} typically range from $8,000 to $40,000+ depending on size, material (pressure treated vs composite), railing type, and whether you include a roof cover. Use our calculator above for a quick estimate.`
      },
      {
        question: `Should I choose pressure treated or composite decking in ${townName}?`,
        answer: `Composite decking costs more upfront but requires less maintenance and holds up well in ${townName}'s humid climate. Pressure treated wood is budget-friendly and proven, but needs periodic staining. We'll explain both options during planning.`
      },
      {
        question: `Do decks require permits in ${townName}?`,
        answer: `Yes, deck construction in ${townName} requires permits to ensure proper footings, structural framing, and railing safety. We coordinate all permitting as part of our deck building service.`
      }
    ],
    adus: [
      {
        question: `How much does an ADU cost in ${townName}?`,
        answer: `ADU costs in ${townName} typically range from $80,000 to $200,000+ depending on size, whether it's detached or attached, kitchen and bathroom scope, and finish level. Use our calculator for a rough estimate based on your needs.`
      },
      {
        question: `Are ADUs allowed in ${townName}?`,
        answer: `ADU regulations vary across ${townName} and the surrounding area. We help navigate local zoning rules, setback requirements, parking expectations, and utility connection guidelines early in the planning process.`
      },
      {
        question: `Can an ADU be used for rental income in ${townName}?`,
        answer: `Potentially, but rental use depends on local ordinances and zoning rules. We focus on building code-compliant structures and recommend consulting with local planning officials about occupancy and rental regulations.`
      }
    ]
  };
  
  // Map service names to FAQ keys
  let faqKey = '';
  if (baseServiceName.includes('garage')) faqKey = 'garages';
  else if (baseServiceName.includes('addition')) faqKey = 'additions';
  else if (baseServiceName.includes('porch') || baseServiceName.includes('screen')) faqKey = 'screened porches';
  else if (baseServiceName.includes('deck')) faqKey = 'decks';
  else if (baseServiceName.includes('adu')) faqKey = 'adus';
  
  return faqTemplates[faqKey] || [];
}

export default localServicePages;
