import { Helmet } from 'react-helmet-async';

export default function Seo({ title, description, path = '/', image, schema, noindex = false }) {
  const url = `https://remodelingcontractorsc.com${path}`;
  const ogImage = image || 'https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?auto=format&fit=crop&w=1200&q=80';
  const schemaList = Array.isArray(schema) ? schema : schema ? [schema] : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {noindex ? <meta name="robots" content="noindex, nofollow" /> : null}
      {schemaList.map((schemaItem, idx) => (
        <script key={idx} type="application/ld+json">{JSON.stringify(schemaItem)}</script>
      ))}
    </Helmet>
  );
}