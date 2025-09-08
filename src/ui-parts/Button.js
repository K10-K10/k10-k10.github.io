function Button({
  children,
  onClick,
  disabled = false,
  style: {
    margin = "10px 10px",
    height = "50px",
    width = "200px",
    fontSize = "30px",
    backgroundColor = "var(--button-color)",
    border = "1px solid var(--button-color)",
    borderRadius = "10px"
  } = {} }) {
  const style = {
    margin: margin,
    height: height,
    width: width,
    fontSize: fontSize,
    backgroundColor: backgroundColor,
    border: border,
    borderRadius: borderRadius
  }
  return (
    <button
      className="button"
      onClick={onClick}
      disabled={disabled}
      style={style}>
      {children}
    </button >
  );
}

export default Button;
