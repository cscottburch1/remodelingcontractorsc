import { localServicePages } from './data/localServicePages';

console.log('Total local service pages:', localServicePages.length);
console.log('\nAll screened porch pages:');
localServicePages
  .filter(p => p.serviceSlug === 'screened-porches')
  .forEach(p => console.log('  -', p.slug, '→', p.path));

console.log('\nSearching for: screened-porches-simpsonville-sc');
const page = localServicePages.find(p => p.slug === 'screened-porches-simpsonville-sc');
console.log('Found:', page ? 'YES ✓' : 'NO ✗');
if (page) {
  console.log('Page details:', {
    slug: page.slug,
    path: page.path,
    serviceName: page.serviceName,
    townName: page.townName
  });
}
