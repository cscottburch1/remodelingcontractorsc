/**
 * UPSTATE SC PRICING CONFIGURATION
 * 
 * This file contains editable pricing rates for cost calculators across the site.
 * All rates reflect Upstate South Carolina market conditions.
 * 
 * IMPORTANT: These are base rates for estimation purposes only.
 * Actual project costs vary significantly based on:
 * - Site conditions and access
 * - Design complexity
 * - Material selections
 * - Permit requirements
 * - Structural conditions
 * - Timeline and scheduling
 * 
 * Update rates here to reflect current market conditions.
 * All calculator components reference this centralized config.
 */

export const pricingConfig = {
  // GARAGE PRICING RATES (per square foot unless noted)
  garages: {
    baseCostPerSqFt: {
      detached: {
        min: 85,
        max: 135,
        description: 'Detached garage base cost per sq ft including slab, framing, roof, siding, doors'
      },
      attached: {
        min: 75,
        max: 125,
        description: 'Attached garage base cost per sq ft (lower due to shared structure)'
      }
    },
    
    // Fixed costs for common garage elements
    slabPerSqFt: { min: 8, max: 12, description: 'Concrete slab per sq ft' },
    overheadDoor: { min: 1200, max: 2800, description: 'Per overhead garage door (varies by size/insulation)' },
    walkInDoor: { min: 400, max: 900, description: 'Standard walk-in entry door' },
    window: { min: 350, max: 650, description: 'Per window opening' },
    electricalPackage: { min: 1500, max: 3500, description: 'Basic electrical service and fixtures' },
    upperLevelFinish: { min: 35, max: 65, description: 'Per sq ft for finished space above garage' },
    
    // Common garage sizes
    commonSizes: [
      { name: 'Single Car (12×22)', sqft: 264 },
      { name: 'Two Car (20×20)', sqft: 400 },
      { name: 'Two Car (22×24)', sqft: 528 },
      { name: 'Two Car (24×24)', sqft: 576 },
      { name: 'Three Car (32×24)', sqft: 768 }
    ]
  },

  // ADDITION PRICING RATES
  additions: {
    baseCostPerSqFt: {
      bumpOut: {
        min: 175,
        expected: 190,
        max: 225,
        description: 'Simple bump-out or dry living-space expansion'
      },
      standard: {
        min: 205,
        expected: 218,
        max: 260,
        description: 'Standard finished living-space addition'
      },
      premiumCustom: {
        min: 260,
        expected: 278,
        max: 325,
        description: 'Premium custom addition with upgraded finishes'
      },
      secondStory: {
        min: 350,
        expected: 385,
        max: 425,
        description: 'Second-story or major structural addition'
      },
      masterSuite: {
        min: 300,
        expected: 310,
        max: 375,
        description: 'Primary suite addition with bath and closet package'
      }
    },
    
    // Addition features
    fullBathroom: { min: 12000, max: 22000, description: 'Full bathroom with shower/tub' },
    halfBathroom: { min: 6000, max: 10000, description: 'Half bath (toilet and sink only)' },
    hvacExtension: { min: 2500, max: 5500, description: 'HVAC extension to serve addition' },
    roofTieIn: { min: 3500, max: 8000, description: 'Roof integration complexity premium' },
    
    commonSizes: [
      { name: 'Small (10×12)', sqft: 120 },
      { name: 'Medium (12×16)', sqft: 192 },
      { name: 'Large (14×20)', sqft: 280 },
      { name: 'Primary Suite (16×20)', sqft: 320 },
      { name: 'Family Room (20×20)', sqft: 400 }
    ]
  },

  // SCREENED PORCH PRICING RATES
  screenedPorches: {
    baseCostPerSqFt: {
      basic: {
        min: 65,
        max: 95,
        description: 'Basic screened porch with aluminum frame system, concrete slab base'
      },
      premium: {
        min: 95,
        max: 145,
        description: 'Premium screened porch with upgraded ceiling, lighting, deck base'
      },
      covered: {
        min: 85,
        max: 125,
        description: 'Covered screened porch with roof structure'
      }
    },
    
    // Screened porch features
    deckBase: { min: 25, max: 40, description: 'Deck base per sq ft (vs concrete slab)' },
    slabBase: { min: 10, max: 16, description: 'Concrete slab base per sq ft' },
    aluminumScreenSystem: { min: 18, max: 28, description: 'Aluminum screen frame system per linear foot' },
    roofStructure: { min: 15, max: 25, description: 'Roof framing addition per sq ft' },
    ceilingFinish: { min: 8, max: 15, description: 'Ceiling finish per sq ft (beadboard, tongue-groove, etc)' },
    electrical: { min: 800, max: 2000, description: 'Lighting and electrical package' },
    screenDoor: { min: 400, max: 800, description: 'Screen door entry' },
    
    commonSizes: [
      { name: 'Small (10×12)', sqft: 120 },
      { name: 'Medium (12×16)', sqft: 192 },
      { name: 'Large (14×20)', sqft: 280 },
      { name: 'XL (16×20)', sqft: 320 },
      { name: 'Premium (20×20)', sqft: 400 }
    ]
  },

  // DECK PRICING RATES
  decks: {
    baseCostPerSqFt: {
      pressureTreated: {
        min: 35,
        max: 55,
        description: 'Pressure treated deck with standard railing'
      },
      composite: {
        min: 55,
        max: 85,
        description: 'Composite decking with aluminum or composite railing'
      },
      covered: {
        min: 65,
        max: 105,
        description: 'Covered deck with roof structure and gutters'
      }
    },
    
    // Deck features
    stairs: { min: 800, max: 1800, description: 'Per stair run (varies by height/width)' },
    railingLinearFt: {
      wood: { min: 25, max: 40, description: 'Wood railing per linear foot' },
      composite: { min: 35, max: 55, description: 'Composite railing per linear foot' },
      aluminum: { min: 45, max: 75, description: 'Aluminum railing per linear foot' }
    },
    roofCover: { min: 25, max: 45, description: 'Roof cover structure per sq ft' },
    lighting: { min: 600, max: 1500, description: 'Deck lighting package' },
    builtInBench: { min: 250, max: 450, description: 'Built-in bench seating per linear foot' },
    
    commonSizes: [
      { name: 'Small (10×12)', sqft: 120 },
      { name: 'Medium (12×16)', sqft: 192 },
      { name: 'Large (14×20)', sqft: 280 },
      { name: 'XL (16×24)', sqft: 384 },
      { name: 'Premium (20×24)', sqft: 480 }
    ]
  },

  // ADU PRICING RATES
  adus: {
    baseCostPerSqFt: {
      detached: {
        min: 185,
        max: 275,
        description: 'Detached ADU including foundation, full utilities, finish package'
      },
      garageConversion: {
        min: 120,
        max: 180,
        description: 'Garage conversion to living space (some structure exists)'
      },
      garageApartment: {
        min: 150,
        max: 225,
        description: 'New garage with apartment above'
      },
      attached: {
        min: 165,
        max: 250,
        description: 'Attached ADU/in-law suite addition'
      }
    },
    
    // ADU features
    fullKitchen: { min: 12000, max: 25000, description: 'Full kitchen with appliances' },
    kitchenette: { min: 5000, max: 10000, description: 'Basic kitchenette' },
    fullBathroom: { min: 10000, max: 18000, description: 'Full bathroom' },
    hvacSystem: { min: 4500, max: 8500, description: 'Dedicated HVAC system' },
    utilityHookups: { min: 3500, max: 8000, description: 'Separate utility connections' },
    
    commonSizes: [
      { name: 'Studio (400 sq ft)', sqft: 400 },
      { name: 'Small 1BR (500 sq ft)', sqft: 500 },
      { name: 'Medium 1BR (600 sq ft)', sqft: 600 },
      { name: 'Large 1BR (700 sq ft)', sqft: 700 },
      { name: '2BR Unit (850 sq ft)', sqft: 850 }
    ]
  },

  // GENERAL MODIFIERS
  modifiers: {
    siteAccess: {
      easy: 1.0,
      moderate: 1.1,
      difficult: 1.25,
      description: 'Site access difficulty multiplier'
    },
    
    finishLevel: {
      basic: 1.0,
      standard: 1.15,
      premium: 1.35,
      luxury: 1.6,
      description: 'Finish quality level multiplier'
    },
    
    timeline: {
      standard: 1.0,
      rushed: 1.15,
      description: 'Timeline pressure multiplier'
    }
  }
};

const DEFAULT_COMPLEXITY_OPTIONS = {
  simple: { label: 'Simple', multiplier: 0.97 },
  standard: { label: 'Standard', multiplier: 1.0 },
  complex: { label: 'Complex', multiplier: 1.12 },
};

const DEFAULT_FINISH_OPTIONS = {
  standard: { label: 'Standard', multiplier: 1.0 },
  premium: { label: 'Premium', multiplier: 1.18 },
  luxury: { label: 'Luxury', multiplier: 1.35 },
};

const UPSTATE_LOCATION_OPTIONS = {
  baseline: { label: 'General Upstate SC baseline', multiplier: 1.0 },
  greenville: { label: 'Greenville / Simpsonville', multiplier: 1.04 },
  spartanburg: { label: 'Spartanburg / Greer', multiplier: 1.03 },
  anderson: { label: 'Anderson / Lake area', multiplier: 1.02 },
};

export const CALCULATOR_SERVICE_CONFIGS = {
  garages: {
    defaultSize: 520,
    defaultComplexity: 'standard',
    defaultFinish: 'standard',
    baseRate: {
      min: 85,
      expected: 110,
      max: 135,
      label: 'Garage addition base rate',
    },
    complexityOptions: DEFAULT_COMPLEXITY_OPTIONS,
    finishOptions: DEFAULT_FINISH_OPTIONS,
    locationOptions: UPSTATE_LOCATION_OPTIONS,
    includeOverheadProfit: true,
    overheadProfitLabel: 'Typical contractor O&P included in base rates',
  },
  'room-additions': {
    defaultSize: 360,
    defaultProjectType: 'standardLiving',
    defaultComplexity: 'standard',
    defaultFinish: 'standard',
    locationOptions: UPSTATE_LOCATION_OPTIONS,
    complexityOptions: DEFAULT_COMPLEXITY_OPTIONS,
    finishOptions: DEFAULT_FINISH_OPTIONS,
    includeOverheadProfit: true,
    overheadProfitLabel: 'Typical contractor O&P included in base rates',
    projectTypes: {
      bumpOut: {
        label: 'Bump-out / small expansion',
        description: 'Simple dry living space or compact expansion.',
        rate: pricingConfig.additions.baseCostPerSqFt.bumpOut,
      },
      standardLiving: {
        label: 'Standard living space',
        description: 'Finished living area with standard structural complexity.',
        rate: pricingConfig.additions.baseCostPerSqFt.standard,
      },
      premiumCustom: {
        label: 'Premium custom addition',
        description: 'Upgraded finishes, custom detailing, and higher-spec selections.',
        rate: pricingConfig.additions.baseCostPerSqFt.premiumCustom,
      },
      primarySuite: {
        label: 'Primary suite / bath included',
        description: 'Primary suite with bath, closet, and plumbing scope.',
        rate: pricingConfig.additions.baseCostPerSqFt.masterSuite,
      },
      secondStory: {
        label: 'Second-story / complex structural addition',
        description: 'Major structural addition or vertical expansion.',
        rate: pricingConfig.additions.baseCostPerSqFt.secondStory,
      },
    },
  },
  decks: {
    defaultSize: 260,
    defaultComplexity: 'simple',
    defaultFinish: 'premium',
    baseRate: {
      min: 35,
      expected: 55,
      max: 85,
      label: 'Deck base rate',
    },
    complexityOptions: DEFAULT_COMPLEXITY_OPTIONS,
    finishOptions: DEFAULT_FINISH_OPTIONS,
    locationOptions: UPSTATE_LOCATION_OPTIONS,
    includeOverheadProfit: true,
    overheadProfitLabel: 'Typical contractor O&P included in base rates',
  },
  'screened-porches': {
    defaultSize: 280,
    defaultComplexity: 'standard',
    defaultFinish: 'premium',
    baseRate: {
      min: 65,
      expected: 95,
      max: 145,
      label: 'Screened porch base rate',
    },
    complexityOptions: DEFAULT_COMPLEXITY_OPTIONS,
    finishOptions: DEFAULT_FINISH_OPTIONS,
    locationOptions: UPSTATE_LOCATION_OPTIONS,
    includeOverheadProfit: true,
    overheadProfitLabel: 'Typical contractor O&P included in base rates',
  },
  'basement-finishing': {
    defaultSize: 620,
    defaultComplexity: 'complex',
    defaultFinish: 'standard',
    baseRate: {
      min: 35,
      expected: 50,
      max: 75,
      label: 'Basement finishing base rate',
    },
    complexityOptions: DEFAULT_COMPLEXITY_OPTIONS,
    finishOptions: DEFAULT_FINISH_OPTIONS,
    locationOptions: UPSTATE_LOCATION_OPTIONS,
    includeOverheadProfit: true,
    overheadProfitLabel: 'Typical contractor O&P included in base rates',
  },
  adu: {
    defaultSize: 680,
    defaultComplexity: 'complex',
    defaultFinish: 'premium',
    baseRate: {
      min: 185,
      expected: 225,
      max: 275,
      label: 'ADU base rate',
    },
    complexityOptions: DEFAULT_COMPLEXITY_OPTIONS,
    finishOptions: DEFAULT_FINISH_OPTIONS,
    locationOptions: UPSTATE_LOCATION_OPTIONS,
    includeOverheadProfit: true,
    overheadProfitLabel: 'Typical contractor O&P included in base rates',
  },
  'kitchen-remodeling': {
    defaultSize: 220,
    defaultComplexity: 'complex',
    defaultFinish: 'premium',
    baseRate: {
      min: 150,
      expected: 185,
      max: 260,
      label: 'Kitchen remodel base rate',
    },
    complexityOptions: DEFAULT_COMPLEXITY_OPTIONS,
    finishOptions: DEFAULT_FINISH_OPTIONS,
    locationOptions: UPSTATE_LOCATION_OPTIONS,
    includeOverheadProfit: true,
    overheadProfitLabel: 'Typical contractor O&P included in base rates',
  },
  'bathroom-remodeling': {
    defaultSize: 120,
    defaultComplexity: 'complex',
    defaultFinish: 'premium',
    baseRate: {
      min: 180,
      expected: 240,
      max: 375,
      label: 'Bathroom remodel base rate',
    },
    complexityOptions: DEFAULT_COMPLEXITY_OPTIONS,
    finishOptions: DEFAULT_FINISH_OPTIONS,
    locationOptions: UPSTATE_LOCATION_OPTIONS,
    includeOverheadProfit: true,
    overheadProfitLabel: 'Typical contractor O&P included in base rates',
  },
  'kitchen-bath-remodeling': {
    defaultSize: 220,
    defaultComplexity: 'complex',
    defaultFinish: 'premium',
    baseRate: {
      min: 170,
      expected: 225,
      max: 300,
      label: 'Kitchen and bath remodel base rate',
    },
    complexityOptions: DEFAULT_COMPLEXITY_OPTIONS,
    finishOptions: DEFAULT_FINISH_OPTIONS,
    locationOptions: UPSTATE_LOCATION_OPTIONS,
    includeOverheadProfit: true,
    overheadProfitLabel: 'Typical contractor O&P included in base rates',
  },
};

/**
 * Helper function to format price ranges
 */
export function formatPriceRange(min, max) {
  return `$${min.toLocaleString()} – $${max.toLocaleString()}`;
}

/**
 * Helper function to calculate base estimate
 */
export function calculateBaseEstimate(sqft, rateMin, rateMax) {
  return {
    min: sqft * rateMin,
    max: sqft * rateMax,
    formatted: formatPriceRange(sqft * rateMin, sqft * rateMax)
  };
}

/**
 * Disclaimer text for all calculators
 */
export const CALCULATOR_DISCLAIMER = 
  "Estimated pricing is for planning purposes only, not a final bid. Actual costs vary based on design, site conditions, permitting, materials, structural needs, and existing conditions. Request an estimate for an accurate project-specific quote.";
