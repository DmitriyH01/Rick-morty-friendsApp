import { Fragment } from "react";
import logo from "../../images/logo.svg";
import { storage } from "../../storage/dataStorage";

function CreateHeader() {
  return (
    <Fragment>
      <header className="header">
        <img className="header__logo" alt="" src={logo}></img>
        <nav className="header__navigation">
          <ul className="header__navigation__list">
            {addNavItems(storage.navItems)}
          </ul>
        </nav>
      </header>
    </Fragment>
  );
}

function addNavItems(items) {
  return (
    <Fragment>
      {items.map((item) => (
        <li key={item} className="header__navigation__list__item">
          {item}
        </li>
      ))}
    </Fragment>
  );
}

export default CreateHeader;
