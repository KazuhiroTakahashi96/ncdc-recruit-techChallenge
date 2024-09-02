const Button = ({
  type = "button",
  onClick,
  children,
  className,
  label,
  labelClassName,
}) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
      {label && <p className={labelClassName}>{label}</p>}
    </button>
  );
};

export default Button;
