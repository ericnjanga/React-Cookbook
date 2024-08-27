import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <div className="Field invalid-feedback d-block">Password should have at least 8 characters</div>
  );
};

function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    // Implement this function
    return (
      (firstName &&
        validateEmail(email) &&
        password.value.length >= 8 &&
        role === "individual") ||
      role === "business"
    );
  };

  const PasswordIsNotValid = () => {
    return password.isTouched && password.value.length < 8;
  }

  const clearForm = () => {
    // Implement this function
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({
      value: "",
      isTouched: false,
    });
    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="RegistrationForm">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field mb-3">
            <label htmlFor="input1" className="form-label">
              First name <sup>*</sup>
            </label>
            <input
              id="input1"
              placeholder="First name"
              value={firstName}
              className="form-control"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="Field mb-3">
            <label htmlFor="input2" className="form-label">Last name</label>
            <input
              id="input2"
              placeholder="Last name"
              value={lastName}
              className="form-control"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="Field mb-3">
            <label htmlFor="input3" className="form-label">
              Email address <sup>*</sup>
            </label>
            <input
              id="input3"
              placeholder="Email address"
                autoComplete="username"
              value={email}
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="Field mb-3">
            <div className="col-auto">
              <label htmlFor="input4" className="form-label">
                Password <sup>*</sup>
              </label>
            </div>
            <div className="col-auto">
              <input
              id="input4"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                value={password.value}
                className={'form-control' + (PasswordIsNotValid() ? ' is-invalid' : '')}
                onChange={(e) => {
                  setPassword({ ...password, value: e.target.value });
                }}
                onBlur={(e) => {
                  setPassword({ ...password, isTouched: true })
                }}
              />
            </div>
            {PasswordIsNotValid() ? (
              <PasswordErrorMessage />
            ) : null}
          </div>

          <div className="Field mb-3">
            <label htmlFor="input5" className="form-label">
              Role <sup>*</sup>
            </label>
            <select id="input5" value={role} onChange={(e) => setRole(e.target.value)} className="form-control">
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary mb-3" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default RegistrationForm;
