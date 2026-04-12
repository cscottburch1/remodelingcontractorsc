import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <article className="card project-card">
      <div className="project-card-media">
        <img
          src={project.image}
          srcSet={project.imageSrcSet}
          sizes={project.imageSizes}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
          width="900"
          height="600"
          style={{ objectPosition: project.imagePosition || 'center center' }}
        />
      </div>
      <div>
        <p className="eyebrow">{project.location}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <Link to={`/projects/${project.slug}`} className="text-link">View Project</Link>
      </div>
    </article>
  );
}