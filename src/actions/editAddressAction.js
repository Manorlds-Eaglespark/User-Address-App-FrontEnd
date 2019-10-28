/* eslint linebreak-style: ["error", "unix"] */
/* eslint linebreak-style: ["error", "windows"] */
import axios from 'axios';
import { toast } from 'react-toastify';
import { EditAddressConstants } from './actionTypes';
import history from '../utils/history';
import { toastSuccess, toastFailure } from '../utils/toast';


const apiUrl = 'https://address-app-256.herokuapp.com/api/v1/edit-address/';


const editAddressAction = (id, userData) => dispatch => axios.put(apiUrl + id, userData, {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${sessionStorage.getItem('token')}`,
  },
})
  .then((response) => {
    dispatch({
      type: EditAddressConstants.EDIT_ADDRESS_SUCCESS,
      payload: response.data.message,
    });
    toast.dismiss();
    toastSuccess('Address Data Successfully Updated!', 'A');
    history.push('/home');
  })
  .catch((error) => {
    toast.dismiss();
    toastFailure(`${error.response.data.error}`, 'A');
    dispatch({
      type: EditAddressConstants.EDIT_ADDRESS_FAIL,
      payload: error.response.data.error,
    });
  });

export default editAddressAction;
