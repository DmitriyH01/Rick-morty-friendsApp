import { Fragment } from "react";

function CreateHeader() {
  return (
    <Fragment>
      <header className="header">
        <img className="header__logo" alt="site-logo"></img>
        <nav className="header__navigation">
          <ol className="header__navigation__list"></ol>
        </nav>
      </header>
    </Fragment>
  );
}

export default CreateHeader;
