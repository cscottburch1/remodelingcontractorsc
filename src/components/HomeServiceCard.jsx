import { Link } from 'react-router-dom';

export default function HomeServiceCard({ service }) {
  return (
    <article className="home-service-card">
      <div className="home-service-media">
        <img src={service.image} alt={service.imageAlt} loading="lazy" decoding="async" width="960" height="720" />
      </div>
      <div className="home-service-body">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <Link to={service.path || `/services/${service.slug}`} className="home-service-link">
          {service.linkLabel || `Explore ${service.title}`}
        </Link>
      </div>
    </article>
  );
}