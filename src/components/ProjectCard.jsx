import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <article className="card project-card">
      <img src={project.image} alt={project.imageAlt} loading="lazy" />
      <div>
        <p className="eyebrow">{project.location}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <Link to={`/projects/${project.slug}`} className="text-link">View Project</Link>
      </div>
    </article>
  );
}