import { getUsersFromApi, getNextUsersFromApi, storage } from "../storage";

export const selectedUrl = {
  startUsers: " https://rickandmortyapi.com/api/character",
  nextUsers: "",
};

export function fetchUsers(url) {
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch(getUsersFromApi(data.results));
        selectedUrl.nextUsers = data.info.next;
        return data;
      })

      .then((data) => (storage.defaultUsers = data.results));
  };
}

export function fetchNextUsers(url) {
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch(getNextUsersFromApi(data.results));
        selectedUrl.nextUsers = data.info.next;
      });
  };
}
