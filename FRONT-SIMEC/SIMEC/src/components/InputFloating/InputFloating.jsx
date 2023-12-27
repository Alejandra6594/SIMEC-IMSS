export const InputFloating = (props) => {
  const {
    type,
    id,
    placeholder,
    children,
    name,
    value,
    handleChange,
    isRequired = true,
  } = props;
  return (
    <div className="form-floating">
      <input
        onChange={handleChange}
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        name={name}
        value={value}
        required={isRequired}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  );
};
