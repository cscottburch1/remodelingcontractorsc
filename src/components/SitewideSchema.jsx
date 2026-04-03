import { Helmet } from 'react-helmet-async';
import { createLocalBusinessSchema } from '../lib/schema';

export default function SitewideSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(createLocalBusinessSchema())}</script>
    </Helmet>
  );
}