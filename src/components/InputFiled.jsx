const InputField = (props) => {
  const { refInputType, label, className, placeholder } = props;
  return (
    <>
      <input
        placeholder={!placeholder ? `Enter your ${label}...` : ""}
        className={className !== "undefined" ? className : ""}
        type={label}
        id={label}
        name={label}
        value={
          label === "firstName"
            ? props.values.firstName
            : label === "lastName"
            ? props.values.lastName
            : label === "email"
            ? props.values.email
            : props.values.message
        }
        onChange={props.handleChange}
        ref={refInputType}
        aria-required="true"
        aria-label={label}
      />
    </>
  );
};

export default InputField;
