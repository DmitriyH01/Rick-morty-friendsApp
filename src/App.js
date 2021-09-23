import "./App.css";
import { Fragment } from "react";
import CreateHeader from "./component/createHeader";
import AddMainContainer from "./component/addContent";

function App() {
  return (
    <Fragment>
      <CreateHeader />
      <AddMainContainer />
    </Fragment>
  );
}

export default App;
