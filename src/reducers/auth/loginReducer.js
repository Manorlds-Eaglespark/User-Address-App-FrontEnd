import { LoginConstants } from '../../actions/actionTypes';


const loginReducer = (state = {
  isUserLoggedIn: false,
  logged_in: false,
}, { type, payload }) => {
  switch (type) {
    case LoginConstants.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: true,
        logged_in: true,
      };
    case LoginConstants.LOGIN_USER_FAILED:
      return {
        ...state,
        errors: payload,
        isUserLoggedIn: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
