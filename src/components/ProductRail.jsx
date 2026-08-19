import { Link } from 'react-router-dom';
import ProductCard from './ProductCard.jsx';
import './ProductRail.css';

export default function ProductRail({ title, products, viewAllTo = '/shop' }) {
  return (
    <section className="section product-rail">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="product-rail__grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="product-rail__footer">
          <Link to={viewAllTo} className="btn">View All</Link>
        </div>
      </div>
    </section>
  );
}
