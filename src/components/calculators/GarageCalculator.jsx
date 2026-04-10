import { useState } from 'react';
import { pricingConfig, formatPriceRange, CALCULATOR_DISCLAIMER } from '../../data/pricingConfig';

export default function GarageCalculator() {
  const [garageType, setGarageType] = useState('detached');
  const [sqft, setSqft] = useState(400);
  const [overheadDoors, setOverheadDoors] = useState(2);
  const [hasElectrical, setHasElectrical] = useState(true);
  const [hasUpperLevel, setHasUpperLevel] = useState(false);
  const [upperSqft, setUpperSqft] = useState(400);

  const config = pricingConfig.garages;
  
  // Calculate base garage cost
  const baseRates = config.baseCostPerSqFt[garageType];
  const baseMin = sqft * baseRates.min;
  const baseMax = sqft * baseRates.max;
  
  // Add overhead doors
  const doorsMin = overheadDoors * config.overheadDoor.min;
  const doorsMax = overheadDoors * config.overheadDoor.max;
  
  // Add electrical if selected
  const electricalMin = hasElectrical ? config.electricalPackage.min : 0;
  const electricalMax = hasElectrical ? config.electricalPackage.max : 0;
  
  // Add upper level if selected
  const upperMin = hasUpperLevel ? upperSqft * config.upperLevelFinish.min : 0;
  const upperMax = hasUpperLevel ? upperSqft * config.upperLevelFinish.max : 0;
  
  // Total estimate
  const totalMin = baseMin + doorsMin + electricalMin + upperMin;
  const totalMax = baseMax + doorsMax + electricalMax + upperMax;

  return (
    <div className="calculator-widget">
      <h3 className="calculator-title">Garage Cost Calculator</h3>
      <p className="calculator-intro">
        Get a rough estimate for your custom garage project. All pricing reflects Upstate SC market conditions.
      </p>
      
      <div className="calculator-form">
        {/* Garage Type */}
        <div className="form-group">
          <label htmlFor="garageType">
            <strong>Garage Type</strong>
          </label>
          <select 
            id="garageType" 
            value={garageType} 
            onChange={(e) => setGarageType(e.target.value)}
            className="form-control"
          >
            <option value="detached">Detached Garage</option>
            <option value="attached">Attached Garage</option>
          </select>
        </div>

        {/* Square Footage */}
        <div className="form-group">
          <label htmlFor="sqft">
            <strong>Garage Size (sq ft)</strong>
          </label>
          <input
            type="number"
            id="sqft"
            value={sqft}
            onChange={(e) => setSqft(Number(e.target.value))}
            min="200"
            max="2000"
            step="50"
            className="form-control"
          />
          <div className="form-hint">
            <strong>Common sizes:</strong> {config.commonSizes.map(s => s.name).join(' • ')}
          </div>
        </div>

        {/* Overhead Doors */}
        <div className="form-group">
          <label htmlFor="doors">
            <strong>Number of Overhead Doors</strong>
          </label>
          <select 
            id="doors" 
            value={overheadDoors} 
            onChange={(e) => setOverheadDoors(Number(e.target.value))}
            className="form-control"
          >
            <option value="1">1 Door</option>
            <option value="2">2 Doors</option>
            <option value="3">3 Doors</option>
          </select>
        </div>

        {/* Electrical */}
        <div className="form-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={hasElectrical}
              onChange={(e) => setHasElectrical(e.target.checked)}
            />
            <span>Include electrical package (lights, outlets, garage door openers)</span>
          </label>
        </div>

        {/* Upper Level Finish */}
        <div className="form-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={hasUpperLevel}
              onChange={(e) => setHasUpperLevel(e.target.checked)}
            />
            <span>Finished space above garage</span>
          </label>
        </div>

        {hasUpperLevel && (
          <div className="form-group form-group-indent">
            <label htmlFor="upperSqft">
              <strong>Upper Level Size (sq ft)</strong>
            </label>
            <input
              type="number"
              id="upperSqft"
              value={upperSqft}
              onChange={(e) => setUpperSqft(Number(e.target.value))}
              min="200"
              max="1200"
              step="50"
              className="form-control"
            />
          </div>
        )}
      </div>

      {/* Estimate Result */}
      <div className="calculator-result">
        <div className="estimate-label">Estimated Project Cost</div>
        <div className="estimate-range">{formatPriceRange(totalMin, totalMax)}</div>
        <div className="estimate-breakdown">
          <div className="breakdown-item">
            <span>Base garage ({sqft} sq ft)</span>
            <span>{formatPriceRange(baseMin, baseMax)}</span>
          </div>
          <div className="breakdown-item">
            <span>{overheadDoors} overhead door{overheadDoors > 1 ? 's' : ''}</span>
            <span>{formatPriceRange(doorsMin, doorsMax)}</span>
          </div>
          {hasElectrical && (
            <div className="breakdown-item">
              <span>Electrical package</span>
              <span>{formatPriceRange(electricalMin, electricalMax)}</span>
            </div>
          )}
          {hasUpperLevel && (
            <div className="breakdown-item">
              <span>Finished upper level ({upperSqft} sq ft)</span>
              <span>{formatPriceRange(upperMin, upperMax)}</span>
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
