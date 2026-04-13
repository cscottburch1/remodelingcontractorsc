import { Link } from 'react-router-dom';

export default function HomeServiceCard({ service, prioritizeImage = false }) {
  return (
    <article className="home-service-card">
      <div className="home-service-media">
        <img
          src={service.image}
          srcSet={service.imageSrcSet}
          sizes={service.imageSizes}
          alt={service.imageAlt}
          loading={prioritizeImage ? 'eager' : 'lazy'}
          fetchPriority={prioritizeImage ? 'high' : 'auto'}
          decoding="async"
          width="900"
          height="600"
        />
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