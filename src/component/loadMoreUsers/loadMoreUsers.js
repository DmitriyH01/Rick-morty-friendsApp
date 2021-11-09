import { selectedUrl, fetchNextUsers } from "../../data/loadData";

function loadMoreUsers(list, dispatch) {
  const allScrollLength = list.scrollHeight;
  const scrollDistanceProgress = list.scrollTop;
  const viewedScrollHeight = list.clientHeight;

  if (scrollDistanceProgress + viewedScrollHeight >= allScrollLength) {
    dispatch(fetchNextUsers(selectedUrl.nextPageUsers));
  }
}

export default loadMoreUsers;
