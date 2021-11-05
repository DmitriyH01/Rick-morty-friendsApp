import { getUsersFromApi, storage } from "../storage";

export function fetchUsers() {
  const url = " https://rickandmortyapi.com/api/character";
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => dispatch(getUsersFromApi(data.results)))
      .then((data) => (storage.defaultUsers = data.payload));
  };
}

export default fetchUsers;
