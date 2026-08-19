import { useEffect, useMemo, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import FilterSidebar from '../components/FilterSidebar.jsx';
import ProductCard from '../components/ProductCard.jsx';
import { PRODUCTS } from '../data/products.js';
import './Shop.css';

const PAGE_SIZE = 9;
const MAX_PRICE = Math.max(...PRODUCTS.map((p) => p.price));

const emptyFilters = () => ({ category: '', style: '', price: MAX_PRICE, colors: [], sizes: [] });

export default function Shop() {
  const { styleSlug } = useParams();
  const [searchParams] = useSearchParams();
  const q = searchParams.get('q') || '';
  const quickFilter = searchParams.get('filter') || '';

  const [filters, setFilters] = useState(emptyFilters());
  const [appliedFilters, setAppliedFilters] = useState(emptyFilters());
  const [sortBy, setSortBy] = useState('popular');
  const [page, setPage] = useState(1);

  // Sync the dress-style route param (e.g. /shop/casual) into filters.
  useEffect(() => {
    const styleFromRoute = styleSlug
      ? styleSlug[0].toUpperCase() + styleSlug.slice(1).toLowerCase()
      : '';
    setFilters((prev) => ({ ...prev, style: styleFromRoute }));
    setAppliedFilters((prev) => ({ ...prev, style: styleFromRoute }));
    setPage(1);
  }, [styleSlug]);

  const heading = styleSlug
    ? styleSlug[0].toUpperCase() + styleSlug.slice(1).toLowerCase()
    : q
      ? `Search results for "${q}"`
      : 'All Products';

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];

    if (q) {
      const term = q.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(term));
    }
    if (quickFilter === 'new') list = list.filter((p) => p.section === 'new');
    if (quickFilter === 'top' || quickFilter === 'sale') list = list.filter((p) => p.discount > 0 || p.section === 'top');

    if (appliedFilters.category) list = list.filter((p) => p.category === appliedFilters.category);
    if (appliedFilters.style) list = list.filter((p) => p.style === appliedFilters.style);
    if (appliedFilters.colors.length)
      list = list.filter((p) => p.colors.some((c) => appliedFilters.colors.includes(c)));
    if (appliedFilters.sizes.length)
      list = list.filter((p) => p.sizes.some((s) => appliedFilters.sizes.includes(s)));
    list = list.filter((p) => p.price <= appliedFilters.price);

    switch (sortBy) {
      case 'price-asc': list.sort((a, b) => a.price - b.price); break;
      case 'price-desc': list.sort((a, b) => b.price - a.price); break;
      case 'rating': list.sort((a, b) => b.rating - a.rating); break;
      default: break;
    }
    return list;
  }, [q, quickFilter, appliedFilters, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleApply = () => {
    setAppliedFilters(filters);
    setPage(1);
  };

  const clearAll = () => {
    const reset = emptyFilters();
    setFilters(reset);
    setAppliedFilters(reset);
    setPage(1);
  };

  return (
    <div className="shop-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> <span>/</span> <span className="current">{heading}</span>
        </div>
      </div>

      <div className="container shop-page__layout">
        <FilterSidebar filters={filters} setFilters={setFilters} onApply={handleApply} maxPrice={MAX_PRICE} />

        <div className="shop-page__main">
          <div className="shop-page__toolbar">
            <h1 className="shop-page__heading">{heading}</h1>
            <div className="shop-page__toolbar-right">
              <span className="shop-page__count">
                Showing {pageItems.length ? (page - 1) * PAGE_SIZE + 1 : 0}-
                {Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length} Products
              </span>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="shop-page__sort">
                <option value="popular">Sort by: Most Popular</option>
                <option value="rating">Sort by: Top Rated</option>
                <option value="price-asc">Sort by: Price Low to High</option>
                <option value="price-desc">Sort by: Price High to Low</option>
              </select>
            </div>
          </div>

          {pageItems.length === 0 ? (
            <div className="shop-page__empty">
              <p>No products match those filters yet.</p>
              <button className="btn" onClick={clearAll}>Clear filters</button>
            </div>
          ) : (
            <div className="shop-page__grid">
              {pageItems.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          )}

          {totalPages > 1 && (
            <div className="shop-page__pagination">
              <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>Previous</button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  className={page === i + 1 ? 'is-active' : ''}
                  onClick={() => setPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              <button disabled={page === totalPages} onClick={() => setPage((p) => p + 1)}>Next</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
