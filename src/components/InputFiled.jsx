const InputField = (props) => {
  const { refInputType, label } = props;
  return (
    <>
      <input
        placeholder="Enter your email..."
        type={label}
        id={label}
        name={label}
        value={props.values.email}
        onChange={props.handleChange}
        ref={refInputType}
        aria-required="true"
        aria-label={label}
      />
    </>
  );
};

export default InputField;
