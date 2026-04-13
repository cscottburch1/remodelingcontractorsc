import Seo from '../components/Seo';

export default function PrivacyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy | Remodeling Contractors SC"
        description="Read how Remodeling Contractors SC collects, uses, and protects your information when you request an estimate or contact our team."
        path="/privacy-policy"
      />

      <section className="section-pad">
        <div className="container page-shell">
          <h1>Privacy Policy</h1>
          <p>
            Remodeling Contractors SC respects your privacy. This policy explains what information we collect, how we use it,
            and how we protect it.
          </p>

          <div className="page-content-card card">
            <h2>Information We Collect</h2>
            <p>
              We may collect your name, email, phone number, project details, and any files you submit through our contact
              and estimate forms.
            </p>
          </div>

          <div className="page-content-card card">
            <h2>How We Use Information</h2>
            <p>
              We use submitted information to respond to inquiries, prepare estimates, schedule consultations, and improve
              our services.
            </p>
          </div>

          <div className="page-content-card card">
            <h2>Data Sharing</h2>
            <p>
              We do not sell personal information. We may share data with trusted service providers only when needed to run
              our website or deliver requested services.
            </p>
          </div>

          <div className="page-content-card card">
            <h2>Contact</h2>
            <p>
              Questions about this policy can be sent to estimates@remodelingcontractorsc.com or by calling (864) 724-4600.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
