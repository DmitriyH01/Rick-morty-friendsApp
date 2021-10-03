import { Fragment } from "react";
import logo from "../../images/logo.svg";

function CreateHeader() {
  return (
    <Fragment>
      <header className="header">
        <img className="header__logo" alt="" src={logo}></img>
        <nav className="header__navigation">
          <ol className="header__navigation__list"></ol>
        </nav>
      </header>
    </Fragment>
  );
}

export default CreateHeader;
