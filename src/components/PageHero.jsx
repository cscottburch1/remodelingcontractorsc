import { Link } from 'react-router-dom';

export default function PageHero({ eyebrow, title, text, highlights = [], actions = [] }) {
  return (
    <section className="page-hero-block">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h1 className="page-hero-title">{title}</h1>
      {text ? <p className="page-hero-lead">{text}</p> : null}

      {actions.length ? (
        <div className="action-row page-hero-actions">
          {actions.map((action) => (
            <Link key={action.to} to={action.to} className={`btn ${action.variant === 'soft' ? 'btn-soft' : 'btn-primary'}`}>
              {action.label}
            </Link>
          ))}
        </div>
      ) : null}

      {highlights.length ? (
        <div className="page-hero-highlights">
          {highlights.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      ) : null}
    </section>
  );
}