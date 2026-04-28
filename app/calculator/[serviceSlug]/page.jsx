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

  return (
    <UniversalPageTemplate
      title={`${service.name} Cost Calculator`}
      subtitle="Use transparent math to plan budget, compare finish levels, and save your estimate."
    >
      <AdvancedCalculator serviceName={service.name} defaults={service.miniDefaults} />
    </UniversalPageTemplate>
  );
}
