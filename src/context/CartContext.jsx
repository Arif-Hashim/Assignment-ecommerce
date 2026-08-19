import { createContext, useContext, useEffect, useMemo, useReducer } from 'react';

const CartContext = createContext(null);
const STORAGE_KEY = 'shopco_cart_v1';

function loadInitialState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { product, color, size, qty } = action.payload;
      const lineId = `${product.id}-${color}-${size}`;
      const existing = state.find((line) => line.lineId === lineId);
      if (existing) {
        return state.map((line) =>
          line.lineId === lineId ? { ...line, qty: line.qty + qty } : line
        );
      }
      return [
        ...state,
        {
          lineId,
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          color,
          size,
          qty,
        },
      ];
    }
    case 'UPDATE_QTY': {
      const { lineId, qty } = action.payload;
      if (qty < 1) return state.filter((line) => line.lineId !== lineId);
      return state.map((line) => (line.lineId === lineId ? { ...line, qty } : line));
    }
    case 'REMOVE':
      return state.filter((line) => line.lineId !== action.payload.lineId);
    case 'CLEAR':
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, undefined, loadInitialState);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const api = useMemo(() => {
    const subtotal = cart.reduce((sum, l) => sum + l.price * l.qty, 0);
    const itemCount = cart.reduce((sum, l) => sum + l.qty, 0);
    return {
      cart,
      subtotal,
      itemCount,
      addToCart: (product, color, size, qty = 1) =>
        dispatch({ type: 'ADD', payload: { product, color, size, qty } }),
      updateQty: (lineId, qty) => dispatch({ type: 'UPDATE_QTY', payload: { lineId, qty } }),
      removeFromCart: (lineId) => dispatch({ type: 'REMOVE', payload: { lineId } }),
      clearCart: () => dispatch({ type: 'CLEAR' }),
    };
  }, [cart]);

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
}
