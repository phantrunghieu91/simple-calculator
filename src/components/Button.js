const Button = ({ text, value, divClassName, btnClassName, onClick }) => {
  return (
    <div className={divClassName}>
      <button
        value={value}
        type='button'
        className={`fw-bold ${btnClassName}`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
