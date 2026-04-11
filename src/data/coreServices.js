/**
 * CORE SERVICES DATA
 * 
 * The 5 primary services for remodelingcontractorsc.com
 * These drive the main service pages, navigation, and local service pages
 */

// Import service images
import garageImage from '../assets/images/garage-2-car-dark-gray.webp';
import additionImage from '../assets/images/room-addition-fountain-inn.webp';
import screenedPorchImage from '../assets/images/custom-screened-porch-aluminum-frame.png';
import deckImage from '../assets/images/services/deck-service.svg';
import aduImage from '../assets/images/adu-cottage-light-gray.png';

export const coreServices = [
  {
    name: 'Garages',
    slug: 'garages',
    servicePath: '/garages',
    serviceType: 'Garage Builder',
    summary: 'Custom garages built for storage, workshops, vehicle protection, and property value.',
    metaTitle: 'Garage Builders in Upstate SC | Custom Detached & Attached Garages',
    metaDescription: 'Professional garage builder in Upstate South Carolina for custom detached garages, attached garages, and garage structures. Quality construction, architectural matching, storage planning.',
    highlights: [
      'Detached and attached garage options',
      'Architecturally matched to your home',
      'Expert concrete and framing work',
      'Electrical and storage planning included'
    ],
    intro: 'We build custom garages that increase storage, protect vehicles, provide workshop space, and add long-term property value. Every garage is planned around your lot, lifestyle, and architectural style.',
    
    whatItIs: 'A custom garage is a purpose-built structure designed for vehicle storage, tools, hobbies, and future flexibility. Garages can be detached (standalone buildings), attached (integrated with your home), or include finished space above for additional storage or living area.',
    
    whoItsFor: [
      'Homeowners who need protected vehicle storage and workshop space',
      'Families wanting to reclaim interior space currently used for storage',
      'Property owners planning for long-term value and curb appeal',
      'Homeowners considering garage apartment or multi-use structures'
    ],
    
    commonProjects: [
      'Two-car detached garages (400-600 sq ft)',
      'Three-car garages with workshop space (700-900 sq ft)',
      'Attached garages matching existing home design',
      'Garages with finished apartment or storage above'
    ],
    
    process: [
      'Site evaluation: lot fit, setbacks, access, drainage',
      'Design planning: size, doors, windows, electrical needs',
      'Permit coordination and structural planning',
      'Foundation and slab work',
      'Framing, roofing, siding to match home',
      'Overhead doors, electrical, final details'
    ],
    
    costFactors: [
      'Garage size and whether it\'s attached or detached',
      'Number and type of overhead doors',
      'Foundation work and site preparation',
      'Exterior finishes matching your home',
      'Electrical package and lighting',
      'Finished upper level (if applicable)'
    ],
    
    localContext: 'Garage projects in Upstate SC require careful planning around setbacks, lot coverage, HOA guidelines, and matching neighborhood character. We handle local permit requirements and ensure your garage complements your property.',
    
    relatedServices: ['additions', 'adus'],
    image: garageImage,
    imageAlt: 'Dark gray two-car detached garage with white trim and bonus room upstairs'
  },

  {
    name: 'Additions',
    slug: 'additions',
    servicePath: '/additions',
    serviceType: 'Home Addition Contractor',
    summary: 'Room additions that expand living space while maintaining flow, style, and home value.',
    metaTitle: 'Home Additions in Upstate SC | Room Addition Contractor',
    metaDescription: 'Professional home addition contractor in Upstate South Carolina for family room additions, primary suite additions, second story additions, and bump-outs. Expert structural tie-in and design integration.',
    highlights: [
      'Structural tie-in expertise',
      'Layout-driven design process',
      'Architectural compatibility planning',
      'Full-service project management'
    ],
    intro: 'We design and build home additions that seamlessly expand your living space without sacrificing flow or architectural integrity. From family rooms to primary suites, every addition is planned to feel original to your home.',
    
    whatItIs: 'A home addition extends your existing structure with new square footage, creating bedrooms, bathrooms, living areas, or multi-functional space. Additions require careful structural integration, roofline planning, and design continuity to ensure the expansion enhances rather than detracts from your home.',
    
    whoItsFor: [
      'Growing families who need more bedrooms or living space',
      'Homeowners wanting a primary suite or first-floor bedroom',
      'Families who love their neighborhood but have outgrown their home',
      'Property owners seeking long-term value through quality expansion'
    ],
    
    commonProjects: [
      'Primary suite additions with bath and walk-in closet',
      'Family room or great room expansions',
      'First-floor bedroom suites for aging in place',
      'Second story additions for additional bedrooms',
      'Bump-out expansions for kitchens or bathrooms'
    ],
    
    process: [
      'Needs assessment: how space will be used daily',
      'Design development: layout, flow, structural tie-in',
      'Permit coordination and engineering review',
      'Foundation and structural work',
      'Roofline integration and weatherproofing',
      'Mechanical systems, insulation, drywall',
      'Finishes and final integration'
    ],
    
    costFactors: [
      'Addition size and complexity of structural tie-in',
      'Whether addition includes bathroom or kitchen',
      'Foundation type and site conditions',
      'Roofline integration complexity',
      'HVAC extension requirements',
      'Finish level and material selections'
    ],
    
    localContext: 'Addition projects in Upstate SC must address setbacks, lot coverage limits, and neighborhood design compatibility. We manage all local permitting and ensure your addition meets structural and zoning requirements.',
    
    relatedServices: ['garages', 'adus'],
    image: additionImage,
    imageAlt: 'Modern home addition in Fountain Inn SC with gray siding and white trim'
  },

  {
    name: 'Screened Porches',
    slug: 'screened-porches',
    servicePath: '/screened-porches',
    serviceType: 'Screened Porch Builder',
    summary: 'Aluminum-framed screened porches for bug-free outdoor living and year-round comfort.',
    metaTitle: 'Screened Porch Builders in Upstate SC | Aluminum Screen Enclosures',
    metaDescription: 'Professional screened porch builder in Upstate South Carolina for aluminum screened enclosures, patio enclosures, and outdoor living spaces. Durable, low-maintenance construction.',
    highlights: [
      'Corrosion-resistant aluminum framing',
      'Bug-free outdoor enjoyment',
      'Covered and open-air options',
      'Low-maintenance durability'
    ],
    intro: 'We build clean-lined screened porches using aluminum frame systems designed for Upstate SC weather. Enjoy outdoor living without bugs, rain, or harsh sun while adding functional square footage to your home.',
    
    whatItIs: 'A screened porch is an outdoor living space enclosed with aluminum-framed screen panels, providing airflow and view retention while keeping out insects and weather. Screened porches can be built with roof coverage, ceiling finishes, and electrical for lighting and fans.',
    
    whoItsFor: [
      'Families wanting to use outdoor space without bug concerns',
      'Homeowners who love fresh air but need weather protection',
      'Property owners seeking low-maintenance outdoor living upgrades',
      'Those planning screened entertaining and dining areas'
    ],
    
    commonProjects: [
      'Covered screened porches off back of home (12×16 to 16×20)',
      'Patio enclosures with concrete slab base',
      'Screened porches with deck base and ceiling fans',
      'Multi-season enclosed porches with upgraded finishes'
    ],
    
    process: [
      'Site evaluation: existing patio, deck, or new foundation',
      'Design planning: size, roof type, ceiling finish, electrical',
      'Permit coordination and structural review',
      'Foundation or deck base construction',
      'Roof framing and weatherproofing (if covered)',
      'Aluminum screen system installation',
      'Ceiling finish, lighting, final details'
    ],
    
    costFactors: [
      'Screened porch size and base type (slab vs deck)',
      'Whether porch includes roof structure',
      'Ceiling finish upgrades',
      'Electrical package: outlets, lights, ceiling fans',
      'Screen door quality and hardware',
      'Site preparation and access'
    ],
    
    localContext: 'Screened porch projects in Upstate SC must meet wind load requirements, setback rules, and proper drainage planning. Aluminum systems hold up well in our humid climate and require minimal maintenance.',
    
    relatedServices: ['decks'],
    image: screenedPorchImage,
    imageAlt: 'Covered screened porch with aluminum frame system and ceiling fan'
  },

  {
    name: 'Decks',
    slug: 'decks',
    servicePath: '/decks',
    serviceType: 'Deck Builder',
    summary: 'Premium decks built for entertaining, durability, and enhanced outdoor living.',
    metaTitle: 'Deck Builders in Upstate SC | Composite & Covered Decks',
    metaDescription: 'Professional deck builder in Upstate South Carolina for composite decks, covered decks, and pressure treated decks. Quality framing, drainage planning, long-term durability.',
    highlights: [
      'Pressure treated and composite options',
      'Covered deck structures available',
      'Code-compliant framing and footings',
      'Drainage and weather durability planning'
    ],
    intro: 'We build backyard decks designed for daily use, long-term performance, and outdoor entertaining. Choose from pressure treated wood, low-maintenance composite, or covered deck options.',
    
    whatItIs: 'A custom deck is an elevated outdoor platform built for entertaining, dining, and enjoying your backyard. Decks are supported by properly spaced footings and framed for structural integrity, then finished with decking material, railings, and optional roof cover.',
    
    whoItsFor: [
      'Homeowners wanting to expand usable outdoor space',
      'Families planning outdoor entertaining and dining areas',
      'Property owners seeking low-maintenance composite solutions',
      'Those needing covered outdoor space for year-round use'
    ],
    
    commonProjects: [
      'Composite decks with aluminum railing (200-400 sq ft)',
      'Covered decks with roof structure for shade',
      'Multi-level decks for sloped yards',
      'Pressure treated decks for budget-conscious builds'
    ],
    
    process: [
      'Site assessment: slope, drainage, access',
      'Design planning: size, material, railing, cover options',
      'Permit coordination and footing layout',
      'Footing installation and framing',
      'Decking installation and railing assembly',
      'Roof structure (if covered)',
      'Stairs, lighting, final details'
    ],
    
    costFactors: [
      'Deck size and elevation above ground',
      'Decking material: pressure treated vs composite',
      'Railing type: wood, composite, or aluminum',
      'Roof cover structure and gutters',
      'Stair runs and complexity',
      'Built-in features: benches, planters, lighting'
    ],
    
    localContext: 'Deck construction in Upstate SC requires proper footings, frost line consideration, and drainage planning. Composite materials perform well in our climate and reduce long-term maintenance.',
    
    relatedServices: ['screened-porches'],
    image: deckImage,
    imageAlt: 'Elevated composite deck with modern aluminum railing and covered seating area'
  },

  {
    name: 'ADUs',
    slug: 'adus',
    servicePath: '/adus',
    serviceType: 'ADU Builder',
    summary: 'Accessory dwelling units for family living, rental income, and flexible property use.',
    metaTitle: 'ADU Builders in Upstate SC | Accessory Dwelling Units & In-Law Suites',
    metaDescription: 'Professional ADU builder in Upstate South Carolina for detached ADUs, garage apartments, and in-law suites. Permitting-aware planning, quality construction, functional design.',
    highlights: [
      'Detached and attached ADU options',
      'Permitting and zoning navigation',
      'Full utility and living space planning',
      'Multi-generational and rental flexibility'
    ],
    intro: 'We build accessory dwelling units designed for family living, guest use, or rental income potential. ADUs provide independent living space while maximizing your property\'s flexibility and value.',
    
    whatItIs: 'An ADU (accessory dwelling unit) is a secondary living structure with its own bedroom, bathroom, and often a kitchenette or full kitchen. ADUs can be detached backyard structures, garage apartments, or attached in-law suites, designed to function independently from the main home.',
    
    whoItsFor: [
      'Families planning space for aging parents or adult children',
      'Homeowners seeking rental income potential',
      'Property owners wanting flexible guest or caregiver space',
      'Those planning long-term multigenerational living'
    ],
    
    commonProjects: [
      'Detached backyard ADUs (400-700 sq ft)',
      'Garage apartments with living space above',
      'Attached in-law suites with private entry',
      'Converted garages into living space',
      'Studio and one-bedroom ADU units'
    ],
    
    process: [
      'Feasibility review: lot fit, setbacks, zoning, utilities',
      'Design planning: size, layout, kitchen/bath, HVAC',
      'Permit coordination and utility planning',
      'Foundation and structural construction',
      'Mechanical systems: HVAC, plumbing, electrical',
      'Insulation, drywall, interior finishes',
      'Kitchen, bath, final trim and details'
    ],
    
    costFactors: [
      'ADU size and whether detached or attached',
      'Kitchen type: full kitchen vs kitchenette',
      'Bathroom scope and fixture quality',
      'HVAC system and utility hookups',
      'Foundation type and site preparation',
      'Finish level and appliance package'
    ],
    
    localContext: 'ADU construction in Upstate SC varies by jurisdiction. Some areas have clear ADU ordinances while others review projects case-by-case. We help navigate setbacks, parking requirements, utility connections, and occupancy rules early in planning.',
    
    relatedServices: ['additions', 'garages'],
    image: aduImage,
    imageAlt: 'Custom guest house ADU with screened porch living area and modern gray siding'
  }
];

/**
 * Helper function to get service by slug
 */
export function getServiceBySlug(slug) {
  return coreServices.find(service => service.slug === slug);
}

/**
 * Helper function to get all service paths for routing
 */
export function getAllServicePaths() {
  return coreServices.map(service => service.servicePath);
}
