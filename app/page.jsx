import Link from 'next/link';
import UniversalPageTemplate from '@/components/UniversalPageTemplate';
import AdvancedCalculator from '@/components/AdvancedCalculator';
import { ROUTABLE_SERVICES } from '@/data/coreServices';
import { TESTIMONIALS } from '@/data/testimonials';

export default function HomePage() {
  const garage = ROUTABLE_SERVICES.find((service) => service.slug === 'garages');

  return (
    <UniversalPageTemplate
      title="Upstate SC Remodeling Built for Real Life"
      subtitle="Professional remodeling across Upstate South Carolina with transparent calculators, clear scope, and 35+ years of experience."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Our Core Services</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {ROUTABLE_SERVICES.map((service) => (
              <Link key={service.slug} href={`/${service.slug}`} className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-slate-900 hover:shadow-sm">
                <p className="font-semibold text-slate-900">{service.name}</p>
                <p className="mt-1 text-sm text-slate-600">{service.teaser}</p>
              </Link>
            ))}
          </div>
        </div>

        <AdvancedCalculator serviceName={garage.name} defaults={garage.miniDefaults} mini />
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Featured Projects and Reviews</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {TESTIMONIALS.slice(0, 4).map((item) => (
            <article key={`${item.name}-${item.city}`} className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="font-semibold text-slate-900">{item.name} · {item.city}</p>
              <p className="mt-1 text-sm text-slate-600">{item.service}</p>
              <p className="mt-3 text-slate-700">"{item.quote}"</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-2xl bg-slate-900 p-7 text-white">
        <h2 className="text-2xl font-bold">Ready to Plan Your Project?</h2>
        <p className="mt-2 text-slate-300">Start with a transparent estimate, then get a detailed scope from our team.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-lg bg-amber-600 px-4 py-2 font-semibold text-white">Get a Quote</Link>
          <Link href="/calculator/garages" className="rounded-lg border border-white/30 px-4 py-2 font-semibold text-white">Open Calculators</Link>
        </div>
      </section>
    </UniversalPageTemplate>
  );
}
