import { Link } from 'react-router-dom';

export default function ServiceCard({ service }) {
  return (
    <article className="card service-card">
      <img src={service.image} alt={service.imageAlt} loading="lazy" decoding="async" width="1400" height="875" />
      <div>
        <h3>{service.name}</h3>
        <p>{service.summary}</p>
        <Link to={`/services/${service.slug}`} className="text-link">Explore Service</Link>
      </div>
    </article>
  );
}