import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 48 }}>404</h1>
      <p style={{ color: 'var(--gray-500)', margin: '16px 0 28px' }}>
        The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  );
}
