import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {customerApplicationApi} from "../../services/apis/Endpoints"
export const applicationSlice = createSlice({
  name: "application",
  initialState: {
    showMakeAnOfferModal:false
  },
  reducers: {
      setMakeAnOfferModal: (state, { payload }) => {
        
        state.showMakeAnOfferModal = payload;
      },
    }
});


export const { setMakeAnOfferModal } = applicationSlice.actions;


  export function submitApplication(formData) {
    return async (dispatch) => {
      await axios
        .post(customerApplicationApi,formData)
        .then((response) => {
         
        })
        .catch((er) => {
          
        });
    };
  }
  

export default applicationSlice.reducer;
