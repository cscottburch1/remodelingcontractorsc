import AdvancedCalculator from '@/components/AdvancedCalculator';

export default function ServicePageContent({ service }) {
  return (
    <div>
      <div className="grid gap-8 lg:grid-cols-2">
      <div>
    <h2 className="text-2xl font-bold text-slate-900">How We Build Your Garage</h2>
    <ul className="mt-4 space-y-3 text-slate-700">
      <li className="flex items-start">
        <span className="text-emerald-600 font-medium mr-2">01.</span>
        <span><strong>Clear Planning</strong> — We start with a detailed scope and line-item estimate so you know exactly what to expect.</span>
      </li>
      <li className="flex items-start">
        <span className="text-emerald-600 font-medium mr-2">02.</span>
        <span><strong>Permit-Ready Execution</strong> — All plans are built to meet Upstate SC building codes and local requirements from day one.</span>
      </li>
      <li className="flex items-start">
        <span className="text-emerald-600 font-medium mr-2">03.</span>
        <span><strong>Daily Cleanliness &amp; Communication</strong> — We keep your property clean and provide regular updates throughout the build.</span>
      </li>
      <li className="flex items-start">
        <span className="text-emerald-600 font-medium mr-2">04.</span>
        <span><strong>Final Walkthrough &amp; Checklist</strong> — We don’t consider the job complete until you’re 100% satisfied with the finished garage.</span>
      </li>
    </ul>
  </div>

  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-sm">
    <p className="font-medium text-slate-900 mb-3">Why this process matters in Upstate SC:</p>
    <ul className="space-y-2 text-slate-600">
      <li>• Proper moisture control for our humid climate</li>
      <li>• Reinforced foundations built for local soil conditions</li>
      <li>• 35+ years of experience with local permitting and inspections</li>
      <li>• Transparent communication so there are no surprises</li>
    </ul>
  </div>
</div>

      <AdvancedCalculator serviceName={service.name} defaults={service.miniDefaults} mini />
    </div>
  );
}
