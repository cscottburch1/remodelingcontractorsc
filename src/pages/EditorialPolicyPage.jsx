import Seo from '../components/Seo';

export default function EditorialPolicyPage() {
  return (
    <>
      <Seo
        title="Editorial Policy | Remodeling Contractors SC"
        description="Learn how Remodeling Contractors SC creates, reviews, and updates website content for accuracy and local relevance."
        path="/editorial-policy"
      />

      <section className="section-pad">
        <div className="container page-shell">
          <h1>Editorial Policy</h1>
          <p>
            Our goal is to provide accurate, clear, and useful information for homeowners planning garages, additions,
            decks, porch enclosures, and ADU projects in Upstate South Carolina.
          </p>

          <div className="page-content-card card">
            <h2>How Content Is Created</h2>
            <p>
              Service and location pages are written from real project experience, local permitting knowledge, and practical
              construction planning standards.
            </p>
          </div>

          <div className="page-content-card card">
            <h2>Review Process</h2>
            <p>
              We review content for technical accuracy, local relevance, and readability. Pages are updated when service
              details, processes, or coverage areas change.
            </p>
          </div>

          <div className="page-content-card card">
            <h2>Corrections</h2>
            <p>
              If you find an error, please contact us at estimates@remodelingcontractorsc.com and we will review it.
            </p>
          </div>

          <div className="page-content-card card">
            <h2>Last Reviewed</h2>
            <p>April 13, 2026</p>
          </div>
        </div>
      </section>
    </>
  );
}
