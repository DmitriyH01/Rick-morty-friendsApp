import "./App.scss";
import { Fragment, useEffect, useState } from "react";
import CreateHeader from "./component/createHeader";
import AddMainContainer from "./component/addMainContainer";
import AddValidationWindow from "./component/validation";
import AddFooter from "./component/addFooter";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./data/loadData";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFiled, setEmailFilled] = useState("");
  const [passwordFiled, setPasswordFilled] = useState("");
  const [emailError, setEmailError] = useState("Email couldn't be empty");
  const [passwordError, setPasswordError] = useState(
    "Password couldn't be empty"
  );
  const [form, setForm] = useState(true);
  const [formValid, setFormValid] = useState(false);

  const dispatch = useDispatch();
  const characters = useSelector((state) => state.users);

  useEffect(() => {
    if (characters.length === 0) {
      dispatch(fetchUsers());
    }
  });

  if (form) {
    return (
      <AddValidationWindow
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        emailFiled={emailFiled}
        setEmailFilled={setEmailFilled}
        passwordFiled={passwordFiled}
        setPasswordFilled={setPasswordFilled}
        emailError={emailError}
        setEmailError={setEmailError}
        passwordError={passwordError}
        setPasswordError={setPasswordError}
        formValid={formValid}
        setFormValid={setFormValid}
        setForm={setForm}
      />
    );
  }

  return (
    <Fragment>
      <CreateHeader />
      <AddMainContainer characters={characters} />
      <AddFooter />
    </Fragment>
  );
}

export default App;
