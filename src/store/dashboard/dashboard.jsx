import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { adminDashboardApi } from "../../services/apis/Endpoints";
import { setLoading } from "../../store/loading/loading";
export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    adminDashboardData: {},
  },
  reducers: {
    setAdminDashboardData: (state, { payload }) => {
      state.adminDashboardData = payload;
    },
  },
});

export const { setAdminDashboardData } = dashboardSlice.actions;

export function fetchAdminDashboardData() {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await axios.get(adminDashboardApi);
      dispatch(setAdminDashboardData(response.data.data));
      dispatch(setLoading(false));
      return response.data.data;
    } catch (err) {}
  };
}

export default dashboardSlice.reducer;
