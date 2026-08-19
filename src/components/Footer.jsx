import { Link } from 'react-router-dom';
import Newsletter from './Newsletter.jsx';
import './Footer.css';

const COLUMNS = [
  {
    title: 'Company',
    links: ['About', 'Features', 'Works', 'Career'],
  },
  {
    title: 'Help',
    links: ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'],
  },
  {
    title: 'FAQ',
    links: ['Account', 'Manage Deliveries', 'Orders', 'Payments'],
  },
  {
    title: 'Resources',
    links: ['Free eBooks', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist'],
  },
];

const SOCIALS = ['Twitter', 'Facebook', 'Instagram', 'Github'];

export default function Footer() {
  return (
    <footer className="footer">
      <Newsletter />
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">SHOP.CO</Link>
          <p className="footer__tagline">
            We have clothes that suit your style and which you're proud to wear. From women to men.
          </p>
          <div className="footer__socials">
            {SOCIALS.map((s) => (
              <a key={s} href="#" className="footer__social" aria-label={s}>
                {s[0]}
              </a>
            ))}
          </div>
        </div>
        {COLUMNS.map((col) => (
          <div className="footer__col" key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((l) => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container footer__bottom">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
        <div className="footer__payments">
          {['Visa', 'Mastercard', 'PayPal', 'Apple Pay', 'GPay'].map((p) => (
            <span key={p} className="footer__payment-badge">{p}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
