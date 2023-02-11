import React from "react";
import { connect } from "react-redux";
import { getUsers, User } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  users: User[];
  getUsers(): any;
}

function App({ users, getUsers }: AppProps): JSX.Element {
  return (
    <>
      <button onClick={getUsers}>Get users</button>
      <hr />
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => (
            <tr key={user.id}>
              <th>{user.id}</th>
              <th>{user.name}</th>
              <th>{user.email}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

const mapStateToProps = (state: StoreState): { users: User[] } => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { getUsers })(App);
