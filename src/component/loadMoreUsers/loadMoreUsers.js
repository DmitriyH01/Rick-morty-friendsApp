import { selectedUrl, fetchNextUsers } from "../../data/loadData";

function loadMoreUsers(list, dispatch) {
  const allScrollLength = list.scrollHeight;
  const scrollDistanceProgress = list.scrollTop;
  const viewedScrollHeight = list.clientHeight;
  if (scrollDistanceProgress + viewedScrollHeight >= allScrollLength) {
    // fetchUsers("addnext");
    dispatch(fetchNextUsers(selectedUrl.nextUsers));
    // dispatch(fetchUsers(nextUsersURL));
    console.log("end");
  }
}

export default loadMoreUsers;
