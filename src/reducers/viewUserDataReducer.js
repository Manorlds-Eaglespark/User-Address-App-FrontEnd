/* eslint linebreak-style: ["error", "unix"] */
/* eslint linebreak-style: ["error", "windows"] */
import { UserDataConstants } from '../actions/actionTypes';


const viewUserDataReducer = (state = {
  userInfo: {}, userLocation: {},
}, { type, payload }) => {
  switch (type) {
    case UserDataConstants.VIEW_USER_DATA_SUCCESS:
      return {
        ...state,
        userInfo: payload.user_data,
        userLocation: payload.user_location,
      };
    case UserDataConstants.VIEW_USER_DATA_FAIL:
      return {
        ...state,
        errors: payload,
      };
    default:
      return state;
  }
};

export default viewUserDataReducer;
