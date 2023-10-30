export const MyButton = (props) => {
  const { className, children } = props;
  return (
    <button type="button" className={`btn p-2 ${className}`}>
      {children}
    </button>
  );
};
