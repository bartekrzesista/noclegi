import { useState } from "react";
import LoadingButton from "../../../components/UI/LoadingButton/LoadingButton";
import Input from "../../../components/Input/Input";
import { validate } from "../../../helpers/validations";

export default function Register(props) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: {
      value: "",
      error: "",
      showError: false,
      rules: ["required", "email"],
    },
    password: {
      value: "",
      error: "",
      showError: false,
      rules: ["required", { name: "minLength", length: 10 }],
    },
    confirmPassword: {
      value: "",
      error: "",
      showError: false,
      rules: ["required", { name: "minLength", length: 10 }],
    },
  });

  const valid = !Object.values(form)
    .map((input) => input.error)
    .filter((e) => e).length;

  const changeHandler = (value, fieldName) => {
    const error = validate(form[fieldName].rules, value);

    setForm({
      ...form,
      [fieldName]: {
        ...form[fieldName],
        value,
        error,
        showError: true,
      },
    });
  };

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <div className="card">
      <h2 className="card-header">Rejestracja</h2>
      <div className="card-body">
        <p className="text-muted">Uzupełnij dane</p>
        <form onSubmit={submit}>
          <Input
            type="email"
            label="Email"
            id="email"
            value={form.email.value}
            onChange={(val) => changeHandler(val, "email")}
            error={form.email.error}
            showError={form.email.showError}
          />

          <Input
            type="password"
            label="Hasło"
            id="password"
            value={form.password.value}
            onChange={(val) => changeHandler(val, "password")}
            error={form.password.error}
            showError={form.password.showError}
          />

          <Input
            type="password"
            label="Powtórz hasło"
            id="confirm-password"
            value={form.confirmPassword.value}
            onChange={(val) => changeHandler(val, "confirmPassword")}
            error={form.confirmPassword.error}
            showError={form.confirmPassword.showError}
          />

          <div className="d-flex justify-content-end mt-3">
            <LoadingButton
              loading={loading}
              className="btn-success"
              disabled={!valid}
            >
              Zarejestruj
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
}
