export const Input = ({ placeholder, onChange, value, type }) => {
  return (
    <input
      placeholder={`${placeholder}`}
      className="border-2 px-2 py-2 outline-none"
      onChange={onChange}
      value={value}
      type={type}
    />
  );
};
