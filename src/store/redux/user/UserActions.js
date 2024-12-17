import { getUsers, updateUser } from "../../../services/api/userService";
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
} from "./UserTypes";

export const fetchUserData = () => async (dispatch) => {
  dispatch({ type: FETCH_USER_REQUEST });
  try {
    const data = await getUsers();
    dispatch({ type: FETCH_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_USER_FAILURE, error: error.message });
  }
};

export const updateUserData = (userData) => async (dispatch) => {
  dispatch({ type: UPDATE_USER_REQUEST });
  try {
    const updatedUser = await updateUser(userData);
    dispatch({ type: UPDATE_USER_SUCCESS, payload: updatedUser });
    return updatedUser;
  } catch (error) {
    dispatch({ type: UPDATE_USER_FAILURE, error: error.message });
    throw error;
  }
};
