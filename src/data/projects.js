import garageImage from '../assets/images/garage-2-car-dark-gray.webp';
import additionImage from '../assets/images/room-addition-fountain-inn.webp';
import deckImage from '../assets/images/custom-deck-greenville-sc.webp';
import screenedPorchImage from '../assets/images/custom-screened-porch-aluminum-frame.webp';
import aduImage from '../assets/images/adu-cottage-light-gray.webp';

export const projects = [
  {
    slug: 'detached-two-bay-garage-simpsonville-sc',
    title: 'Detached Two-Bay Garage Build',
    location: 'Simpsonville, SC',
    locationSlug: 'simpsonville-sc',
    description: 'Custom detached garage with matching siding, carriage-style doors, and upper-level storage framing.',
    image: garageImage,
    imageAlt: 'Professional dark gray two-car detached garage with white trim',
    imagePosition: 'center 62%',
    relatedServices: ['garages']
  },
  {
    slug: 'new-bedroom-suite-addition-fountain-inn-sc',
    title: 'Room Addition + Roofline Integration',
    location: 'Fountain Inn, SC',
    locationSlug: 'fountain-inn-sc',
    description: 'Bedroom suite expansion with structural reinforcement and seamless exterior detailing.',
    image: additionImage,
    imageAlt: 'Modern room addition with vinyl exterior in Fountain Inn SC',
    imagePosition: 'center 58%',
    relatedServices: ['additions']
  },
  {
    slug: 'composite-deck-greenville-sc',
    title: 'Composite Deck with outdoor living area with a bar and a firepit',
    location: 'Greenville, SC',
    locationSlug: 'greenville-sc',
    description: 'Composite deck system with covered roof section, integrated stairs, and evening-ready lighting.',
    image: deckImage,
    imageAlt: 'Custom composite deck with modern railings in Greenville SC',
    imagePosition: 'center 54%',
    relatedServices: ['decks']
  },
  {
    slug: 'aluminum-screened-enclosure-fountain-inn-sc',
    title: 'Aluminum Screened Patio Enclosure',
    location: 'Fountain Inn, SC',
    locationSlug: 'fountain-inn-sc',
    description: 'Full patio enclosure with powder-coated aluminum framing, pet-safe screens, and clean drainage design.',
    image: screenedPorchImage,
    imageAlt: 'Custom aluminum-frame screened porch enclosure',
    imagePosition: 'center 52%',
    relatedServices: ['screened-porches']
  },
  {
    slug: 'backyard-granny-pod-laurens-sc',
    title: 'Backyard ADU Build',
    location: 'Laurens, SC',
    locationSlug: 'laurens-sc',
    description: 'Detached backyard pod with kitchenette rough-ins, covered entry, and independent utility planning.',
    image: aduImage,
    imageAlt: 'Light gray cottage-style ADU with front porch',
    imagePosition: 'center 60%',
    relatedServices: ['adus']
  }
];