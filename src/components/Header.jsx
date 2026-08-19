import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import './Header.css';

const NAV_LINKS = [
  { label: 'Shop', to: '/shop' },
  { label: 'On Sale', to: '/shop?filter=sale' },
  { label: 'New Arrivals', to: '/shop?filter=new' },
  { label: 'Brands', to: '/shop?filter=brands' },
];

export default function Header() {
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(query.trim() ? `/shop?q=${encodeURIComponent(query.trim())}` : '/shop');
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__announcement">
        Sign up and get 20% off your first order.{' '}
        <Link to="/shop" className="header__announcement-link">Sign Up Now</Link>
      </div>
      <div className="container header__bar">
        <button
          className="header__burger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>

        <Link to="/" className="header__logo">SHOP.CO</Link>

        <nav className={`header__nav ${menuOpen ? 'is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="header__nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <form className="header__search header__search--mobile" onSubmit={handleSearch}>
            <SearchIcon />
            <input
              type="search"
              placeholder="Search for products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
        </nav>

        <form className="header__search header__search--desktop" onSubmit={handleSearch}>
          <SearchIcon />
          <input
            type="search"
            placeholder="Search for products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>

        <div className="header__icons">
          <Link to="/cart" className="header__icon-btn" aria-label="Cart">
            <CartIcon />
            {itemCount > 0 && <span className="header__badge">{itemCount}</span>}
          </Link>
          <button className="header__icon-btn" aria-label="Account">
            <UserIcon />
          </button>
        </div>
      </div>
    </header>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}
function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
