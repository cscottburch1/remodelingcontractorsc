import UniversalPageTemplate from '@/components/UniversalPageTemplate';
import ServicePageContent from '@/components/ServicePageContent';
import { SERVICES_BY_SLUG } from '@/data/coreServices';

const service = SERVICES_BY_SLUG['basement-finishing'];

export const metadata = {
  title: service.name,
  description: service.teaser,
};

export default function BasementFinishingPage() {
  return (
    <UniversalPageTemplate title={service.name} subtitle={service.hero}>
      <ServicePageContent service={service} />
    </UniversalPageTemplate>
  );
}
