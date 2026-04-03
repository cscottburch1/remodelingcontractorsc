import garageImage from '../assets/images/services/garage-service.svg';
import roomAdditionImage from '../assets/images/services/room-addition-service.svg';
import deckImage from '../assets/images/services/deck-service.svg';
import enclosureImage from '../assets/images/services/screen-enclosure-service.svg';
import grannyPodImage from '../assets/images/services/granny-pod-service.svg';

export const homeServices = [
  {
    title: 'Garages',
    slug: 'garage-builders',
    path: '/services/garage-builders',
    description: 'Custom detached and attached garages built for storage, vehicles, workshops, and curb appeal.',
    image: garageImage,
    imageAlt: 'Illustration of a custom garage with double doors and finished exterior details',
    linkLabel: 'Explore Garages'
  },
  {
    title: 'Room Additions',
    slug: 'room-additions',
    path: '/services/room-additions',
    description: 'Expand your home with thoughtfully designed living space that blends seamlessly with your structure.',
    image: roomAdditionImage,
    imageAlt: 'Illustration of a home with a well-integrated room addition and expanded roofline',
    linkLabel: 'Explore Room Additions'
  },
  {
    title: 'Decks',
    slug: 'deck-builders',
    path: '/services/deck-builders',
    description: 'Durable outdoor living spaces built for comfort, entertaining, and long-term performance.',
    image: deckImage,
    imageAlt: 'Illustration of a covered backyard deck with stairs, railings, and outdoor seating',
    linkLabel: 'Explore Decks'
  },
  {
    title: 'Aluminum Screened Enclosures',
    slug: 'aluminum-screened-enclosures',
    path: '/services/aluminum-screened-enclosures',
    description: 'Low-maintenance screened enclosures that extend outdoor living with protection and comfort.',
    image: enclosureImage,
    imageAlt: 'Illustration of an aluminum screened enclosure attached to a rear patio',
    linkLabel: 'Explore Enclosures'
  },
  {
    title: 'Granny Pods',
    slug: 'granny-pods',
    path: '/granny-pods',
    description: 'Detached backyard living spaces designed for privacy, flexibility, and multi-generational use.',
    image: grannyPodImage,
    imageAlt: 'Illustration of a compact detached backyard living pod with porch entry',
    linkLabel: 'Explore Granny Pods'
  }
];