const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} style={{ margin: "5px", padding: "10px" }}>
      {children}
    </button>
  );
};

export default Button;
