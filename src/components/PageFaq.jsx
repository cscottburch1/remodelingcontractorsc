export default function PageFaq({ title = 'Frequently asked questions', text, items = [] }) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="page-section">
      <div className="section-intro compact-section-intro">
        <h2>{title}</h2>
        {text ? <p>{text}</p> : null}
      </div>
      <div className="faq-list page-faq-list">
        {items.map((item) => (
          <details key={item.question} className="faq-item">
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}