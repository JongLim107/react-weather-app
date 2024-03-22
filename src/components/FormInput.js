
export const FormInput = ({ label = "", value, onChange }) => {
  return (
    <div className="row m-5">
      <label>{label}:</label>
      <input
        type="text"
        name={label.toLocaleLowerCase()}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
