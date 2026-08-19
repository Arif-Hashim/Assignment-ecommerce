import { Link } from 'react-router-dom';
import StarRating from './StarRating.jsx';
import './ProductCard.css';

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-card__image-wrap">
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.discount > 0 && (
          <span className="product-card__discount">-{product.discount}%</span>
        )}
      </div>
      <h3 className="product-card__name">{product.name}</h3>
      <div className="rating-line">
        <StarRating rating={product.rating} />
        <span>{product.rating.toFixed(1)}/5</span>
      </div>
      <div className="product-card__price">
        <span className="product-card__price-now">${product.price}</span>
        {product.oldPrice && (
          <span className="product-card__price-old">${product.oldPrice}</span>
        )}
      </div>
    </Link>
  );
}
