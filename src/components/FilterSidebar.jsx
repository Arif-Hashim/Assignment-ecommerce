import { CATEGORIES, COLORS, SIZES, DRESS_STYLES } from '../data/products.js';
import './FilterSidebar.css';

export default function FilterSidebar({ filters, setFilters, onApply, maxPrice }) {
  const toggleInArray = (key, value) => {
    setFilters((prev) => {
      const arr = prev[key];
      return {
        ...prev,
        [key]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value],
      };
    });
  };

  return (
    <aside className="filter-sidebar">
      <div className="filter-sidebar__header">
        <h3>Filters</h3>
        <FilterIcon />
      </div>
      <hr className="divider" />

      <FilterGroup title="Category">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            className={`filter-sidebar__row ${filters.category === c ? 'is-active' : ''}`}
            onClick={() => setFilters((prev) => ({ ...prev, category: prev.category === c ? '' : c }))}
          >
            {c} <ChevronIcon />
          </button>
        ))}
      </FilterGroup>
      <hr className="divider" />

      <FilterGroup title="Price">
        <input
          type="range"
          min="0"
          max={maxPrice}
          value={filters.price}
          onChange={(e) => setFilters((prev) => ({ ...prev, price: Number(e.target.value) }))}
          className="filter-sidebar__slider"
        />
        <p className="filter-sidebar__price-value">Up to ${filters.price}</p>
      </FilterGroup>
      <hr className="divider" />

      <FilterGroup title="Colors">
        <div className="filter-sidebar__colors">
          {COLORS.map((c) => (
            <button
              key={c.name}
              aria-label={c.name}
              className={`filter-sidebar__swatch ${filters.colors.includes(c.name) ? 'is-active' : ''}`}
              style={{ backgroundColor: c.hex, border: c.hex === '#FFFFFF' ? '1px solid #ddd' : 'none' }}
              onClick={() => toggleInArray('colors', c.name)}
            />
          ))}
        </div>
      </FilterGroup>
      <hr className="divider" />

      <FilterGroup title="Size">
        <div className="filter-sidebar__sizes">
          {SIZES.map((s) => (
            <button
              key={s}
              className={`filter-sidebar__size ${filters.sizes.includes(s) ? 'is-active' : ''}`}
              onClick={() => toggleInArray('sizes', s)}
            >
              {s}
            </button>
          ))}
        </div>
      </FilterGroup>
      <hr className="divider" />

      <FilterGroup title="Dress Style">
        {DRESS_STYLES.map((s) => (
          <button
            key={s}
            className={`filter-sidebar__row ${filters.style === s ? 'is-active' : ''}`}
            onClick={() => setFilters((prev) => ({ ...prev, style: prev.style === s ? '' : s }))}
          >
            {s} <ChevronIcon />
          </button>
        ))}
      </FilterGroup>

      <button className="btn btn-primary btn-block filter-sidebar__apply" onClick={onApply}>
        Apply Filter
      </button>
    </aside>
  );
}

function FilterGroup({ title, children }) {
  return (
    <div className="filter-group">
      <h4>{title}</h4>
      {children}
    </div>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
function FilterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
      <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" />
      <line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" />
    </svg>
  );
}
