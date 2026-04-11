import { Link } from 'react-router-dom';
import heroImageWebp from '../assets/images/screened porch simpsonville sc_enhanced.webp';

export default function Hero() {
  return (
    <section className="hero hero-split">
      <div className="hero-media" aria-hidden="true">
        <picture>
          <source srcSet={heroImageWebp} type="image/webp" />
          <img
            src={heroImageWebp}
            alt=""
            className="hero-bg-img"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="1600"
            height="1000"
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