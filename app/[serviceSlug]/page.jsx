import { notFound } from 'next/navigation';
import UniversalPageTemplate from '@/components/UniversalPageTemplate';
import AdvancedCalculator from '@/components/AdvancedCalculator';
import { SERVICE_SLUGS, SERVICES_BY_SLUG } from '@/data/coreServices';

export function generateStaticParams() {
  return SERVICE_SLUGS.map((serviceSlug) => ({ serviceSlug }));
}

export function generateMetadata({ params }) {
  const service = SERVICES_BY_SLUG[params.serviceSlug];
  if (!service) {
    return {};
  }

  return {
    title: service.name,
    description: service.teaser,
  };
}

export default function ServicePage({ params }) {
  const service = SERVICES_BY_SLUG[params.serviceSlug];
  if (!service) {
    notFound();
  }

  return (
    <UniversalPageTemplate title={service.name} subtitle={service.hero}>
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">How We Build It</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>Clear scope and line-item planning before work starts.</li>
            <li>Permit-ready details and code-first execution.</li>
            <li>Daily cleanliness and schedule communication.</li>
            <li>Final walk-through with finish checklist.</li>
          </ul>
        </div>

        <AdvancedCalculator serviceName={service.name} defaults={service.miniDefaults} mini />
      </div>
    </UniversalPageTemplate>
  );
}
