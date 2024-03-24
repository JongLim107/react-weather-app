export const FormInput = ({ label = "", value, onChange }) => {
  return (
    <div>
      <label>{label}:</label>
      <input
        required
        type="text"
        name={label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
