import {
  storage,
  sortUsersAsc,
  sortUsersDsc,
  sortUsersBySpecies,
  sortUsersByGender,
  sortUsersByStatus,
  reset,
  findUser,
} from "../../storage";

const compareArguments = (firstUsers, secondUsers, sortValue) => {
  if (firstUsers[sortValue] > secondUsers[sortValue]) {
    return 1;
  }
  if (firstUsers[sortValue] < secondUsers[sortValue]) {
    return -1;
  }
  return 0;
};

export const filterUsers = (target, users, dispatch) => {
  switch (target.id) {
    case "Asc":
      dispatch(
        sortUsersAsc(users.sort((a, b) => compareArguments(a, b, "name")))
      );
      break;
    case "Dsc":
      dispatch(
        sortUsersDsc(users.sort((a, b) => compareArguments(b, a, "name")))
      );
      break;
    case "Species":
      dispatch(
        sortUsersBySpecies(
          users.sort((a, b) => compareArguments(a, b, "species"))
        )
      );
      break;
    case "Gender":
      dispatch(
        sortUsersByGender(
          users.sort((a, b) => compareArguments(a, b, "gender"))
        )
      );
      break;
    case "Status":
      dispatch(
        sortUsersByStatus(
          users.sort((a, b) => compareArguments(a, b, "status"))
        )
      );
      break;
    case "Reset":
      dispatch(reset(storage.defaultUsers));
      break;

    default:
      return users;
  }
};

export function searchUser(value, users, dispatch) {
  const search = value.toLowerCase();
  // console.log(users.filter((elem) => elem.name.toLowerCase().match(search)));
  dispatch(
    findUser(users.filter((elem) => elem.name.toLowerCase().match(search)))
  );

  // const names = giveAllNames(users);
  // const searchedName = checkNameExist(names, value);

  // if (names.includes(searchedName)) {

  //   dispatch(findUser(returnUser(users, searchedName)));
  // }
}

function giveAllNames(users) {
  return users.map((user) => user.name);
}

function checkName(names, value) {
  return names.find((name) => name.toLowerCase() === value);
}

function returnUser(users, name) {
  return users.find((user) => user.name === name);
}
