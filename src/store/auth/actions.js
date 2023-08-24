import actionTypes from '../types';
import { fetch_checkAuth, fetch_logOut } from '../../utils/mockApi';

export const setAuth = (isAuth) => ({
  type: actionTypes.SET_AUTH,
  payload: { isAuth }
});
export const setUser = (name) => ({
  type: actionTypes.SET_USER,
  payload: { name }
});
export const setLoading = (isLoading) => ({
  type: actionTypes.SET_LOADING_AUTH,
  payload: { isLoading }
});
export const setAuthErr = (authErr) => ({
  type: actionTypes.SET_AUTH_ERR,
  payload: { authErr }
});
export const setError = (error) => ({
  type: actionTypes.SET_ERROR,
  payload: { error }
});

export const checkAuth = (props) => async (dispatch) => {
  dispatch(setLoading(true));
  dispatch(setError(null));
  try {
    const data = await fetch_checkAuth(props);
    if (data?.err) {
      dispatch(setAuthErr(data.err));
    }
    if (data?.name) {
      dispatch(setAuth(true));
      dispatch(setUser(data.name));
    }
  } catch (err) {
    dispatch(setError(err.message));
    console.error('checkAuth err', err);
  } finally {
    dispatch(setLoading(false));
  }
};

export const logOut = () => async (dispatch) => {
  dispatch(setAuth(false));
  dispatch(setUser(null));
  dispatch(setError(null));
  try {
    await fetch_logOut();
  } catch (err) {
    dispatch(setError(err.message));
    console.error('logOut err', err);
  } finally {
    dispatch(setLoading(false));
  }
};
