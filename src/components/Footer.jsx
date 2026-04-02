import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>Remodeling Contractors SC</h3>
          <p>
            South Carolina specialist for custom garages, room additions, deck construction, aluminum screened
            enclosures, and granny pod projects.
          </p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/locations">Locations</Link></li>
            <li><Link to="/financing">Financing</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:+18035550147">(803) 555-0147</a></li>
            <li><a href="mailto:estimates@remodelingcontractorsc.com">estimates@remodelingcontractorsc.com</a></li>
            <li>Serving major Upstate SC markets</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}