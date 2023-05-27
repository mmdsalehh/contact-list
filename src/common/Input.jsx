const Input = ({ title, ...rest }) => {
  return (
    <>
      <p className="font-semibold">{title}</p>
      <input
        type="text"
        className="w-full rounded border p-1 focus:outline-none"
        {...rest}
      />
    </>
  );
};

export default Input;
