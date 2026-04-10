import screenedPorch from '../assets/images/custom-screened-porch-aluminum-frame.png';

export const services = [
  {
    name: 'Garage Builders',
    slug: 'garage-builders',
    summary: 'Custom garages built for curb appeal, storage, workshops, and future flexibility.',
    seo: 'Garage builder in South Carolina for custom detached garages, attached garages, and garage structures with usable upper-level space.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Custom detached garage with matching home exterior finishes',
    highlights: ['Concrete and framing expertise', 'Architecturally matched exteriors', 'Utility and storage planning'],
    subpages: [
      {
        name: 'Detached Garages',
        slug: 'detached-garages',
        summary: 'Standalone garage buildings planned for parking, hobbies, and long-term property value.',
        seo: 'Detached garage builder in South Carolina focused on layout planning, structural quality, and curb appeal.'
      },
      {
        name: 'Attached Garages',
        slug: 'attached-garages',
        summary: 'Integrated garage additions that feel original to the home and improve daily convenience.',
        seo: 'Attached garage contractor in South Carolina for seamless additions that match existing architecture.'
      },
      {
        name: 'Garage With Apartment / Storage Above',
        slug: 'garage-with-apartment-storage-above',
        summary: 'Multi-use garage structures with upper-level storage or finished living potential where permitted.',
        seo: 'Garage with apartment or storage above in South Carolina with code-aware structural planning.'
      }
    ]
  },
  {
    name: 'Room Additions',
    slug: 'room-additions',
    summary: 'Designed and built additions that increase usable living space without sacrificing flow.',
    seo: 'Room addition contractor in South Carolina for family rooms, primary suites, and expansion projects.',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Home addition with expanded living room and natural light',
    highlights: ['Structural tie-in planning', 'Layout-driven design', 'Neighborhood fit and scale'],
    subpages: [
      {
        name: 'Second Story Additions',
        slug: 'second-story-additions',
        summary: 'Second-floor expansions for growing families who need more bedrooms and livable square footage.',
        seo: 'Second story addition contractor in South Carolina for vertical expansion and structural upgrades.'
      },
      {
        name: 'Bump-Out Additions',
        slug: 'bump-out-additions',
        summary: 'Strategic bump-outs that improve kitchen, bath, and bedroom function without full footprint changes.',
        seo: 'Bump-out addition builder in South Carolina for focused space gains and improved daily function.'
      }
    ]
  },
  {
    name: 'Deck Builders',
    slug: 'deck-builders',
    summary: 'Premium decks built for entertaining, durability, and better outdoor living.',
    seo: 'Deck builder in South Carolina for covered decks, composite decks, and high-performance outdoor spaces.',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Elevated backyard deck with modern railing and covered seating area',
    highlights: ['Framing and footing quality', 'Drainage and weather durability', 'Clean railing and stair details'],
    subpages: [
      {
        name: 'Covered Decks',
        slug: 'covered-decks',
        summary: 'Shade-forward deck builds with roof structures designed for comfort across South Carolina seasons.',
        seo: 'Covered deck builder in South Carolina for weather protection and year-round usability.'
      },
      {
        name: 'Composite Decks',
        slug: 'composite-decks',
        summary: 'Low-maintenance composite deck systems with modern aesthetics and long-term performance.',
        seo: 'Composite deck contractor in South Carolina for durable outdoor living with low maintenance.'
      }
    ]
  },
  {
    name: 'Aluminum Screened Enclosures',
    slug: 'aluminum-screened-enclosures',
    summary: 'Clean-lined aluminum framed enclosures for bug-free outdoor living with long-term durability.',
    seo: 'Aluminum screened enclosure builder in South Carolina for patios, lanais, and outdoor living upgrades.',
    image: screenedPorch,
    imageAlt: 'Aluminum screened patio enclosure attached to back of home',
    highlights: ['Corrosion-resistant framing', 'Code-aware enclosure builds', 'Outdoor lifestyle design'],
    subpages: [
      {
        name: 'Screened Patio Enclosures',
        slug: 'screened-patio-enclosures',
        summary: 'Patio enclosure systems that keep airflow while adding comfort and weather control.',
        seo: 'Screened patio enclosure contractor in South Carolina for clean, durable aluminum enclosure systems.'
      },
      {
        name: 'Screen Rooms',
        slug: 'screen-rooms',
        summary: 'Purpose-built screen rooms for gathering, dining, and relaxing with a protected open-air feel.',
        seo: 'Screen room builder in South Carolina for outdoor living spaces with premium finishes.'
      }
    ]
  },
  {
    name: 'Detached ADUs',
    slug: 'granny-pods',
    summary: 'Detached backyard living spaces designed for privacy, flexibility, and independent daily use.',
    seo: 'Detached ADU builder in South Carolina for backyard living spaces, guest suites, and multi-generational use.',
    image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Detached modern backyard cottage with porch and landscaped entry',
    highlights: ['Utility-ready planning', 'Privacy and access layout', 'Permit-aware approach'],
    subpages: [
      {
        name: 'Backyard ADUs',
        slug: 'backyard-granny-pods',
        summary: 'Compact detached living structures designed for comfort, privacy, and easy access to the main home.',
        seo: 'Backyard ADU contractor in South Carolina for practical detached family living structures.'
      },
      {
        name: 'Detached Guest Houses / ADU-Style Options',
        slug: 'detached-guest-houses-adu-style',
        summary: 'Guest-house and ADU-style detached structures explored where zoning and code standards allow.',
        seo: 'Detached guest house and ADU-style builder in South Carolina where legally appropriate by jurisdiction.'
      }
    ]
  }
];

export const supportServicePages = services.flatMap((service) =>
  service.subpages.map((subpage) => ({
    ...subpage,
    parentName: service.name,
    parentSlug: service.slug,
    image: service.image,
    imageAlt: service.imageAlt
  }))
);

export const projectTypeOptions = [
  ...services.map((service) => service.name),
  ...supportServicePages.map((subpage) => subpage.name)
];