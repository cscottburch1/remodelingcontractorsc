import { Helmet } from 'react-helmet-async';
import heroImage from '../assets/images/screen-porch-hero.webp';

export default function Seo({
  title,
  description,
  path = '/',
  image,
  schema,
  preloads,
  noindex = false,
  suppressDescription = false,
  suppressCanonical = false,
}) {
  const url = `https://remodelingcontractorsc.com${path}`;
  const ogImage = image || heroImage;
  const schemaList = Array.isArray(schema) ? schema : schema ? [schema] : [];
  const preloadList = Array.isArray(preloads) ? preloads : [];

  return (
    <Helmet>
      <title>{title}</title>
      {!suppressDescription ? <meta name="description" content={description} /> : null}
      {!suppressCanonical ? <link rel="canonical" href={url} /> : null}
      {preloadList.map((preload, idx) => (
        <link
          key={`${preload.href}-${idx}`}
          rel="preload"
          as={preload.as || 'image'}
          href={preload.href}
          imagesrcset={preload.imageSrcSet}
          imagesizes={preload.imageSizes}
          fetchpriority={preload.fetchPriority}
        />
      ))}
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