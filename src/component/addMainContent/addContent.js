import { Fragment } from "react";
import createUsers from "../addUsers/createUsers";
import CreateFilters from "../addFilters/createFilters";
import loadMoreUsers from "../loadMoreUsers";

function AddMainContainer({ users, dispatch }) {
  return (
    <Fragment>
      <main className="content">
        <ul
          className="content__list"
          onScroll={(e) => loadMoreUsers(e.target, dispatch)}
        >
          {createUsers(users)}
        </ul>
        <section className="content__filters">
          <CreateFilters users={users} dispatch={dispatch} />
        </section>
      </main>
    </Fragment>
  );
}
export default AddMainContainer;
