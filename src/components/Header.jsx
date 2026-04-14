import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { logoImageSet } from '../data/responsiveImages';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Service Areas', to: '/service-areas' },
  { label: 'Projects', to: '/projects' },
  { label: 'Financing', to: '/financing' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header-wrap">

      <div className="header-band">
        <div className="container header-band-inner">
          <p>Serving Greenville, Mauldin, Gray Court, Simpsonville, Fountain Inn, Woodruff, Laurens and Clinton, SC</p>
          <a href="tel:+18647244600">(864) 724-4600</a>
        </div>
        <div className="contractor-credentials">
          <small>
            <strong>SC Licensed General Contractor:</strong> SC# CLG 118679 | <strong>Insured:</strong> National Grange
          </small>
        </div>
      </div>

      <div className="container header">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <picture>
            <source srcSet={logoImageSet.webpSrcSet} sizes={logoImageSet.sizes} type="image/webp" />
            <img
              className="brand-logo"
              src={logoImageSet.fallbackSrc}
              alt="Remodeling Contractors SC logo"
              width="320"
              height="180"
              loading="eager"
              fetchPriority="high"
            />
          </picture>
          <span className="brand-copy">
            <strong className="brand-title">Remodeling Contractors SC</strong>
            <small className="brand-subtitle">Garages, additions, decks, and screened porches</small>
          </span>
        </Link>

        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${open ? 'is-open' : ''}`}>
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)}>
              {item.label}
            </NavLink>
          ))}
          <Link to="/request-estimate" className="btn btn-primary header-cta" onClick={() => setOpen(false)}>
            Request Estimate
          </Link>
        </nav>
      </div>
    </header>
  );
}