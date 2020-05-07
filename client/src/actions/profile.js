import axios from 'axios';
import { setAlert } from './alert';
import { GET_PROFILE, ADD_PROFILE, PROFILE_ERROR } from './types';

// Get profile
export const getProfile = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/profile');

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add profile
export const addProfile = (data) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  console.log(data);

  try {
    const res = await axios.post('/api/profile', data, config);

    dispatch({
      type: ADD_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
    });
  }
};
