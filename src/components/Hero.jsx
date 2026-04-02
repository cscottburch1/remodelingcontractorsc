import heroImage from '../assets/images/screen-porch-hero.png';

export default function Hero() {
  return (
    <section className="hero section-pad">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Upstate South Carolina Remodeling Contractor</p>

<h1 className="hero-title">
  Custom Garages,<br />
  Additions & Outdoor Living
</h1>

<p className="hero-lead">
  Garages, room additions, decks, screened enclosures, and granny pods built for long-term value and function.
</p>

          <div className="action-row">
            <a href="/request-estimate" className="btn btn-primary">Request Estimate</a>
            <a href="/services" className="btn btn-soft">Explore Services</a>
          </div>

          <div className="hero-trust">
            <span>Garage and addition specialists</span>
            <span>Exterior-focused build quality</span>
            <span>Serving major Upstate SC markets</span>
          </div>
        </div>

        <div className="hero-photo">
          <img
            src={heroImage}
            alt="Aluminum screened porch enclosure with roof and outdoor seating"
            className="hero-img"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}