import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import StarRating from '../components/StarRating.jsx';
import ProductCard from '../components/ProductCard.jsx';
import { COLORS, PRODUCTS, REVIEWS, getProductById } from '../data/products.js';
import { useCart } from '../context/CartContext.jsx';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = getProductById(id);

  const [activeImage, setActiveImage] = useState(0);
  const [color, setColor] = useState(product?.colors[0] ?? '');
  const [size, setSize] = useState(product?.sizes[1] ?? product?.sizes[0] ?? '');
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState('details');
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!product) return;
    setActiveImage(0);
    setColor(product.colors[0]);
    setSize(product.sizes[1] ?? product.sizes[0]);
    setQty(1);
    setTab('details');
    setAdded(false);
    window.scrollTo(0, 0);
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  const related = useMemo(() => {
    if (!product) return [];
    return PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4)
      .concat(PRODUCTS.filter((p) => p.id !== product.id && p.category !== product.category))
      .slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <Link to="/shop" className="btn" style={{ marginTop: 20, display: 'inline-flex' }}>Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, color, size, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const colorHex = (name) => COLORS.find((c) => c.name === name)?.hex || '#000';

  return (
    <div className="pdp">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> <span>/</span>
          <Link to="/shop">Shop</Link> <span>/</span>
          <Link to={`/shop?filter=${product.category}`}>{product.category}</Link> <span>/</span>
          <span className="current">{product.name}</span>
        </div>
      </div>

      <div className="container pdp__grid">
        <div className="pdp__gallery">
          <div className="pdp__thumbs">
            {product.gallery.map((img, i) => (
              <button
                key={i}
                className={`pdp__thumb ${activeImage === i ? 'is-active' : ''}`}
                onClick={() => setActiveImage(i)}
              >
                <img src={img} alt={`${product.name} view ${i + 1}`} />
              </button>
            ))}
          </div>
          <div className="pdp__main-image">
            <img src={product.gallery[activeImage]} alt={product.name} />
          </div>
        </div>

        <div className="pdp__info">
          <h1 className="pdp__title">{product.name}</h1>
          <div className="rating-line">
            <StarRating rating={product.rating} />
            <span>{product.rating.toFixed(1)}/5</span>
          </div>

          <div className="pdp__price">
            <span className="pdp__price-now">${product.price}</span>
            {product.oldPrice && (
              <>
                <span className="pdp__price-old">${product.oldPrice}</span>
                <span className="pdp__price-discount">-{product.discount}%</span>
              </>
            )}
          </div>

          <p className="pdp__description">{product.description}</p>
          <hr className="divider" />

          <div className="pdp__option">
            <p className="pdp__option-label">Select Colors</p>
            <div className="pdp__colors">
              {product.colors.map((c) => (
                <button
                  key={c}
                  className={`pdp__color-swatch ${color === c ? 'is-active' : ''}`}
                  style={{ backgroundColor: colorHex(c), border: c === 'White' ? '1px solid #ddd' : 'none' }}
                  aria-label={c}
                  onClick={() => setColor(c)}
                />
              ))}
            </div>
          </div>
          <hr className="divider" />

          <div className="pdp__option">
            <p className="pdp__option-label">Choose Size</p>
            <div className="pdp__sizes">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  className={`pdp__size ${size === s ? 'is-active' : ''}`}
                  onClick={() => setSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <hr className="divider" />

          <div className="pdp__cta-row">
            <div className="pdp__qty">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">−</button>
              <span>{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity">+</button>
            </div>
            <button className="btn btn-primary pdp__add-btn" onClick={handleAddToCart}>
              {added ? 'Added ✓' : 'Add to Cart'}
            </button>
          </div>
          {added && (
            <button className="pdp__go-cart" onClick={() => navigate('/cart')}>
              View cart →
            </button>
          )}
        </div>
      </div>

      <div className="container">
        <div className="pdp__tabs">
          <button className={tab === 'details' ? 'is-active' : ''} onClick={() => setTab('details')}>Product Details</button>
          <button className={tab === 'reviews' ? 'is-active' : ''} onClick={() => setTab('reviews')}>Rating &amp; Reviews</button>
          <button className={tab === 'faq' ? 'is-active' : ''} onClick={() => setTab('faq')}>FAQs</button>
        </div>

        <div className="pdp__tab-panel">
          {tab === 'details' && (
            <div>
              <p>{product.description}</p>
              <ul className="pdp__detail-list">
                <li>Category: {product.category}</li>
                <li>Style: {product.style}</li>
                <li>Available sizes: {product.sizes.join(', ')}</li>
                <li>Available colors: {product.colors.join(', ')}</li>
              </ul>
            </div>
          )}

          {tab === 'reviews' && (
            <div>
              <div className="pdp__reviews-header">
                <h3>All Reviews ({product.reviews})</h3>
                <button className="btn btn-primary">Write a Review</button>
              </div>
              <div className="pdp__reviews-grid">
                {REVIEWS.map((r) => (
                  <div className="review-card" key={r.id}>
                    <StarRating rating={r.rating} />
                    <p className="review-card__name">{r.name} {r.verified && <span className="review-card__verified">✓</span>}</p>
                    <p className="review-card__text">"{r.text}"</p>
                    <p className="review-card__date">Posted on {r.date}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === 'faq' && (
            <div className="pdp__faq">
              <details open>
                <summary>What sizes are available?</summary>
                <p>This item is available in {product.sizes.join(', ')}. Check the size guide for exact measurements.</p>
              </details>
              <details>
                <summary>What is the return policy?</summary>
                <p>Unworn items can be returned within 30 days of delivery for a full refund.</p>
              </details>
              <details>
                <summary>How long does delivery take?</summary>
                <p>Standard delivery takes 3-5 business days. Express options are available at checkout.</p>
              </details>
            </div>
          )}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <h2 className="section-title">YOU MIGHT ALSO LIKE</h2>
          <div className="pdp__related-grid">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
