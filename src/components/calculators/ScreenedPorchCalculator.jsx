import { useState } from 'react';
import { pricingConfig, formatPriceRange, CALCULATOR_DISCLAIMER } from '../../data/pricingConfig';

export default function ScreenedPorchCalculator() {
  const [porchType, setPorchType] = useState('basic');
  const [sqft, setSqft] = useState(192);
  const [baseType, setBaseType] = useState('slab');
  const [hasCeiling, setHasCeiling] = useState(false);
  const [hasElectrical, setHasElectrical] = useState(true);

  const config = pricingConfig.screenedPorches;
  
  // Calculate base porch cost
  const baseRates = config.baseCostPerSqFt[porchType];
  const baseMin = sqft * baseRates.min;
  const baseMax = sqft * baseRates.max;
  
  // Ceiling finish if selected
  const ceilingMin = hasCeiling ? sqft * config.ceilingFinish.min : 0;
  const ceilingMax = hasCeiling ? sqft * config.ceilingFinish.max : 0;
  
  // Electrical if selected
  const electricalMin = hasElectrical ? config.electrical.min : 0;
  const electricalMax = hasElectrical ? config.electrical.max : 0;
  
  // Total estimate
  const totalMin = baseMin + ceilingMin + electricalMin;
  const totalMax = baseMax + ceilingMax + electricalMax;

  return (
    <div className="calculator-widget">
      <h3 className="calculator-title">Screened Porch Cost Calculator</h3>
      <p className="calculator-intro">
        Estimate your screened porch project cost. All pricing reflects Upstate SC market rates for aluminum screen systems and quality finishes.
      </p>
      
      <div className="calculator-form">
        {/* Porch Type */}
        <div className="form-group">
          <label htmlFor="porchType">
            <strong>Screened Porch Type</strong>
          </label>
          <select 
            id="porchType" 
            value={porchType} 
            onChange={(e) => setPorchType(e.target.value)}
            className="form-control"
          >
            <option value="basic">Basic Screened Porch</option>
            <option value="covered">Covered Screened Porch (with roof)</option>
            <option value="premium">Premium Screened Porch</option>
          </select>
        </div>

        {/* Square Footage */}
        <div className="form-group">
          <label htmlFor="sqft">
            <strong>Porch Size (sq ft)</strong>
          </label>
          <input
            type="number"
            id="sqft"
            value={sqft}
            onChange={(e) => setSqft(Number(e.target.value))}
            min="100"
            max="600"
            step="10"
            className="form-control"
          />
          <div className="form-hint">
            <strong>Common sizes:</strong> {config.commonSizes.map(s => s.name).join(' • ')}
          </div>
        </div>

        {/* Base Type */}
        <div className="form-group">
          <label htmlFor="baseType">
            <strong>Base Type</strong>
          </label>
          <select 
            id="baseType" 
            value={baseType} 
            onChange={(e) => setBaseType(e.target.value)}
            className="form-control"
          >
            <option value="slab">Concrete Slab</option>
            <option value="deck">Deck Base</option>
          </select>
        </div>

        {/* Ceiling Finish */}
        <div className="form-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={hasCeiling}
              onChange={(e) => setHasCeiling(e.target.checked)}
            />
            <span>Upgraded ceiling finish (beadboard, tongue & groove)</span>
          </label>
        </div>

        {/* Electrical */}
        <div className="form-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={hasElectrical}
              onChange={(e) => setHasElectrical(e.target.checked)}
            />
            <span>Lighting and electrical package</span>
          </label>
        </div>
      </div>

      {/* Estimate Result */}
      <div className="calculator-result">
        <div className="estimate-label">Estimated Project Cost</div>
        <div className="estimate-range">{formatPriceRange(totalMin, totalMax)}</div>
        <div className="estimate-breakdown">
          <div className="breakdown-item">
            <span>Base screened porch ({sqft} sq ft)</span>
            <span>{formatPriceRange(baseMin, baseMax)}</span>
          </div>
          {hasCeiling && (
            <div className="breakdown-item">
              <span>Upgraded ceiling finish</span>
              <span>{formatPriceRange(ceilingMin, ceilingMax)}</span>
            </div>
          )}
          {hasElectrical && (
            <div className="breakdown-item">
              <span>Electrical & lighting</span>
              <span>{formatPriceRange(electricalMin, electricalMax)}</span>
            </div>
          )}
        </div>
      </div>

      <div className="calculator-disclaimer">
        <p><small>{CALCULATOR_DISCLAIMER}</small></p>
      </div>

      <div className="calculator-cta">
        <a href="/contact" className="btn btn-primary">Request Detailed Estimate</a>
      </div>
    </div>
  );
}
