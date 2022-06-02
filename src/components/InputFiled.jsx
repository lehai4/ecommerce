const InputField = (props) => {
  const { refInputType, label } = props;
  return (
    <>
      <input
        placeholder={`Enter your ${label}...`}
        type={label}
        id={label}
        name={label}
        value={label === "email" ? props.values.email : props.values.password}
        onChange={props.handleChange}
        ref={refInputType}
        aria-required="true"
        aria-label={label}
      />
    </>
  );
};

export default InputField;
