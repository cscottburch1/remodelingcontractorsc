import Link from 'next/link';
import { SERVICE_AREAS } from '@/data/serviceAreas';

export default function ClickableCityGrid() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 md:text-3xl">Areas We Serve in Upstate SC</h2>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {SERVICE_AREAS.map((area) => (
            <Link
              key={area.slug}
              href={`/locations/${area.slug}`}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 transition hover:border-slate-900 hover:shadow-sm"
            >
              <p className="font-semibold">{area.city}</p>
              <p className="text-sm text-slate-600">{area.county}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
