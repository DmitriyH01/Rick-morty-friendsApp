import { Fragment, useState } from "react";
import { defaultState } from "../../storage";
import { sortUsersByAlphabet, sortUsersBySpecies } from "../../storage";

function CreateFilters({ users, dispatch }) {
  // const [ifChecked, setChecked] = useState(false);
  const ifChecked = false;
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
              <input
                onChange={(e) => {
                  e.target.checked = ifChecked;
                }} //wrong work - fix later
                type="radio"
                id={item}
              />
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}

const compareArguments = (firstUsers, secondUsers, sortValue) => {
  console.log(firstUsers[sortValue]);
  if (firstUsers[sortValue] > secondUsers[sortValue]) {
    return 1;
  }
  if (firstUsers[sortValue] < secondUsers[sortValue]) {
    return -1;
  }
  return 0;
};

const filteredUsers = (target, users, dispatch) => {
  switch (target.id) {
    case "Asc":
      dispatch(
        sortUsersByAlphabet(
          users.sort((a, b) => compareArguments(a, b, "name"))
        )
      );
      break;
    case "Dsc":
      dispatch(
        sortUsersByAlphabet(
          users.sort((a, b) => compareArguments(b, a, "name"))
        )
      );
      break;
    case "Species":
      dispatch(
        sortUsersBySpecies(
          users.sort((a, b) => compareArguments(a, b, "species"))
        )
      );
      break;

    default:
      return users;
  }
};

export default CreateFilters;
