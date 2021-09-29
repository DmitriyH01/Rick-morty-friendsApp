import { getUsersFromApi } from "../storage/storage";

export function fetchUsers() {
  const url = " https://rickandmortyapi.com/api/character";
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => dispatch(getUsersFromApi(data.results)));
  };
}

export default fetchUsers;
