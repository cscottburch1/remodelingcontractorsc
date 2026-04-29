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
    title: `${service.name} Calculator`,
    description: `Advanced ${service.name.toLowerCase()} calculator with transparent math and local multipliers.`,
  };
}

export default function CalculatorPage({ params }) {
  const service = SERVICES_BY_SLUG[params.serviceSlug];
  if (!service) {
    notFound();
  }

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <UniversalPageTemplate
      title={`${service.name} Cost Calculator`}
      subtitle="Use transparent math to plan budget, compare finish levels, and save your estimate."
    >
      {/* Date Stamps */}
      {(service.publishedDate || service.lastModified) && (
        <div className="max-w-4xl mx-auto px-6 mb-6">
          <div className="flex gap-4 text-sm text-slate-600 border-b border-slate-200 pb-4">
            {service.publishedDate && (
              <span>Published: <time dateTime={service.publishedDate}>{formatDate(service.publishedDate)}</time></span>
            )}
            {service.lastModified && (
              <span>Last Updated: <time dateTime={service.lastModified}>{formatDate(service.lastModified)}</time></span>
            )}
          </div>
        </div>
      )}

      <AdvancedCalculator serviceName={service.name} defaults={service.miniDefaults} />
    </UniversalPageTemplate>
  );
}
