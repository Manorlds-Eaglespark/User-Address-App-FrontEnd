/* eslint linebreak-style: ["error", "unix"] */
/* eslint linebreak-style: ["error", "windows"] */
import axios from 'axios';
import { toast } from 'react-toastify';
import { UserDataConstants } from './actionTypes';
import { toastFailure } from '../utils/toast';


const apiUrl = 'https://address-app-256.herokuapp.com/api/v1/user';

const viewUserDataAction = () => dispatch => axios.get(apiUrl, {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${sessionStorage.getItem('token')}`,
  },
})
  .then((response) => {
    dispatch({
      type: UserDataConstants.VIEW_USER_DATA_SUCCESS,
      payload: response.data,
    });
  })
  .catch((error) => {
    console.log(error);
    const errorMessage = error.response.data.error;
    toast.dismiss();
    toastFailure(`${errorMessage}`, 'A');
    dispatch({
      type: UserDataConstants.VIEW_USER_DATA_FAIL,
      payload: errorMessage,
    });
  });

export default viewUserDataAction;
