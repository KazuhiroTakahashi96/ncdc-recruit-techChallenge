const Textarea = ({ name, value, updateInput, className }) => {
  return (
    <textarea
      name={name}
      value={value}
      onChange={updateInput}
      className={className}
    ></textarea>
  );
};

export default Textarea;
