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
    title: `${city.city} Remodeling`,
    description: `Remodeling services in ${city.city}, SC with transparent pricing and professional project delivery.`,
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
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {ROUTABLE_SERVICES.map((service) => (
          <Link key={service.slug} href={`/${service.slug}`} className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-slate-900 hover:shadow-sm">
            <p className="font-semibold text-slate-900">{service.name}</p>
            <p className="mt-1 text-sm text-slate-600">{service.teaser}</p>
          </Link>
        ))}
      </div>
    </UniversalPageTemplate>
  );
}
