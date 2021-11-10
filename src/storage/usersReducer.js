import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const GET_USERS = "GET_USERS";
const GET_NEXT_USERS = "GET_NEXT_USERS";
const SORT_ASC = "SORT_ASC";
const SORT_DSC = "SORT_DSC";
const SORT_SPECIES = "SORT_SPECIES";
const SORT_GENDER = "SORT_GENDER";
const SORT_STATUS = "SORT_STATUS";
const RESET = "RESET";
const FIND = "FIND";

export const defaultState = {
  users: [],
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.payload],
      };
    case GET_NEXT_USERS:
      return {
        ...state,
        users: [...state.users, ...action.payload],
      };
    case FIND:
      return { users: [...action.payload] };
    case SORT_ASC:
      return { users: [...action.payload] };
    case SORT_DSC:
      return { users: [...action.payload] };
    case SORT_SPECIES:
      return { users: [...action.payload] };
    case SORT_GENDER:
      return { users: [...action.payload] };
    case SORT_STATUS:
      return { users: [...action.payload] };
    case RESET:
      return { users: [...action.payload] };
    default:
      return state;
  }
}

export const getUsersFromApi = (payload) => ({ type: GET_USERS, payload });
export const getNextUsersFromApi = (payload) => ({
  type: GET_NEXT_USERS,
  payload,
});
export const sortUsersAsc = (payload) => ({ type: SORT_ASC, payload });
export const sortUsersDsc = (payload) => ({ type: SORT_DSC, payload });
export const sortUsersBySpecies = (payload) => ({
  type: SORT_SPECIES,
  payload,
});
export const sortUsersByGender = (payload) => ({
  type: SORT_GENDER,
  payload,
});
export const sortUsersByStatus = (payload) => ({
  type: SORT_STATUS,
  payload,
});
export const reset = (payload) => ({
  type: RESET,
  payload,
});
export const findUser = (payload) => ({
  type: FIND,
  payload,
});

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
