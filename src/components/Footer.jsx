import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>Remodeling Contractors SC</h3>
          <p>
            Upstate South Carolina contractor specializing in garages, home additions, decks, screened porches, and ADUs. Quality construction focused on expanding your home's functionality and value.
          </p>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li><Link to="/garages">Garages</Link></li>
            <li><Link to="/additions">Additions</Link></li>
            <li><Link to="/screened-porches">Screened Porches</Link></li>
            <li><Link to="/decks">Decks</Link></li>
            <li><Link to="/adus">ADUs</Link></li>
          </ul>
        </div>
        <div>
          <h4>Service Areas</h4>
          <ul>
            <li><Link to="/mauldin-sc">Mauldin, SC</Link></li>
            <li><Link to="/simpsonville-sc">Simpsonville, SC</Link></li>
            <li><Link to="/fountain-inn-sc">Fountain Inn, SC</Link></li>
            <li><Link to="/gray-court-sc">Gray Court, SC</Link></li>
            <li><Link to="/laurens-sc">Laurens, SC</Link></li>
            <li><Link to="/woodruff-sc">Woodruff, SC</Link></li>
            <li><Link to="/clinton-sc">Clinton, SC</Link></li>
            <li><Link to="/ora-sc">Ora, SC</Link></li>
            <li><Link to="/joanna-sc">Joanna, SC</Link></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/financing">Financing</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="tel:+18647244600">(864) 724-4600</a></li>
            <li><a href="mailto:estimates@remodelingcontractorsc.com">estimates@remodelingcontractorsc.com</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}