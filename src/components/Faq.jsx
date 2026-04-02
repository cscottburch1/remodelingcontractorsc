import { faqs } from '../data/faqs';
import SectionIntro from './SectionIntro';

export default function Faq() {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionIntro
          eyebrow="FAQ"
          title="Common remodeling questions"
          text="Clear answers on timeline, budget planning, design support, and what to expect during construction."
        />
        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.question} className="faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}