import garageImage from '../assets/images/garage-2-car-dark-gray.webp';
import additionImage from '../assets/images/room-addition-fountain-inn.webp';
import deckImage from '../assets/images/custom-deck-greenville-sc.webp';
import screenedPorchImage from '../assets/images/custom-screened-porch-aluminum-frame.webp';
import aduImage from '../assets/images/adu-cottage-light-gray.webp';

export const projects = [
  {
    slug: 'detached-three-bay-garage-greenville',
    title: 'Detached Three-Bay Garage Build',
    location: 'Simpsonville, SC',
    locationSlug: 'simpsonville-sc',
    description: 'Custom detached garage with matching siding, carriage-style doors, and upper-level storage framing.',
    image: garageImage,
    imageAlt: 'Professional dark gray two-car detached garage with white trim',
    relatedServices: ['garages']
  },
  {
    slug: 'second-story-addition-simpsonville',
    title: 'Second Story Addition + Roofline Integration',
    location: 'Simpsonville, SC',
    locationSlug: 'simpsonville-sc',
    description: 'Upper-level bedroom suite expansion with structural reinforcement and seamless exterior detailing.',
    image: additionImage,
    imageAlt: 'Modern room addition with brick exterior in Fountain Inn SC',
    relatedServices: ['additions']
  },
  {
    slug: 'covered-composite-deck-greer',
    title: 'Covered Composite Deck With Lighting',
    location: 'Mauldin, SC',
    locationSlug: 'mauldin-sc',
    description: 'Composite deck system with covered roof section, integrated stairs, and evening-ready lighting.',
    image: deckImage,
    imageAlt: 'Custom composite deck with modern railings in Greenville SC',
    relatedServices: ['decks']
  },
  {
    slug: 'aluminum-screened-enclosure-mauldin',
    title: 'Aluminum Screened Patio Enclosure',
    location: 'Fountain Inn, SC',
    locationSlug: 'fountain-inn-sc',
    description: 'Full patio enclosure with powder-coated aluminum framing, pet-safe screens, and clean drainage design.',
    image: screenedPorchImage,
    imageAlt: 'Custom aluminum-frame screened porch enclosure',
    relatedServices: ['screened-porches']
  },
  {
    slug: 'backyard-granny-pod-anderson',
    title: 'Backyard ADU Build',
    location: 'Laurens, SC',
    locationSlug: 'laurens-sc',
    description: 'Detached backyard pod with kitchenette rough-ins, covered entry, and independent utility planning.',
    image: aduImage,
    imageAlt: 'Light gray cottage-style ADU with front porch',
    relatedServices: ['adus']
  }
];