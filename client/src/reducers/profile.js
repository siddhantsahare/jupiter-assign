import { GET_PROFILE, ADD_PROFILE, PROFILE_ERROR } from '../actions/types';

const initialState = {
  profiles: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profiles: payload,
        loading: false,
      };

    case ADD_PROFILE:
      return {
        ...state,
        profiles: [payload, ...state.profiles],
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
}
