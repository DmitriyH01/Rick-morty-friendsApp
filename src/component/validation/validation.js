import { Fragment, useEffect } from "react";

function AddValidationWindow({
  email,
  setEmail,
  password,
  setPassword,
  emailFiled,
  setEmailFilled,
  passwordFiled,
  setPasswordFilled,
  emailError,
  setEmailError,
  passwordError,
  setPasswordError,
  formValid,
  setFormValid,
  setForm,
}) {
  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  });

  function blurHandler(e) {
    if (e.target.name === "email") {
      setEmailFilled(true);
    }
    if (e.target.name === "password") {
      setPasswordFilled(true);
    }
  }

  function emailHandler(e) {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Email does not correct");
    } else setEmailError("");
  }

  function passwordHandler(e) {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError(
        "Parol must contain at last 3 symbols, but no more than 8 "
      );
      if (!e.target.value) {
        setPasswordError("Password couldn't be empty");
      }
    } else {
      setPasswordError("");
    }
  }

  return (
    <Fragment>
      <div className="validation_box">
        <form onSubmit={() => setForm(false)} className="validation_box__form">
          <h1>Registration</h1>
          {emailFiled && emailError && <span>{emailError}</span>}
          <input
            value={email}
            onChange={(e) => emailHandler(e)}
            onBlur={(e) => blurHandler(e)}
            className="validation_box__form__input"
            name="email"
            tape="text"
            placeholder="Enter your email..."
          ></input>
          {passwordFiled && passwordError && <span>{passwordError}</span>}
          <input
            value={password}
            onChange={(e) => passwordHandler(e)}
            onBlur={(e) => blurHandler(e)}
            className="validation_box__form__input"
            name="password"
            tape="password"
            placeholder="Enter your password..."
          ></input>
          <button
            disabled={!formValid}
            className="validation_box__form__button"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </Fragment>
  );
}

export default AddValidationWindow;
