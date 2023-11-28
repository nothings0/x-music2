import axios from "axios";
import {
  loginFailed,
  loginStart,
  loginSuccess,
  registerFailed,
  registerStart,
  registerSuccess,
} from "./authslice";
import {
  addSuccess,
  addStart,
  addFailed,
  getStart,
  getFailed,
  getSuccess,
} from "./songSlice";

const URL = "http://localhost:8000";

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`${URL}/v1/auth/login`, user);
    dispatch(loginSuccess(res.data));
    navigate("/");
  } catch (error) {
    dispatch(loginFailed());
  }
};

export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    await axios.post(`${URL}/v1/auth/register`, user);
    dispatch(registerSuccess());
    navigate("/login");
  } catch (error) {
    dispatch(registerFailed());
  }
};

export const addSong = async (song, dispatch, accessToken) => {
  dispatch(addStart());
  try {
    const res = await axios.post(`${URL}/v1/song`, song, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(addSuccess(res.data));
  } catch (error) {
    dispatch(addFailed());
  }
};
export const getSong = async (dispatch, accessToken) => {
  dispatch(getStart());
  try {
    const res = await axios.get(`${URL}/v1/song`, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(getSuccess(res.data));
  } catch (error) {
    dispatch(getFailed());
  }
};
