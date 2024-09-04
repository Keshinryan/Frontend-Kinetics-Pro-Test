/* eslint-disable react/prop-types */
const FormField = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  error,
  rows,
}) => {
  return (
    <>
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          rows={rows}
          className={`form-control ${error ? 'is-invalid' : ''}`}
        />
      ) : (
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          className={`form-control ${error ? 'is-invalid' : ''}`}
        />
      )}
    </div>
    {error && <div className="error-message">{error}</div>}
    </>
  );
};

export default FormField;
