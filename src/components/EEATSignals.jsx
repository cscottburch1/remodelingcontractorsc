import { BUSINESS_PROFILE } from '@/data/businessProfile';

export default function EEATSignals() {
  return (
    <section className="bg-slate-900 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-6 md:grid-cols-4 md:py-8">
        <div className="rounded-xl border border-white/15 bg-white/5 p-4 text-center">
          <p className="text-xl font-semibold md:text-2xl">{BUSINESS_PROFILE.yearsExperienceLabel}</p>
        </div>
        <div className="rounded-xl border border-white/15 bg-white/5 p-4 text-center">
          <p className="text-xl font-semibold md:text-2xl">5.0 Google Rating</p>
        </div>
        <div className="rounded-xl border border-white/15 bg-white/5 p-4 text-center">
          <p className="text-xl font-semibold md:text-2xl">BBB A+</p>
        </div>
        <div className="rounded-xl border border-white/15 bg-white/5 p-4 text-center">
          <p className="text-xl font-semibold md:text-2xl">SC Licensed</p>
        </div>
      </div>
    </section>
  );
}
