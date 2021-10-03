import { Fragment } from "react";

function AddMainContainer({ users }) {
  return (
    <Fragment>
      <main className="content">
        <ul className="content__list">
          {users.map((user) => {
            console.log(user);
            return (
              <Fragment>
                <li key={user.id} className="content__list__item">
                  <h2>{user.name}</h2>
                  <img alt="" src={user.image}></img>
                </li>
              </Fragment>
            );
          })}
        </ul>
        <section className="content__filters"></section>
      </main>
    </Fragment>
  );
}
export default AddMainContainer;
