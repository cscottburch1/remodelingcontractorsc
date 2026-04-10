import { useState } from 'react';
import { pricingConfig, formatPriceRange, CALCULATOR_DISCLAIMER } from '../../data/pricingConfig';

export default function AduCalculator() {
  const [aduType, setAduType] = useState('detached');
  const [sqft, setSqft] = useState(600);
  const [hasKitchen, setHasKitchen] = useState(true);
  const [kitchenType, setKitchenType] = useState('kitchenette');
  const [hasBathroom, setHasBathroom] = useState(true);
  const [hasHvac, setHasHvac] = useState(true);

  const config = pricingConfig.adus;
  
  // Calculate base ADU cost
  const baseRates = config.baseCostPerSqFt[aduType];
  const baseMin = sqft * baseRates.min;
  const baseMax = sqft * baseRates.max;
  
  // Add kitchen if selected
  let kitchenMin = 0;
  let kitchenMax = 0;
  if (hasKitchen) {
    const kitchenConfig = kitchenType === 'full' ? config.fullKitchen : config.kitchenette;
    kitchenMin = kitchenConfig.min;
    kitchenMax = kitchenConfig.max;
  }
  
  // Add bathroom if selected
  const bathroomMin = hasBathroom ? config.fullBathroom.min : 0;
  const bathroomMax = hasBathroom ? config.fullBathroom.max : 0;
  
  // Add HVAC if selected
  const hvacMin = hasHvac ? config.hvacSystem.min : 0;
  const hvacMax = hasHvac ? config.hvacSystem.max : 0;
  
  // Total estimate
  const totalMin = baseMin + kitchenMin + bathroomMin + hvacMin;
  const totalMax = baseMax + kitchenMax + bathroomMax + hvacMax;

  return (
    <div className="calculator-widget">
      <h3 className="calculator-title">ADU Cost Calculator</h3>
      <p className="calculator-intro">
        Estimate the cost of your accessory dwelling unit project. Pricing reflects Upstate SC market conditions for complete secondary living spaces.
      </p>
      
      <div className="calculator-form">
        {/* ADU Type */}
        <div className="form-group">
          <label htmlFor="aduType">
            <strong>ADU Type</strong>
          </label>
          <select 
            id="aduType" 
            value={aduType} 
            onChange={(e) => setAduType(e.target.value)}
            className="form-control"
          >
            <option value="detached">Detached Backyard ADU</option>
            <option value="garageApartment">Garage with Apartment Above</option>
            <option value="attached">Attached In-Law Suite</option>
            <option value="garageConversion">Garage Conversion to Living Space</option>
          </select>
        </div>

        {/* Square Footage */}
        <div className="form-group">
          <label htmlFor="sqft">
            <strong>ADU Size (sq ft)</strong>
          </label>
          <input
            type="number"
            id="sqft"
            value={sqft}
            onChange={(e) => setSqft(Number(e.target.value))}
            min="300"
            max="1200"
            step="50"
            className="form-control"
          />
          <div className="form-hint">
            <strong>Common sizes:</strong> {config.commonSizes.map(s => s.name).join(' • ')}
          </div>
        </div>

        {/* Kitchen */}
        <div className="form-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={hasKitchen}
              onChange={(e) => setHasKitchen(e.target.checked)}
            />
            <span>Include kitchen</span>
          </label>
        </div>

        {hasKitchen && (
          <div className="form-group form-group-indent">
            <label htmlFor="kitchenType">
              <strong>Kitchen Type</strong>
            </label>
            <select 
              id="kitchenType" 
              value={kitchenType} 
              onChange={(e) => setKitchenType(e.target.value)}
              className="form-control"
            >
              <option value="kitchenette">Kitchenette (mini fridge, microwave, sink)</option>
              <option value="full">Full Kitchen (range, fridge, dishwasher, full cabinets)</option>
            </select>
          </div>
        )}

        {/* Bathroom */}
        <div className="form-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={hasBathroom}
              onChange={(e) => setHasBathroom(e.target.checked)}
            />
            <span>Full bathroom (shower, toilet, sink)</span>
          </label>
        </div>

        {/* HVAC */}
        <div className="form-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={hasHvac}
              onChange={(e) => setHasHvac(e.target.checked)}
            />
            <span>Dedicated HVAC system</span>
          </label>
        </div>
      </div>

      {/* Estimate Result */}
      <div className="calculator-result">
        <div className="estimate-label">Estimated Project Cost</div>
        <div className="estimate-range">{formatPriceRange(totalMin, totalMax)}</div>
        <div className="estimate-breakdown">
          <div className="breakdown-item">
            <span>Base ADU structure ({sqft} sq ft)</span>
            <span>{formatPriceRange(baseMin, baseMax)}</span>
          </div>
          {hasKitchen && (
            <div className="breakdown-item">
              <span>{kitchenType === 'full' ? 'Full kitchen' : 'Kitchenette'}</span>
              <span>{formatPriceRange(kitchenMin, kitchenMax)}</span>
            </div>
          )}
          {hasBathroom && (
            <div className="breakdown-item">
              <span>Full bathroom</span>
              <span>{formatPriceRange(bathroomMin, bathroomMax)}</span>
            </div>
          )}
          {hasHvac && (
            <div className="breakdown-item">
              <span>HVAC system</span>
              <span>{formatPriceRange(hvacMin, hvacMax)}</span>
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
