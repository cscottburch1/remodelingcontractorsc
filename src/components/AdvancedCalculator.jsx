'use client';

import { useMemo, useState } from 'react';
import { CALCULATOR_SERVICE_CONFIGS } from '../data/pricingConfig';

const GENERIC_COMPLEXITY_OPTIONS = {
  simple: { label: 'Simple', multiplier: 0.97 },
  standard: { label: 'Standard', multiplier: 1.0 },
  complex: { label: 'Complex', multiplier: 1.12 },
};

const GENERIC_FINISH_OPTIONS = {
  standard: { label: 'Standard', multiplier: 1.0 },
  premium: { label: 'Premium', multiplier: 1.18 },
  luxury: { label: 'Luxury', multiplier: 1.35 },
};

const GENERIC_LOCATION_OPTIONS = {
  baseline: { label: 'General Upstate SC baseline', multiplier: 1.0 },
  greenville: { label: 'Greenville / Simpsonville', multiplier: 1.04 },
  spartanburg: { label: 'Spartanburg / Greer', multiplier: 1.03 },
  anderson: { label: 'Anderson / Lake area', multiplier: 1.02 },
};

const GENERIC_FALLBACK_CONFIG = {
  defaultSize: 360,
  defaultComplexity: 'standard',
  defaultFinish: 'standard',
  baseRate: {
    min: 140,
    expected: 140,
    max: 140,
    label: 'General planning rate',
  },
  complexityOptions: GENERIC_COMPLEXITY_OPTIONS,
  finishOptions: GENERIC_FINISH_OPTIONS,
  locationOptions: GENERIC_LOCATION_OPTIONS,
  includeOverheadProfit: true,
  overheadProfitLabel: 'Typical contractor O&P included in base rates',
};

function formatMultiplier(multiplier) {
  return multiplier.toFixed(2);
}

function getFirstKey(object) {
  return object ? Object.keys(object)[0] : undefined;
}

export default function AdvancedCalculator({ service, serviceName, defaults = {}, mini = false }) {
  const calculatorConfig = CALCULATOR_SERVICE_CONFIGS[service?.slug] ?? GENERIC_FALLBACK_CONFIG;
  const projectTypeEntries = calculatorConfig.projectTypes ? Object.entries(calculatorConfig.projectTypes) : [];
  const locationEntries = Object.entries(calculatorConfig.locationOptions ?? GENERIC_LOCATION_OPTIONS);

  const [squareFeet, setSquareFeet] = useState(calculatorConfig.defaultSize ?? defaults.size ?? 360);
  const [projectType, setProjectType] = useState(
    calculatorConfig.defaultProjectType ?? projectTypeEntries[0]?.[0] ?? 'standard'
  );
  const [complexity, setComplexity] = useState(
    calculatorConfig.defaultComplexity ?? defaults.complexity ?? getFirstKey(calculatorConfig.complexityOptions) ?? 'standard'
  );
  const [finish, setFinish] = useState(
    calculatorConfig.defaultFinish ?? defaults.finish ?? getFirstKey(calculatorConfig.finishOptions) ?? 'standard'
  );
  const [location, setLocation] = useState(
    calculatorConfig.defaultLocation ?? getFirstKey(calculatorConfig.locationOptions) ?? 'baseline'
  );
  const [showMath, setShowMath] = useState(false);

  const calculation = useMemo(() => {
    const activeProjectType = projectTypeEntries.find(([key]) => key === projectType)?.[1];
    const rateBand = activeProjectType?.rate ?? calculatorConfig.baseRate ?? GENERIC_FALLBACK_CONFIG.baseRate;
    const complexityBand = calculatorConfig.complexityOptions?.[complexity] ?? GENERIC_COMPLEXITY_OPTIONS[complexity] ?? GENERIC_COMPLEXITY_OPTIONS.standard;
    const finishBand = calculatorConfig.finishOptions?.[finish] ?? GENERIC_FINISH_OPTIONS[finish] ?? GENERIC_FINISH_OPTIONS.standard;
    const locationBand = calculatorConfig.locationOptions?.[location] ?? GENERIC_LOCATION_OPTIONS[location] ?? GENERIC_LOCATION_OPTIONS.baseline;
    const lowRate = rateBand.min ?? rateBand.expected ?? rateBand.max;
    const expectedRate = rateBand.expected ?? Math.round(((rateBand.min ?? lowRate) + (rateBand.max ?? lowRate)) / 2);
    const highRate = rateBand.max ?? rateBand.expected ?? rateBand.min;
    const overheadMultiplier = calculatorConfig.includeOverheadProfit === false
      ? (calculatorConfig.overheadProfitMultiplier ?? 1.0)
      : 1.0;

    const expectedSubtotal = squareFeet * expectedRate;
    const lowSubtotal = squareFeet * lowRate;
    const highSubtotal = squareFeet * highRate;

    const total = Math.round(
      expectedSubtotal * complexityBand.multiplier * finishBand.multiplier * locationBand.multiplier * overheadMultiplier
    );

    return {
      total,
      rangeLow: Math.round(lowSubtotal * complexityBand.multiplier * finishBand.multiplier * locationBand.multiplier * overheadMultiplier),
      rangeHigh: Math.round(highSubtotal * complexityBand.multiplier * finishBand.multiplier * locationBand.multiplier * overheadMultiplier),
      expectedRate,
      lowRate,
      highRate,
      complexityBand,
      finishBand,
      locationBand,
      activeProjectType,
      rateLabel: rateBand.label ?? 'Selected base rate',
      overheadLabel: calculatorConfig.includeOverheadProfit === false
        ? `O&P added separately ×${formatMultiplier(calculatorConfig.overheadProfitMultiplier ?? 1.0)}`
        : (calculatorConfig.overheadProfitLabel ?? 'Typical contractor O&P included in base rates'),
    };
  }, [calculatorConfig, complexity, finish, location, projectType, projectTypeEntries, squareFeet]);

  const saveEstimate = () => {
    const payload = {
      serviceSlug: service?.slug,
      serviceName,
      squareFeet,
      projectType,
      complexity,
      finish,
      location,
      total: calculation.total,
      savedAt: new Date().toISOString(),
    };
    const storageKey = service?.slug ?? serviceName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    localStorage.setItem(`estimate-${storageKey}`, JSON.stringify(payload));
    alert('Estimate saved.');
  };

  const printEstimate = () => {
    window.print();
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-8">
      <h3 className="text-xl font-bold text-slate-900 md:text-2xl">{serviceName} Advanced Calculator</h3>
      <p className="mt-2 text-slate-600">Service-specific planning estimate with transparent rate bands and local adjustments.</p>

      <div className={`mt-6 grid gap-6 ${mini ? 'md:grid-cols-1' : 'md:grid-cols-2'}`}>
        <div className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Project Size: {squareFeet} sq ft</label>
            <input
              type="range"
              min="80"
              max="2400"
              step="20"
              value={squareFeet}
              onChange={(e) => setSquareFeet(Number(e.target.value))}
              className="w-full"
            />
          </div>

          {projectTypeEntries.length > 1 && (
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Project Type</label>
              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
              >
                {projectTypeEntries.map(([key, option]) => (
                  <option key={key} value={key}>
                    {option.label}
                  </option>
                ))}
              </select>
              {calculation.activeProjectType?.description && (
                <p className="mt-2 text-xs text-slate-500">{calculation.activeProjectType.description}</p>
              )}
            </div>
          )}

          <div>
            <p className="mb-2 text-sm font-semibold text-slate-700">Complexity</p>
            <div className="flex gap-2">
              {Object.entries(calculatorConfig.complexityOptions ?? GENERIC_COMPLEXITY_OPTIONS).map(([value, option]) => (
                <button
                  key={value}
                  onClick={() => setComplexity(value)}
                  className={`rounded-lg border px-3 py-2 text-sm capitalize ${complexity === value ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 text-slate-700'}`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold text-slate-700">Finish Level</p>
            <div className="flex gap-2">
              {Object.entries(calculatorConfig.finishOptions ?? GENERIC_FINISH_OPTIONS).map(([value, option]) => (
                <button
                  key={value}
                  onClick={() => setFinish(value)}
                  className={`rounded-lg border px-3 py-2 text-sm capitalize ${finish === value ? 'border-amber-600 bg-amber-600 text-white' : 'border-slate-200 text-slate-700'}`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Location Multiplier</label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
            >
              {locationEntries.map(([value, option]) => (
                <option key={value} value={value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="rounded-xl bg-slate-50 p-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Estimated Project Budget</p>
          <p className="mt-2 text-4xl font-bold text-slate-900">${calculation.total.toLocaleString()}</p>
          <p className="mt-2 text-sm text-slate-600">
            Planning range: ${calculation.rangeLow.toLocaleString()} - ${calculation.rangeHigh.toLocaleString()}
          </p>
          <p className="mt-1 text-xs text-slate-500">Planning ranges are estimates only, not a final bid.</p>

          <div className="mt-5 flex flex-wrap gap-2">
            <button onClick={() => setShowMath((v) => !v)} className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700">
              {showMath ? 'Hide Math' : 'Show Math'}
            </button>
            <button onClick={saveEstimate} className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white">
              Save
            </button>
            <button onClick={printEstimate} className="rounded-lg bg-amber-600 px-3 py-2 text-sm font-semibold text-white">
              Print
            </button>
            <button onClick={printEstimate} className="rounded-lg border border-amber-600 px-3 py-2 text-sm font-semibold text-amber-700">
              PDF
            </button>
          </div>

          {showMath && (
            <div className="mt-5 rounded-lg border border-slate-200 bg-white p-3 text-sm text-slate-700">
              <p>{squareFeet} sq ft × ${calculation.expectedRate.toLocaleString()} / sq ft</p>
              <p>Project type: {calculation.activeProjectType?.label ?? calculation.rateLabel}</p>
              <p>Rate band: ${calculation.lowRate.toLocaleString()} - ${calculation.highRate.toLocaleString()} / sq ft</p>
              <p>Complexity multiplier: ×{formatMultiplier(calculation.complexityBand.multiplier)} ({calculation.complexityBand.label})</p>
              <p>Finish multiplier: ×{formatMultiplier(calculation.finishBand.multiplier)} ({calculation.finishBand.label})</p>
              <p>Location multiplier: ×{formatMultiplier(calculation.locationBand.multiplier)} ({calculation.locationBand.label})</p>
              <p>{calculation.overheadLabel}</p>
              <p>Formula: square footage × base rate × complexity × finish × location</p>
              <p className="mt-1 font-semibold">Total: ${calculation.total.toLocaleString()}</p>
            </div>
          )}

          <p className="mt-4 text-xs leading-relaxed text-slate-500">
            Each project may vary due to existing conditions, site access, foundation requirements, structural tie-ins, utilities, selections, permits, and inspection requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
