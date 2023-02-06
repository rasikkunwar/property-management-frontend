import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {getAllUsers} from "../../services/apis/Endpoints"
import {setLoading} from "../../store/loading/loading"
export const myListingsSlice = createSlice({
  name: "myListings",
  initialState: {
    listings: [],
  },
  reducers: {
    setListings: (state, { payload }) => {
        state.listings = payload;
      },
    }
});


export const {  setListings } = myListingsSlice.actions;

export function fetchListings() {
    return async (dispatch) => {
      dispatch(setLoading(true))
      await axios
        .get(getAllUsers)
        .then((response) => {
          dispatch(setListings(response.data));
          dispatch(setLoading(false))
        })
        .catch((er) => {
          dispatch(setLoading(false))
        });
    };
  }

export default myListingsSlice.reducer;
