import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {getProperties} from "../../services/apis/Endpoints"
import {setLoading} from "../../store/loading/loading"
export const propertySlice = createSlice({
  name: "property",
  initialState: {
    properties: [],
  },
  reducers: {
    setProperties: (state, { payload }) => {
        state.properties = payload;
      },
    }
});


export const {  setProperties } = propertySlice.actions;

export function fetchProperties() {
    return async (dispatch) => {
      dispatch(setLoading(true))
      await axios
        .get(getProperties)
        .then((response) => {
          dispatch(setProperties(response.data));
          dispatch(setLoading(false))
        })
        .catch((er) => {
          dispatch(setLoading(false))
        });
    };
  }

export default propertySlice.reducer;
