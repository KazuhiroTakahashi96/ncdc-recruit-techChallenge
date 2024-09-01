const Input = ({ name, type, value, updateInput, className }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={updateInput}
      className={className}
    />
  );
};

export default Input;
