export const storage = {
  filters: ["Asc", "Dsc", "Species", "Gender", "Status", "Reset"],
};
export {
  store,
  defaultState,
  getUsersFromApi,
  sortUsersAsc,
  sortUsersDsc,
  sortUsersBySpecies,
  sortUsersByGender,
  sortUsersByStatus,
} from "./usersReducer";
