import {
  GET_SMURFS,
  ADD_SMURF,
  DELETE_SMURF,
  SET_LOADING,
  UPDATE_SMURF,
  SET_CURRENT,
} from "./types";

export const getSmurfs = () => {
  // Fetch Smurfs from API
  // Using thunk - return async function && dispatch action
  return async (dispatch) => {
    const res = await fetch("http://localhost:3333/smurfs");
    const data = await res.json();
    console.log("smurfs", data);
    dispatch({
      type: GET_SMURFS,
      payload: data,
    });
  };
};

export const addSmurfs = (smurf) => {
  console.log("Add Smurf", smurf);
  return async (dispatch) => {
    const res = await fetch("http://localhost:3333/smurfs", {
      method: "POST",
      body: JSON.stringify(smurf),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log("Returned Smurfs from Add Func", data);
    dispatch({
      type: ADD_SMURF,
      payload: data,
    });
  };
};

export const deleteSmurfs = (id) => {
  console.log("Delete Smurf - ID", id);
  return async (dispatch) => {
    const res = await fetch(`http://localhost:3333/smurfs/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    dispatch({
      type: DELETE_SMURF,
      payload: id,
    });
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
