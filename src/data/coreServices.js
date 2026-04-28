export const CORE_SERVICES = [
  {
    slug: 'garages',
    name: 'Garages',
    teaser: 'Detached and attached garages built for storage, function, and curb appeal.',
    hero: 'Custom garages that look original to your home and perform for decades.',
    miniDefaults: { size: 520, complexity: 'standard', finish: 'standard' },
  },
  {
    slug: 'room-additions',
    name: 'Room Additions',
    teaser: 'Seamless square footage expansions with proper structural tie-in.',
    hero: 'Room additions planned for comfort, flow, and long-term home value.',
    miniDefaults: { size: 360, complexity: 'standard', finish: 'standard' },
  },
  {
    slug: 'decks',
    name: 'Decks',
    teaser: 'Outdoor spaces designed for entertaining and low-maintenance durability.',
    hero: 'Deck projects engineered for Upstate weather and daily use.',
    miniDefaults: { size: 260, complexity: 'simple', finish: 'premium' },
  },
  {
    slug: 'screened-porches',
    name: 'Screened Porches',
    teaser: 'Bug-free outdoor living with strong framing and clean finishes.',
    hero: 'Screened porches that stay comfortable, bright, and practical year-round.',
    miniDefaults: { size: 280, complexity: 'standard', finish: 'premium' },
  },
  {
    slug: 'basement-finishing',
    name: 'Basement Finishing',
    teaser: 'Transform unfinished space into dry, conditioned, fully usable living area.',
    hero: 'Basement finishing built around comfort, code, and moisture management.',
    miniDefaults: { size: 620, complexity: 'complex', finish: 'standard' },
  },
  {
    slug: 'adu',
    name: 'ADU',
    teaser: 'Accessory dwelling units for family flexibility, guests, or rental use.',
    hero: 'ADU projects designed for independent living and long-term property value.',
    miniDefaults: { size: 680, complexity: 'complex', finish: 'premium' },
  },
  {
    slug: 'kitchen-bath-remodeling',
    name: 'Kitchen & Bath Remodeling',
    teaser: 'Kitchen and bath projects focused on storage, moisture control, and daily usability.',
    hero: 'High-performance kitchen and bathroom remodeling for modern family life.',
    miniDefaults: { size: 220, complexity: 'complex', finish: 'premium' },
  },
];

export const KITCHEN_BATH_SUBSERVICES = [
  {
    slug: 'kitchen-remodeling',
    name: 'Kitchen Remodeling',
    teaser: 'Kitchen remodels that improve workflow, storage, and daily efficiency.',
    hero: 'Kitchen remodeling focused on layout performance, durability, and style.',
    miniDefaults: { size: 220, complexity: 'complex', finish: 'premium' },
  },
  {
    slug: 'bathroom-remodeling',
    name: 'Bathroom Remodeling',
    teaser: 'Bathroom upgrades built for moisture control, comfort, and easy upkeep.',
    hero: 'Bathroom remodeling with thoughtful layout, ventilation, and lasting finishes.',
    miniDefaults: { size: 120, complexity: 'standard', finish: 'premium' },
  },
];

const ROUTABLE_CORE = CORE_SERVICES.filter((service) => service.slug !== 'kitchen-bath-remodeling');

export const ROUTABLE_SERVICES = [...ROUTABLE_CORE, ...KITCHEN_BATH_SUBSERVICES];

export const SERVICE_SLUGS = ROUTABLE_SERVICES.map((service) => service.slug);

export const SERVICES_BY_SLUG = Object.fromEntries(
  ROUTABLE_SERVICES.map((service) => [service.slug, service])
);

export const MAIN_NAV_SERVICES = CORE_SERVICES.map((service) => service.slug);
