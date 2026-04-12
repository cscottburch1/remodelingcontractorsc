import { heroImageSet } from '../data/responsiveImages';
import SplitHero from './SplitHero';

export default function Hero() {
  return (
    <SplitHero
      eyebrow="Upstate South Carolina Remodeling Contractor"
      title={(
        <>
          Custom Garages,
          <br />
          Additions &amp;
          <br />
          Outdoor Living
        </>
      )}
      text="Garages, room additions, decks, screened enclosures, and ADUs built for long-term value across Upstate South Carolina."
      actions={[
        { label: 'Request Estimate', to: '/request-estimate' },
        { label: 'Explore Services', to: '/services', variant: 'soft' },
      ]}
      highlights={[
        'Garage and addition specialists',
        'Exterior-focused build quality',
        'Serving Upstate South Carolina',
      ]}
      highlightsClassName="hero-trust"
      image={{
        ...heroImageSet,
        srcSet: heroImageSet.webpSrcSet,
        alt: heroImageSet.alt,
        width: 960,
        height: 525,
      }}
    />
  );
}