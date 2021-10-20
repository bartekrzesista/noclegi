import { useRef } from "react";

function Input(props) {
  switch (props.type) {
    case "textarea":
      return <InputTextarea {...props} />;
    case "select":
      return <InputSelect {...props} />;
    case "checkbox":
      return <InputCheckbox {...props} />;
    case "file":
      return <InputFile {...props} />;
    case "radio":
      return <InputRadio {...props} />;
    default:
      return <InputText {...props} />;
  }
}

Input.defaultProps = {
  type: "text",
  error: "",
  showError: false,
};

export default Input;

function InputText(props) {
  return (
    <div className="form-group mt-3">
      <label className="form-label" htmlFor={props.id}>
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.id}
        className={`form-control${
          props.error && props.showError ? " is-invalid" : ""
        }`}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
      <div className="invalid-feedback">{props.error}</div>
    </div>
  );
}

function InputTextarea(props) {
  return (
    <div className="form-group mt-3">
      <label className="form-label" htmlFor={props.id}>
        {props.label}
      </label>
      <textarea
        id={props.id}
        className={`form-control${
          props.error && props.showError ? " is-invalid" : ""
        }`}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
      <div className="invalid-feedback">{props.error}</div>
    </div>
  );
}

function InputSelect(props) {
  return (
    <div className="form-group mt-3">
      <label htmlFor={props.id} className="form-label">
        {props.label}
      </label>
      <select
        className="form-select"
        name="rooms"
        id={props.id}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      >
        {props.options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function InputCheckbox(props) {
  const changeFeatureHandler = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    const newFeatures = isChecked
      ? [...props.value, value]
      : props.value.filter((e) => e !== value);

    props.onChange(newFeatures);
  };

  return (
    <div className="form-group">
      {props.options.map((option) => (
        <div className="form-check" key={option.id}>
          <input
            className="form-check-input"
            type="checkbox"
            id={option.value}
            value={option.value}
            checked={props.value.includes(option.value)}
            onChange={changeFeatureHandler}
          />
          <label className="form-check-label" htmlFor={option.value}>
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
}

function InputFile(props) {
  const imageRef = useRef();

  return (
    <div className="form-group">
      <input
        type="file"
        aria-label={props.ariaLabel}
        ref={imageRef}
        onChange={(e) => props.onChange(e.target.files[0])}
      />
    </div>
  );
}

function InputRadio(props) {
  return (
    <div className="form-group">
      {props.options.map((option) => {
        const status = option.value ? "active" : "hidden";

        return (
          <div className="form-check" key={option.id}>
            <input
              className="form-check-input"
              type="radio"
              name="status"
              id={`status-${status}`}
              value={status}
              checked={props.value === option.value}
              onChange={e => props.onChange(option.value)}
            />
            <label className="form-check-label" htmlFor={`status-${status}`}>
              {option.label}
            </label>
          </div>
        );
      })}
    </div>
  );
}
