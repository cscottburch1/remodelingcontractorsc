export const SERVICE_AREAS = [
  { slug: 'greenville-sc', city: 'Greenville', name: 'Greenville, SC', county: 'Greenville County' },
  { slug: 'simpsonville-sc', city: 'Simpsonville', name: 'Simpsonville, SC', county: 'Greenville County' },
  { slug: 'mauldin-sc', city: 'Mauldin', name: 'Mauldin, SC', county: 'Greenville County' },
  { slug: 'fountain-inn-sc', city: 'Fountain Inn', name: 'Fountain Inn, SC', county: 'Greenville County / Laurens County' },
  { slug: 'greer-sc', city: 'Greer', name: 'Greer, SC', county: 'Greenville County / Spartanburg County' },
  { slug: 'taylors-sc', city: 'Taylors', name: 'Taylors, SC', county: 'Greenville County' },
  { slug: 'travelers-rest-sc', city: 'Travelers Rest', name: 'Travelers Rest, SC', county: 'Greenville County' },
  { slug: 'piedmont-sc', city: 'Piedmont', name: 'Piedmont, SC', county: 'Greenville County' },
  { slug: 'easley-sc', city: 'Easley', name: 'Easley, SC', county: 'Pickens County' },
];

export const CITY_SLUGS = SERVICE_AREAS.map((area) => area.slug);

export const CITIES_BY_SLUG = Object.fromEntries(
  SERVICE_AREAS.map((area) => [area.slug, area])
);
