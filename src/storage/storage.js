import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const GET_USERS = "GET_USERS";

export const defaultState = {
  users: [],
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: [...state.users, ...action.payload] };

    default:
      return state;
  }
}

export const getUsersFromApi = (payload) => ({ type: GET_USERS, payload });

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
