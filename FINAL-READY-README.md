# FINAL READY README

## Production Status

The site is fully migrated to Next.js 14 App Router with flat service URLs, centralized business/schema data, and reusable conversion components.

## Final URL Structure

### Services (flat SEO routes)
- /garages
- /room-additions
- /decks
- /screened-porches
- /kitchen-remodeling
- /bathroom-remodeling
- /basement-finishing
- /adu

### Calculators
- /calculator/garages
- /calculator/room-additions
- /calculator/decks
- /calculator/screened-porches
- /calculator/kitchen-remodeling
- /calculator/bathroom-remodeling
- /calculator/basement-finishing
- /calculator/adu

### Locations
- /locations/greenville-sc
- /locations/simpsonville-sc
- /locations/mauldin-sc
- /locations/fountain-inn-sc
- /locations/greer-sc
- /locations/taylors-sc
- /locations/travelers-rest-sc
- /locations/piedmont-sc
- /locations/easley-sc

## Architecture Lock

- App Router only (service pages converted from dynamic segment to explicit flat routes)
- UniversalPageTemplate controls per-page structure
- EEATSignals appears exactly once, immediately after hero
- ClickableCityGrid appears at the bottom of every page
- LocalBusinessSchema is rendered once in root layout

## Schema Lock

One and only one AggregateRating block is emitted sitewide in LocalBusiness schema:
- ratingValue: "5.0"
- reviewCount: "12"
- bestRating: "5"
- worstRating: "1"

No FAQPage, Review, or itemReviewed schema is emitted by the active Next app.

## Hostinger VPS Deployment Steps

1. SSH to server:
   - ssh siteapp@remodelingcontractorsc.com
2. Go to app directory:
   - cd /var/www/remodelingcontractorsc
3. Pull code:
   - git pull origin main
4. Install dependencies:
   - npm ci
5. Build:
   - npm run build
6. Restart PM2:
   - pm2 restart remodelingcontractorsc
7. Verify process:
   - pm2 status remodelingcontractorsc
8. Check logs:
   - pm2 logs remodelingcontractorsc --lines 120

## Full Testing Checklist

### Routing and Navigation
- Validate all 8 service URLs load directly.
- Validate all 8 calculator URLs load directly.
- Validate all 9 location URLs load directly.
- Validate sticky header on every page.
- Validate Services dropdown includes core service entries and Kitchen/Bath sub-dropdown.
- Validate Areas Served dropdown includes 9 cities.
- Validate Calculators dropdown includes all 8 calculators.

### Page Composition Rules
- Confirm hero appears first on each page.
- Confirm EEATSignals appears once and directly after hero.
- Confirm ClickableCityGrid appears at bottom of every page.

### Calculator Validation
- Slider updates estimate live.
- Complexity and finish controls update totals.
- Show Math reveals full formula.
- Save stores payload in localStorage.
- Print/PDF actions trigger print flow.

### Schema and Rich Results
- Inspect source and confirm only one LocalBusiness JSON-LD script.
- Confirm only one AggregateRating in that script.
- Confirm no FAQPage, Review, or itemReviewed schema.
- Run Rich Results Test on:
  - /
  - /garages
  - /calculator/garages
  - /locations/simpsonville-sc

### Search Console Verification
1. Open Search Console for https://remodelingcontractorsc.com.
2. Run URL Inspection on:
   - /
   - /garages
   - /calculator/room-additions
   - /locations/greenville-sc
3. Request indexing for updated routes.
4. Re-check Coverage and Enhancements after recrawl.

## Build Notes

- The current workspace path has known file-lock and filesystem issues (.vscode lock, scripts/deploy lock), which can cause local build/readlink anomalies.
- Build validation should be treated as authoritative in a clean path or VPS deploy path using npm ci and npm run build.
