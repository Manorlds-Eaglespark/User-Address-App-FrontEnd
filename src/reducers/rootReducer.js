import { combineReducers } from 'redux';
import loginReducer from './auth/loginReducer';
import viewUserDataReducer from './viewUserDataReducer';
import editAddressReducer from './editAddressReducer';

export default combineReducers({
  loginReducer,
  viewUserDataReducer,
  editAddressReducer,
});
