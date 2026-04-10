import { Link } from 'react-router-dom';

export default function CtaSection({ 
  title, 
  text, 
  primaryAction = { label: 'Request Estimate', to: '/request-estimate' },
  secondaryAction = { label: 'Speak With Our Team', to: '/contact' }
}) {
  return (
    <section className="section-pad">
      <div className="container cta">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="action-row">
          <Link to={primaryAction.to} className="btn btn-primary">{primaryAction.label}</Link>
          <Link to={secondaryAction.to} className="btn btn-soft">{secondaryAction.label}</Link>
        </div>
      </div>
    </section>
  );
}