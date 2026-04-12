import { Link } from 'react-router-dom';
import { heroImageSet } from '../data/responsiveImages';

export default function Hero() {
  return (
    <section className="hero hero-split">
      <div className="hero-media" aria-hidden="true">
        <picture>
          <source srcSet={heroImageSet.avifSrcSet} sizes={heroImageSet.sizes} type="image/avif" />
          <source srcSet={heroImageSet.webpSrcSet} sizes={heroImageSet.sizes} type="image/webp" />
          <img
            src={heroImageSet.defaultSrc}
            srcSet={heroImageSet.webpSrcSet}
            sizes={heroImageSet.sizes}
            alt=""
            className="hero-bg-img"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="960"
            height="525"
            style={{ aspectRatio: '960/525' }}
          />
        </picture>
        <div className="hero-media-overlay" />
      </div>

      <div className="container hero-shell">
        <div className="hero-copy">
          <p className="eyebrow">Upstate South Carolina Remodeling Contractor</p>

          <h1 className="hero-title">
            Custom Garages,
            <br />
            Additions &amp;
            <br />
            Outdoor Living
          </h1>

          <p className="hero-lead">
            Garages, room additions, decks, screened enclosures, and ADUs built for long-term value across Upstate South Carolina.
          </p>

          <div className="action-row hero-actions">
            <Link to="/request-estimate" className="btn btn-primary hero-primary-cta">Request Estimate</Link>
            <Link to="/services" className="btn btn-soft">Explore Services</Link>
          </div>

          <div className="hero-trust">
            <span>✓ Garage & addition specialists</span>
            <span>✓ Exterior-focused build quality</span>
            <span>✓ Serving Upstate SC</span>
          </div>
        </div>
      </div>

      <div className="hero-bottom-fade" aria-hidden="true" />
    </section>
  );
}