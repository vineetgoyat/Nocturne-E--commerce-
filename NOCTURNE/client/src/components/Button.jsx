const Button = ({
  children,
  type = "button",
  onClick,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-8 py-4
        border
        border-[#C9A227]
        text-[#C9A227]
        hover:bg-[#C9A227]
        hover:text-black
        transition-all
        duration-500
        uppercase
        tracking-wider
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;