import { Link } from 'react-router-dom';

export default function StickyEstimateBar() {
  return (
    <div className="sticky-estimate" aria-label="Quick contact options">
      <div className="sticky-estimate-inner">
        <Link className="btn btn-primary" to="/request-estimate">Request Estimate</Link>
        <a className="btn btn-soft" href="tel:+18035550147">Call Now</a>
      </div>
    </div>
  );
}