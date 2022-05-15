import { selectedUrl, fetchNextUsers } from "../../data/loadData";
import errorFactor from "../../utils/coef.js";

function loadMoreUsers(list, dispatch) {
  const allScrollLength = Math.floor(list.scrollHeight);
  const scrollDistanceProgress = list.scrollTop;
  const viewedScrollHeight = list.clientHeight;

  if (
    scrollDistanceProgress + viewedScrollHeight + errorFactor >=
    allScrollLength
  ) {
    dispatch(fetchNextUsers(selectedUrl.nextPageUsers));
  }
}

export default loadMoreUsers;
