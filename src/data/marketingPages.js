import garageImage from '../assets/images/services/garage-service.svg';
import roomAdditionImage from '../assets/images/services/room-addition-service.svg';
import enclosureImage from '../assets/images/services/screen-enclosure-service.svg';
import grannyPodImage from '../assets/images/services/granny-pod-service.svg';

const sharedActions = [
  { label: 'Request Estimate', to: '/contact', variant: 'primary' },
  { label: 'View Financing', to: '/financing', variant: 'soft' }
];

export const priorityServicePages = [
  {
    slug: 'adu-builders',
    path: '/adu-builders',
    eyebrow: 'Priority Service',
    name: 'ADU Builders',
    title: 'ADU builders for detached backyard units, garage apartments, and family-ready secondary living space',
    metaTitle: 'ADU Builders in Upstate SC | Remodeling Contractors SC',
    metaDescription: 'ADU builder in Upstate South Carolina for detached ADUs, garage apartment additions, and accessory dwelling unit planning with permitting awareness.',
    intro: 'We build accessory dwelling units and ADU-style spaces for homeowners who need flexibility, privacy, rental potential, or multi-generational living on the same property.',
    highlights: ['Accessory dwelling unit planning', 'Detached and garage-based options', 'Permitting-aware scope development'],
    serviceType: 'Accessory Dwelling Unit Builder',
    image: grannyPodImage,
    imageAlt: 'Illustration of a detached accessory dwelling unit with porch and private entry',
    whatItIs: 'An ADU is a secondary living space designed to function independently from the main house. Depending on the property and jurisdiction, it may be detached in the backyard, built over a garage, or integrated into an existing structure with separate access and utilities.',
    whoItIsFor: [
      'Homeowners planning long-term space for parents, adult children, or caregivers',
      'Families who want flexible living quarters without purchasing a second property',
      'Owners evaluating detached ADU builders for guest use, rental strategy, or future resale value'
    ],
    optionsTitle: 'Attached vs detached ADU options',
    options: [
      {
        title: 'Detached ADUs',
        body: 'Detached units create the strongest sense of independence and privacy, with a separate footprint that can be planned around setbacks, access, and utility routing.'
      },
      {
        title: 'Garage apartment additions',
        body: 'Garage-based ADU layouts can combine vehicle storage with upper-level living space, especially when the property needs compact multi-use square footage.'
      },
      {
        title: 'Attached family suites',
        body: 'Where zoning or lot layout limits a detached structure, an attached suite can deliver many of the same benefits while tying directly into the existing home.'
      }
    ],
    process: [
      'Evaluate lot fit, access, parking, and utility strategy',
      'Define the right ADU type around budget, use case, and jurisdiction',
      'Coordinate planning, permitting, structural scope, and finish level before construction starts'
    ],
    costFactors: [
      'Foundation type, site access, and utility distance from the main home',
      'Kitchen, bath, HVAC, and insulation requirements for independent living space',
      'Detached structure size, roof design, and finish level'
    ],
    permittingNote: 'ADU and accessory dwelling unit rules vary across Upstate jurisdictions. We review setbacks, parking expectations, utility service, occupancy limitations, and lot constraints early so scope decisions stay grounded in what is actually feasible.',
    faqs: [
      {
        question: 'What types of ADUs do you build?',
        answer: 'We help homeowners evaluate detached backyard ADUs, garage apartment additions, and attached family suite options based on lot fit, privacy goals, and local zoning.'
      },
      {
        question: 'Can an ADU be built above a garage?',
        answer: 'Yes, garage apartment additions are one of the most practical ADU formats when the lot needs to combine storage, parking, and livable square footage in a compact footprint.'
      },
      {
        question: 'Do detached ADUs need separate utilities?',
        answer: 'Some utilities can share infrastructure with the main home, but the exact mechanical and utility strategy depends on jurisdiction, layout, and how independently the space needs to function.'
      }
    ],
    relatedPaths: ['/detached-adus', '/garage-apartment-additions', '/greenville-sc', '/adu-builder-greenville-sc'],
    projectSlugs: ['backyard-granny-pod-anderson'],
    actions: sharedActions,
    ctaTitle: 'Need an ADU builder who understands local fit and permitting?',
    ctaText: 'Request an estimate and we will outline practical detached, attached, and garage-based ADU options for your lot.'
  },
  {
    slug: 'in-law-suite-additions',
    path: '/in-law-suite-additions',
    eyebrow: 'Priority Service',
    name: 'In-Law Suite Additions',
    title: 'In-law suite additions that create private family space without sacrificing the flow of the main home',
    metaTitle: 'In-Law Suite Additions in Upstate SC | Remodeling Contractors SC',
    metaDescription: 'In-law suite addition builder in Upstate South Carolina for attached family suites, mother-in-law additions, and multi-generational living space.',
    intro: 'We design and build in-law suite additions for homeowners who need an integrated family space with private access, comfortable daily use, and long-term flexibility.',
    highlights: ['Attached family suite planning', 'Private access and daily livability', 'Multi-generational layout strategy'],
    serviceType: 'In-Law Suite Addition',
    image: roomAdditionImage,
    imageAlt: 'Illustration of a home addition designed as a private family suite',
    whatItIs: 'An in-law suite addition expands the main home with a dedicated bedroom, bath, sitting area, and in some cases a kitchenette or separate entrance. The goal is to create practical privacy while keeping the addition architecturally tied to the original house.',
    whoItIsFor: [
      'Families welcoming parents or relatives who need first-floor comfort and closer support',
      'Homeowners planning a mother-in-law suite addition with private bedroom and bath access',
      'Owners who want a flexible family suite that can later work as guest space or aging-in-place space'
    ],
    optionsTitle: 'Attached vs detached family suite options',
    options: [
      {
        title: 'Attached in-law suites',
        body: 'Attached suites are often the cleanest fit for daily family use because they preserve connection to the main home while still allowing private circulation and quiet separation.'
      },
      {
        title: 'Mother-in-law suite additions',
        body: 'These additions usually prioritize accessibility, bedroom and bath convenience, and a smoother transition between private and shared spaces.'
      },
      {
        title: 'Detached family suite alternatives',
        body: 'If a more independent structure is needed, a detached ADU layout may provide better privacy and flexibility than an attached addition.'
      }
    ],
    process: [
      'Clarify privacy needs, accessibility considerations, and how the suite will be used every day',
      'Develop layout options that preserve circulation, light, and exterior balance',
      'Finalize structure, utilities, and permitting strategy before construction begins'
    ],
    costFactors: [
      'Whether the addition needs a full bath, kitchenette, or separate entrance',
      'Foundation, roofline tie-in, and structural integration with the existing home',
      'Accessibility features, plumbing location, and finish level'
    ],
    permittingNote: 'In-law additions often trigger review around setbacks, lot coverage, egress, and whether separate cooking or utility features change how the space is classified locally. We address those issues early so the plan stays realistic.',
    faqs: [
      {
        question: 'What is included in an in-law suite addition?',
        answer: 'Most in-law suite additions include a bedroom, bathroom, and sitting space, with layout options for private entry, storage, or a compact kitchenette depending on the property and local rules.'
      },
      {
        question: 'Is a mother-in-law suite addition always attached to the house?',
        answer: 'No. Many are attached, but some families are better served by detached backyard living space when privacy, independence, or lot layout make that a better fit.'
      },
      {
        question: 'Can an in-law suite be designed for aging in place?',
        answer: 'Yes. First-floor access, wider clearances, lower-threshold baths, and easier circulation can all be built into the layout from the start.'
      }
    ],
    relatedPaths: ['/attached-in-law-suites', '/mother-in-law-suite-additions', '/greenville-sc', '/in-law-suite-addition-greenville-sc'],
    projectSlugs: ['second-story-addition-simpsonville'],
    actions: sharedActions,
    ctaTitle: 'Planning an in-law suite addition for family living?',
    ctaText: 'Tell us how the space needs to function and we will map the right attached or detached direction for your property.'
  },
  {
    slug: 'master-suite-additions',
    path: '/master-suite-additions',
    eyebrow: 'Priority Service',
    name: 'Master Suite Additions',
    title: 'Master suite additions that improve bedroom comfort, storage, privacy, and long-term home function',
    metaTitle: 'Master Suite Additions in Upstate SC | Remodeling Contractors SC',
    metaDescription: 'Master suite addition contractor in Upstate South Carolina for primary suite additions, bedroom suite additions, and layout-driven home expansion.',
    intro: 'We build primary suite and bedroom suite additions for homeowners who need more comfortable daily living, better layout flow, and a cleaner long-term use of square footage.',
    highlights: ['Primary suite planning', 'Bedroom and bath integration', 'Layout-driven home expansion'],
    serviceType: 'Master Suite Addition',
    image: roomAdditionImage,
    imageAlt: 'Illustration of a bedroom suite addition with integrated bath and expanded roofline',
    whatItIs: 'A master suite addition expands the home with a larger sleeping area and supporting spaces such as a primary bath, walk-in closet, sitting room, or first-floor suite layout. The best projects feel fully integrated rather than appended to the house.',
    whoItIsFor: [
      'Homeowners who have outgrown a small primary bedroom or bath',
      'Families who want a first-floor suite for long-term convenience and resale value',
      'Owners comparing a primary suite addition to moving or attempting a full-home renovation'
    ],
    optionsTitle: 'Primary suite addition options',
    options: [
      {
        title: 'Rear suite additions',
        body: 'Rear additions often create the cleanest path to larger bedroom and bath layouts without disrupting the home’s street-facing curb appeal.'
      },
      {
        title: 'Side wing additions',
        body: 'Where the lot allows it, a side suite addition can create a more secluded private wing with stronger separation from living areas.'
      },
      {
        title: 'Bedroom suite expansions',
        body: 'Some projects only need a focused bump-out or bath/closet reconfiguration rather than a full large-footprint addition.'
      }
    ],
    process: [
      'Review how the current bedroom, bath, and closet arrangement is failing day-to-day use',
      'Test layout options that improve privacy, storage, and circulation',
      'Align structural scope, roofing, and finish quality so the suite feels original to the house'
    ],
    costFactors: [
      'Addition size, structural tie-in complexity, and roofline integration',
      'Primary bath scope, plumbing work, and closet buildout',
      'Window package, finish level, and whether first-floor accessibility is part of the plan'
    ],
    permittingNote: 'Primary suite additions still require careful review of setbacks, lot coverage, structural tie-in, and in some neighborhoods HOA or design compatibility considerations. We plan for those constraints early.',
    faqs: [
      {
        question: 'What is the difference between a master suite addition and a bedroom suite addition?',
        answer: 'Both terms usually describe a larger private sleeping area with supporting spaces like a bath or closet. Primary suite addition is the more current label, while bedroom suite addition may describe either a full owner’s suite or a smaller private wing.'
      },
      {
        question: 'Can a master suite addition include a large walk-in shower and closet?',
        answer: 'Yes. Those are common priorities, and they should be planned alongside structure, plumbing, and circulation so the space performs well rather than just becoming bigger.'
      },
      {
        question: 'Is a first-floor primary suite addition worth considering?',
        answer: 'Often yes. A first-floor suite can improve long-term livability and reduce the need to move later, especially for homeowners planning to age in place.'
      }
    ],
    relatedPaths: ['/master-bedroom-suite-additions', '/garage-apartment-additions', '/greenville-sc', '/master-suite-addition-greenville-sc'],
    projectSlugs: ['second-story-addition-simpsonville'],
    actions: sharedActions,
    ctaTitle: 'Ready to plan a primary suite addition that feels integrated and useful?',
    ctaText: 'Request an estimate and we will outline layout, structure, and budget priorities for your suite addition.'
  },
  {
    slug: 'granny-pods',
    path: '/granny-pods',
    eyebrow: 'Priority Service',
    name: 'Detached ADUs',
    title: 'Detached ADU builders for backyard privacy, flexible family living, and independent daily use',
    metaTitle: 'Detached ADU Builders in Upstate SC | Remodeling Contractors SC',
    metaDescription: 'Detached ADU builder in Upstate South Carolina for backyard living spaces, private family suites, and lot-fit planning around local zoning and utilities.',
    intro: 'We build detached ADUs for families who need a compact backyard living space with privacy, utility planning, and a clean relationship to the main house.',
    highlights: ['Detached family suite planning', 'Backyard privacy and access', 'Lot-fit and utility coordination'],
    serviceType: 'Detached ADU Builder',
    image: grannyPodImage,
    imageAlt: 'Illustration of a detached backyard ADU with porch and simple living layout',
    whatItIs: 'An ADU is a detached or semi-independent backyard living structure planned for privacy, flexibility, and comfortable daily use on the same property as the main home.',
    whoItIsFor: [
      'Families planning space for parents, adult children, or long-term guests',
      'Homeowners who need detached privacy but still want close proximity to the main house',
      'Owners comparing detached ADUs with in-law suite or garage apartment options'
    ],
    optionsTitle: 'Detached family suite options',
    options: [
      {
        title: 'Backyard ADUs',
        body: 'Backyard ADUs are compact and efficient, with layouts planned around privacy, easy access, and comfortable daily use.'
      },
      {
        title: 'Detached family suites',
        body: 'A larger detached suite can create more storage, a bigger bath, or longer-term flexibility where the lot allows a broader footprint.'
      },
      {
        title: 'ADU-style detached structures',
        body: 'Some detached ADU projects prioritize stronger independence, rental flexibility, or future guest use depending on the property and jurisdiction.'
      }
    ],
    process: [
      'Review lot placement, setbacks, utility access, and relationship to the main house',
      'Choose the right footprint and living features for family use and privacy',
      'Coordinate permitting, structure, and finish selections before construction begins'
    ],
    costFactors: [
      'Detached foundation and utility routing requirements',
      'Bathroom, kitchenette, insulation, and HVAC needs',
      'Footprint size, porch features, and finish level'
    ],
    permittingNote: 'Detached ADUs require early review of zoning, setbacks, lot coverage, utility tie-ins, and local code definitions. That planning work matters just as much as the building design itself.',
    faqs: [
      {
        question: 'Are detached ADUs the same as backyard family suites?',
        answer: 'Often yes. Many homeowners use those terms interchangeably when they want private living space on the same property for family, guests, or long-term flexibility.'
      },
      {
        question: 'Can a backyard ADU include a small kitchen?',
        answer: 'It can, but whether full cooking features are appropriate depends on the jurisdiction, intended use, and how the structure is classified during permitting.'
      },
      {
        question: 'How much yard space is needed for an ADU?',
        answer: 'That depends on the footprint, setbacks, access, and utility strategy. We evaluate those constraints before recommending a detached family suite layout.'
      }
    ],
    relatedPaths: ['/backyard-granny-pods', '/adu-builders', '/greenville-sc', '/granny-pod-builder-greenville-sc'],
    projectSlugs: ['backyard-granny-pod-anderson'],
    actions: sharedActions,
    ctaTitle: 'Need an ADU builder for a backyard family suite?',
    ctaText: 'Request an estimate and we will review detached layout options, local fit, and permitting considerations for your property.'
  }
];

export const supportingServicePages = [
  {
    slug: 'detached-adus',
    path: '/detached-adus',
    parentSlug: 'adu-builders',
    eyebrow: 'Supporting Page',
    name: 'Detached ADUs',
    title: 'Detached ADUs for homeowners who need private backyard living space with long-term flexibility',
    metaTitle: 'Detached ADUs in Upstate SC | Remodeling Contractors SC',
    metaDescription: 'Detached ADU builder in Upstate South Carolina for private backyard living units planned around lot access, setbacks, utilities, and daily usability.',
    intro: 'Detached ADUs are a strong fit when the priority is independent living space with more privacy than an attached addition can provide.',
    highlights: ['Backyard placement strategy', 'Utility planning', 'Privacy-first design'],
    serviceType: 'Detached ADU Builder',
    image: grannyPodImage,
    imageAlt: 'Illustration of a detached backyard ADU',
    whatItIs: 'A detached ADU is a stand-alone secondary structure designed for living space apart from the main home.',
    whoItIsFor: ['Families prioritizing privacy', 'Owners planning future rental or guest flexibility', 'Properties with enough yard depth for detached placement'],
    optionsTitle: 'Detached ADU planning priorities',
    options: [
      { title: 'Site fit', body: 'Placement, setbacks, access, and drainage all drive whether a detached layout is practical.' },
      { title: 'Utility approach', body: 'Detached ADUs need a clear plan for power, water, sewer, and HVAC from the start.' }
    ],
    process: ['Review lot constraints', 'Define footprint and utility scope', 'Coordinate permitting and construction planning'],
    costFactors: ['Site work and utility distance', 'Structure size and finish level', 'Detached access and grading'],
    permittingNote: 'Detached accessory units often face the strictest local zoning review, so early feasibility work matters.',
    faqs: [
      { question: 'Why choose a detached ADU instead of an addition?', answer: 'A detached ADU usually delivers more privacy and clearer separation for family or guest use.' },
      { question: 'Can detached ADUs work on smaller lots?', answer: 'Sometimes, but setbacks, parking, and utility access often become the deciding factors.' }
    ],
    relatedPaths: ['/adu-builders', '/garage-apartment-additions', '/adu-builder-greenville-sc'],
    projectSlugs: ['backyard-granny-pod-anderson'],
    actions: sharedActions,
    ctaTitle: 'Need help deciding if your lot can support a detached ADU?',
    ctaText: 'Request an estimate and we will review your lot, access, and utility constraints.'
  },
  {
    slug: 'attached-in-law-suites',
    path: '/attached-in-law-suites',
    parentSlug: 'in-law-suite-additions',
    eyebrow: 'Supporting Page',
    name: 'Attached In-Law Suites',
    title: 'Attached in-law suites for families who need privacy, access, and a smoother connection to the main home',
    metaTitle: 'Attached In-Law Suites in Upstate SC | Remodeling Contractors SC',
    metaDescription: 'Attached in-law suite builder in Upstate South Carolina for integrated family living space with private bedroom, bath, and entry planning.',
    intro: 'Attached in-law suites balance privacy with everyday convenience, making them a practical fit for many multigenerational households.',
    highlights: ['Integrated with the main home', 'Private circulation', 'Family-friendly layout planning'],
    serviceType: 'Attached In-Law Suite Builder',
    image: roomAdditionImage,
    imageAlt: 'Illustration of an attached in-law suite addition',
    whatItIs: 'An attached in-law suite expands the home with a connected but more private family living zone.',
    whoItIsFor: ['Families who want shared proximity', 'Homeowners who need easier accessibility', 'Properties not suited for detached construction'],
    optionsTitle: 'Attached suite planning priorities',
    options: [
      { title: 'Private entry', body: 'Entry placement can improve privacy without making the addition feel disconnected.' },
      { title: 'Accessible layout', body: 'Bathroom and circulation design should support long-term comfort and daily ease.' }
    ],
    process: ['Clarify family use', 'Test layout integration', 'Coordinate structure, utilities, and finishes'],
    costFactors: ['Foundation and roof tie-in', 'Bath and entry scope', 'Accessibility upgrades'],
    permittingNote: 'Attached suites still require careful review of setbacks, lot coverage, and whether the space changes occupancy classification.',
    faqs: [
      { question: 'Are attached in-law suites better for aging parents?', answer: 'They often are, because they keep private space close to the main house while reducing the need for outdoor travel.' },
      { question: 'Can an attached suite have its own entrance?', answer: 'Yes, private entry is common when privacy and independent circulation matter.' }
    ],
    relatedPaths: ['/in-law-suite-additions', '/mother-in-law-suite-additions', '/in-law-suite-addition-greenville-sc'],
    projectSlugs: ['second-story-addition-simpsonville'],
    actions: sharedActions,
    ctaTitle: 'Need an attached family suite that feels planned, not tacked on?',
    ctaText: 'Request an estimate and we will review layout options that preserve flow and privacy.'
  },
  {
    slug: 'mother-in-law-suite-additions',
    path: '/mother-in-law-suite-additions',
    parentSlug: 'in-law-suite-additions',
    eyebrow: 'Supporting Page',
    name: 'Mother-In-Law Suite Additions',
    title: 'Mother-in-law suite additions designed for comfort, accessibility, and long-term family use',
    metaTitle: 'Mother-In-Law Suite Additions in Upstate SC | Remodeling Contractors SC',
    metaDescription: 'Mother-in-law suite addition contractor in Upstate South Carolina for private family suites with bath, bedroom, and accessibility-minded layout planning.',
    intro: 'Mother-in-law suite additions work best when comfort, accessibility, and quiet separation are all considered early in the floor plan.',
    highlights: ['Comfort-led family suite design', 'Accessibility-minded planning', 'Integrated home expansion'],
    serviceType: 'Mother-In-Law Suite Addition',
    image: roomAdditionImage,
    imageAlt: 'Illustration of a mother-in-law suite addition with accessible layout',
    whatItIs: 'A mother-in-law suite addition is a private family living area planned around bedroom, bath, and easier daily accessibility.',
    whoItIsFor: ['Parents moving closer to family', 'Households planning aging-in-place accommodations', 'Homeowners needing a private but connected family wing'],
    optionsTitle: 'Family suite priorities',
    options: [
      { title: 'First-floor convenience', body: 'Single-level access often matters more than raw square footage in long-term family suite planning.' },
      { title: 'Bath and storage fit', body: 'Comfort depends on how well the suite handles bathing, storage, and circulation every day.' }
    ],
    process: ['Review who will use the space', 'Set accessibility and privacy goals', 'Plan structure and finish scope'],
    costFactors: ['Bath complexity', 'Accessibility features', 'Roofline and exterior integration'],
    permittingNote: 'Code review should happen early whenever accessibility, private entry, or cooking features are part of the suite scope.',
    faqs: [
      { question: 'What makes a mother-in-law suite addition work well?', answer: 'The best suites feel quiet, comfortable, and easy to use daily rather than oversized or overcomplicated.' },
      { question: 'Can these additions add resale value?', answer: 'They often can, especially when the space is flexible enough for guest, office, or first-floor suite use later.' }
    ],
    relatedPaths: ['/in-law-suite-additions', '/attached-in-law-suites', '/greenville-sc'],
    projectSlugs: ['second-story-addition-simpsonville'],
    actions: sharedActions,
    ctaTitle: 'Planning a mother-in-law suite addition with long-term family use in mind?',
    ctaText: 'Request an estimate and we will map layout, accessibility, and budget priorities.'
  },
  {
    slug: 'backyard-granny-pods',
    path: '/backyard-granny-pods',
    parentSlug: 'granny-pods',
    eyebrow: 'Supporting Page',
    name: 'Backyard ADUs',
    title: 'Backyard ADUs planned around detached privacy, utility coordination, and practical daily use',
    metaTitle: 'Backyard ADUs in Upstate SC | Remodeling Contractors SC',
    metaDescription: 'Backyard ADU builder in Upstate South Carolina for detached family suites with lot-fit, utility planning, and local zoning awareness.',
    intro: 'Backyard ADUs are a strong option when families need a detached living space close to the house but separate enough for daily privacy.',
    highlights: ['Detached backyard placement', 'Family privacy', 'Utility-aware planning'],
    serviceType: 'Backyard ADU Builder',
    image: grannyPodImage,
    imageAlt: 'Illustration of a backyard ADU with separate entry',
    whatItIs: 'A backyard ADU is a detached living structure placed behind or beside the main home to create private, flexible living space.',
    whoItIsFor: ['Families needing nearby but separate living space', 'Homeowners planning flexible family accommodations', 'Lots that can support detached placement'],
    optionsTitle: 'Backyard planning priorities',
    options: [
      { title: 'Placement and privacy', body: 'Sight lines, access, and the relationship to the main house matter as much as square footage.' },
      { title: 'Utility routing', body: 'Detached living space needs a practical strategy for water, sewer, electrical, and HVAC.' }
    ],
    process: ['Review lot fit', 'Set footprint and feature priorities', 'Coordinate permitting and build scope'],
    costFactors: ['Detached utilities', 'Site prep', 'Bath and kitchenette scope'],
    permittingNote: 'Detached backyard living structures require zoning and setback review before detailed design decisions are finalized.',
    faqs: [
      { question: 'What type of backyard ADU works best for most lots?', answer: 'That depends on setbacks, access, utilities, and how independently the space needs to function day to day.' },
      { question: 'Can a backyard ADU be used for guests later?', answer: 'Yes. Many owners build them for family now and retain flexibility for guest or office use later.' }
    ],
    relatedPaths: ['/granny-pods', '/adu-builders', '/granny-pod-builder-greenville-sc'],
    projectSlugs: ['backyard-granny-pod-anderson'],
    actions: sharedActions,
    ctaTitle: 'Need a backyard ADU planned around your lot and family needs?',
    ctaText: 'Request an estimate and we will review detached placement, utilities, and use goals.'
  },
  {
    slug: 'master-bedroom-suite-additions',
    path: '/master-bedroom-suite-additions',
    parentSlug: 'master-suite-additions',
    eyebrow: 'Supporting Page',
    name: 'Master Bedroom Suite Additions',
    title: 'Master bedroom suite additions that improve privacy, comfort, storage, and daily flow',
    metaTitle: 'Master Bedroom Suite Additions in Upstate SC | Remodeling Contractors SC',
    metaDescription: 'Master bedroom suite addition contractor in Upstate South Carolina for primary bedroom expansions with bath, closet, and layout planning.',
    intro: 'Master bedroom suite additions are often the right solution when the current bedroom and bath no longer fit how the home needs to function.',
    highlights: ['Bedroom and bath expansion', 'Storage and circulation planning', 'Integrated primary suite design'],
    serviceType: 'Master Bedroom Suite Addition',
    image: roomAdditionImage,
    imageAlt: 'Illustration of a master bedroom suite addition',
    whatItIs: 'A master bedroom suite addition expands the owner’s sleeping and bath area into a more complete private living zone.',
    whoItIsFor: ['Homeowners with undersized primary bedrooms', 'Families wanting better bath and closet function', 'Owners improving long-term livability'],
    optionsTitle: 'Suite layout priorities',
    options: [
      { title: 'Bedroom comfort', body: 'The bedroom should feel more usable, not simply larger.' },
      { title: 'Bath and closet fit', body: 'Primary bath and storage design should be resolved together so the suite works as a whole.' }
    ],
    process: ['Audit current layout pain points', 'Plan the right expansion type', 'Coordinate structure and finish scope'],
    costFactors: ['Bath scope', 'Closet buildout', 'Addition size and structural tie-in'],
    permittingNote: 'Setback and structural review still matter even when the focus is primarily bedroom and bath expansion.',
    faqs: [
      { question: 'Is a master bedroom suite addition the same as a primary suite addition?', answer: 'Yes, those terms are often used interchangeably, with primary suite being the more current phrasing.' },
      { question: 'Can I add just bedroom and closet space first?', answer: 'In some cases yes, but it works best when future bath and circulation plans are considered from the start.' }
    ],
    relatedPaths: ['/master-suite-additions', '/master-suite-addition-greenville-sc', '/greenville-sc'],
    projectSlugs: ['second-story-addition-simpsonville'],
    actions: sharedActions,
    ctaTitle: 'Need a better primary suite layout without moving?',
    ctaText: 'Request an estimate and we will help define the right bedroom, bath, and closet scope.'
  },
  {
    slug: 'garage-apartment-additions',
    path: '/garage-apartment-additions',
    parentSlug: 'adu-builders',
    eyebrow: 'Supporting Page',
    name: 'Garage Apartment Additions',
    title: 'Garage apartment additions that combine vehicle storage with flexible upper-level living space',
    metaTitle: 'Garage Apartment Additions in Upstate SC | Remodeling Contractors SC',
    metaDescription: 'Garage apartment addition builder in Upstate South Carolina for storage and upper-level living space planned around ADU and family suite goals.',
    intro: 'Garage apartment additions are a practical path when the property needs storage and secondary living space in the same footprint.',
    highlights: ['Multi-use garage planning', 'Upper-level living space', 'ADU-style flexibility'],
    serviceType: 'Garage Apartment Addition',
    image: garageImage,
    imageAlt: 'Illustration of a garage apartment addition with upper-level living space',
    whatItIs: 'A garage apartment addition combines ground-level parking or workshop space with upper-level living area planned for guests, family, or long-term flexibility.',
    whoItIsFor: ['Owners who need both storage and living space', 'Families considering ADU-style layouts', 'Properties that need compact multi-use square footage'],
    optionsTitle: 'Garage apartment planning priorities',
    options: [
      { title: 'Structure and access', body: 'Stair placement, ceiling height, and framing strategy all affect long-term usability.' },
      { title: 'Living space finish level', body: 'Upper-level layouts can range from storage-ready shells to fully finished family or guest spaces.' }
    ],
    process: ['Review storage and living goals', 'Set the right footprint and structural approach', 'Coordinate utilities, access, and finish scope'],
    costFactors: ['Framing and structural span', 'Utility and plumbing needs', 'Finish level for upper-level living area'],
    permittingNote: 'Garage apartment additions can trigger review around occupancy, parking, egress, and ADU-related code requirements depending on the jurisdiction.',
    faqs: [
      { question: 'Can a garage apartment addition count as an ADU?', answer: 'In many cases it can, but local definitions and code requirements vary by jurisdiction.' },
      { question: 'Is a garage apartment addition good for family use?', answer: 'Yes. It is often a strong fit for guest, family, or flexible future living space while preserving ground-level storage.' }
    ],
    relatedPaths: ['/adu-builders', '/detached-adus', '/adu-builder-greenville-sc'],
    projectSlugs: ['detached-three-bay-garage-greenville'],
    actions: sharedActions,
    ctaTitle: 'Thinking about a garage apartment addition instead of a separate detached unit?',
    ctaText: 'Request an estimate and we will compare the footprint, structure, and use-case tradeoffs.'
  }
];

export const cityPages = [
  {
    slug: 'greenville-sc',
    path: '/greenville-sc',
    city: 'Greenville',
    title: 'Greenville, SC builders for ADUs, in-law suite additions, master suite additions, and ADUs',
    metaTitle: 'Greenville SC ADU, In-Law Suite & ADU Builder | Remodeling Contractors SC',
    metaDescription: 'Greenville, SC contractor for ADU builders, in-law suite additions, master suite additions, and ADUs with local permitting awareness and project-led planning.',
    intro: 'Greenville homeowners are often looking for more livable square footage without leaving the neighborhoods they already value. Our work in this market is built around family-use additions, detached backyard space, and practical layout-driven expansion.',
    marketNote: 'Greenville projects usually depend on lot fit, neighborhood context, parking, and how the new square footage integrates with the existing home. We keep those constraints visible early so scope stays realistic.',
    servicePaths: ['/adu-builders', '/in-law-suite-additions', '/master-suite-additions', '/granny-pods'],
    localServicePaths: ['/adu-builder-greenville-sc', '/in-law-suite-addition-greenville-sc', '/master-suite-addition-greenville-sc', '/granny-pod-builder-greenville-sc'],
    projectSlugs: ['detached-three-bay-garage-greenville'],
    faqs: [
      { question: 'Do you build detached ADUs in Greenville, SC?', answer: 'We help homeowners evaluate detached ADUs, garage apartment additions, and ADU-style structures based on lot fit and local feasibility.' },
      { question: 'What types of additions are most common in Greenville?', answer: 'In-law suite additions, primary suite additions, and backyard family living structures are common because they add long-term flexibility without forcing a move.' }
    ],
    ctaTitle: 'Planning a project in Greenville, SC?',
    ctaText: 'Request an estimate and we will outline the right ADU, family suite, or primary suite strategy for your property.'
  },
  {
    slug: 'simpsonville-sc',
    path: '/simpsonville-sc',
    city: 'Simpsonville',
    title: 'Simpsonville, SC builders for ADUs, in-law suite additions, master suite additions, and ADUs',
    metaTitle: 'Simpsonville SC ADU & Suite Addition Builder | Remodeling Contractors SC',
    metaDescription: 'Simpsonville, SC contractor for ADU builders, in-law suite additions, master suite additions, and ADUs with clean planning and local market knowledge.',
    intro: 'Simpsonville homeowners often choose additions and detached family space to stay in established neighborhoods while improving day-to-day comfort and long-term flexibility.',
    marketNote: 'In Simpsonville, the right scope usually depends on lot layout, neighborhood scale, and how cleanly the addition or detached structure integrates with the existing home.',
    servicePaths: ['/adu-builders', '/in-law-suite-additions', '/master-suite-additions', '/granny-pods'],
    localServicePaths: ['/adu-builder-simpsonville-sc', '/in-law-suite-addition-simpsonville-sc', '/master-suite-addition-simpsonville-sc', '/granny-pod-builder-simpsonville-sc'],
    projectSlugs: ['second-story-addition-simpsonville'],
    faqs: [
      { question: 'Are in-law suite additions common in Simpsonville?', answer: 'Yes. They are a practical fit for families who want multi-generational space without losing the convenience of one shared property.' },
      { question: 'Can a detached family suite work on a Simpsonville lot?', answer: 'Often it can, but setbacks, access, and utilities determine whether a detached plan is practical.' }
    ],
    ctaTitle: 'Need a Simpsonville project plan that fits your lot and goals?',
    ctaText: 'Tell us what kind of space you need and we will help define the most practical build path.'
  },
  {
    slug: 'fountain-inn-sc',
    path: '/fountain-inn-sc',
    city: 'Fountain Inn',
    title: 'Fountain Inn, SC builders for ADUs, family suite additions, and detached backyard living spaces',
    metaTitle: 'Fountain Inn SC ADU & ADU Builder | Remodeling Contractors SC',
    metaDescription: 'Fountain Inn, SC contractor for ADUs, in-law suite additions, master suite additions, and ADUs with practical local planning and disciplined construction.',
    intro: 'Fountain Inn properties often offer strong opportunities for family-oriented additions and detached space when scope is matched carefully to lot size and long-term use.',
    marketNote: 'This market rewards practical planning. The best projects balance square footage, lot use, curb appeal, and future flexibility rather than overbuilding.',
    servicePaths: ['/adu-builders', '/in-law-suite-additions', '/master-suite-additions', '/granny-pods'],
    localServicePaths: ['/adu-builder-fountain-inn-sc', '/in-law-suite-addition-fountain-inn-sc', '/master-suite-addition-fountain-inn-sc', '/granny-pod-builder-fountain-inn-sc'],
    projectSlugs: [],
    faqs: [
      { question: 'Can ADU-style projects work well in Fountain Inn?', answer: 'Yes, when lot access, utility planning, and local rules support detached or garage-based living space.' },
      { question: 'What additions are most useful for long-term value?', answer: 'Primary suites, in-law suites, and flexible detached family space usually provide the strongest day-to-day benefit.' }
    ],
    ctaTitle: 'Need more living space at your Fountain Inn property?',
    ctaText: 'Request an estimate and we will review the most practical family-use expansion strategy.'
  },
  {
    slug: 'greer-sc',
    path: '/greer-sc',
    city: 'Greer',
    title: 'Greer, SC builders for ADUs, primary suite additions, and ADUs',
    metaTitle: 'Greer SC ADU, Suite Addition & ADU Builder | Remodeling Contractors SC',
    metaDescription: 'Greer, SC contractor for ADU builders, in-law suite additions, master suite additions, and ADUs with clean execution and local market awareness.',
    intro: 'Greer homeowners often want additional family space and more comfortable primary living without leaving the convenience of a growing Upstate market.',
    marketNote: 'Greer projects benefit from early planning around lot access, setbacks, and how the new space will affect circulation, parking, and neighborhood fit.',
    servicePaths: ['/adu-builders', '/in-law-suite-additions', '/master-suite-additions', '/granny-pods'],
    localServicePaths: ['/adu-builder-greer-sc', '/in-law-suite-addition-greer-sc', '/master-suite-addition-greer-sc', '/granny-pod-builder-greer-sc'],
    projectSlugs: ['covered-composite-deck-greer'],
    faqs: [
      { question: 'Do you build detached backyard family suites in Greer?', answer: 'Yes, where the lot and jurisdiction support detached structures like ADUs or ADU-style units.' },
      { question: 'Is a master suite addition better than moving?', answer: 'For many homeowners, yes. A well-planned suite addition can improve daily comfort without the cost and disruption of relocating.' }
    ],
    ctaTitle: 'Planning an addition or detached family suite in Greer?',
    ctaText: 'Request an estimate and we will review your property constraints and best-fit scope.'
  },
  {
    slug: 'mauldin-sc',
    path: '/mauldin-sc',
    city: 'Mauldin',
    title: 'Mauldin, SC builders for ADUs, in-law suites, master suite additions, and ADUs',
    metaTitle: 'Mauldin SC ADU & In-Law Suite Builder | Remodeling Contractors SC',
    metaDescription: 'Mauldin, SC contractor for ADU builders, in-law suite additions, master suite additions, and ADUs with local planning and construction discipline.',
    intro: 'In Mauldin, many homeowners need more usable square footage but want a restrained, well-integrated solution instead of a disruptive whole-home overhaul.',
    marketNote: 'Projects in Mauldin work best when the plan is clear about family use, lot fit, and how new square footage ties into the existing roofline and exterior.',
    servicePaths: ['/adu-builders', '/in-law-suite-additions', '/master-suite-additions', '/granny-pods'],
    localServicePaths: ['/adu-builder-mauldin-sc', '/in-law-suite-addition-mauldin-sc', '/master-suite-addition-mauldin-sc', '/granny-pod-builder-mauldin-sc'],
    projectSlugs: ['aluminum-screened-enclosure-mauldin'],
    faqs: [
      { question: 'Can an attached in-law suite work well in Mauldin?', answer: 'Yes. Attached family suites are often a strong fit when homeowners need private family space without building a separate detached structure.' },
      { question: 'What should I consider before planning an ADU?', answer: 'Lot coverage, setbacks, utilities, and how much independence the space needs are the main early planning questions.' }
    ],
    ctaTitle: 'Need more family space in Mauldin?',
    ctaText: 'Request an estimate and we will help define the right attached or detached solution.'
  },
  {
    slug: 'laurens-sc',
    path: '/laurens-sc',
    city: 'Laurens',
    title: 'Laurens, SC builders for ADUs, family suite additions, and backyard ADUs',
    metaTitle: 'Laurens SC ADU & ADU Builder | Remodeling Contractors SC',
    metaDescription: 'Laurens, SC contractor for ADU builders, in-law suite additions, master suite additions, and ADUs planned around property fit and long-term value.',
    intro: 'Laurens homeowners often have the lot flexibility to consider detached family space, garage apartments, and larger suite additions when the planning is done carefully.',
    marketNote: 'The best Laurens projects balance usable square footage with practical site work, utility routing, and a design that still feels appropriate for the property.',
    servicePaths: ['/adu-builders', '/in-law-suite-additions', '/master-suite-additions', '/granny-pods'],
    localServicePaths: ['/adu-builder-laurens-sc', '/in-law-suite-addition-laurens-sc', '/master-suite-addition-laurens-sc', '/granny-pod-builder-laurens-sc'],
    projectSlugs: [],
    faqs: [
      { question: 'Are detached ADUs practical in Laurens?', answer: 'They can be, especially on larger lots, but detached planning still depends on utilities, setbacks, and local rules.' },
      { question: 'What is the best option for multi-generational use?', answer: 'That depends on privacy goals, lot layout, and whether attached or detached space fits the property better.' }
    ],
    ctaTitle: 'Need a family-focused expansion plan for a Laurens property?',
    ctaText: 'Request an estimate and we will compare detached and attached options for your home.'
  },
  {
    slug: 'gray-court-sc',
    path: '/gray-court-sc',
    city: 'Gray Court',
    title: 'Gray Court, SC builders for ADUs, in-law suites, master suite additions, and ADUs',
    metaTitle: 'Gray Court SC ADU & Suite Addition Builder | Remodeling Contractors SC',
    metaDescription: 'Gray Court, SC contractor for ADU builders, in-law suite additions, master suite additions, and ADUs with practical lot-fit planning.',
    intro: 'Gray Court homeowners often have more flexibility in lot size, but practical planning still matters for detached structures, family additions, and long-term use.',
    marketNote: 'Gray Court projects are strongest when scope, utility routing, setbacks, and daily family use are aligned early.',
    servicePaths: ['/adu-builders', '/in-law-suite-additions', '/master-suite-additions', '/granny-pods'],
    localServicePaths: [],
    projectSlugs: [],
    faqs: [
      { question: 'Do detached family structures work well in Gray Court?', answer: 'They often do, especially on larger lots, but utility access and local rules still determine feasibility.' },
      { question: 'What service type is most common in Gray Court?', answer: 'Many homeowners compare detached ADU-style options and attached family suite additions based on privacy and budget.' }
    ],
    ctaTitle: 'Planning a project in Gray Court, SC?',
    ctaText: 'Request an estimate and we will review lot fit, utility access, and the right service direction for your property.'
  },
  {
    slug: 'owings-sc',
    path: '/owings-sc',
    city: 'Owings',
    title: 'Owings, SC builders for ADUs, in-law suites, master suite additions, and ADUs',
    metaTitle: 'Owings SC ADU & Family Suite Builder | Remodeling Contractors SC',
    metaDescription: 'Owings, SC contractor for ADU builders, in-law suite additions, master suite additions, and ADUs with local site-fit planning.',
    intro: 'Owings homeowners often need practical family-use expansion that balances privacy, budget, and long-term property function.',
    marketNote: 'Projects in Owings benefit from early decisions around detached placement, access, and how new square footage integrates with the existing home.',
    servicePaths: ['/adu-builders', '/in-law-suite-additions', '/master-suite-additions', '/granny-pods'],
    localServicePaths: [],
    projectSlugs: [],
    faqs: [
      { question: 'Can an in-law suite addition be a better fit than a detached structure in Owings?', answer: 'Yes, on many properties an attached suite is more practical when utilities or detached placement are constrained.' },
      { question: 'Are ADUs feasible in Owings?', answer: 'They can be, but setback, utility routing, and lot access should be reviewed before finalizing scope.' }
    ],
    ctaTitle: 'Need a plan for an Owings, SC expansion project?',
    ctaText: 'Request an estimate and we will compare attached and detached options for your lot and goals.'
  },
  {
    slug: 'enoree-sc',
    path: '/enoree-sc',
    city: 'Enoree',
    title: 'Enoree, SC builders for ADUs, in-law suites, master suite additions, and ADUs',
    metaTitle: 'Enoree SC ADU & Suite Addition Builder | Remodeling Contractors SC',
    metaDescription: 'Enoree, SC contractor for ADU builders, in-law suite additions, master suite additions, and ADUs with practical build planning.',
    intro: 'Enoree projects are often driven by family-use flexibility and lot-based decisions around detached versus attached expansion.',
    marketNote: 'In Enoree, utility strategy, access, and property layout influence which service path delivers the best long-term result.',
    servicePaths: ['/adu-builders', '/in-law-suite-additions', '/master-suite-additions', '/granny-pods'],
    localServicePaths: [],
    projectSlugs: [],
    faqs: [
      { question: 'What is the first step for an Enoree project?', answer: 'Start with scope and lot-fit review so detached placement, attached integration, and utility requirements are clear.' },
      { question: 'Does Enoree support both detached and attached family living options?', answer: 'Yes in many cases, but feasibility depends on lot conditions and local jurisdiction requirements.' }
    ],
    ctaTitle: 'Planning a family-focused build in Enoree, SC?',
    ctaText: 'Request an estimate and we will map the best-fit service option for your property.'
  },
  {
    slug: 'woodruff-sc',
    path: '/woodruff-sc',
    city: 'Woodruff',
    title: 'Woodruff, SC builders for ADUs, in-law suites, master suite additions, and ADUs',
    metaTitle: 'Woodruff SC ADU & Suite Expansion Builder | Remodeling Contractors SC',
    metaDescription: 'Woodruff, SC contractor for ADU builders, in-law suite additions, master suite additions, and ADUs with local build planning.',
    intro: 'Woodruff homeowners often choose additions and detached family living structures to gain long-term flexibility without moving.',
    marketNote: 'Woodruff projects perform best when lot constraints, utility routing, and family-use priorities are resolved before construction starts.',
    servicePaths: ['/adu-builders', '/in-law-suite-additions', '/master-suite-additions', '/granny-pods'],
    localServicePaths: [],
    projectSlugs: [],
    faqs: [
      { question: 'Are detached ADUs practical in Woodruff?', answer: 'They can be, especially where lot layout and access support detached placement and utilities.' },
      { question: 'What additions are most requested in Woodruff?', answer: 'In-law suite additions and primary suite expansions are common when homeowners need more family-ready square footage.' }
    ],
    ctaTitle: 'Need a Woodruff, SC project scope that fits your property?',
    ctaText: 'Request an estimate and we will outline practical detached and attached options for your goals.'
  },
  {
    slug: 'clinton-sc',
    path: '/clinton-sc',
    city: 'Clinton',
    title: 'Clinton, SC builders for ADUs, in-law suites, master suite additions, and ADUs',
    metaTitle: 'Clinton SC ADU & Family Suite Builder | Remodeling Contractors SC',
    metaDescription: 'Clinton, SC contractor for ADU builders, in-law suite additions, master suite additions, and ADUs with local planning awareness.',
    intro: 'Clinton homeowners frequently evaluate detached and attached options to add practical family space while preserving long-term property value.',
    marketNote: 'Clinton projects are strongest when parking, utility strategy, and structure type are planned around local lot realities.',
    servicePaths: ['/adu-builders', '/in-law-suite-additions', '/master-suite-additions', '/granny-pods'],
    localServicePaths: [],
    projectSlugs: [],
    faqs: [
      { question: 'Can I build a detached family structure in Clinton?', answer: 'Often yes, but the property layout, setbacks, and utilities determine whether detached scope is practical.' },
      { question: 'Is an in-law suite addition common in Clinton?', answer: 'Yes, attached family suites are often selected when homeowners need private space with close main-home access.' }
    ],
    ctaTitle: 'Planning an addition or detached family space in Clinton, SC?',
    ctaText: 'Request an estimate and we will help define the right layout, structure, and service path.'
  },
  {
    slug: 'joanna-sc',
    path: '/joanna-sc',
    city: 'Joanna',
    title: 'Joanna, SC builders for ADUs, in-law suites, master suite additions, and ADUs',
    metaTitle: 'Joanna SC ADU & Suite Addition Builder | Remodeling Contractors SC',
    metaDescription: 'Joanna, SC contractor for ADU builders, in-law suite additions, master suite additions, and ADUs with practical local planning.',
    intro: 'Joanna homeowners often need practical space-creation strategies that fit existing lots, family use needs, and long-term budget priorities.',
    marketNote: 'Projects in Joanna benefit from early planning around utility access, detached placement, and attached integration with the main home.',
    servicePaths: ['/adu-builders', '/in-law-suite-additions', '/master-suite-additions', '/granny-pods'],
    localServicePaths: [],
    projectSlugs: [],
    faqs: [
      { question: 'What is the best first step for a Joanna expansion project?', answer: 'Begin with lot-fit and service-type review so detached and attached options are compared before design work starts.' },
      { question: 'Can ADU-style projects work in Joanna?', answer: 'They can, depending on setbacks, utility strategy, and the intended long-term use of the structure.' }
    ],
    ctaTitle: 'Need a local plan for a Joanna, SC project?',
    ctaText: 'Request an estimate and we will review your lot and define the right service option for your goals.'
  }
];

export const localServicePages = [
  {
    slug: 'adu-builder-greenville-sc',
    path: '/adu-builder-greenville-sc',
    citySlug: 'greenville-sc',
    cityLabel: 'Greenville, South Carolina',
    parentSlug: 'adu-builders',
    eyebrow: 'Local Service Page',
    name: 'ADU Builder Greenville, SC',
    title: 'ADU builder in Greenville, SC for detached accessory dwelling units, garage apartments, and family-ready secondary living space',
    metaTitle: 'ADU Builder Greenville SC | Remodeling Contractors SC',
    metaDescription: 'Greenville, SC ADU builder for detached ADUs, accessory dwelling units, and garage apartment additions with local lot-fit and permitting awareness.',
    intro: 'Homeowners searching for an ADU builder in Greenville, SC usually need more flexible square footage without leaving the property they already value.',
    highlights: ['Greenville lot-fit review', 'Detached and garage-based options', 'Family-use and flexibility planning'],
    serviceType: 'ADU Builder',
    image: grannyPodImage,
    imageAlt: 'Illustration of a detached ADU planned for Greenville, South Carolina',
    whatItIs: 'This page focuses on ADU builder demand in Greenville, where homeowners often weigh detached units, garage apartment additions, and family-use secondary living space.',
    whoItIsFor: ['Greenville homeowners planning detached backyard living space', 'Families considering garage apartments or in-law alternatives', 'Owners evaluating long-term flexible use of their property'],
    optionsTitle: 'Greenville ADU options',
    options: [
      { title: 'Detached ADUs', body: 'A detached accessory dwelling unit often provides the most independence when lot size and access are workable.' },
      { title: 'Garage apartment additions', body: 'Garage-based ADUs are often a smart fit when the property also needs parking or workshop space.' }
    ],
    process: ['Review Greenville lot constraints', 'Select the best ADU format', 'Coordinate utilities, planning, and permit direction'],
    costFactors: ['Site access and utilities', 'Detached vs garage-based structure', 'Kitchen, bath, and finish scope'],
    permittingNote: 'Greenville ADU planning should account for zoning, lot size, parking, setbacks, and whether the space functions as a detached dwelling or integrated addition.',
    faqs: [
      { question: 'Can you build a detached ADU in Greenville, SC?', answer: 'We help homeowners evaluate detached ADUs based on lot fit, utilities, and local feasibility before detailed scope is finalized.' },
      { question: 'What is the best ADU option for a Greenville property?', answer: 'That depends on yard depth, privacy goals, parking needs, and whether the project is better suited to a detached unit or garage apartment addition.' }
    ],
    relatedPaths: ['/adu-builders', '/greenville-sc', '/detached-adus'],
    projectSlugs: ['detached-three-bay-garage-greenville'],
    actions: sharedActions,
    ctaTitle: 'Need an ADU builder in Greenville, SC?',
    ctaText: 'Request an estimate and we will review detached, attached, and garage-based ADU paths for your lot.'
  },
  {
    slug: 'in-law-suite-addition-greenville-sc',
    path: '/in-law-suite-addition-greenville-sc',
    citySlug: 'greenville-sc',
    cityLabel: 'Greenville, South Carolina',
    parentSlug: 'in-law-suite-additions',
    eyebrow: 'Local Service Page',
    name: 'In-Law Suite Addition Greenville, SC',
    title: 'In-law suite addition builder in Greenville, SC for attached family suites and mother-in-law additions',
    metaTitle: 'In-Law Suite Addition Greenville SC | Remodeling Contractors SC',
    metaDescription: 'Greenville, SC in-law suite addition contractor for attached family suites, mother-in-law suite additions, and multi-generational living space.',
    intro: 'Families in Greenville often need an in-law suite addition that balances privacy, accessibility, and a cleaner connection to the main home.',
    highlights: ['Greenville family suite planning', 'Attached private space', 'Accessibility-minded layouts'],
    serviceType: 'In-Law Suite Addition',
    image: roomAdditionImage,
    imageAlt: 'Illustration of an in-law suite addition planned for Greenville, South Carolina',
    whatItIs: 'This page focuses on in-law suite addition demand in Greenville, where many homeowners want to keep family close while preserving privacy and daily comfort.',
    whoItIsFor: ['Families planning for parents or relatives', 'Owners needing first-floor suite convenience', 'Homeowners comparing in-law additions with detached backyard alternatives'],
    optionsTitle: 'Greenville in-law suite options',
    options: [
      { title: 'Attached suites', body: 'Attached suites are often the strongest fit in Greenville neighborhoods where detached structures are more constrained.' },
      { title: 'Mother-in-law additions', body: 'These layouts prioritize accessible entry, bath convenience, and flexible long-term family use.' }
    ],
    process: ['Clarify family living needs', 'Test attached layout options', 'Coordinate structure, utilities, and permit direction'],
    costFactors: ['Bath and private entry scope', 'Foundation and roof tie-in', 'Accessibility features'],
    permittingNote: 'In Greenville, in-law suite additions should be planned around setbacks, lot coverage, and whether the space changes how the home is used or classified.',
    faqs: [
      { question: 'What makes a good in-law suite addition in Greenville?', answer: 'The best suites balance private circulation, easy daily use, and a clean architectural relationship to the main home.' },
      { question: 'Should an in-law suite be attached or detached?', answer: 'That depends on privacy goals, lot layout, and whether the neighborhood and property support detached construction.' }
    ],
    relatedPaths: ['/in-law-suite-additions', '/greenville-sc', '/attached-in-law-suites'],
    projectSlugs: ['second-story-addition-simpsonville'],
    actions: sharedActions,
    ctaTitle: 'Need an in-law suite addition in Greenville, SC?',
    ctaText: 'Request an estimate and we will help map the right attached or detached family suite strategy.'
  },
  {
    slug: 'master-suite-addition-greenville-sc',
    path: '/master-suite-addition-greenville-sc',
    citySlug: 'greenville-sc',
    cityLabel: 'Greenville, South Carolina',
    parentSlug: 'master-suite-additions',
    eyebrow: 'Local Service Page',
    name: 'Master Suite Addition Greenville, SC',
    title: 'Master suite addition builder in Greenville, SC for primary bedroom, bath, and closet expansion',
    metaTitle: 'Master Suite Addition Greenville SC | Remodeling Contractors SC',
    metaDescription: 'Greenville, SC master suite addition contractor for primary suite additions, bedroom suite additions, and layout-driven home expansion.',
    intro: 'Greenville homeowners often choose a master suite addition when the existing bedroom and bath no longer support how they actually live day to day.',
    highlights: ['Primary suite expansion', 'Greenville layout planning', 'Bedroom, bath, and closet fit'],
    serviceType: 'Master Suite Addition',
    image: roomAdditionImage,
    imageAlt: 'Illustration of a master suite addition planned for Greenville, South Carolina',
    whatItIs: 'This page focuses on master suite addition demand in Greenville, where homeowners often need more comfort, privacy, and better layout flow without moving.',
    whoItIsFor: ['Owners with undersized primary bedrooms', 'Families wanting a better bath and closet layout', 'Homeowners comparing expansion with relocation'],
    optionsTitle: 'Greenville primary suite options',
    options: [
      { title: 'Rear suite additions', body: 'Rear additions often preserve Greenville curb appeal while delivering larger suite layouts.' },
      { title: 'Side wing additions', body: 'Side additions can create a stronger private zone where the lot allows more horizontal expansion.' }
    ],
    process: ['Audit current suite problems', 'Define the right addition type', 'Coordinate structure, roofline, and finish scope'],
    costFactors: ['Addition size', 'Primary bath scope', 'Closet and storage design'],
    permittingNote: 'Greenville master suite additions still require practical review of setbacks, lot coverage, and roofline integration before detailed build planning.',
    faqs: [
      { question: 'What is usually included in a master suite addition?', answer: 'Most projects combine bedroom expansion with a better bath, improved storage, and stronger privacy from living areas.' },
      { question: 'Can a Greenville master suite addition be first-floor?', answer: 'Yes. First-floor primary suite planning is often a strong fit for long-term convenience and aging-in-place goals.' }
    ],
    relatedPaths: ['/master-suite-additions', '/greenville-sc', '/master-bedroom-suite-additions'],
    projectSlugs: ['second-story-addition-simpsonville'],
    actions: sharedActions,
    ctaTitle: 'Need a master suite addition in Greenville, SC?',
    ctaText: 'Request an estimate and we will help define the right bedroom, bath, and closet expansion strategy.'
  },
  {
    slug: 'granny-pod-builder-greenville-sc',
    path: '/granny-pod-builder-greenville-sc',
    citySlug: 'greenville-sc',
    cityLabel: 'Greenville, South Carolina',
    parentSlug: 'granny-pods',
    eyebrow: 'Local Service Page',
    name: 'ADU Builder Greenville, SC',
    title: 'Detached ADU builder in Greenville, SC for backyard family suites and detached private living space',
    metaTitle: 'ADU Builder Greenville SC | Remodeling Contractors SC',
    metaDescription: 'Greenville, SC ADU builder for backyard family suites, detached private living space, and zoning-aware lot planning.',
    intro: 'Homeowners looking for an ADU builder in Greenville, SC usually need detached family space with more privacy than an attached addition can provide.',
    highlights: ['Greenville backyard family suites', 'Detached privacy', 'Lot-fit and utility coordination'],
    serviceType: 'ADU Builder',
    image: grannyPodImage,
    imageAlt: 'Illustration of an ADU planned for Greenville, South Carolina',
    whatItIs: 'This page focuses on ADU builder demand in Greenville, where detached backyard living space can be an effective answer for multi-generational living and flexible family use.',
    whoItIsFor: ['Families planning backyard living space for parents or relatives', 'Homeowners wanting detached privacy on the same lot', 'Owners comparing ADUs with larger ADU options'],
    optionsTitle: 'Greenville ADU options',
    options: [
      { title: 'Compact backyard pods', body: 'Smaller detached pods often provide the strongest balance of privacy, cost control, and site fit.' },
      { title: 'Larger detached family suites', body: 'Where the lot supports it, a larger detached layout can provide better long-term flexibility.' }
    ],
    process: ['Review detached placement options', 'Define the right footprint and feature set', 'Coordinate utilities, zoning review, and construction planning'],
    costFactors: ['Site prep and utility routing', 'Bath and kitchenette scope', 'Detached porch or accessibility features'],
    permittingNote: 'Greenville ADU planning should start with zoning, setbacks, access, and utility strategy before the detached layout is finalized.',
    faqs: [
      { question: 'Are backyard ADUs allowed in Greenville, SC?', answer: 'That depends on the property and jurisdiction. We evaluate zoning, setbacks, utility access, and the intended use before recommending a detached direction.' },
      { question: 'What is the best detached family suite option for a Greenville backyard?', answer: 'The best option depends on privacy goals, lot size, utilities, and whether a compact ADU or larger ADU-style structure makes more sense.' }
    ],
    relatedPaths: ['/granny-pods', '/greenville-sc', '/backyard-granny-pods'],
    projectSlugs: ['backyard-granny-pod-anderson'],
    actions: sharedActions,
    ctaTitle: 'Need an ADU builder in Greenville, SC?',
    ctaText: 'Request an estimate and we will review detached family suite options that fit your lot and long-term goals.'
  },

  // ── Simpsonville, SC ─────────────────────────────────────────────────
  {
    slug: 'adu-builder-simpsonville-sc',
    path: '/adu-builder-simpsonville-sc',
    citySlug: 'simpsonville-sc',
    cityLabel: 'Simpsonville, South Carolina',
    parentSlug: 'adu-builders',
    eyebrow: 'Local Service Page',
    name: 'ADU Builder Simpsonville, SC',
    title: 'ADU builder in Simpsonville, SC for detached backyard units, garage apartments, and family-ready secondary living space',
    metaTitle: 'ADU Builder Simpsonville SC | Remodeling Contractors SC',
    metaDescription: 'Simpsonville, SC ADU builder for detached accessory dwelling units, garage apartment additions, and secondary living space with lot-fit and permitting awareness.',
    intro: 'Homeowners in Simpsonville looking for an ADU builder often want flexible secondary living space that keeps family close without disrupting the main home.',
    highlights: ['Simpsonville lot-fit planning', 'Detached and garage-based options', 'Long-term multi-use flexibility'],
    serviceType: 'ADU Builder',
    image: grannyPodImage,
    imageAlt: 'Illustration of a detached ADU planned for Simpsonville, South Carolina',
    whatItIs: 'This page focuses on ADU builder demand in Simpsonville, where established neighborhoods and family-oriented lots drive a range of detached and garage-based living space needs.',
    whoItIsFor: ['Simpsonville homeowners planning secondary backyard living space', 'Families considering garage apartment additions for long-term flexibility', 'Owners evaluating detached ADU vs attached in-law suite options'],
    optionsTitle: 'Simpsonville ADU options',
    options: [
      { title: 'Detached ADUs', body: 'A detached unit works well when the Simpsonville lot has enough yard depth, good access, and clear utility routing.' },
      { title: 'Garage apartment additions', body: 'Combining storage and upper-level living space is often a smart path when the lot needs multi-use square footage.' }
    ],
    process: ['Identify which ADU format fits the Simpsonville lot', 'Review setbacks, utilities, and access', 'Coordinate permitting and construction planning'],
    costFactors: ['Lot depth and utility distance', 'Detached vs garage-based structure choice', 'Bath, kitchen, and finish scope'],
    permittingNote: 'Simpsonville ADU planning should start with a review of zoning, subdivision restrictions, setbacks, and how the structure is classified before detailed scope is developed.',
    faqs: [
      { question: 'Can you build a detached ADU in Simpsonville, SC?', answer: 'We evaluate each Simpsonville lot based on yard depth, access, utilities, and local rules before recommending a detached direction.' },
      { question: 'Is a garage apartment a good ADU option in Simpsonville?', answer: 'Often yes. Garage-based ADUs can combine parking or workshop storage with upper-level family living space in a compact footprint.' }
    ],
    relatedPaths: ['/adu-builders', '/simpsonville-sc', '/detached-adus'],
    projectSlugs: ['second-story-addition-simpsonville'],
    actions: sharedActions,
    ctaTitle: 'Need an ADU builder in Simpsonville, SC?',
    ctaText: 'Request an estimate and we will review your lot, access, and the best detached or garage-based ADU path.'
  },
  {
    slug: 'in-law-suite-addition-simpsonville-sc',
    path: '/in-law-suite-addition-simpsonville-sc',
    citySlug: 'simpsonville-sc',
    cityLabel: 'Simpsonville, South Carolina',
    parentSlug: 'in-law-suite-additions',
    eyebrow: 'Local Service Page',
    name: 'In-Law Suite Addition Simpsonville, SC',
    title: 'In-law suite addition builder in Simpsonville, SC for attached family suites and mother-in-law additions',
    metaTitle: 'In-Law Suite Addition Simpsonville SC | Remodeling Contractors SC',
    metaDescription: 'Simpsonville, SC in-law suite addition contractor for attached family suites, mother-in-law suite additions, and multi-generational living space with practical layout planning.',
    intro: 'Families in Simpsonville often choose an in-law suite addition to keep aging parents or adult children close without giving up the privacy that makes daily life work.',
    highlights: ['Simpsonville family suite planning', 'Private access and daily comfort', 'Attached layout integration'],
    serviceType: 'In-Law Suite Addition',
    image: roomAdditionImage,
    imageAlt: 'Illustration of an in-law suite addition planned for Simpsonville, South Carolina',
    whatItIs: 'This page focuses on in-law suite addition demand in Simpsonville, where established neighborhoods and family-oriented homeowners often need an integrated private living space with clean daily function.',
    whoItIsFor: ['Simpsonville families planning space for aging parents or relatives', 'Homeowners wanting a first-floor suite for long-term family use', 'Owners comparing attached in-law additions with detached backyard alternatives'],
    optionsTitle: 'Simpsonville in-law suite options',
    options: [
      { title: 'Attached family suites', body: 'Attached suites are often the strongest fit in Simpsonville neighborhoods where lot layout or subdivision rules limit detached construction.' },
      { title: 'Mother-in-law additions', body: 'These layouts emphasize accessible entry, bath convenience, and a smooth transition between private and shared family space.' }
    ],
    process: ['Clarify family privacy and daily living needs', 'Test layout integration with the existing home', 'Finalize structure, utilities, and permitting approach'],
    costFactors: ['Private entry, bath, and kitchenette scope', 'Structural tie-in and roofline integration', 'Accessibility features and finish level'],
    permittingNote: 'In Simpsonville, in-law suite additions should be planned around setbacks, lot coverage, egress, and how any cooking or utility features affect the local code classification.',
    faqs: [
      { question: 'What is typically included in a Simpsonville in-law suite addition?', answer: 'Most projects include a bedroom, private bath, sitting space, and the option for a private entrance or kitchenette depending on the property and local rules.' },
      { question: 'Should a Simpsonville in-law suite be attached or detached?', answer: 'That depends on lot size, privacy goals, and whether the neighborhood or zoning supports a detached structure.' }
    ],
    relatedPaths: ['/in-law-suite-additions', '/simpsonville-sc', '/attached-in-law-suites'],
    projectSlugs: ['second-story-addition-simpsonville'],
    actions: sharedActions,
    ctaTitle: 'Need an in-law suite addition in Simpsonville, SC?',
    ctaText: 'Request an estimate and we will help define the right attached or detached family suite for your property.'
  },
  {
    slug: 'master-suite-addition-simpsonville-sc',
    path: '/master-suite-addition-simpsonville-sc',
    citySlug: 'simpsonville-sc',
    cityLabel: 'Simpsonville, South Carolina',
    parentSlug: 'master-suite-additions',
    eyebrow: 'Local Service Page',
    name: 'Master Suite Addition Simpsonville, SC',
    title: 'Master suite addition builder in Simpsonville, SC for primary bedroom, bath, and closet expansion',
    metaTitle: 'Master Suite Addition Simpsonville SC | Remodeling Contractors SC',
    metaDescription: 'Simpsonville, SC master suite addition contractor for primary suite additions, bedroom suite additions, and layout-driven home expansion with practical planning.',
    intro: 'Simpsonville homeowners often choose a master suite addition when the current bedroom and bath layout no longer fits how the family actually uses the home.',
    highlights: ['Primary suite planning', 'Simpsonville layout strategy', 'Bedroom, bath, and closet integration'],
    serviceType: 'Master Suite Addition',
    image: roomAdditionImage,
    imageAlt: 'Illustration of a master suite addition planned for Simpsonville, South Carolina',
    whatItIs: 'This page focuses on master suite addition demand in Simpsonville, where established homes frequently need a better primary bedroom, improved bath flow, and stronger daily comfort.',
    whoItIsFor: ['Simpsonville owners with undersized primary bedrooms or older bath layouts', 'Families who want a first-floor suite for long-term convenience', 'Homeowners comparing a suite addition with relocation'],
    optionsTitle: 'Simpsonville primary suite options',
    options: [
      { title: 'Rear suite additions', body: 'Rear additions often create the cleanest path to a larger bedroom and bath in Simpsonville without changing street-facing curb appeal.' },
      { title: 'Side wing additions', body: 'Side additions can create a more private suite zone where the lot provides enough horizontal clearance.' }
    ],
    process: ['Identify the primary layout pain points', 'Select the best addition type for the Simpsonville property', 'Coordinate roofline tie-in, structure, and finish scope'],
    costFactors: ['Addition size and structural complexity', 'Primary bath and closet scope', 'Roofline integration and window package'],
    permittingNote: 'Simpsonville master suite additions require standard setback and lot coverage review, plus consideration of HOA design guidelines where applicable.',
    faqs: [
      { question: 'Can a master suite addition in Simpsonville be designed for first-floor living?', answer: 'Yes. First-floor primary suite planning is often a strong long-term investment, especially for aging-in-place goals.' },
      { question: 'How long does a master suite addition take in Simpsonville?', answer: 'That depends on size, structural complexity, and permitting timeline. We develop a realistic schedule as part of the estimate process.' }
    ],
    relatedPaths: ['/master-suite-additions', '/simpsonville-sc', '/master-bedroom-suite-additions'],
    projectSlugs: ['second-story-addition-simpsonville'],
    actions: sharedActions,
    ctaTitle: 'Need a master suite addition in Simpsonville, SC?',
    ctaText: 'Request an estimate and we will outline the right bedroom, bath, and closet expansion for your property.'
  },
  {
    slug: 'granny-pod-builder-simpsonville-sc',
    path: '/granny-pod-builder-simpsonville-sc',
    citySlug: 'simpsonville-sc',
    cityLabel: 'Simpsonville, South Carolina',
    parentSlug: 'granny-pods',
    eyebrow: 'Local Service Page',
    name: 'ADU Builder Simpsonville, SC',
    title: 'Detached ADU builder in Simpsonville, SC for detached backyard family suites and private living space',
    metaTitle: 'ADU Builder Simpsonville SC | Remodeling Contractors SC',
    metaDescription: 'Simpsonville, SC ADU builder for backyard family suites, detached private living space, and lot-fit planning with local permitting awareness.',
    intro: 'Families searching for an ADU builder in Simpsonville often want a detached backyard space that gives aging relatives or adult children real privacy without a separate property.',
    highlights: ['Simpsonville backyard family suites', 'Detached privacy and access', 'Lot-fit and utility planning'],
    serviceType: 'ADU Builder',
    image: grannyPodImage,
    imageAlt: 'Illustration of a backyard ADU planned for Simpsonville, South Carolina',
    whatItIs: 'This page focuses on ADU builder demand in Simpsonville, where established residential lots can often support a detached backyard suite when placement and utility planning are handled correctly.',
    whoItIsFor: ['Simpsonville families planning private backyard living space for relatives', 'Homeowners who need detached privacy on the same lot', 'Owners comparing ADUs with attached in-law suite options'],
    optionsTitle: 'Simpsonville ADU options',
    options: [
      { title: 'Compact backyard pods', body: 'Smaller pods often provide the strongest balance of privacy, site fit, and cost control on established Simpsonville lots.' },
      { title: 'Larger detached family suites', body: 'Where the lot allows a broader footprint, a larger suite can provide more storage, a bigger bath, and better long-term flexibility.' }
    ],
    process: ['Evaluate Simpsonville lot placement, setbacks, and utility access', 'Define the right footprint and living features', 'Coordinate permitting, structure, and construction planning'],
    costFactors: ['Detached foundation and utility routing', 'Bath and kitchenette scope', 'Porch, accessibility, and finish level'],
    permittingNote: 'Simpsonville ADU planning should start with zoning review, setbacks, subdivision restrictions, and utility connection strategy before the layout is finalized.',
    faqs: [
      { question: 'Are backyard ADUs practical in Simpsonville neighborhoods?', answer: 'They can be, but subdivision restrictions, setbacks, and utility access all affect whether a detached pod is feasible on a specific lot.' },
      { question: 'What detached family suite options work best in Simpsonville?', answer: 'That depends on yard depth, access, privacy goals, and how independently the space needs to function day to day.' }
    ],
    relatedPaths: ['/granny-pods', '/simpsonville-sc', '/backyard-granny-pods'],
    projectSlugs: ['second-story-addition-simpsonville'],
    actions: sharedActions,
    ctaTitle: 'Need an ADU builder in Simpsonville, SC?',
    ctaText: 'Request an estimate and we will review lot fit, detached placement, and family suite options for your property.'
  },

  // ── Greer, SC ────────────────────────────────────────────────────────
  {
    slug: 'adu-builder-greer-sc',
    path: '/adu-builder-greer-sc',
    citySlug: 'greer-sc',
    cityLabel: 'Greer, South Carolina',
    parentSlug: 'adu-builders',
    eyebrow: 'Local Service Page',
    name: 'ADU Builder Greer, SC',
    title: 'ADU builder in Greer, SC for detached accessory dwelling units, garage apartments, and flexible backyard living space',
    metaTitle: 'ADU Builder Greer SC | Remodeling Contractors SC',
    metaDescription: 'Greer, SC ADU builder for detached ADUs, garage apartment additions, and secondary living space with lot-fit planning and permitting awareness.',
    intro: 'Greer homeowners looking for an ADU builder often need flexible backyard living space that can serve family today and adapt to changing needs over time.',
    highlights: ['Greer lot-fit review', 'Detached and garage-based options', 'Family and flexible-use planning'],
    serviceType: 'ADU Builder',
    image: grannyPodImage,
    imageAlt: 'Illustration of a detached ADU planned for Greer, South Carolina',
    whatItIs: 'This page focuses on ADU builder demand in Greer, a growing Upstate market where homeowners increasingly want secondary living space for family use, guest flexibility, or long-term property value.',
    whoItIsFor: ['Greer homeowners planning detached backyard living space', 'Families considering garage apartment additions', 'Owners who want flexible ADU-style square footage without a second property'],
    optionsTitle: 'Greer ADU options',
    options: [
      { title: 'Detached ADUs', body: 'Detached units work well in Greer when the yard provides enough depth, clear access, and workable utility routing.' },
      { title: 'Garage apartment additions', body: 'For properties that need both storage and living flexibility, garage-based ADUs often deliver the best use of available footprint.' }
    ],
    process: ['Evaluate Greer lot constraints and access options', 'Define the most practical ADU type for the property', 'Coordinate utilities, zoning, and permitting direction'],
    costFactors: ['Site access and utility distance', 'Detached vs garage-based structure', 'Kitchen, bath, and finish scope'],
    permittingNote: 'Greer ADU planning should address zoning jurisdiction, setbacks, parking requirements, and how the structure is classified before the scope is finalized.',
    faqs: [
      { question: 'Can you build a detached ADU in Greer, SC?', answer: 'We evaluate each Greer property based on lot size, access, utilities, and local rules before recommending a detached option.' },
      { question: 'Is a garage apartment a good ADU choice in Greer?', answer: 'It often is. Garage-based ADUs combine practical storage space with flexible upper-level living in a compact, cost-efficient footprint.' }
    ],
    relatedPaths: ['/adu-builders', '/greer-sc', '/detached-adus'],
    projectSlugs: ['covered-composite-deck-greer'],
    actions: sharedActions,
    ctaTitle: 'Need an ADU builder in Greer, SC?',
    ctaText: 'Request an estimate and we will compare detached, attached, and garage-based ADU options for your Greer property.'
  },
  {
    slug: 'in-law-suite-addition-greer-sc',
    path: '/in-law-suite-addition-greer-sc',
    citySlug: 'greer-sc',
    cityLabel: 'Greer, South Carolina',
    parentSlug: 'in-law-suite-additions',
    eyebrow: 'Local Service Page',
    name: 'In-Law Suite Addition Greer, SC',
    title: 'In-law suite addition builder in Greer, SC for attached family suites and multi-generational living space',
    metaTitle: 'In-Law Suite Addition Greer SC | Remodeling Contractors SC',
    metaDescription: 'Greer, SC in-law suite addition contractor for attached family suites, mother-in-law additions, and multi-generational living space with practical Greer layout planning.',
    intro: 'Greer families often need an in-law suite addition that creates real private daily comfort without making the main home feel subdivided or cramped.',
    highlights: ['Greer family suite planning', 'Private circulation and access', 'Multi-generational daily comfort'],
    serviceType: 'In-Law Suite Addition',
    image: roomAdditionImage,
    imageAlt: 'Illustration of an in-law suite addition planned for Greer, South Carolina',
    whatItIs: 'This page focuses on in-law suite addition demand in Greer, where a growing population of multi-generational households needs well-planned private family space integrated with the existing home.',
    whoItIsFor: ['Greer families planning space for parents or adult relatives', 'Homeowners wanting a private first-floor suite without moving', 'Owners comparing attached in-law suites with detached backyard alternatives'],
    optionsTitle: 'Greer in-law suite options',
    options: [
      { title: 'Attached family suites', body: 'Attached suites often make the most sense in Greer when lot layout limits detached construction but privacy and circulation still matter.' },
      { title: 'Mother-in-law additions', body: 'These layouts focus on accessible entry, comfortable bath design, and easy daily movement between private and shared spaces.' }
    ],
    process: ['Define family privacy and daily use priorities', 'Test layout integration with existing home structure', 'Finalize structure, utilities, and local permitting direction'],
    costFactors: ['Private entry, bath, and kitchen scope', 'Foundation and roofline tie-in complexity', 'Accessibility features and finish level'],
    permittingNote: 'Greer in-law suite additions should be planned against setbacks, lot coverage limits, egress requirements, and whether cooking or utility features affect the code classification.',
    faqs: [
      { question: 'What makes an in-law suite addition work well in Greer?', answer: 'The best suites deliver genuine private circulation and daily comfort while still integrating cleanly with the main home exterior and flow.' },
      { question: 'Can a Greer in-law suite have its own entrance?', answer: 'Yes. Private entry is a common priority, and it can often be achieved without making the addition feel disconnected from the main house.' }
    ],
    relatedPaths: ['/in-law-suite-additions', '/greer-sc', '/attached-in-law-suites'],
    projectSlugs: ['covered-composite-deck-greer'],
    actions: sharedActions,
    ctaTitle: 'Need an in-law suite addition in Greer, SC?',
    ctaText: 'Request an estimate and we will map an attached or detached family suite strategy for your Greer property.'
  },
  {
    slug: 'master-suite-addition-greer-sc',
    path: '/master-suite-addition-greer-sc',
    citySlug: 'greer-sc',
    cityLabel: 'Greer, South Carolina',
    parentSlug: 'master-suite-additions',
    eyebrow: 'Local Service Page',
    name: 'Master Suite Addition Greer, SC',
    title: 'Master suite addition builder in Greer, SC for primary bedroom, bath, and closet expansion',
    metaTitle: 'Master Suite Addition Greer SC | Remodeling Contractors SC',
    metaDescription: 'Greer, SC master suite addition contractor for primary bedroom additions, suite expansions, and layout-driven home improvement without moving.',
    intro: 'Greer homeowners often consider a master suite addition when the existing primary bedroom and bath no longer keeps pace with how the home needs to work.',
    highlights: ['Primary suite expansion', 'Greer layout-driven planning', 'Bedroom, bath, and storage integration'],
    serviceType: 'Master Suite Addition',
    image: roomAdditionImage,
    imageAlt: 'Illustration of a master suite addition planned for Greer, South Carolina',
    whatItIs: 'This page focuses on master suite addition demand in Greer, where homeowners frequently need a more comfortable and functional primary living space that keeps pace with daily life.',
    whoItIsFor: ['Greer owners with undersized primary bedrooms', 'Families wanting improved bath layout and storage without moving', 'Homeowners evaluating whether a suite addition is better than relocating'],
    optionsTitle: 'Greer primary suite options',
    options: [
      { title: 'Rear suite additions', body: 'Rear additions often give Greer homeowners the cleanest path to larger bedroom and bath layouts without changing the street view.' },
      { title: 'Side wing additions', body: 'Side additions can create a stronger private zone when the lot allows enough horizontal space.' }
    ],
    process: ['Audit current suite layout problems', 'Define the best addition type for the Greer property', 'Coordinate roofline, structural scope, and finish quality'],
    costFactors: ['Addition size and structural tie-in', 'Bath scope and plumbing work', 'Closet buildout and window package'],
    permittingNote: 'Greer master suite additions require practical setback, lot coverage, and structural review even when the primary focus is bedroom and bath expansion.',
    faqs: [
      { question: 'Is a master suite addition worth it in Greer, SC?', answer: 'For most owners, a well-planned suite addition delivers daily comfort at a lower combined cost and disruption than moving to a larger home.' },
      { question: 'Can a first-floor primary suite addition be built in Greer?', answer: 'Yes. First-floor suite planning is often a strong preference for long-term convenience and aging-in-place goals.' }
    ],
    relatedPaths: ['/master-suite-additions', '/greer-sc', '/master-bedroom-suite-additions'],
    projectSlugs: ['covered-composite-deck-greer'],
    actions: sharedActions,
    ctaTitle: 'Need a master suite addition in Greer, SC?',
    ctaText: 'Request an estimate and we will outline the right bedroom, bath, and layout scope for your property.'
  },
  {
    slug: 'granny-pod-builder-greer-sc',
    path: '/granny-pod-builder-greer-sc',
    citySlug: 'greer-sc',
    cityLabel: 'Greer, South Carolina',
    parentSlug: 'granny-pods',
    eyebrow: 'Local Service Page',
    name: 'ADU Builder Greer, SC',
    title: 'Detached ADU builder in Greer, SC for backyard family suites and detached private living space',
    metaTitle: 'ADU Builder Greer SC | Remodeling Contractors SC',
    metaDescription: 'Greer, SC ADU builder for backyard family suites, detached private living space, and lot-fit planning with local zoning awareness.',
    intro: 'Families in Greer searching for an ADU builder want a practical backyard space that keeps relatives close while giving everyone the privacy they need.',
    highlights: ['Greer backyard family suites', 'Detached privacy and placement', 'Utility-aware lot planning'],
    serviceType: 'ADU Builder',
    image: grannyPodImage,
    imageAlt: 'Illustration of a backyard ADU planned for Greer, South Carolina',
    whatItIs: 'This page focuses on ADU builder demand in Greer, where homeowners often want detached family living space that can serve parents, adult children, or long-term guests.',
    whoItIsFor: ['Greer families planning detached backyard space for relatives', 'Homeowners wanting private but nearby family living space', 'Owners comparing ADUs with larger ADU or in-law suite options'],
    optionsTitle: 'Greer ADU options',
    options: [
      { title: 'Compact backyard pods', body: 'Compact pods are often the most cost-efficient and site-friendly option in Greer neighborhoods.' },
      { title: 'Larger detached family suites', body: 'Where yard and setback conditions allow, a larger detached suite can offer better storage, bigger bath, and long-term flexibility.' }
    ],
    process: ['Review Greer lot layout, setbacks, and utility access', 'Choose the right footprint and feature level', 'Coordinate permitting, structure, and construction scope'],
    costFactors: ['Detached foundation and utility routing', 'Bath and kitchenette scope', 'Porch, access, and finish level'],
    permittingNote: 'Greer ADU planning requires early review of zoning jurisdiction, setbacks, access, and how the detached structure is classified locally before design decisions are made.',
    faqs: [
      { question: 'Can a backyard ADU be built in Greer, SC?', answer: 'It depends on zoning, setbacks, and utility access. We review those constraints before recommending a layout.' },
      { question: 'What makes a detached ADU a strong fit in Greer?', answer: 'That depends on setbacks, utility access, and how much privacy or independence the family needs from the main house.' }
    ],
    relatedPaths: ['/granny-pods', '/greer-sc', '/backyard-granny-pods'],
    projectSlugs: ['covered-composite-deck-greer'],
    actions: sharedActions,
    ctaTitle: 'Need an ADU builder in Greer, SC?',
    ctaText: 'Request an estimate and we will review detached family suite placement and options for your Greer property.'
  },

  // ── Mauldin, SC ──────────────────────────────────────────────────────
  {
    slug: 'adu-builder-mauldin-sc',
    path: '/adu-builder-mauldin-sc',
    citySlug: 'mauldin-sc',
    cityLabel: 'Mauldin, South Carolina',
    parentSlug: 'adu-builders',
    eyebrow: 'Local Service Page',
    name: 'ADU Builder Mauldin, SC',
    title: 'ADU builder in Mauldin, SC for accessory dwelling units, garage apartments, and family-use backyard living space',
    metaTitle: 'ADU Builder Mauldin SC | Remodeling Contractors SC',
    metaDescription: 'Mauldin, SC ADU builder for detached accessory dwelling units, garage apartment additions, and secondary living space with practical lot-fit planning.',
    intro: 'In Mauldin, homeowners who want an ADU builder are usually looking for a practical secondary living space that integrates cleanly with the existing lot without overbuilding.',
    highlights: ['Mauldin lot-fit planning', 'Attached and detached options', 'Practical family-use scope'],
    serviceType: 'ADU Builder',
    image: grannyPodImage,
    imageAlt: 'Illustration of a detached ADU planned for Mauldin, South Carolina',
    whatItIs: 'This page focuses on ADU builder demand in Mauldin, where homeowners often weigh attached and detached options based on lot size, subdivision context, and long-term family use.',
    whoItIsFor: ['Mauldin homeowners planning backyard or garage-based secondary living space', 'Families who need ADU-style flexibility without a separate property', 'Owners comparing detached ADUs with attached in-law suite additions'],
    optionsTitle: 'Mauldin ADU options',
    options: [
      { title: 'Attached ADU alternatives', body: 'On tighter Mauldin lots, an attached suite often delivers similar flexibility with a cleaner relationship to the existing structure.' },
      { title: 'Garage apartment additions', body: 'Garage-based ADUs are a practical choice when parking, storage, and secondary living space can share the same footprint.' }
    ],
    process: ['Review Mauldin lot constraints and access', 'Define the best attached or detached ADU approach', 'Coordinate utilities, zoning, and permitting direction'],
    costFactors: ['Lot depth and utility routing', 'Attached vs detached structural approach', 'Kitchen, bath, and finish scope'],
    permittingNote: 'Mauldin ADU planning should address subdivision restrictions, setbacks, lot coverage, and local occupancy classification before scope is developed.',
    faqs: [
      { question: 'Is a detached ADU practical on a Mauldin lot?', answer: 'That depends on lot size, setbacks, and access. Some Mauldin properties are better suited for attached family suite additions.' },
      { question: 'What is the best ADU option in Mauldin for family use?', answer: 'That depends on privacy goals, lot layout, and whether attached or detached construction fits the property and subdivision better.' }
    ],
    relatedPaths: ['/adu-builders', '/mauldin-sc', '/detached-adus'],
    projectSlugs: ['aluminum-screened-enclosure-mauldin'],
    actions: sharedActions,
    ctaTitle: 'Need an ADU builder in Mauldin, SC?',
    ctaText: 'Request an estimate and we will outline the most practical attached or detached ADU path for your lot.'
  },
  {
    slug: 'in-law-suite-addition-mauldin-sc',
    path: '/in-law-suite-addition-mauldin-sc',
    citySlug: 'mauldin-sc',
    cityLabel: 'Mauldin, South Carolina',
    parentSlug: 'in-law-suite-additions',
    eyebrow: 'Local Service Page',
    name: 'In-Law Suite Addition Mauldin, SC',
    title: 'In-law suite addition builder in Mauldin, SC for attached family suites and private multi-generational living space',
    metaTitle: 'In-Law Suite Addition Mauldin SC | Remodeling Contractors SC',
    metaDescription: 'Mauldin, SC in-law suite addition contractor for attached family suites, mother-in-law additions, and multi-generational living space with clean integration planning.',
    intro: 'Families in Mauldin often find that an in-law suite addition is the most practical way to keep family close and create private daily comfort without affecting the flow of the main home.',
    highlights: ['Mauldin family suite planning', 'Attached private access', 'Long-term daily comfort'],
    serviceType: 'In-Law Suite Addition',
    image: roomAdditionImage,
    imageAlt: 'Illustration of an in-law suite addition planned for Mauldin, South Carolina',
    whatItIs: 'This page focuses on in-law suite addition demand in Mauldin, where families in convenient suburban neighborhoods often need integrated but private family space without a full second structure.',
    whoItIsFor: ['Mauldin families planning space for aging relatives or adult children', 'Homeowners needing first-floor suite convenience', 'Owners comparing in-law suite additions with detached backyard space'],
    optionsTitle: 'Mauldin in-law suite options',
    options: [
      { title: 'Attached family suites', body: 'Attached suites are often the cleanest solution in Mauldin when lot size makes a detached structure difficult.' },
      { title: 'Accessible suite layouts', body: 'Comfort and accessibility features can be built in from the start for better long-term daily function.' }
    ],
    process: ['Clarify family privacy and accessibility needs', 'Test layout options that preserve main home circulation', 'Coordinate structure, utilities, and local permitting'],
    costFactors: ['Bath, entry, and kitchenette scope', 'Foundation and roofline tie-in', 'Accessibility upgrades and finish level'],
    permittingNote: 'Mauldin in-law suite additions require early review of setbacks, lot coverage, egress, and how any cooking or utility features affect the code review.',
    faqs: [
      { question: 'What should be included in a Mauldin in-law suite addition?', answer: 'Most suites include a bedroom, private bath, and sitting area, with options for private entry or kitchenette depending on use and local rules.' },
      { question: 'Can an in-law suite addition increase home value in Mauldin?', answer: 'It often can, especially when the space is flexible enough for guest or office use and well-integrated with the main home.' }
    ],
    relatedPaths: ['/in-law-suite-additions', '/mauldin-sc', '/attached-in-law-suites'],
    projectSlugs: ['aluminum-screened-enclosure-mauldin'],
    actions: sharedActions,
    ctaTitle: 'Need an in-law suite addition in Mauldin, SC?',
    ctaText: 'Request an estimate and we will help define the right family suite scope for your Mauldin property.'
  },
  {
    slug: 'master-suite-addition-mauldin-sc',
    path: '/master-suite-addition-mauldin-sc',
    citySlug: 'mauldin-sc',
    cityLabel: 'Mauldin, South Carolina',
    parentSlug: 'master-suite-additions',
    eyebrow: 'Local Service Page',
    name: 'Master Suite Addition Mauldin, SC',
    title: 'Master suite addition builder in Mauldin, SC for primary bedroom, bath, and closet expansion',
    metaTitle: 'Master Suite Addition Mauldin SC | Remodeling Contractors SC',
    metaDescription: 'Mauldin, SC master suite addition contractor for primary bedroom additions, suite expansions, and layout improvement for homeowners staying in place.',
    intro: 'Mauldin homeowners often choose a master suite addition when the current primary bedroom and bath are the biggest obstacle to enjoying the home day to day.',
    highlights: ['Primary suite planning', 'Mauldin layout strategy', 'Bedroom, bath, and closet improvement'],
    serviceType: 'Master Suite Addition',
    image: roomAdditionImage,
    imageAlt: 'Illustration of a master suite addition planned for Mauldin, South Carolina',
    whatItIs: 'This page focuses on master suite addition demand in Mauldin, where homeowners often want a better primary bedroom, improved bath layout, and more functional storage without moving.',
    whoItIsFor: ['Mauldin owners with cramped primary bedrooms or dated bath layouts', 'Families wanting a first-floor suite for long-term comfort', 'Homeowners deciding between a suite addition and relocation'],
    optionsTitle: 'Mauldin primary suite options',
    options: [
      { title: 'Rear suite additions', body: "Rear additions are often the cleanest path to a better primary suite in Mauldin while preserving the home's street presence." },
      { title: 'Bedroom and bath focused expansions', body: 'Some projects need a more focused bump-out for bath improvement and storage rather than a full large-footprint addition.' }
    ],
    process: ['Identify the current primary suite limitations', 'Define the right addition type for the property', 'Align structure, roofline, and finish scope'],
    costFactors: ['Addition size and structural approach', 'Bath scope and plumbing complexity', 'Closet buildout and exterior integration'],
    permittingNote: 'Mauldin master suite additions require setback and lot coverage review plus attention to roofline and structural tie-in requirements.',
    faqs: [
      { question: 'Can a Mauldin master suite addition include a walk-in shower and large closet?', answer: 'Yes. Those are common priorities, and they work best when bath, plumbing, and closet design are planned together from the start.' },
      { question: 'Is a master suite addition in Mauldin better than buying a larger home?', answer: 'For many families, yes. A well-conceived suite addition delivers the space they need at a lower total cost and disruption than moving.' }
    ],
    relatedPaths: ['/master-suite-additions', '/mauldin-sc', '/master-bedroom-suite-additions'],
    projectSlugs: ['aluminum-screened-enclosure-mauldin'],
    actions: sharedActions,
    ctaTitle: 'Need a master suite addition in Mauldin, SC?',
    ctaText: 'Request an estimate and we will define the right primary suite scope and structure for your home.'
  },
  {
    slug: 'granny-pod-builder-mauldin-sc',
    path: '/granny-pod-builder-mauldin-sc',
    citySlug: 'mauldin-sc',
    cityLabel: 'Mauldin, South Carolina',
    parentSlug: 'granny-pods',
    eyebrow: 'Local Service Page',
    name: 'ADU Builder Mauldin, SC',
    title: 'Detached ADU builder in Mauldin, SC for detached backyard family suites and private living space',
    metaTitle: 'ADU Builder Mauldin SC | Remodeling Contractors SC',
    metaDescription: 'Mauldin, SC ADU builder for backyard family suites, detached private living space, and lot-fit planning with subdivision and zoning awareness.',
    intro: 'Families in Mauldin searching for an ADU builder want a compact backyard structure that provides real daily independence without overbuilding the lot.',
    highlights: ['Mauldin backyard family suites', 'Compact detached placement', 'Zoning-aware lot planning'],
    serviceType: 'ADU Builder',
    image: grannyPodImage,
    imageAlt: 'Illustration of a backyard ADU planned for Mauldin, South Carolina',
    whatItIs: 'This page focuses on ADU builder demand in Mauldin, where homeowners often want a compact detached living space for family use that fits well on an established residential lot.',
    whoItIsFor: ['Mauldin families planning backyard living space for parents or relatives', 'Homeowners wanting nearby but private family space', 'Owners comparing compact ADUs with larger attached in-law suites'],
    optionsTitle: 'Mauldin ADU options',
    options: [
      { title: 'Compact backyard pods', body: 'Compact pods often provide the best fit on Mauldin properties where yard space is limited but privacy still matters.' },
      { title: 'Attached alternatives', body: 'Where lot size or subdivision rules limit detached construction, an attached suite can meet many of the same family privacy goals.' }
    ],
    process: ['Assess Mauldin lot placement options and setbacks', 'Set footprint and living feature priorities', 'Coordinate permitting, utilities, and construction scope'],
    costFactors: ['Detached foundation and utility routing', 'Bath and kitchenette scope', 'Finish level and outdoor access features'],
    permittingNote: 'Mauldin ADU planning requires early attention to subdivision rules, zoning setbacks, utility connections, and how the detached structure is classified.',
    faqs: [
      { question: 'Are backyard ADUs allowed in Mauldin, SC?', answer: 'Rules vary by parcel and subdivision. We review zoning, setbacks, and subdivision guidelines before recommending a detached layout.' },
      { question: 'Can a Mauldin ADU work on a smaller lot?', answer: 'Sometimes, but setbacks, access, and utility routing are the main constraints. We evaluate those before committing to a detached approach.' }
    ],
    relatedPaths: ['/granny-pods', '/mauldin-sc', '/backyard-granny-pods'],
    projectSlugs: ['aluminum-screened-enclosure-mauldin'],
    actions: sharedActions,
    ctaTitle: 'Need an ADU builder in Mauldin, SC?',
    ctaText: 'Request an estimate and we will review detached family suite options, lot fit, and local constraints for your property.'
  },

  // ── Fountain Inn, SC ─────────────────────────────────────────────────
  {
    slug: 'adu-builder-fountain-inn-sc',
    path: '/adu-builder-fountain-inn-sc',
    citySlug: 'fountain-inn-sc',
    cityLabel: 'Fountain Inn, South Carolina',
    parentSlug: 'adu-builders',
    eyebrow: 'Local Service Page',
    name: 'ADU Builder Fountain Inn, SC',
    title: 'ADU builder in Fountain Inn, SC for detached accessory dwelling units, garage apartments, and backyard living space',
    metaTitle: 'ADU Builder Fountain Inn SC | Remodeling Contractors SC',
    metaDescription: 'Fountain Inn, SC ADU builder for detached ADUs, garage apartment additions, and family-use secondary living space with lot-fit and permitting awareness.',
    intro: 'Fountain Inn homeowners looking for an ADU builder often have larger lots that support detached structures well when planning accounts for local rules and utility access.',
    highlights: ['Fountain Inn lot-fit review', 'Detached structure planning', 'Family and flexible-use scope'],
    serviceType: 'ADU Builder',
    image: grannyPodImage,
    imageAlt: 'Illustration of a detached ADU planned for Fountain Inn, South Carolina',
    whatItIs: 'This page focuses on ADU builder demand in Fountain Inn, a growing Upstate community where larger lots and lower density often create good conditions for detached accessory dwelling units.',
    whoItIsFor: ['Fountain Inn homeowners planning detached backyard living space', 'Property owners evaluating ADU potential on larger lots', 'Families who need secondary living space for long-term family use or flexibility'],
    optionsTitle: 'Fountain Inn ADU options',
    options: [
      { title: 'Detached ADUs', body: 'The larger lot sizes common in Fountain Inn often create good conditions for a detached ADU when setbacks and utilities are properly planned.' },
      { title: 'Garage apartment additions', body: 'For properties needing both vehicle storage and secondary living space, a garage-based ADU can be a compact and practical path.' }
    ],
    process: ['Review Fountain Inn lot depth, setbacks, and utility access', 'Choose the best ADU type for the property and use case', 'Coordinate local permitting and construction planning'],
    costFactors: ['Site work and utility distance from main home', 'Detached structure size and foundation type', 'Bath, kitchen, and finish scope'],
    permittingNote: 'Fountain Inn ADU planning should address local zoning, setback rules, and utility connection strategy before the design or scope is committed.',
    faqs: [
      { question: 'Can you build a detached ADU in Fountain Inn, SC?', answer: 'Yes. Larger lots common in Fountain Inn often support detached ADUs when zoning, setbacks, and utilities are reviewed first.' },
      { question: 'What ADU type works best in Fountain Inn?', answer: 'Detached units often fit well given the lot sizes common in the area, but garage-based options are a strong alternative where dual-purpose space is needed.' }
    ],
    relatedPaths: ['/adu-builders', '/fountain-inn-sc', '/detached-adus'],
    projectSlugs: [],
    actions: sharedActions,
    ctaTitle: 'Need an ADU builder in Fountain Inn, SC?',
    ctaText: 'Request an estimate and we will review your lot, access, and the best ADU approach for your property.'
  },
  {
    slug: 'in-law-suite-addition-fountain-inn-sc',
    path: '/in-law-suite-addition-fountain-inn-sc',
    citySlug: 'fountain-inn-sc',
    cityLabel: 'Fountain Inn, South Carolina',
    parentSlug: 'in-law-suite-additions',
    eyebrow: 'Local Service Page',
    name: 'In-Law Suite Addition Fountain Inn, SC',
    title: 'In-law suite addition builder in Fountain Inn, SC for attached family suites and multi-generational living space',
    metaTitle: 'In-Law Suite Addition Fountain Inn SC | Remodeling Contractors SC',
    metaDescription: 'Fountain Inn, SC in-law suite addition contractor for attached family suites, mother-in-law additions, and multi-generational living space with practical planning.',
    intro: 'Families in Fountain Inn regularly plan in-law suite additions when they need a private family space that keeps everyone close while preserving the daily rhythm of the main home.',
    highlights: ['Fountain Inn family suite planning', 'Private entry and circulation', 'First-floor accessibility planning'],
    serviceType: 'In-Law Suite Addition',
    image: roomAdditionImage,
    imageAlt: 'Illustration of an in-law suite addition planned for Fountain Inn, South Carolina',
    whatItIs: 'This page focuses on in-law suite addition demand in Fountain Inn, where homeowners in a growing community often need well-integrated private family space without building an entirely separate structure.',
    whoItIsFor: ['Fountain Inn families welcoming aging parents or relatives into the home', 'Homeowners planning first-floor comfort and accessibility', 'Owners comparing attached in-law suites with detached backyard alternatives'],
    optionsTitle: 'Fountain Inn in-law suite options',
    options: [
      { title: 'Attached family suites', body: 'Attached suites are often the most efficient solution in Fountain Inn when families want close proximity with private daily function.' },
      { title: 'Accessibility-focused layouts', body: 'First-floor access, wider clearances, and low-threshold baths can and should be part of the planning from the start.' }
    ],
    process: ['Define family use and privacy priorities', 'Develop layout options that fit the current home structure', 'Plan structure, utilities, and permitting before construction begins'],
    costFactors: ['Bath, entry, and kitchenette scope', 'Foundation and structural integration', 'Accessibility and finish level'],
    permittingNote: 'Fountain Inn in-law suite additions still require local review of setbacks, lot coverage, and classification of cooking or utility features before the scope is finalized.',
    faqs: [
      { question: 'What should a Fountain Inn in-law suite addition include?', answer: 'A solid in-law suite typically includes a bedroom, private bath, and a comfortable sitting area, with options for entry and kitchenette where the property and local rules allow.' },
      { question: 'Can an in-law suite in Fountain Inn later serve as guest or office space?', answer: 'Yes. The most useful suites are designed with enough flexibility to serve different roles as family needs change over time.' }
    ],
    relatedPaths: ['/in-law-suite-additions', '/fountain-inn-sc', '/attached-in-law-suites'],
    projectSlugs: [],
    actions: sharedActions,
    ctaTitle: 'Need an in-law suite addition in Fountain Inn, SC?',
    ctaText: 'Request an estimate and we will map the right family suite layout for your Fountain Inn property.'
  },
  {
    slug: 'master-suite-addition-fountain-inn-sc',
    path: '/master-suite-addition-fountain-inn-sc',
    citySlug: 'fountain-inn-sc',
    cityLabel: 'Fountain Inn, South Carolina',
    parentSlug: 'master-suite-additions',
    eyebrow: 'Local Service Page',
    name: 'Master Suite Addition Fountain Inn, SC',
    title: 'Master suite addition builder in Fountain Inn, SC for primary bedroom, bath, and closet expansion',
    metaTitle: 'Master Suite Addition Fountain Inn SC | Remodeling Contractors SC',
    metaDescription: 'Fountain Inn, SC master suite addition contractor for primary bedroom additions, suite expansions, and layout-driven home improvement.',
    intro: 'Homeowners in Fountain Inn often find that a master suite addition is the most targeted way to improve how the home functions every day without starting over.',
    highlights: ['Primary suite planning', 'Fountain Inn layout strategy', 'Bedroom, bath, and storage improvement'],
    serviceType: 'Master Suite Addition',
    image: roomAdditionImage,
    imageAlt: 'Illustration of a master suite addition planned for Fountain Inn, South Carolina',
    whatItIs: 'This page focuses on master suite addition demand in Fountain Inn, where older home stock and growing families often converge around the need for a better primary bedroom, bath, and closet arrangement.',
    whoItIsFor: ['Fountain Inn owners with small or outdated primary bedrooms', 'Families wanting a more comfortable primary bath layout', 'Homeowners evaluating an addition against the cost and disruption of moving'],
    optionsTitle: 'Fountain Inn primary suite options',
    options: [
      { title: 'Rear suite additions', body: "Rear additions often give the cleanest path to a larger primary suite without affecting the home's front view or neighborhood fit." },
      { title: 'Focused bath and closet expansions', body: 'Where a full addition is not needed, a targeted expansion focused on bath and storage can solve many of the daily layout problems.' }
    ],
    process: ['Review the current suite limitations and priorities', 'Define the best addition type for the lot and structure', 'Coordinate roofline tie-in, structure, and finish scope'],
    costFactors: ['Addition size and structural tie-in', 'Bath plumbing and layout complexity', 'Closet buildout and finish level'],
    permittingNote: 'Fountain Inn master suite additions require standard setback and lot coverage review plus careful attention to structural and roofline integration.',
    faqs: [
      { question: 'Can a master suite addition in Fountain Inn be built first-floor?', answer: 'Yes. First-floor primary suite additions are often a better long-term investment for daily comfort and aging in place.' },
      { question: 'Does a master suite addition add value to a Fountain Inn home?', answer: "It often does, particularly when the suite improves daily function and is well-integrated with the home's existing layout and exterior." }
    ],
    relatedPaths: ['/master-suite-additions', '/fountain-inn-sc', '/master-bedroom-suite-additions'],
    projectSlugs: [],
    actions: sharedActions,
    ctaTitle: 'Need a master suite addition in Fountain Inn, SC?',
    ctaText: 'Request an estimate and we will define the right primary suite scope and structure for your home.'
  },
  {
    slug: 'granny-pod-builder-fountain-inn-sc',
    path: '/granny-pod-builder-fountain-inn-sc',
    citySlug: 'fountain-inn-sc',
    cityLabel: 'Fountain Inn, South Carolina',
    parentSlug: 'granny-pods',
    eyebrow: 'Local Service Page',
    name: 'ADU Builder Fountain Inn, SC',
    title: 'Detached ADU builder in Fountain Inn, SC for detached backyard family suites and private living space',
    metaTitle: 'ADU Builder Fountain Inn SC | Remodeling Contractors SC',
    metaDescription: 'Fountain Inn, SC ADU builder for backyard family suites, detached private living space, and lot planning with local zoning awareness.',
    intro: 'Fountain Inn properties with larger lots often create strong conditions for an ADU when the planning accounts for placement, utilities, and local zoning.',
    highlights: ['Fountain Inn backyard placement', 'Detached privacy and access', 'Family-use lot planning'],
    serviceType: 'ADU Builder',
    image: grannyPodImage,
    imageAlt: 'Illustration of a backyard ADU planned for Fountain Inn, South Carolina',
    whatItIs: 'This page focuses on ADU builder demand in Fountain Inn, where the lot sizes and lower density that characterize this growing market often support detached backyard family living space well.',
    whoItIsFor: ['Fountain Inn families planning nearby but private backyard living space', 'Homeowners with enough yard for a detached structure', 'Owners comparing ADUs with shared-wall in-law suite options'],
    optionsTitle: 'Fountain Inn ADU options',
    options: [
      { title: 'Detached backyard pods', body: 'Fountain Inn lots often provide enough yard depth for a detached pod when setbacks and utility access are reviewed early.' },
      { title: 'Larger detached family suites', body: 'Where layout and lot allow, a more spacious detached suite can improve long-term flexibility, storage, and daily comfort.' }
    ],
    process: ['Evaluate yard placement, setbacks, and utility routing', 'Define the right footprint and living features for family use', 'Coordinate permitting, structure, and construction planning'],
    costFactors: ['Detached foundation and utility connection', 'Bath and kitchenette scope', 'Porch, access features, and finish level'],
    permittingNote: 'Fountain Inn ADU projects require zoning and setback review before detailed layout decisions are made, even on larger lots.',
    faqs: [
      { question: 'Are detached ADUs commonly built in Fountain Inn?', answer: 'Yes. The larger lot sizes in the area often support detached family structures when planning and permitting are handled correctly.' },
      { question: 'Can a Fountain Inn ADU have a kitchenette?', answer: 'It can, depending on local classification rules and intended use. We review that early in the planning process.' }
    ],
    relatedPaths: ['/granny-pods', '/fountain-inn-sc', '/backyard-granny-pods'],
    projectSlugs: [],
    actions: sharedActions,
    ctaTitle: 'Need an ADU builder in Fountain Inn, SC?',
    ctaText: 'Request an estimate and we will review detached placement, lot fit, and family suite options for your property.'
  },

  // ── Laurens, SC ──────────────────────────────────────────────────────
  {
    slug: 'adu-builder-laurens-sc',
    path: '/adu-builder-laurens-sc',
    citySlug: 'laurens-sc',
    cityLabel: 'Laurens, South Carolina',
    parentSlug: 'adu-builders',
    eyebrow: 'Local Service Page',
    name: 'ADU Builder Laurens, SC',
    title: 'ADU builder in Laurens, SC for detached backyard units, garage apartments, and flexible family living space',
    metaTitle: 'ADU Builder Laurens SC | Remodeling Contractors SC',
    metaDescription: 'Laurens, SC ADU builder for detached accessory dwelling units, garage apartment additions, and family-use secondary living space with property-based planning.',
    intro: 'Laurens is a market where many properties offer real flexibility for detached ADU planning when the scope is grounded in lot reality and local rules.',
    highlights: ['Laurens property-fit review', 'Detached and garage-based ADU options', 'Rural-adjacent lot planning'],
    serviceType: 'ADU Builder',
    image: grannyPodImage,
    imageAlt: 'Illustration of a detached ADU planned for Laurens, South Carolina',
    whatItIs: 'This page focuses on ADU builder demand in Laurens, where properties with more land often create practical conditions for detached accessory dwelling units and garage apartment additions.',
    whoItIsFor: ['Laurens homeowners with enough yard for a detached secondary structure', 'Families needing independent living space on the same property', 'Owners evaluating garage apartments and detached ADU options'],
    optionsTitle: 'Laurens ADU options',
    options: [
      { title: 'Detached ADUs', body: 'The larger and more rural-adjacent properties common in Laurens often make detached ADUs a strong fit when setbacks and utilities are workable.' },
      { title: 'Garage apartment additions', body: 'Combining vehicle storage with upper-level living space is often cost-effective on larger Laurens properties.' }
    ],
    process: ['Evaluate Laurens property constraints, access, and utility routing', 'Define the most practical ADU type for the lot', 'Coordinate local permitting and construction planning'],
    costFactors: ['Site work, utility distance, and access complexity', 'Detached structure size and foundation type', 'Bath, kitchen, and finish scope'],
    permittingNote: 'Laurens County ADU planning involves local zoning, setback review, and utility strategy. These constraints should be reviewed before detailed scope is developed.',
    faqs: [
      { question: 'Are detached ADUs practical in Laurens, SC?', answer: 'Often yes, especially on larger rural-adjacent properties. Setbacks, utilities, and local zoning still need to be reviewed before committing to a design.' },
      { question: 'What is the best ADU type for a Laurens property?', answer: 'That depends on lot depth, utility access, privacy goals, and whether the property supports a fully detached structure or is better suited to a garage-based layout.' }
    ],
    relatedPaths: ['/adu-builders', '/laurens-sc', '/detached-adus'],
    projectSlugs: [],
    actions: sharedActions,
    ctaTitle: 'Need an ADU builder in Laurens, SC?',
    ctaText: 'Request an estimate and we will review your property, access, and the right ADU approach for your land.'
  },
  {
    slug: 'in-law-suite-addition-laurens-sc',
    path: '/in-law-suite-addition-laurens-sc',
    citySlug: 'laurens-sc',
    cityLabel: 'Laurens, South Carolina',
    parentSlug: 'in-law-suite-additions',
    eyebrow: 'Local Service Page',
    name: 'In-Law Suite Addition Laurens, SC',
    title: 'In-law suite addition builder in Laurens, SC for attached family suites and multi-generational living space',
    metaTitle: 'In-Law Suite Addition Laurens SC | Remodeling Contractors SC',
    metaDescription: 'Laurens, SC in-law suite addition contractor for attached family suites, mother-in-law additions, and multi-generational living space planned around practical property fit.',
    intro: 'In Laurens, in-law suite additions are a common solution for families who want to bring generations together without sacrificing the comfort and routine of the main home.',
    highlights: ['Laurens family suite planning', 'Private circulation and comfort', 'Multi-generational layout strategy'],
    serviceType: 'In-Law Suite Addition',
    image: roomAdditionImage,
    imageAlt: 'Illustration of an in-law suite addition planned for Laurens, South Carolina',
    whatItIs: 'This page addresses in-law suite addition demand in Laurens, where an older housing stock and strong family orientation often make private attached living space a practical priority.',
    whoItIsFor: ['Laurens families planning space for aging parents or adult relatives', 'Homeowners wanting a comfortable first-floor suite without leaving the property', 'Owners comparing attached in-law additions with detached backyard alternatives'],
    optionsTitle: 'Laurens in-law suite options',
    options: [
      { title: 'Attached family suites', body: 'Attached suites work well in Laurens when families want private space that remains close to the main home.' },
      { title: 'Detached family suite alternatives', body: 'On larger Laurens properties, an ADU or detached suite may give better independence and long-term flexibility.' }
    ],
    process: ['Define family use, privacy, and accessibility goals', 'Test layout options against the existing home structure', 'Plan structure, utilities, and local permitting proactively'],
    costFactors: ['Bath, entry, and kitchenette scope', 'Structural tie-in with the existing home', 'Accessibility upgrades and finish level'],
    permittingNote: 'Laurens County in-law suite additions require local setback and lot coverage review, plus early assessment of how cooking or utility features affect zoning classification.',
    faqs: [
      { question: 'What is typically included in a Laurens in-law suite addition?', answer: 'Most projects include a bedroom, private bath, and sitting space, with private entry or kitchenette options where the property and local rules allow.' },
      { question: 'Can a Laurens in-law suite addition include aging-in-place features?', answer: 'Yes. Wider clearances, low-threshold baths, and single-level access can all be built in from the start when the layout is planned for long-term daily use.' }
    ],
    relatedPaths: ['/in-law-suite-additions', '/laurens-sc', '/attached-in-law-suites'],
    projectSlugs: [],
    actions: sharedActions,
    ctaTitle: 'Need an in-law suite addition in Laurens, SC?',
    ctaText: 'Request an estimate and we will help define the right attached or detached family suite for your property.'
  },
  {
    slug: 'master-suite-addition-laurens-sc',
    path: '/master-suite-addition-laurens-sc',
    citySlug: 'laurens-sc',
    cityLabel: 'Laurens, South Carolina',
    parentSlug: 'master-suite-additions',
    eyebrow: 'Local Service Page',
    name: 'Master Suite Addition Laurens, SC',
    title: 'Master suite addition builder in Laurens, SC for primary bedroom, bath, and closet expansion',
    metaTitle: 'Master Suite Addition Laurens SC | Remodeling Contractors SC',
    metaDescription: 'Laurens, SC master suite addition contractor for primary bedroom additions, suite expansions, and layout-driven home improvement planned around property fit.',
    intro: 'Laurens homeowners often find that a master suite addition resolves the most stubborn daily frustrations with their home without requiring a move.',
    highlights: ['Primary suite planning', 'Laurens layout improvement', 'Bedroom, bath, and storage scope'],
    serviceType: 'Master Suite Addition',
    image: roomAdditionImage,
    imageAlt: 'Illustration of a master suite addition planned for Laurens, South Carolina',
    whatItIs: 'This page focuses on master suite addition demand in Laurens, where older homes frequently have undersized primary bedrooms and dated bath layouts that limit daily comfort and home value.',
    whoItIsFor: ['Laurens owners with small or outdated primary bedrooms', 'Families wanting a better bath and closet without moving', 'Homeowners comparing a targeted suite addition with larger renovation options'],
    optionsTitle: 'Laurens primary suite options',
    options: [
      { title: 'Rear suite additions', body: 'Rear additions often give the cleanest structural path to a better primary suite in Laurens without affecting curb appeal.' },
      { title: 'First-floor primary suite conversions', body: 'Converting or expanding an existing first-floor room can sometimes deliver primary suite function at lower structural complexity.' }
    ],
    process: ['Identify the primary layout problems to solve', 'Define the right addition type for the property', 'Coordinate structure, roofline, and finish scope'],
    costFactors: ['Addition size and structural tie-in complexity', 'Bath plumbing scope', 'Closet buildout and window package'],
    permittingNote: 'Laurens County master suite additions require standard setback and structural review, and should account for any HOA or historic district guidelines when applicable.',
    faqs: [
      { question: 'Can a master suite addition in Laurens include a walk-in closet and soaking tub?', answer: 'Yes. Those are common priorities and work best when the plumbing, layout, and structural scope are all planned together from the start.' },
      { question: 'Is a master suite addition the right investment in Laurens?', answer: 'For most homeowners, yes. A well-planned suite delivers daily comfort improvements at a lower cost than moving to a larger property.' }
    ],
    relatedPaths: ['/master-suite-additions', '/laurens-sc', '/master-bedroom-suite-additions'],
    projectSlugs: [],
    actions: sharedActions,
    ctaTitle: 'Need a master suite addition in Laurens, SC?',
    ctaText: 'Request an estimate and we will outline the right primary bedroom, bath, and structure scope for your home.'
  },
  {
    slug: 'granny-pod-builder-laurens-sc',
    path: '/granny-pod-builder-laurens-sc',
    citySlug: 'laurens-sc',
    cityLabel: 'Laurens, South Carolina',
    parentSlug: 'granny-pods',
    eyebrow: 'Local Service Page',
    name: 'ADU Builder Laurens, SC',
    title: 'Detached ADU builder in Laurens, SC for detached backyard family suites and private living space',
    metaTitle: 'ADU Builder Laurens SC | Remodeling Contractors SC',
    metaDescription: 'Laurens, SC ADU builder for detached backyard family suites, private living space, and property-fit planning with local zoning awareness.',
    intro: 'Laurens homeowners often find that their larger rural-adjacent lots make detached ADU construction more straightforward than in denser suburban markets.',
    highlights: ['Laurens backyard family suites', 'Rural-adjacent lot flexibility', 'Detached placement and utility planning'],
    serviceType: 'ADU Builder',
    image: grannyPodImage,
    imageAlt: 'Illustration of a backyard ADU planned for Laurens, South Carolina',
    whatItIs: 'This page focuses on ADU builder demand in Laurens, where larger properties and lower density often create favorable conditions for detached family living space when planning is handled correctly.',
    whoItIsFor: ['Laurens families planning private backyard living space for relatives', 'Property owners with enough land for a detached structure', 'Homeowners comparing ADUs with attached in-law suite additions'],
    optionsTitle: 'Laurens ADU options',
    options: [
      { title: 'Detached backyard pods', body: 'Larger Laurens properties often support well-placed detached pods with better setback clearances than suburban markets.' },
      { title: 'ADU-style detached structures', body: 'Some Laurens ADU projects overlap with ADU planning, especially when the owner wants the option for independent long-term living.' }
    ],
    process: ['Evaluate Laurens property placement, setbacks, and utilities', 'Define the right footprint and living feature set', 'Coordinate local permitting and construction planning'],
    costFactors: ['Detached foundation and utility routing on larger lots', 'Bath and kitchenette scope', 'Access, porch, and finish level'],
    permittingNote: 'Laurens County ADU projects require zoning review and setback analysis before the layout is designed, even on larger rural-adjacent properties.',
    faqs: [
      { question: 'Are detached ADUs practical on Laurens properties?', answer: 'Often yes. Larger and more rural-adjacent lots typically give more setback clearance, which makes detached placement more practical.' },
      { question: 'Can a Laurens ADU be used for long-term family living?', answer: 'Yes. Many families build them for aging relatives now and retain flexibility for guest use or other purposes later.' }
    ],
    relatedPaths: ['/granny-pods', '/laurens-sc', '/backyard-granny-pods'],
    projectSlugs: [],
    actions: sharedActions,
    ctaTitle: 'Need an ADU builder in Laurens, SC?',
    ctaText: 'Request an estimate and we will review your property, detached placement options, and family suite scope.'
  }
];

export const allMarketingPaths = new Map(
  [...priorityServicePages, ...supportingServicePages, ...cityPages, ...localServicePages].map((page) => [page.path, page.name || page.city])
);