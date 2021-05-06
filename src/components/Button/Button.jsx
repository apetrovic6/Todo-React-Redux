export const Button = ({ color, text, onClick }) => (
  <button
    onClick={onClick}
    className={`bg-${color}-500 py-2 px-2 focus:outline-none`}
  >
    {text}
  </button>
);
