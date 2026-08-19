import { useState } from 'react';
import './Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="newsletter">
      <div className="container newsletter__inner">
        <h2 className="newsletter__title">STAY UPTO DATE ABOUT<br />OUR LATEST OFFERS</h2>
        <form className="newsletter__form" onSubmit={handleSubmit}>
          <div className="newsletter__input-wrap">
            <MailIcon />
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary newsletter__btn">Subscribe to Newsletter</button>
        </form>
        {submitted && <p className="newsletter__success">Thanks — you're subscribed!</p>}
      </div>
    </section>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}
