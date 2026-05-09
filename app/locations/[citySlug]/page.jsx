import { notFound } from 'next/navigation';
import Link from 'next/link';
import UniversalPageTemplate from '@/components/UniversalPageTemplate';
import { CITY_SLUGS, CITIES_BY_SLUG } from '@/data/serviceAreas';
import { ROUTABLE_SERVICES } from '@/data/coreServices';

export function generateStaticParams() {
  return CITY_SLUGS.map((citySlug) => ({ citySlug }));
}

export function generateMetadata({ params }) {
  const city = CITIES_BY_SLUG[params.citySlug];
  if (!city) {
    return {};
  }

  return {
    title: `${city.city} Remodeling | Upstate SC Contractor`,
    description: `Professional remodeling in ${city.city}, SC. Garages, room additions, kitchens, bathrooms, decks, and more. Licensed contractor with 35+ years serving ${city.county}.`,
  };
}

export default function CityPage({ params }) {
  const city = CITIES_BY_SLUG[params.citySlug];
  if (!city) {
    notFound();
  }

  return (
    <UniversalPageTemplate
      title={`${city.city}, SC Remodeling Services`}
      subtitle={`Serving ${city.county} with proven remodeling quality and clear project pricing.`}
    >
      {/* Introduction Section */}
      <section className="max-w-4xl mb-12">
        <div className="prose prose-sm max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed">
            If you're in {city.city} or nearby communities in {city.county}, you're working with a remodeling contractor who lives in Upstate South Carolina and has built our reputation over 35 years of local work. Every project — whether it's a garage addition, room expansion, kitchen remodel, or deck construction — is built to handle our local climate, clay soil conditions, and regional building codes. We know {city.city} well and deliver transparent estimates, permit-ready construction, and genuine communication from start to finish.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Our Services in {city.city}</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ROUTABLE_SERVICES.map((service) => (
            <Link 
              key={service.slug} 
              href={`/${service.slug}`} 
              className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-slate-900 hover:shadow-md"
            >
              <p className="font-semibold text-slate-900">{service.name}</p>
              <p className="mt-1 text-sm text-slate-600">{service.teaser}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Why {city.city} Homeowners Choose Us</h2>
        <ul className="grid gap-4 sm:grid-cols-2 text-slate-700">
          <li className="flex gap-3">
            <span className="text-emerald-600 font-bold flex-shrink-0">✓</span>
            <span><strong>Local Expertise:</strong> 35+ years serving {city.county} with understanding of our climate, soil, and code requirements</span>
          </li>
          <li className="flex gap-3">
            <span className="text-emerald-600 font-bold flex-shrink-0">✓</span>
            <span><strong>Transparent Pricing:</strong> Clear estimates and no surprise changes—every detail planned upfront</span>
          </li>
          <li className="flex gap-3">
            <span className="text-emerald-600 font-bold flex-shrink-0">✓</span>
            <span><strong>Proven Process:</strong> Permit-ready construction, daily communication, and final walkthrough inspection</span>
          </li>
          <li className="flex gap-3">
            <span className="text-emerald-600 font-bold flex-shrink-0">✓</span>
            <span><strong>Licensed & Insured:</strong> Full coverage and compliance with all South Carolina building regulations</span>
          </li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project in {city.city}?</h2>
        <p className="text-slate-300 mb-6">Get a transparent estimate tailored to your space and timeline.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/contact" className="rounded-lg bg-amber-600 px-6 py-3 font-semibold text-white hover:bg-amber-700 transition">
            Request an Estimate
          </Link>
          <Link href="/projects" className="rounded-lg border border-white/30 px-6 py-3 font-semibold text-white hover:border-white/50 transition">
            View Our Work
          </Link>
        </div>
      </section>
    </UniversalPageTemplate>
  );
}

