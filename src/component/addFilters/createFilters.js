import { Fragment, useState } from "react";
import { defaultState } from "../../storage";
import { sortUsers } from "../../storage";

function CreateFilters({ users, dispatch }) {
  const [checked, setChecked] = useState(false);
  return (
    <Fragment>
      <input
        className="content__filters__search"
        type="text"
        name="search"
        placeholder="Find..."
      />

      <ul id="filters_menu" className="content__filters__list">
        {defaultState.filters.map((item) => {
          return (
            <li
              key={item}
              id={item}
              onChange={(e) => filteredUsers(e.target, users, dispatch)}
            >
              <label htmlFor={item}>{item}</label>
              <input type="radio" id={item} />
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}

const compareNames = (firstUsers, secondUsers) => {
  if (firstUsers.name > secondUsers.name) {
    return 1;
  }
  if (firstUsers.name < secondUsers.name) {
    return -1;
  }
  return 0;
};

const filteredUsers = (target, users, dispatch) => {
  switch (target.id) {
    case "Asc":
      dispatch(sortUsers(users.sort((a, b) => compareNames(a, b))));
      break;

    default:
      return users;
  }
};

export default CreateFilters;
