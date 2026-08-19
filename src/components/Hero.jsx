import { Link } from 'react-router-dom';
import { heroBanner } from './images/index.js';
import './Hero.css';

const STATS = [
  { value: '200+', label: 'International Brands' },
  { value: '2,000+', label: 'High-Quality Products' },
  { value: '30,000+', label: 'Happy Customers' },
];

export default function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBanner})` }}>
      <div className="container hero__inner">
        <div className="hero__copy">
          <h1 className="hero__title">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p className="hero__subtitle">
            Browse through our diverse range of meticulously crafted garments, designed to bring
            out your individuality and cater to your sense of style.
          </p>
          <Link to="/shop" className="btn btn-primary hero__cta">Shop Now</Link>

          <div className="hero__stats">
            {STATS.map((s) => (
              <div key={s.label} className="hero__stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
