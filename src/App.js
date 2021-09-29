import "./App.scss";
import { Fragment, useEffect, useState } from "react";
import CreateHeader from "./component/createHeader";
import AddMainContainer from "./component/addMainContainer";
import AddFooter from "./component/addFooter";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./data/loadData";


function App() {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.users);
  console.log(characters);
  useEffect(() => {
    if (characters.length === 0) {
      dispatch(fetchUsers());
    }
  });

  return (
    <Fragment>
      <CreateHeader />
      <AddMainContainer characters={characters} />
      <AddFooter />
    </Fragment>
  );
}

export default App;
