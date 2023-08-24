import actionTypes from '../types';

const initState = {
  isAuth: false,
  user: null,
  isLoading: true,
  authErr: null,
  error: null
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOADING_AUTH:
      return { ...state, isLoading: action.payload.isLoading };

    case actionTypes.SET_AUTH:
      return { ...state, isAuth: action.payload.isAuth };

    case actionTypes.SET_USER:
      return { ...state, user: action.payload.name };

    case actionTypes.SET_AUTH_ERR:
      return { ...state, authErr: action.payload.authErr };

    case actionTypes.SET_ERROR:
      if (action.payload.error) return { ...state, error: action.payload.error };
      return { ...state, authErr: null, error: null };

    default:
      return state;
  }
};
