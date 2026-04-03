import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>Remodeling Contractors SC</h3>
          <p>
            Upstate South Carolina contractor focused on ADUs, in-law suite additions, master suite additions,
            granny pods, and practical space-creation projects.
          </p>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li><Link to="/adu-builders">ADU Builders</Link></li>
            <li><Link to="/in-law-suite-additions">In-Law Suite Additions</Link></li>
            <li><Link to="/master-suite-additions">Master Suite Additions</Link></li>
            <li><Link to="/granny-pods">Granny Pods</Link></li>
          </ul>
        </div>
        <div>
          <h4>Locations</h4>
          <ul>
            <li><Link to="/greenville-sc">Greenville, SC</Link></li>
            <li><Link to="/simpsonville-sc">Simpsonville, SC</Link></li>
            <li><Link to="/fountain-inn-sc">Fountain Inn, SC</Link></li>
            <li><Link to="/greer-sc">Greer, SC</Link></li>
            <li><Link to="/mauldin-sc">Mauldin, SC</Link></li>
            <li><Link to="/laurens-sc">Laurens, SC</Link></li>
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