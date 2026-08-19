import { useRef } from 'react';
import StarRating from './StarRating.jsx';
import { TESTIMONIALS } from '../data/products.js';
import './Testimonials.css';

export default function Testimonials() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 320, behavior: 'smooth' });
  };

  return (
    <section className="section testimonials">
      <div className="container">
        <div className="testimonials__header">
          <h2 className="section-title testimonials__title">OUR HAPPY CUSTOMERS</h2>
          <div className="testimonials__nav">
            <button onClick={() => scroll(-1)} aria-label="Previous">‹</button>
            <button onClick={() => scroll(1)} aria-label="Next">›</button>
          </div>
        </div>
        <div className="testimonials__track" ref={trackRef}>
          {TESTIMONIALS.map((t) => (
            <div className="testimonial-card" key={t.id}>
              <StarRating rating={t.rating} />
              <p className="testimonial-card__name">{t.name} ✅</p>
              <p className="testimonial-card__text">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
