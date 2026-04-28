import AdvancedCalculator from '@/components/AdvancedCalculator';

export default function ServicePageContent({ service }) {
  return (
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
  );
}
