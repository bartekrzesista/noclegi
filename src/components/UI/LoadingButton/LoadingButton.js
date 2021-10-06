export default function LoadingButton(props) {
  const className = props.className || "btn-primary";
  const buttonProps = {...props, loading: null};

  return props.loading ? (
    <button className={`btn ${className}`} type="button" disabled>
      <span
        className="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      ></span>
      <span className="visually-hidden">Ładowanie...</span>
    </button>
  ) : (
    <button {...buttonProps} className={`btn ${className}`}>{props.children}</button>
  );
}
