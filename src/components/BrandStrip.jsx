import './BrandStrip.css';

const BRANDS = ['VERSACE', 'ZARA', 'GUCCI', 'PRADA', 'Calvin Klein'];

export default function BrandStrip() {
  return (
    <div className="brand-strip">
      <div className="container brand-strip__row">
        {BRANDS.map((b) => (
          <span key={b} className="brand-strip__item">{b}</span>
        ))}
      </div>
    </div>
  );
}
