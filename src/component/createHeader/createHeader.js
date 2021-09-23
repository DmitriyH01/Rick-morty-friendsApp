import { Fragment } from "react";
import storage from "../../storage";

function CreateHeader() {
  return (
    <Fragment>
      <header className="header">
        <img className="header__logo" alt="site-logo"></img>
        <nav className="header__navigation">
          <ol className="header__navigation__list">
            {storage.navItems.map((item) => (
              <ul key={item} className="navigation__list__item">
                {item}
              </ul>
            ))}
          </ol>
        </nav>
      </header>
    </Fragment>
  );
}

export default CreateHeader;
