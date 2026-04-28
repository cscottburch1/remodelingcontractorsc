import UniversalPageTemplate from '@/components/UniversalPageTemplate';
import ServicePageContent from '@/components/ServicePageContent';
import { SERVICES_BY_SLUG } from '@/data/coreServices';

const service = SERVICES_BY_SLUG['kitchen-remodeling'];

export const metadata = {
  title: service.name,
  description: service.teaser,
};

export default function KitchenRemodelingPage() {
  return (
    <UniversalPageTemplate title={service.name} subtitle={service.hero}>
      <ServicePageContent service={service} />
    </UniversalPageTemplate>
  );
}
