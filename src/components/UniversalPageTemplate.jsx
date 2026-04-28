import EEATSignals from '@/components/EEATSignals';
import ClickableCityGrid from '@/components/ClickableCityGrid';

export default function UniversalPageTemplate({ title, subtitle, children }) {
  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight md:text-6xl">{title}</h1>
          {subtitle ? <p className="mt-4 max-w-3xl text-lg text-slate-300 md:text-xl">{subtitle}</p> : null}
        </div>
      </section>
      <EEATSignals />
      <section>
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">{children}</div>
      </section>
      <ClickableCityGrid />
    </>
  );
}
