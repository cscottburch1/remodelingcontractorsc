import { testimonials } from '../data/testimonials';
import SectionIntro from './SectionIntro';

export default function Testimonials() {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionIntro
          eyebrow="Testimonials"
          title="Trusted by homeowners across Upstate South Carolina"
          text="Real project feedback focused on communication, craftsmanship, and how the finished space lives day to day."
        />
        <div className="grid-3">
          {testimonials.map((item) => (
            <article key={item.name} className="card quote-card">
              <p>"{item.quote}"</p>
              <strong>{item.name}</strong>
              <small>{item.location}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}