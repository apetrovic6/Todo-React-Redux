export const Card = ({ children, color, className }) => {
  return (
    <div className={`space-x-2 px-2 py-2 bg-${color}-200 ${className}`}>
      {children}
    </div>
  );
};
