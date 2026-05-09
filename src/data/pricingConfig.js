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
        min: 40,
        max: 60,
        description: 'Detached garage base cost per sq ft including slab, framing, roof, siding, doors'
      },
      attached: {
        min: 35,
        max: 55,
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
        min: 45,
        max: 65,
        description: 'Basic screened porch with aluminum frame system, concrete slab base'
      },
      premium: {
        min: 65,
        max: 90,
        description: 'Premium screened porch with upgraded ceiling, lighting, deck base'
      },
      covered: {
        min: 55,
        max: 80,
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
        min: 18,
        max: 32,
        description: 'Pressure treated deck with standard railing'
      },
      composite: {
        min: 28,
        max: 45,
        description: 'Composite decking with aluminum or composite railing'
      },
      covered: {
        min: 40,
        max: 65,
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
        min: 120,
        max: 180,
        description: 'Detached ADU including foundation, full utilities, finish package'
      },
      garageConversion: {
        min: 80,
        max: 120,
        description: 'Garage conversion to living space (some structure exists)'
      },
      garageApartment: {
        min: 110,
        max: 170,
        description: 'New garage with apartment above'
      },
      attached: {
        min: 100,
        max: 160,
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
    sizeRange: { min: 200, max: 1400, step: 20 },
    defaultProjectType: 'detached',
    defaultComplexity: 'standard',
    defaultFinish: 'standard',
    projectTypes: {
      detached: {
        label: 'Detached garage',
        description: 'Independent structure with full foundation and enclosure.',
        rate: {
          min: pricingConfig.garages.baseCostPerSqFt.detached.min,
          expected: 50,
          max: pricingConfig.garages.baseCostPerSqFt.detached.max,
          label: 'Detached garage base rate',
        },
      },
      attached: {
        label: 'Attached garage',
        description: 'Connected to existing structure with shared tie-in points.',
        rate: {
          min: pricingConfig.garages.baseCostPerSqFt.attached.min,
          expected: 45,
          max: pricingConfig.garages.baseCostPerSqFt.attached.max,
          label: 'Attached garage base rate',
        },
      },
    },
    complexityOptions: DEFAULT_COMPLEXITY_OPTIONS,
    finishOptions: DEFAULT_FINISH_OPTIONS,
    locationOptions: UPSTATE_LOCATION_OPTIONS,
    includeOverheadProfit: true,
    overheadProfitLabel: 'Typical contractor O&P included in base rates',
  },
  'room-additions': {
    defaultSize: 360,
    sizeRange: { min: 100, max: 1800, step: 20 },
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
    sizeRange: { min: 100, max: 1200, step: 10 },
    defaultProjectType: 'composite',
    defaultComplexity: 'standard',
    defaultFinish: 'standard',
    projectTypes: {
      pressureTreated: {
        label: 'Pressure-treated deck',
        description: 'Traditional wood deck with standard detailing.',
        rate: {
          min: pricingConfig.decks.baseCostPerSqFt.pressureTreated.min,
          expected: 25,
          max: pricingConfig.decks.baseCostPerSqFt.pressureTreated.max,
          label: 'Pressure-treated deck rate',
        },
      },
      composite: {
        label: 'Composite deck',
        description: 'Low-maintenance composite decking and railing package.',
        rate: {
          min: pricingConfig.decks.baseCostPerSqFt.composite.min,
          expected: 36,
          max: pricingConfig.decks.baseCostPerSqFt.composite.max,
          label: 'Composite deck rate',
        },
      },
      covered: {
        label: 'Covered deck',
        description: 'Deck with integrated roof structure and drainage.',
        rate: {
          min: pricingConfig.decks.baseCostPerSqFt.covered.min,
          expected: 52,
          max: pricingConfig.decks.baseCostPerSqFt.covered.max,
          label: 'Covered deck rate',
        },
      },
    },
    complexityOptions: DEFAULT_COMPLEXITY_OPTIONS,
    finishOptions: DEFAULT_FINISH_OPTIONS,
    locationOptions: UPSTATE_LOCATION_OPTIONS,
    includeOverheadProfit: true,
    overheadProfitLabel: 'Typical contractor O&P included in base rates',
  },
  'screened-porches': {
    defaultSize: 280,
    sizeRange: { min: 100, max: 900, step: 10 },
    defaultProjectType: 'basic',
    defaultComplexity: 'standard',
    defaultFinish: 'standard',
    projectTypes: {
      basic: {
        label: 'Basic screened porch',
        description: 'Standard screened porch with durable base package.',
        rate: {
          min: pricingConfig.screenedPorches.baseCostPerSqFt.basic.min,
          expected: 55,
          max: pricingConfig.screenedPorches.baseCostPerSqFt.basic.max,
          label: 'Basic screened porch rate',
        },
      },
      covered: {
        label: 'Covered screened porch',
        description: 'Screened porch with full roof tie-in and weather detailing.',
        rate: {
          min: pricingConfig.screenedPorches.baseCostPerSqFt.covered.min,
          expected: 67,
          max: pricingConfig.screenedPorches.baseCostPerSqFt.covered.max,
          label: 'Covered screened porch rate',
        },
      },
      premium: {
        label: 'Premium screened porch',
        description: 'Upgraded screened porch with enhanced finish package.',
        rate: {
          min: pricingConfig.screenedPorches.baseCostPerSqFt.premium.min,
          expected: 78,
          max: pricingConfig.screenedPorches.baseCostPerSqFt.premium.max,
          label: 'Premium screened porch rate',
        },
      },
    },
    complexityOptions: DEFAULT_COMPLEXITY_OPTIONS,
    finishOptions: DEFAULT_FINISH_OPTIONS,
    locationOptions: UPSTATE_LOCATION_OPTIONS,
    includeOverheadProfit: true,
    overheadProfitLabel: 'Typical contractor O&P included in base rates',
  },
  'basement-finishing': {
    defaultSize: 620,
    sizeRange: { min: 250, max: 2400, step: 20 },
    defaultProjectType: 'standard',
    defaultComplexity: 'standard',
    defaultFinish: 'standard',
    projectTypes: {
      basic: {
        label: 'Basic basement finish',
        description: 'Drywall, flooring, lighting, and standard trim package.',
        rate: { min: 35, expected: 42, max: 50, label: 'Basic basement finish rate' },
      },
      standard: {
        label: 'Standard basement finish',
        description: 'Expanded living space with upgraded systems and finishes.',
        rate: { min: 35, expected: 47, max: 55, label: 'Standard basement finish rate' },
      },
      premium: {
        label: 'Premium basement suite',
        description: 'High-end finished basement with premium detailing.',
        rate: { min: 55, expected: 65, max: 75, label: 'Premium basement suite rate' },
      },
    },
    complexityOptions: DEFAULT_COMPLEXITY_OPTIONS,
    finishOptions: DEFAULT_FINISH_OPTIONS,
    locationOptions: UPSTATE_LOCATION_OPTIONS,
    includeOverheadProfit: true,
    overheadProfitLabel: 'Typical contractor O&P included in base rates',
  },
  adu: {
    defaultSize: 680,
    sizeRange: { min: 300, max: 1400, step: 20 },
    defaultProjectType: 'detached',
    defaultComplexity: 'standard',
    defaultFinish: 'standard',
    projectTypes: {
      detached: {
        label: 'Detached ADU',
        description: 'Standalone ADU with full utility infrastructure.',
        rate: {
          min: pricingConfig.adus.baseCostPerSqFt.detached.min,
          expected: 150,
          max: pricingConfig.adus.baseCostPerSqFt.detached.max,
          label: 'Detached ADU rate',
        },
      },
      attached: {
        label: 'Attached in-law suite',
        description: 'Attached ADU tied into the primary home structure.',
        rate: {
          min: pricingConfig.adus.baseCostPerSqFt.attached.min,
          expected: 130,
          max: pricingConfig.adus.baseCostPerSqFt.attached.max,
          label: 'Attached ADU rate',
        },
      },
      garageApartment: {
        label: 'Garage apartment',
        description: 'New garage with finished apartment space above.',
        rate: {
          min: pricingConfig.adus.baseCostPerSqFt.garageApartment.min,
          expected: 140,
          max: pricingConfig.adus.baseCostPerSqFt.garageApartment.max,
          label: 'Garage apartment rate',
        },
      },
      garageConversion: {
        label: 'Garage conversion',
        description: 'Converting existing garage structure to livable space.',
        rate: {
          min: pricingConfig.adus.baseCostPerSqFt.garageConversion.min,
          expected: 100,
          max: pricingConfig.adus.baseCostPerSqFt.garageConversion.max,
          label: 'Garage conversion rate',
        },
      },
    },
    complexityOptions: DEFAULT_COMPLEXITY_OPTIONS,
    finishOptions: DEFAULT_FINISH_OPTIONS,
    locationOptions: UPSTATE_LOCATION_OPTIONS,
    includeOverheadProfit: true,
    overheadProfitLabel: 'Typical contractor O&P included in base rates',
  },
  'kitchen-remodeling': {
    defaultSize: 220,
    sizeRange: { min: 80, max: 650, step: 10 },
    defaultProjectType: 'refresh',
    defaultComplexity: 'standard',
    defaultFinish: 'standard',
    projectTypes: {
      refresh: {
        label: 'Kitchen refresh',
        description: 'Cabinet, countertop, and fixture update with existing layout.',
        rate: { min: 70, expected: 115, max: 160, label: 'Kitchen refresh rate' },
      },
      standard: {
        label: 'Standard kitchen remodel',
        description: 'Full remodel with moderate layout and system changes.',
        rate: { min: 200, expected: 260, max: 320, label: 'Standard kitchen remodel rate' },
      },
      premium: {
        label: 'Premium kitchen remodel',
        description: 'High-end remodel with custom cabinetry and premium finishes.',
        rate: { min: 280, expected: 340, max: 420, label: 'Premium kitchen remodel rate' },
      },
    },
    complexityOptions: DEFAULT_COMPLEXITY_OPTIONS,
    finishOptions: DEFAULT_FINISH_OPTIONS,
    locationOptions: UPSTATE_LOCATION_OPTIONS,
    includeOverheadProfit: true,
    overheadProfitLabel: 'Typical contractor O&P included in base rates',
  },
  'bathroom-remodeling': {
    defaultSize: 120,
    sizeRange: { min: 40, max: 320, step: 5 },
    defaultProjectType: 'standard',
    defaultComplexity: 'standard',
    defaultFinish: 'standard',
    projectTypes: {
      refresh: {
        label: 'Bathroom refresh',
        description: 'Fixture and finish updates within existing layout.',
        rate: { min: 90, expected: 125, max: 175, label: 'Bathroom refresh rate' },
      },
      standard: {
        label: 'Standard bathroom remodel',
        description: 'Full bathroom remodel with plumbing and tile updates.',
        rate: { min: 100, expected: 145, max: 185, label: 'Standard bathroom remodel rate' },
      },
      luxury: {
        label: 'Luxury bathroom remodel',
        description: 'Custom wet-area systems and high-end finish package.',
        rate: { min: 230, expected: 320, max: 420, label: 'Luxury bathroom remodel rate' },
      },
    },
    complexityOptions: DEFAULT_COMPLEXITY_OPTIONS,
    finishOptions: DEFAULT_FINISH_OPTIONS,
    locationOptions: UPSTATE_LOCATION_OPTIONS,
    includeOverheadProfit: true,
    overheadProfitLabel: 'Typical contractor O&P included in base rates',
  },
  'kitchen-bath-remodeling': {
    defaultSize: 220,
    sizeRange: { min: 100, max: 900, step: 10 },
    defaultProjectType: 'refresh',
    defaultComplexity: 'standard',
    defaultFinish: 'standard',
    projectTypes: {
      refresh: {
        label: 'Kitchen and bath refresh',
        description: 'Cosmetic upgrades with limited layout changes.',
        rate: { min: 90, expected: 145, max: 210, label: 'Kitchen and bath refresh rate' },
      },
      standard: {
        label: 'Standard kitchen and bath remodel',
        description: 'Comprehensive remodel with coordinated system updates.',
        rate: { min: 165, expected: 220, max: 300, label: 'Standard kitchen and bath remodel rate' },
      },
      premium: {
        label: 'Premium kitchen and bath remodel',
        description: 'High-end integrated remodel across both spaces.',
        rate: { min: 240, expected: 320, max: 430, label: 'Premium kitchen and bath remodel rate' },
      },
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
