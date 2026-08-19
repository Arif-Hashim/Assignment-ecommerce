export default function StarRating({ rating = 0, size = 16, showValue = false }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;

  return (
    <span className="stars" style={{ '--star-size': `${size}px` }}>
      {Array.from({ length: 5 }).map((_, i) => {
        let fill = 'none';
        if (i < full) fill = 'full';
        else if (i === full && hasHalf) fill = 'half';
        return <Star key={i} fill={fill} size={size} />;
      })}
      {showValue && <span className="rating-value">{rating.toFixed(1)}/5</span>}
    </span>
  );
}

function Star({ fill, size }) {
  const id = Math.random().toString(36).slice(2);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <defs>
        <linearGradient id={id}>
          <stop offset="50%" stopColor="currentColor" />
          <stop offset="50%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <path
        d="M12 2.5l2.9 6.1 6.6.7-4.9 4.6 1.3 6.6-5.9-3.3-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.7z"
        fill={fill === 'full' ? 'currentColor' : fill === 'half' ? `url(#${id})` : 'none'}
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
