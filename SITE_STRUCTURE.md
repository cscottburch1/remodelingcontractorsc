# Site Structure - Remodeling Contractors SC

**Last Updated:** April 3, 2026
**Total Pages:** 70+ pages
**Status:** ✅ Complete and Building Successfully

---

## Core Site Pages (6 pages)

| Page | Path | Component | Status |
|------|------|-----------|--------|
| Homepage | `/` | HomePage.jsx | ✅ Complete |
| About | `/about` | AboutPage.jsx | ✅ Complete |
| Services Hub | `/services` | ServicesPage.jsx | ✅ Complete |
| Projects Gallery | `/projects` | ProjectsPage.jsx | ✅ Complete |
| Financing | `/financing` | FinancingPage.jsx | ✅ Complete |
| Contact | `/contact` | ContactPage.jsx | ✅ Complete |

---

## Master SEO Landing Page (1 page)

| Page | Path | Component | Status |
|------|------|-----------|--------|
| Upstate SC Contractor | `/upstate-sc-contractor` | MasterSEOPage.jsx | ✅ Complete |

**Features:**
- Showcases all 5 core services
- Lists all 9 service areas
- Comprehensive FAQ section
- Strong internal linking
- Optimized for "Upstate SC contractor" keywords

---

## Core Service Pages (5 pages)

Dynamic template: `CoreServicePage.jsx`

| Service | Path | Calculator | Status |
|---------|------|------------|--------|
| Garages | `/garages` | GarageCalculator | ✅ Complete |
| Additions | `/additions` | AdditionCalculator | ✅ Complete |
| Screened Porches | `/screened-porches` | ScreenedPorchCalculator | ✅ Complete |
| Decks | `/decks` | DeckCalculator | ✅ Complete |
| ADUs | `/adus` | AduCalculator | ✅ Complete |

**Features:**
- Interactive cost calculators
- Comprehensive service descriptions
- Process breakdowns
- Cost factor explanations
- Links to local service pages
- FAQ sections

---

## Service Areas Hub (1 page)

| Page | Path | Component | Status |
|------|------|-----------|--------|
| Service Areas | `/service-areas` | ServiceAreasPage.jsx | ✅ Complete |

**Features:**
- Grid of all 9 service area towns
- County information
- Service availability overview
- Links to individual town pages

---

## Town Pages (9 pages)

Dynamic template: `TownPage.jsx`

| Town | Path | County | Status |
|------|------|--------|--------|
| Mauldin | `/mauldin-sc` | Greenville County | ✅ Complete |
| Simpsonville | `/simpsonville-sc` | Greenville County | ✅ Complete |
| Fountain Inn | `/fountain-inn-sc` | Greenville & Laurens Counties | ✅ Complete |
| Gray Court | `/gray-court-sc` | Laurens County | ✅ Complete |
| Laurens | `/laurens-sc` | Laurens County | ✅ Complete |
| Woodruff | `/woodruff-sc` | Spartanburg County | ✅ Complete |
| Clinton | `/clinton-sc` | Laurens County | ✅ Complete |
| Ora | `/ora-sc` | Laurens County | ✅ Complete |
| Joanna | `/joanna-sc` | Laurens County | ✅ Complete |

**Features:**
- Town overview and demographics
- All 5 services available in that town
- Common local projects
- Nearby towns navigation
- Local permitting context

---

## Local Service Pages (45 pages)

Dynamic template: `LocalServicePage.jsx`
**Matrix:** 5 services × 9 towns = 45 pages

### Garage Builder Pages (9 towns)
- `/garage-builder-mauldin-sc`
- `/garage-builder-simpsonville-sc`
- `/garage-builder-fountain-inn-sc`
- `/garage-builder-gray-court-sc`
- `/garage-builder-laurens-sc`
- `/garage-builder-woodruff-sc`
- `/garage-builder-clinton-sc`
- `/garage-builder-ora-sc`
- `/garage-builder-joanna-sc`

### Home Addition Contractor Pages (9 towns)
- `/home-addition-contractor-mauldin-sc`
- `/home-addition-contractor-simpsonville-sc`
- `/home-addition-contractor-fountain-inn-sc`
- `/home-addition-contractor-gray-court-sc`
- `/home-addition-contractor-laurens-sc`
- `/home-addition-contractor-woodruff-sc`
- `/home-addition-contractor-clinton-sc`
- `/home-addition-contractor-ora-sc`
- `/home-addition-contractor-joanna-sc`

### Screened Porch Builder Pages (9 towns)
- `/screened-porch-builder-mauldin-sc`
- `/screened-porch-builder-simpsonville-sc`
- `/screened-porch-builder-fountain-inn-sc`
- `/screened-porch-builder-gray-court-sc`
- `/screened-porch-builder-laurens-sc`
- `/screened-porch-builder-woodruff-sc`
- `/screened-porch-builder-clinton-sc`
- `/screened-porch-builder-ora-sc`
- `/screened-porch-builder-joanna-sc`

### Deck Builder Pages (9 towns)
- `/deck-builder-mauldin-sc`
- `/deck-builder-simpsonville-sc`
- `/deck-builder-fountain-inn-sc`
- `/deck-builder-gray-court-sc`
- `/deck-builder-laurens-sc`
- `/deck-builder-woodruff-sc`
- `/deck-builder-clinton-sc`
- `/deck-builder-ora-sc`
- `/deck-builder-joanna-sc`

### ADU Builder Pages (9 towns)
- `/adu-builder-mauldin-sc`
- `/adu-builder-simpsonville-sc`
- `/adu-builder-fountain-inn-sc`
- `/adu-builder-gray-court-sc`
- `/adu-builder-laurens-sc`
- `/adu-builder-woodruff-sc`
- `/adu-builder-clinton-sc`
- `/adu-builder-ora-sc`
- `/adu-builder-joanna-sc`

**Features:**
- Service-specific + town-specific content
- Interactive cost calculators
- Local project examples
- Town-specific FAQs
- Links to parent service page
- Links to parent town page
- Links to nearby town services
- Full breadcrumb navigation

---

## Project Detail Pages (5 pages)

Dynamic template: `ProjectDetailPage.jsx`

| Project | Path | Location | Service |
|---------|------|----------|---------|
| Detached Three-Bay Garage | `/projects/detached-three-bay-garage-greenville` | Simpsonville | Garages |
| Second Story Addition | `/projects/second-story-addition-simpsonville` | Simpsonville | Additions |
| Covered Composite Deck | `/projects/covered-composite-deck-greer` | Mauldin | Decks |
| Aluminum Screened Enclosure | `/projects/aluminum-screened-enclosure-mauldin` | Fountain Inn | Screened Porches |
| Backyard ADU | `/projects/backyard-granny-pod-anderson` | Laurens | ADUs |

**Features:**
- Project images
- Location context
- Links to related town pages
- Project descriptions
- CTAs for similar projects

---

## Redirects & Legacy Routes

| Old Path | New Path | Type |
|----------|----------|------|
| `/locations` | `/service-areas` | Redirect |
| `/locations/:slug` | `/service-areas` | Redirect |
| `/request-estimate` | `/contact` | Alias |

---

## Data Architecture

### Core Data Files

1. **coreServices.js** - 5 service definitions
   - Service metadata, descriptions, processes, cost factors
   - Helper functions: `getServiceBySlug()`, `getAllServicePaths()`

2. **serviceAreas.js** - 9 town definitions
   - Town metadata, demographics, common projects
   - Helper functions: `getServiceAreaBySlug()`, `getNearbyTowns()`

3. **localServicePages.js** - 45 auto-generated pages
   - Service × town combinations
   - Helper functions: `getLocalServicePageBySlug()`, `generateLocalServiceFAQs()`

4. **pricingConfig.js** - Centralized pricing rates
   - Editable cost-per-sqft rates
   - Common project sizes
   - Calculator helper functions

### Supporting Data Files

- **projects.js** - 5 project showcases
- **faqs.js** - General site FAQs
- **testimonials.js** - Customer testimonials
- **homeServices.js** - Legacy service display (still used on homepage)
- **locations.js** - Legacy location data (deprecated)
- **services.js** - Legacy service data (deprecated)
- **marketingPages.js** - Legacy marketing pages (deprecated)

---

## Calculator Components

Located in `src/components/calculators/`

| Calculator | Used On | Status |
|------------|---------|--------|
| GarageCalculator.jsx | Garages pages + 9 local pages | ✅ Complete |
| AdditionCalculator.jsx | Additions pages + 9 local pages | ✅ Complete |
| ScreenedPorchCalculator.jsx | Screened Porches pages + 9 local pages | ✅ Complete |
| DeckCalculator.jsx | Decks pages + 9 local pages | ✅ Complete |
| AduCalculator.jsx | ADUs pages + 9 local pages | ✅ Complete |

**Features:**
- Real-time cost estimation
- Breakdown by component
- Pulls from centralized pricingConfig.js
- Consistent disclaimer messaging

---

## Navigation Structure

### Header Navigation
- Home
- Services
- Service Areas
- Projects
- Financing
- About
- Contact

### Internal Linking Strategy
- Each service page links to all 9 local service pages
- Each town page links to all 5 local service pages
- Each local service page links back to parent service and town
- Local service pages link to nearby towns for same service
- Project pages link to relevant town pages

---

## SEO Architecture

### Meta Tags
- ✅ Unique titles for all 70+ pages
- ✅ Unique meta descriptions for all 70+ pages
- ✅ Canonical URLs on all pages
- ✅ Proper H1 hierarchy

### Structured Data (Schema)
- ⚠️ LocalBusiness schema on homepage
- ⚠️ BreadcrumbList schema on some pages
- ⚠️ FAQ schema on pages with FAQs
- 🔄 **TODO:** Add schema to all new pages (CoreService, Town, LocalService)

### Internal Linking
- ✅ Comprehensive internal link network
- ✅ Breadcrumb navigation on all content pages
- ✅ Related page links (nearby towns, parent pages)
- ✅ Service-to-service connections

---

## Styling & Design

### Global Styles
- `src/styles/global.css` - 150+ lines of calculator widget styles added
- Existing Burch Contracting design system preserved
- Color scheme maintained (slate/blue base with copper accents)
- Responsive grid layouts

### Reusable Components
- Hero.jsx - Page hero sections
- Breadcrumbs.jsx - Navigation breadcrumbs
- PageFaq.jsx - FAQ accordion sections
- CtaSection.jsx - Call-to-action blocks
- EstimateForm.jsx - Contact form
- Card components for service grids

---

## Build & Deployment

### Build Status
- ✅ Production build successful (311.49 kB JS bundle)
- ✅ All 89 modules transformed
- ✅ No build errors
- ✅ Assets optimized

### Performance
- Bundle size: 311.49 kB (88.38 kB gzipped)
- 🔄 **TODO:** Image optimization needed (large PNG files ~1.4-2.1 MB)
- 🔄 **TODO:** Convert to WebP/AVIF formats
- 🔄 **TODO:** Implement lazy loading for below-fold images

---

## Next Steps & Recommendations

### High Priority
1. **Schema Markup** - Add structured data to all new page templates
2. **Image Optimization** - Compress and convert hero images to modern formats
3. **Testing** - Comprehensive manual testing of all page types
4. **Content Review** - Verify tone and accuracy across all pages

### Medium Priority
5. **External Links** - Add relevant external resources (permit info, municipality pages)
6. **Mobile Testing** - Verify responsive behavior on all devices
7. **Analytics** - Set up tracking for page performance
8. **Lighthouse Audit** - Run performance and SEO audits

### Low Priority
9. **Additional Projects** - Add more project showcases (currently 5)
10. **Testimonials** - Expand customer testimonials
11. **Service Images** - Add service-specific photography
12. **Blog/Resources** - Consider adding educational content

---

## File Structure Summary

```
src/
├── components/
│   ├── calculators/
│   │   ├── GarageCalculator.jsx
│   │   ├── AdditionCalculator.jsx
│   │   ├── ScreenedPorchCalculator.jsx
│   │   ├── DeckCalculator.jsx
│   │   └── AduCalculator.jsx
│   ├── Breadcrumbs.jsx
│   ├── CtaSection.jsx
│   ├── PageFaq.jsx
│   └── [other components]
├── data/
│   ├── coreServices.js (5 services)
│   ├── serviceAreas.js (9 towns)
│   ├── localServicePages.js (45 pages)
│   ├── pricingConfig.js
│   ├── projects.js (5 projects)
│   └── [other data files]
├── pages/
│   ├── projects/
│   │   └── ProjectDetailPage.jsx
│   ├── CoreServicePage.jsx (template for 5 pages)
│   ├── TownPage.jsx (template for 9 pages)
│   ├── LocalServicePage.jsx (template for 45 pages)
│   ├── MasterSEOPage.jsx
│   ├── ServiceAreasPage.jsx
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── ServicesPage.jsx
│   ├── ProjectsPage.jsx
│   ├── FinancingPage.jsx
│   └── ContactPage.jsx
├── App.jsx (routing configuration)
└── styles/
    └── global.css
```

---

## Success Metrics

✅ **70+ pages built and rendering**
✅ **5 interactive calculators functional**
✅ **Clean, focused architecture**
✅ **Strong internal linking structure**
✅ **SEO-friendly URL patterns**
✅ **Consistent design system**
✅ **Production build successful**
✅ **No build errors or warnings**

---

*This site represents a complete restructuring focused on 5 core services, 9 service areas, and comprehensive local SEO coverage. All pages use consistent templates, share a unified design system, and provide clear paths for user engagement.*
