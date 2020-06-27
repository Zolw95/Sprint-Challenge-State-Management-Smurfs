import {
  GET_SMURFS,
  ADD_SMURF,
  DELETE_SMURF,
  SET_LOADING,
  UPDATE_SMURF,
  SET_CURRENT,
} from "../actions/types";

const initialState = {
  smurfs: null,
  loading: false,
  current: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS:
      return {
        ...state,
        smurfs: action.payload,
      };

    case ADD_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        loading: false,
      };

    case DELETE_SMURF:
      return {
        ...state,
        smurfs: state.smurfs.filter((smurf) => smurf.id !== action.payload),
      };
    default:
      return state;
  }
};
