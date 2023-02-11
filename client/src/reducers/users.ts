import { User, GetUsersAction } from "../actions";
import { ActionTypes } from "../actions/types";

export const usersReducer = (state: User[] = [], action: GetUsersAction) => {
  switch (action.type) {
    case ActionTypes.getUsers:
      return action.payload
    default:
      return state
  }
};
