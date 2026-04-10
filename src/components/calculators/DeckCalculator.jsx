import { useState } from 'react';
import { pricingConfig, formatPriceRange, CALCULATOR_DISCLAIMER } from '../../data/pricingConfig';

export default function DeckCalculator() {
  const [deckType, setDeckType] = useState('composite');
  const [sqft, setSqft] = useState(280);
  const [railingType, setRailingType] = useState('composite');
  const [railingLinearFt, setRailingLinearFt] = useState(60);
  const [hasCover, setHasCover] = useState(false);
  const [hasStairs, setHasStairs] = useState(true);

  const config = pricingConfig.decks;
  
  // Calculate base deck cost
  const baseRates = config.baseCostPerSqFt[deckType];
  const baseMin = sqft * baseRates.min;
  const baseMax = sqft * baseRates.max;
  
  // Add railing cost
  const railingRates = config.railingLinearFt[railingType];
  const railingMin = railingLinearFt * railingRates.min;
  const railingMax = railingLinearFt * railingRates.max;
  
  // Add stairs if selected
  const stairsMin = hasStairs ? config.stairs.min : 0;
  const stairsMax = hasStairs ? config.stairs.max : 0;
  
  // Add roof cover if selected
  const coverMin = hasCover ? sqft * config.roofCover.min : 0;
  const coverMax = hasCover ? sqft * config.roofCover.max : 0;
  
  // Total estimate
  const totalMin = baseMin + railingMin + stairsMin + coverMin;
  const totalMax = baseMax + railingMax + stairsMax + coverMax;

  return (
    <div className="calculator-widget">
      <h3 className="calculator-title">Deck Cost Calculator</h3>
      <p className="calculator-intro">
        Get a rough estimate for your custom deck project. Pricing reflects Upstate SC labor and material costs.
      </p>
      
      <div className="calculator-form">
        {/* Deck Type */}
        <div className="form-group">
          <label htmlFor="deckType">
            <strong>Deck Material</strong>
          </label>
          <select 
            id="deckType" 
            value={deckType} 
            onChange={(e) => setDeckType(e.target.value)}
            className="form-control"
          >
            <option value="pressureTreated">Pressure Treated Wood</option>
            <option value="composite">Composite Decking</option>
            <option value="covered">Covered Deck</option>
          </select>
        </div>

        {/* Square Footage */}
        <div className="form-group">
          <label htmlFor="sqft">
            <strong>Deck Size (sq ft)</strong>
          </label>
          <input
            type="number"
            id="sqft"
            value={sqft}
            onChange={(e) => setSqft(Number(e.target.value))}
            min="100"
            max="800"
            step="10"
            className="form-control"
          />
          <div className="form-hint">
            <strong>Common sizes:</strong> {config.commonSizes.map(s => s.name).join(' • ')}
          </div>
        </div>

        {/* Railing Type */}
        <div className="form-group">
          <label htmlFor="railingType">
            <strong>Railing Type</strong>
          </label>
          <select 
            id="railingType" 
            value={railingType} 
            onChange={(e) => setRailingType(e.target.value)}
            className="form-control"
          >
            <option value="wood">Wood Railing</option>
            <option value="composite">Composite Railing</option>
            <option value="aluminum">Aluminum Railing</option>
          </select>
        </div>

        {/* Railing Linear Feet */}
        <div className="form-group">
          <label htmlFor="railingLinearFt">
            <strong>Railing Length (linear feet)</strong>
          </label>
          <input
            type="number"
            id="railingLinearFt"
            value={railingLinearFt}
            onChange={(e) => setRailingLinearFt(Number(e.target.value))}
            min="20"
            max="200"
            step="5"
            className="form-control"
          />
        </div>

        {/* Stairs */}
        <div className="form-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={hasStairs}
              onChange={(e) => setHasStairs(e.target.checked)}
            />
            <span>Stair access to ground level</span>
          </label>
        </div>

        {/* Roof Cover */}
        <div className="form-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={hasCover}
              onChange={(e) => setHasCover(e.target.checked)}
            />
            <span>Roof cover structure</span>
          </label>
        </div>
      </div>

      {/* Estimate Result */}
      <div className="calculator-result">
        <div className="estimate-label">Estimated Project Cost</div>
        <div className="estimate-range">{formatPriceRange(totalMin, totalMax)}</div>
        <div className="estimate-breakdown">
          <div className="breakdown-item">
            <span>Base deck ({sqft} sq ft)</span>
            <span>{formatPriceRange(baseMin, baseMax)}</span>
          </div>
          <div className="breakdown-item">
            <span>{railingType} railing ({railingLinearFt} lin ft)</span>
            <span>{formatPriceRange(railingMin, railingMax)}</span>
          </div>
          {hasStairs && (
            <div className="breakdown-item">
              <span>Stair run</span>
              <span>{formatPriceRange(stairsMin, stairsMax)}</span>
            </div>
          )}
          {hasCover && (
            <div className="breakdown-item">
              <span>Roof cover</span>
              <span>{formatPriceRange(coverMin, coverMax)}</span>
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
