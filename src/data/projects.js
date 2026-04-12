import {
  aduImageSet,
  additionImageSet,
  deckImageSet,
  garageImageSet,
  screenedPorchImageSet
} from './responsiveImages';

export const projects = [
  {
    slug: 'detached-two-bay-garage-simpsonville-sc',
    title: 'Detached Two-Bay Garage Build',
    location: 'Simpsonville, SC',
    locationSlug: 'simpsonville-sc',
    description: 'Custom detached garage with matching siding, carriage-style doors, and upper-level storage framing.',
    image: garageImageSet.defaultSrc,
    imageSrcSet: garageImageSet.srcSet,
    imageSizes: garageImageSet.sizes,
    imageAlt: 'Completed dark gray two-car detached garage with white trim and carriage-style doors in Simpsonville',
    imagePosition: 'center 62%',
    relatedServices: ['garages']
  },
  {
    slug: 'new-bedroom-suite-addition-fountain-inn-sc',
    title: 'Room Addition + Roofline Integration',
    location: 'Fountain Inn, SC',
    locationSlug: 'fountain-inn-sc',
    description: 'Bedroom suite expansion with structural reinforcement and seamless exterior detailing.',
    image: additionImageSet.defaultSrc,
    imageSrcSet: additionImageSet.srcSet,
    imageSizes: additionImageSet.sizes,
    imageAlt: 'Finished room addition with integrated roofline and gray vinyl exterior in Fountain Inn',
    imagePosition: 'center 58%',
    relatedServices: ['additions']
  },
  {
    slug: 'composite-deck-greenville-sc',
    title: 'Composite Deck with outdoor living area with a bar and a firepit',
    location: 'Greenville, SC',
    locationSlug: 'greenville-sc',
    description: 'Composite deck system with covered roof section, integrated stairs, and evening-ready lighting.',
    image: deckImageSet.defaultSrc,
    imageSrcSet: deckImageSet.srcSet,
    imageSizes: deckImageSet.sizes,
    imageAlt: 'Composite deck with modern railings, bar seating, and outdoor living space in Greenville',
    imagePosition: 'center 54%',
    relatedServices: ['decks']
  },
  {
    slug: 'aluminum-screened-enclosure-fountain-inn-sc',
    title: 'Aluminum Screened Patio Enclosure',
    location: 'Fountain Inn, SC',
    locationSlug: 'fountain-inn-sc',
    description: 'Full patio enclosure with powder-coated aluminum framing, pet-safe screens, and clean drainage design.',
    image: screenedPorchImageSet.defaultSrc,
    imageSrcSet: screenedPorchImageSet.srcSet,
    imageSizes: screenedPorchImageSet.sizes,
    imageAlt: 'Aluminum-frame screened patio enclosure with clean sightlines and covered roof structure',
    imagePosition: 'center 52%',
    relatedServices: ['screened-porches']
  },
  {
    slug: 'backyard-granny-pod-laurens-sc',
    title: 'Backyard ADU Build',
    location: 'Laurens, SC',
    locationSlug: 'laurens-sc',
    description: 'Detached backyard pod with kitchenette rough-ins, covered entry, and independent utility planning.',
    image: aduImageSet.defaultSrc,
    imageSrcSet: aduImageSet.srcSet,
    imageSizes: aduImageSet.sizes,
    imageAlt: 'Light gray cottage-style backyard ADU with covered front porch and landscaped entry in Laurens',
    imagePosition: 'center 60%',
    relatedServices: ['adus']
  }
];