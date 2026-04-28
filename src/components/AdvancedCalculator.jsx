'use client';

import { useMemo, useState } from 'react';

const COMPLEXITY_MULTIPLIER = {
  simple: 1,
  standard: 1.15,
  complex: 1.3,
};

const FINISH_MULTIPLIER = {
  standard: 1,
  premium: 1.18,
  luxury: 1.35,
};

export default function AdvancedCalculator({ serviceName, defaults, mini = false }) {
  const [squareFeet, setSquareFeet] = useState(defaults.size);
  const [complexity, setComplexity] = useState(defaults.complexity);
  const [finish, setFinish] = useState(defaults.finish);
  const [showMath, setShowMath] = useState(false);

  const calculation = useMemo(() => {
    const baseRate = 140;
    const localMultiplier = 1.08;
    const subtotal = squareFeet * baseRate;
    const total = Math.round(
      subtotal * COMPLEXITY_MULTIPLIER[complexity] * FINISH_MULTIPLIER[finish] * localMultiplier
    );

    return {
      subtotal,
      total,
      rangeLow: Math.round(total * 0.9),
      rangeHigh: Math.round(total * 1.12),
      baseRate,
      localMultiplier,
    };
  }, [squareFeet, complexity, finish]);

  const saveEstimate = () => {
    const payload = {
      serviceName,
      squareFeet,
      complexity,
      finish,
      total: calculation.total,
      savedAt: new Date().toISOString(),
    };
    localStorage.setItem(`estimate-${serviceName.toLowerCase()}`, JSON.stringify(payload));
    alert('Estimate saved.');
  };

  const printEstimate = () => {
    window.print();
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-8">
      <h3 className="text-xl font-bold text-slate-900 md:text-2xl">{serviceName} Advanced Calculator</h3>
      <p className="mt-2 text-slate-600">Transparent local estimate with Upstate SC cost multipliers.</p>

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

          <div>
            <p className="mb-2 text-sm font-semibold text-slate-700">Complexity</p>
            <div className="flex gap-2">
              {Object.keys(COMPLEXITY_MULTIPLIER).map((value) => (
                <button
                  key={value}
                  onClick={() => setComplexity(value)}
                  className={`rounded-lg border px-3 py-2 text-sm capitalize ${complexity === value ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 text-slate-700'}`}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold text-slate-700">Finish Level</p>
            <div className="flex gap-2">
              {Object.keys(FINISH_MULTIPLIER).map((value) => (
                <button
                  key={value}
                  onClick={() => setFinish(value)}
                  className={`rounded-lg border px-3 py-2 text-sm capitalize ${finish === value ? 'border-amber-600 bg-amber-600 text-white' : 'border-slate-200 text-slate-700'}`}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-slate-50 p-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Estimated Project Budget</p>
          <p className="mt-2 text-4xl font-bold text-slate-900">${calculation.total.toLocaleString()}</p>
          <p className="mt-2 text-sm text-slate-600">
            Typical range: ${calculation.rangeLow.toLocaleString()} - ${calculation.rangeHigh.toLocaleString()}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <button onClick={() => setShowMath((v) => !v)} className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700">
              Show Math
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
              <p>Base: {squareFeet} × ${calculation.baseRate}</p>
              <p>Complexity Multiplier: {COMPLEXITY_MULTIPLIER[complexity]}</p>
              <p>Finish Multiplier: {FINISH_MULTIPLIER[finish]}</p>
              <p>Local Multiplier: {calculation.localMultiplier}</p>
              <p className="mt-1 font-semibold">Total: ${calculation.total.toLocaleString()}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
