import { Fragment } from "react";
import { storage } from "../../storage";
import { filterUsers, searchUser } from "./filterTools";

function CreateFilters({ users, dispatch }) {
  return (
    <Fragment>
      <input
        onChange={(e) => searchUser(e.target.value, users, dispatch)}
        className="content__filters__search"
        type="text"
        name="search"
        placeholder="Find by name..."
      />

      <ul id="filters_menu" className="content__filters__list">
        {storage.filters.map((item) => {
          return (
            <li key={item} className="content__filters__list__item">
              <label
                id={item}
                htmlFor={item}
                onClick={(e) => filterUsers(e.target, users, dispatch)}
              >
                {item}
              </label>
              <input type="radio" id={item} />
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}

export default CreateFilters;
