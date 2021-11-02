import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const GET_USERS = "GET_USERS";
const SORT_ASC = "SORT_ASC";
const SORT_SPECIES = "SORT_SPECIES";

export const defaultState = {
  filters: ["Asc", "Dsc", "Species", "Gender", "Status", "Reset"],
  users: [],
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: [...state.users, ...action.payload] };
    case SORT_ASC:
      return { users: [...action.payload] };
    case SORT_SPECIES:
      return { users: [...action.payload] };

    default:
      return state;
  }
}

export const getUsersFromApi = (payload) => ({ type: GET_USERS, payload });
export const sortUsersByAlphabet = (payload) => ({ type: SORT_ASC, payload });
export const sortUsersBySpecies = (payload) => ({
  type: SORT_SPECIES,
  payload,
});

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
