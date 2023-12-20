export const InputFloating = (props) => {
  const { type, id, placeholder, children } = props;
  return (
    <div className="form-floating">
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  );
};
