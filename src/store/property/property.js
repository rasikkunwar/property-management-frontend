import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {getProperties} from "../../services/apis/Endpoints"
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
      await axios
        .get(getProperties)
        .then((response) => {
          dispatch(setProperties(response.data));
        })
        .catch((er) => {
         
        });
    };
  }

export default propertySlice.reducer;
