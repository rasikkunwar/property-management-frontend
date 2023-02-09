import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getProperties, getPropertyById, ownerPropertiesApi, updatePropertyStatusApi } from "../../services/apis/Endpoints"
import { setLoading } from "../../store/loading/loading"
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


export const { setListings } = myListingsSlice.actions;

export function fetchListings() {
  return async (dispatch) => {
    dispatch(setLoading(true))

    try {
      const response = await axios.get(ownerPropertiesApi)
      dispatch(setListings(response.data.data))
      dispatch(setLoading(false))
    } catch (e) {
      console.log(e.message)
      dispatch(setLoading(true))
    }
  };
}

export const fetchPropertyById = (propertyId) => {
  return async (dispatch) => {
    dispatch(setLoading(true))

    try {
      const res = await axios.get(getPropertyById(propertyId))
      dispatch(setLoading(false))
      return res.data
    } catch (e) {
      return e
    }
  }
}


export const addProperty = (property) => {
  return async (dispatch) => {
    dispatch(setLoading(true))

    try {
      const res = await axios.post(getProperties, property)
      dispatch(setLoading(false))
      return res.data
    } catch (e) {
      return e
    }
  }
}

export const updatePropertyById = (propertyId, propertyData) => {
  return async (dispatch) => {
    dispatch(setLoading(true))

    try {
      const res = await axios.put(getPropertyById(propertyId), propertyData)
      dispatch(setLoading(false))
      return res.data
    } catch (e) {
      return e
    }
  }
}

export const updatePropertyStatus = (propertyId, action) => {
  return async (dispatch) => {
    dispatch(setLoading(true))

    try {
      const res = await axios.patch(updatePropertyStatusApi(propertyId, action))
      dispatch(setLoading(false))
      return res.data
    } catch (e) {
      dispatch(setLoading(false))
      return e
    }
  }
}

export default myListingsSlice.reducer;
