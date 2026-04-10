import { localServicePages } from './data/localServicePages.js';
import { coreServices } from './data/coreServices.js';
import { serviceAreas } from './data/serviceAreas.js';

console.log('=== SITE DIAGNOSTICS ===\n');

console.log('Core Services:', coreServices.length);
coreServices.forEach(s => console.log('  -', s.name, '→', s.servicePath));

console.log('\nService Areas:', serviceAreas.length);
serviceAreas.forEach(a => console.log('  -', a.name, '→', a.servicePath));

console.log(`\nLocal Service Pages: ${localServicePages.length} (expected: 45)`);

// Group by service
console.log('\nBy Service:');
['garages', 'additions', 'screened-porches', 'decks', 'adus'].forEach(serviceSlug => {
  const pages = localServicePages.filter(p => p.serviceSlug === serviceSlug);
  console.log(`  ${serviceSlug}:`, pages.length);
  if (serviceSlug === 'screened-porches') {
    pages.forEach(p => console.log('    -', p.path));
  }
});

// Check for the specific page
console.log('\n=== CHECKING SPECIFIC PAGE ===');
const testSlug = 'screened-porch-builder-simpsonville-sc';
const page = localServicePages.find(p => p.slug === testSlug);
console.log('Looking for:', testSlug);
console.log('Found:', page ? 'YES ✓' : 'NO ✗');
if (page) {
  console.log('Details:', {
    path: page.path,
    serviceName: page.serviceName,
    townName: page.townName
  });
}

export default {
  totalPages: localServicePages.length,
  isValid: localServicePages.length === 45
};
