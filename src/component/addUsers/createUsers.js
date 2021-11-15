import { Fragment } from "react";

function createUsers(users) {
  return users.map((user) => (
    <Fragment key={user.id}>
      <li key={user.id} className="content__list__item">
        <span>{user.name}</span>
        <img alt="" src={user.image}></img>
      </li>
    </Fragment>
  ));
}

export default createUsers;
