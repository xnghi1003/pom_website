function Card({ title, children, className = "" }) {
  return (
    <div className={`rounded-xl p-6 shadow-lg ${className}`}>
      {title && (
        <h3 className="text-lg font-bold mb-4">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}

export default Card;