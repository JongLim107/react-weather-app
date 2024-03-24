export const FormInput = ({ label = "", value, onChange, required }) => {
  return (
    <div>
      <label>{label}:</label>
      <input
        type="text"
        name={label}
        value={value}
        required={required}
        onChange={onChange}
      />
    </div>
  );
};
