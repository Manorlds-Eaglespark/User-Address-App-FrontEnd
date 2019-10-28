/* eslint linebreak-style: ["error", "unix"] */
/* eslint linebreak-style: ["error", "windows"] */
import { EditAddressConstants } from '../actions/actionTypes';


const editAddressReducer = (state = {
  updated: '',
}, { type, payload }) => {
  switch (type) {
    case EditAddressConstants.EDIT_ADDRESS_SUCCESS:
      return {
        ...state,
        registered: payload,
      };
    case EditAddressConstants.EDIT_ADDRESS_FAIL:
      return {
        ...state,
        errors: payload,
      };
    default:
      return state;
  }
};

export default editAddressReducer;
