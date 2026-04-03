import { Link } from 'react-router-dom';
import heroImagePng from '../assets/images/screen-porch-hero.png';
import heroImageWebp from '../assets/images/screen-porch-hero.webp';

export default function Hero() {
  return (
    <section className="hero section-pad">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Upstate South Carolina Remodeling Contractor</p>

          <h1 className="hero-title">
            Custom Garages, Additions
            <br />
            & Outdoor Living
          </h1>

          <p className="hero-lead">
            Garages, room additions, decks, screened enclosures, and granny pods built for long-term value across Upstate South Carolina.
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

        <div className="hero-photo">
          <picture>
            <source srcSet={heroImageWebp} type="image/webp" />
            <img
              src={heroImagePng}
              alt="Aluminum screened porch enclosure with roof and outdoor seating"
              className="hero-img"
              loading="eager"
              fetchpriority="high"
              decoding="async"
              width="768"
              height="830"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}