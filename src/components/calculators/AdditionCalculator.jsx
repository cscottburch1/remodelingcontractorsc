import { useState } from 'react';
import { pricingConfig, formatPriceRange, CALCULATOR_DISCLAIMER } from '../../data/pricingConfig';

export default function AdditionCalculator() {
  const [additionType, setAdditionType] = useState('standard');
  const [sqft, setSqft] = useState(280);
  const [hasBathroom, setHasBathroom] = useState(false);
  const [bathroomType, setBathroomType] = useState('full');
  const [hasHvac, setHasHvac] = useState(true);

  const config = pricingConfig.additions;
  
  // Calculate base addition cost
  const baseRates = config.baseCostPerSqFt[additionType];
  const baseMin = sqft * baseRates.min;
  const baseMax = sqft * baseRates.max;
  
  // Add bathroom if selected
  let bathroomMin = 0;
  let bathroomMax = 0;
  if (hasBathroom) {
    const bathConfig = bathroomType === 'full' ? config.fullBathroom : config.halfBathroom;
    bathroomMin = bathConfig.min;
    bathroomMax = bathConfig.max;
  }
  
  // Add HVAC if selected
  const hvacMin = hasHvac ? config.hvacExtension.min : 0;
  const hvacMax = hasHvac ? config.hvacExtension.max : 0;
  
  // Total estimate
  const totalMin = baseMin + bathroomMin + hvacMin;
  const totalMax = baseMax + bathroomMax + hvacMax;

  return (
    <div className="calculator-widget">
      <h3 className="calculator-title">Addition Cost Calculator</h3>
      <p className="calculator-intro">
        Estimate the cost of your room addition. Pricing reflects Upstate SC market conditions and typical project complexity.
      </p>
      
      <div className="calculator-form">
        {/* Addition Type */}
        <div className="form-group">
          <label htmlFor="additionType">
            <strong>Addition Type</strong>
          </label>
          <select 
            id="additionType" 
            value={additionType} 
            onChange={(e) => setAdditionType(e.target.value)}
            className="form-control"
          >
            <option value="standard">Standard Room Addition</option>
            <option value="masterSuite">Primary Suite Addition</option>
            <option value="secondStory">Second Story Addition</option>
            <option value="bumpOut">Bump-Out Addition</option>
          </select>
        </div>

        {/* Square Footage */}
        <div className="form-group">
          <label htmlFor="sqft">
            <strong>Addition Size (sq ft)</strong>
          </label>
          <input
            type="number"
            id="sqft"
            value={sqft}
            onChange={(e) => setSqft(Number(e.target.value))}
            min="100"
            max="1000"
            step="10"
            className="form-control"
          />
          <div className="form-hint">
            <strong>Common sizes:</strong> {config.commonSizes.map(s => s.name).join(' • ')}
          </div>
        </div>

        {/* Bathroom */}
        <div className="form-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={hasBathroom}
              onChange={(e) => setHasBathroom(e.target.checked)}
            />
            <span>Include bathroom</span>
          </label>
        </div>

        {hasBathroom && (
          <div className="form-group form-group-indent">
            <label htmlFor="bathroomType">
              <strong>Bathroom Type</strong>
            </label>
            <select 
              id="bathroomType" 
              value={bathroomType} 
              onChange={(e) => setBathroomType(e.target.value)}
              className="form-control"
            >
              <option value="full">Full Bath (shower/tub, toilet, sink)</option>
              <option value="half">Half Bath (toilet & sink only)</option>
            </select>
          </div>
        )}

        {/* HVAC */}
        <div className="form-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={hasHvac}
              onChange={(e) => setHasHvac(e.target.checked)}
            />
            <span>HVAC extension to serve addition</span>
          </label>
        </div>
      </div>

      {/* Estimate Result */}
      <div className="calculator-result">
        <div className="estimate-label">Estimated Project Cost</div>
        <div className="estimate-range">{formatPriceRange(totalMin, totalMax)}</div>
        <div className="estimate-breakdown">
          <div className="breakdown-item">
            <span>Base addition ({sqft} sq ft)</span>
            <span>{formatPriceRange(baseMin, baseMax)}</span>
          </div>
          {hasBathroom && (
            <div className="breakdown-item">
              <span>{bathroomType === 'full' ? 'Full' : 'Half'} bathroom</span>
              <span>{formatPriceRange(bathroomMin, bathroomMax)}</span>
            </div>
          )}
          {hasHvac && (
            <div className="breakdown-item">
              <span>HVAC extension</span>
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
