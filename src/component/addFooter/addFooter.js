import { Fragment } from "react";

function AddFooter() {
  return (
    <Fragment>
      <footer className="footer">
        <div className="footer__iconLinks">
          Icons made by{" "}
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </footer>
    </Fragment>
  );
}

export default AddFooter;
