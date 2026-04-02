import { Link } from 'react-router-dom';

export default function CtaSection({ title, text, primaryTo = '/request-estimate', secondaryTo = '/contact' }) {
  return (
    <section className="section-pad">
      <div className="container cta">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="action-row">
          <Link to={primaryTo} className="btn btn-primary">Request Estimate</Link>
          <Link to={secondaryTo} className="btn btn-soft">Speak With Our Team</Link>
        </div>
      </div>
    </section>
  );
}