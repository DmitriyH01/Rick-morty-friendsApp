import { getUsersFromApi, getNextUsersFromApi, storage } from "../storage";

export const selectedUrl = {
  firstPageUsers: "https://rickandmortyapi.com/api/character",
  nextPageUsers: "",
};

export function fetchUsers(url) {
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch(getUsersFromApi(data.results));
        selectedUrl.nextPageUsers = data.info.next;
        return data;
      })
      .then((data) => (storage.defaultUsers = data.results)); //maybe something else idea for reset users?
    //if realize "simplest reset" - can do one fetch Function, not two.
  };
}

export function fetchNextUsers(url) {
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch(getNextUsersFromApi(data.results));
        selectedUrl.nextPageUsers = data.info.next;
      });
  };
}
