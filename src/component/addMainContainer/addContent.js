import { Fragment } from "react";

function AddMainContainer() {
  return (
    <Fragment>
      <main className="content">
        <ul className="content__list">
          <li className="content__list__item">
            <h2>Engine</h2>
            <img alt="true"></img>
            <span></span>
          </li>
        </ul>
        <aside className="content__aside"></aside>
      </main>
    </Fragment>
  );
}
export default AddMainContainer;
