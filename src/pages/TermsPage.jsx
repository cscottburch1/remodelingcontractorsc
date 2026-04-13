import Seo from '../components/Seo';

export default function TermsPage() {
  return (
    <>
      <Seo
        title="Terms of Service | Remodeling Contractors SC"
        description="Review the terms and conditions for using the Remodeling Contractors SC website and requesting services."
        path="/terms"
      />

      <section className="section-pad">
        <div className="container page-shell">
          <h1>Terms of Service</h1>
          <p>
            By using this website, you agree to the terms below. If you do not agree, please do not use this site.
          </p>

          <div className="page-content-card card">
            <h2>Website Use</h2>
            <p>
              Content is provided for general information about our services. Project details, pricing, and timelines are
              confirmed during the estimate process.
            </p>
          </div>

          <div className="page-content-card card">
            <h2>Estimates and Scope</h2>
            <p>
              Submitted requests do not create a contract. Work begins only after written agreement on scope, price, and
              schedule.
            </p>
          </div>

          <div className="page-content-card card">
            <h2>Intellectual Property</h2>
            <p>
              Site content, branding, and media are owned by Remodeling Contractors SC unless otherwise noted.
            </p>
          </div>

          <div className="page-content-card card">
            <h2>Contact</h2>
            <p>
              For questions regarding these terms, contact estimates@remodelingcontractorsc.com.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
