/**
 * CORE SERVICES DATA
 * 
 * The 5 primary services for remodelingcontractorsc.com
 * These drive the main service pages, navigation, and local service pages
 */

import {
  aduImageSet,
  additionImageSet,
  deckImageSet,
  garageImageSet,
  lakeCabinImageSet,
  screenedPorchImageSet
} from './responsiveImages';

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
    image: garageImageSet.defaultSrc,
    imageSrcSet: garageImageSet.srcSet,
    imageSizes: garageImageSet.sizes,
    imageAlt: 'Dark gray detached two-car garage with white trim, carriage-style doors, and upper-level bonus space'
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
    image: additionImageSet.defaultSrc,
    imageSrcSet: additionImageSet.srcSet,
    imageSizes: additionImageSet.sizes,
    imageAlt: 'Gray home addition with integrated roofline, white trim, and multiple front-facing windows'
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
    image: screenedPorchImageSet.defaultSrc,
    imageSrcSet: screenedPorchImageSet.srcSet,
    imageSizes: screenedPorchImageSet.sizes,
    imageAlt: 'Covered aluminum-framed screened porch with white roof panels and a ceiling fan'
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
    image: deckImageSet.defaultSrc,
    imageSrcSet: deckImageSet.srcSet,
    imageSizes: deckImageSet.sizes,
    imageAlt: 'Elevated backyard deck with modern railings, wide stairs, and outdoor gathering space'
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
    image: aduImageSet.defaultSrc,
    imageSrcSet: aduImageSet.srcSet,
    imageSizes: aduImageSet.sizes,
    imageAlt: 'Light gray accessory dwelling unit with a screened porch living area and covered front entry'
  },

  {
    name: 'Lake Cabin Screened Porches',
    slug: 'lake-cabin-screened-porches',
    servicePath: '/lake-cabin-screened-porches',
    serviceType: 'Lake Cabin Screened Porch Builder',
    summary: 'Custom screened porches and enclosures for lake cabin properties on Lake Greenwood, SC.',
    metaTitle: 'Lake Cabin Screened Porches Near Lake Greenwood, SC | Custom Enclosures',
    metaDescription: 'Professional screened porch builder serving lake cabin owners near Lake Greenwood in Greenwood County, SC. Custom aluminum-framed enclosures built for lakeside living, humidity resistance, and year-round outdoor enjoyment.',
    highlights: [
      'Built for lakeside humidity and weather',
      'Aluminum framing for long-term durability',
      'Lake Greenwood area permit expertise',
      'Year-round outdoor living design'
    ],
    intro: 'We build screened porches and aluminum enclosures for lake cabin properties near Lake Greenwood. Enjoy bug-free evenings on the water with a properly built enclosure designed for Greenwood County\'s humid lakeside conditions.',

    whatItIs: 'A lake cabin screened porch is an aluminum-framed enclosure attached to or surrounding your cabin that keeps insects out while preserving airflow, lake views, and the outdoor living experience. Built with corrosion-resistant materials suited to lakeside humidity, these structures extend your usable outdoor space across all seasons.',

    whoItsFor: [
      'Lake Greenwood cabin owners wanting bug-free evenings outdoors',
      'Property owners looking to maximize waterfront enjoyment year-round',
      'Families upgrading older unscreened porches with durable aluminum systems',
      'Investors improving rental cabin properties with high-value outdoor amenities'
    ],

    commonProjects: [
      'Screened porches wrapping the lakeside face of a cabin',
      'Aluminum enclosures over existing concrete slabs or decks',
      'Screen rooms with ceiling fans and outdoor lighting',
      'Replacement enclosures upgrading aged wood-frame screen rooms',
      'Covered screened porches with metal roofing for rain protection'
    ],

    process: [
      'Site visit: assess cabin footprint, lake orientation, sun angle, and prevailing breeze',
      'Design planning: size, roof type, screen height, door placement',
      'Greenwood County permit coordination and structural review',
      'Foundation or deck base prep (slab, block, or treated wood deck)',
      'Aluminum frame installation with corrosion-resistant hardware',
      'Fiberglass or pet-resistant screen panel installation',
      'Ceiling fans, lighting, door hardware, and final walkthrough'
    ],

    costFactors: [
      'Enclosure size and number of screened openings',
      'Whether a new roof structure is included',
      'Base type: existing slab vs new deck base',
      'Screen type: standard fiberglass, solar, or pet-resistant',
      'Electrical package: outlets, ceiling fans, lighting',
      'Site access and proximity to Lake Greenwood shoreline'
    ],

    localContext: 'Lake Greenwood properties sit in Greenwood County and are subject to local building permits and setback rules that vary by shoreline proximity. Lakeside humidity accelerates corrosion in low-grade materials — we use aluminum framing and stainless hardware rated for wet, high-humidity environments. We handle all Greenwood County permit coordination.',

    relatedServices: ['screened-porches', 'decks'],
    image: lakeCabinImageSet.defaultSrc,
    imageSrcSet: lakeCabinImageSet.webpSrcSet,
    imageSizes: lakeCabinImageSet.sizes,
    imageAlt: 'Screened porch attached to a lake cabin with wooded Lake Greenwood surroundings'
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
