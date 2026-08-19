import { Link } from 'react-router-dom';
import { categoryCasual, categoryFormal, categoryGym, categoryParty } from './images/index.js';
import './BrowseStyle.css';

const STYLES = [
  { name: 'Casual', span: 'wide', image: categoryCasual },
  { name: 'Formal', span: 'narrow', image: categoryFormal },
  { name: 'Gym', span: 'narrow', image: categoryGym },
  { name: 'Party', span: 'wide', image: categoryParty },
];

export default function BrowseStyle() {
  return (
    <section className="section browse-style">
      <div className="container browse-style__panel">
        <h2 className="section-title">Browse By Dress Style</h2>
        <div className="browse-style__grid">
          {STYLES.map((s) => (
            <Link
              key={s.name}
              to={`/shop/${s.name.toLowerCase()}`}
              className={`browse-style__card browse-style__card--${s.span}`}
              style={{ backgroundImage: `url(${s.image})` }}
            >
              <span className="sr-only">{s.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
