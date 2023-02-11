import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

axios.defaults.baseURL = "http://localhost:3001";

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface GetUsersAction {
  type: ActionTypes.getUsers;
  payload: User[];
}

export const getUsers = () => async (dispatch: Dispatch) => {
  const res = await axios.get<User[]>("/api/user");
  dispatch<GetUsersAction>({
    type: ActionTypes.getUsers,
    payload: res.data,
  });
};
