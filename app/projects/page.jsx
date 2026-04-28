import UniversalPageTemplate from '@/components/UniversalPageTemplate';
import { TESTIMONIALS } from '@/data/testimonials';

export default function ProjectsPage() {
  return (
    <UniversalPageTemplate
      title="Featured Remodeling Projects"
      subtitle="See recent garage builds, additions, decks, kitchens, baths, and ADU work completed across Upstate SC."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {TESTIMONIALS.map((item) => (
          <article key={`${item.name}-${item.city}`} className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="font-semibold text-slate-900">{item.service} · {item.city}</p>
            <p className="mt-3 text-slate-700">"{item.quote}"</p>
            <p className="mt-3 text-sm text-slate-600">{item.name}</p>
          </article>
        ))}
      </div>
    </UniversalPageTemplate>
  );
}
