'use client';

import AdvancedCalculator from '@/components/AdvancedCalculator';
import { SERVICES_BY_SLUG } from '@/data/coreServices';

export default function ScreenedPorchCalculator() {
  const service = SERVICES_BY_SLUG['screened-porches'];

  if (!service) {
    return null;
  }

  return <AdvancedCalculator service={service} serviceName={service.name} defaults={service.miniDefaults} />;
}
