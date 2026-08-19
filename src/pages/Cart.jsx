import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import './Cart.css';

const VALID_PROMO = { code: 'SHOPCO20', rate: 0.2 };
const DELIVERY_FEE = 15;

export default function Cart() {
  const { cart, subtotal, updateQty, removeFromCart, clearCart } = useCart();
  const [promo, setPromo] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [promoError, setPromoError] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const discount = appliedPromo ? subtotal * appliedPromo.rate : 0;
  const total = Math.max(0, subtotal - discount + (cart.length ? DELIVERY_FEE : 0));

  const applyPromo = (e) => {
    e.preventDefault();
    if (promo.trim().toUpperCase() === VALID_PROMO.code) {
      setAppliedPromo(VALID_PROMO);
      setPromoError('');
    } else {
      setAppliedPromo(null);
      setPromoError('Invalid promo code. Try SHOPCO20.');
    }
  };

  const handleCheckout = () => {
    setOrderPlaced(true);
    clearCart();
  };

  return (
    <div className="cart-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> <span>/</span> <span className="current">Cart</span>
        </div>
        <h1 className="cart-page__title">YOUR CART</h1>

        {orderPlaced ? (
          <div className="cart-page__empty">
            <p>Order placed! Thanks for shopping with SHOP.CO 🎉</p>
            <Link to="/shop" className="btn btn-primary">Continue Shopping</Link>
          </div>
        ) : cart.length === 0 ? (
          <div className="cart-page__empty">
            <p>Your cart is empty.</p>
            <Link to="/shop" className="btn btn-primary">Continue Shopping</Link>
          </div>
        ) : (
          <div className="cart-page__layout">
            <div className="cart-page__items">
              {cart.map((line) => (
                <div className="cart-line" key={line.lineId}>
                  <img src={line.image} alt={line.name} className="cart-line__image" />
                  <div className="cart-line__info">
                    <div>
                      <p className="cart-line__name">{line.name}</p>
                      <p className="cart-line__meta">Size: {line.size}</p>
                      <p className="cart-line__meta">Color: {line.color}</p>
                    </div>
                    <div className="cart-line__bottom">
                      <span className="cart-line__price">${line.price * line.qty}</span>
                      <div className="cart-line__actions">
                        <div className="cart-line__qty">
                          <button onClick={() => updateQty(line.lineId, line.qty - 1)} aria-label="Decrease quantity">−</button>
                          <span>{line.qty}</span>
                          <button onClick={() => updateQty(line.lineId, line.qty + 1)} aria-label="Increase quantity">+</button>
                        </div>
                        <button className="cart-line__remove" onClick={() => removeFromCart(line.lineId)} aria-label="Remove item">
                          <TrashIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>
              <div className="cart-summary__row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {appliedPromo && (
                <div className="cart-summary__row cart-summary__row--discount">
                  <span>Discount ({appliedPromo.code})</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}
              <div className="cart-summary__row">
                <span>Delivery Fee</span>
                <span>${DELIVERY_FEE.toFixed(2)}</span>
              </div>
              <hr className="divider" />
              <div className="cart-summary__row cart-summary__row--total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <form className="cart-summary__promo" onSubmit={applyPromo}>
                <input
                  type="text"
                  placeholder="Add promo code"
                  value={promo}
                  onChange={(e) => setPromo(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">Apply</button>
              </form>
              {promoError && <p className="cart-summary__error">{promoError}</p>}
              {appliedPromo && <p className="cart-summary__success">Promo code applied!</p>}

              <button className="btn btn-primary btn-block cart-summary__checkout" onClick={handleCheckout}>
                Go to Checkout →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function TrashIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
}
