const Button = ({ children, className }) => {
  return <button className={`${className} cursor-pointer`}>{children}</button>;
};

export default Button;
