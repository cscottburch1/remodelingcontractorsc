import UniversalPageTemplate from '@/components/UniversalPageTemplate';

export default function PricingGuidePage() {
  return (
    <UniversalPageTemplate
      title="Pricing Guide"
      subtitle="Use this guide as a planning baseline, then refine with the calculator for your specific scope."
    >
      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="font-semibold">Garages</p>
          <p className="text-slate-700">$140-$260 / sq ft</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="font-semibold">Room Additions</p>
          <p className="text-slate-700">$160-$320 / sq ft</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="font-semibold">Decks</p>
          <p className="text-slate-700">$35-$85 / sq ft</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="font-semibold">Kitchen / Bath / Basement / ADU</p>
          <p className="text-slate-700">Use dedicated calculators for accurate modeling.</p>
        </div>
      </div>
    </UniversalPageTemplate>
  );
}
