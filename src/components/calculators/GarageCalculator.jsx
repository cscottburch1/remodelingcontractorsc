'use client';

import AdvancedCalculator from '@/components/AdvancedCalculator';
import { SERVICES_BY_SLUG } from '@/data/coreServices';

export default function GarageCalculator() {
  const service = SERVICES_BY_SLUG.garages;

  if (!service) {
    return null;
  }

  return <AdvancedCalculator service={service} serviceName={service.name} defaults={service.miniDefaults} />;
}
