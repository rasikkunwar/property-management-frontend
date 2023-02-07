import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getAllUsers } from "../../services/apis/Endpoints"
import AuthService from "../../services/AuthService";
export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user_detail:{},
        token: {}
    },
    reducers: {
        setToken: (state, { payload }) => {
            state.token = payload;
        },
        setUserDetail:(state,{payload}) =>{
            state.user_detail = payload;
        }
    }
});


export const { setToken, setUserDetail } = authSlice.actions;

export function fetchTokenAfterLogin({ email, password }) {
    return async (dispatch) => {
        // TODO AUTHNTICATE FROM BACKEND AUTH API TO GET BEARER TOKEN
        await axios
            .get(getAllUsers)
            .then((response) => {
                dispatch(setToken({
                    access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsbmFtZSI6IkxhcnJ5IFdhbGtlciIsInVzZXJuYW1lIjoiUmViZWthX05pdHpzY2hlMjMiLCJlbWFpbCI6IlNpc3Rlcl9ZdW5kdDZAZ21haWwuY29tIiwicGhvbmUiOiIxLTk3MS01MjUtNDAzMiB4MzY0MDIiLCJhZGRyZXNzIjoiMjgwMzggTG9sYSBKdW5jdGlvbiIsInJvbGUiOiJyb2xlIDEiLCJwYXNzd29yZCI6InpRcmw0dDhTUzRVZFljUyIsImlkIjoiMSJ9.NrCy6e3r4qcrdVh1cDMDdK9TpbNdbKnZrTjjc2kAWpY"
                }                
                ));
                localStorage.setItem("access_token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsbmFtZSI6IkxhcnJ5IFdhbGtlciIsInVzZXJuYW1lIjoiUmViZWthX05pdHpzY2hlMjMiLCJlbWFpbCI6IlNpc3Rlcl9ZdW5kdDZAZ21haWwuY29tIiwicGhvbmUiOiIxLTk3MS01MjUtNDAzMiB4MzY0MDIiLCJhZGRyZXNzIjoiMjgwMzggTG9sYSBKdW5jdGlvbiIsInJvbGUiOiJyb2xlIDEiLCJwYXNzd29yZCI6InpRcmw0dDhTUzRVZFljUyIsImlkIjoiMSJ9.NrCy6e3r4qcrdVh1cDMDdK9TpbNdbKnZrTjjc2kAWpY")
                // AuthService.addAuthHeaders();
            })
            .catch((er) => {
                
            });
    };
}

export function fetchUserDetail(){
    return  async(dispatch) =>{
        await axios.get(getAllUsers).then(response=>{
            dispatch(setUserDetail({
                id:1,
                name:"John Doe",
                role:"Customer"
            }))
        })
    }
}

export default authSlice.reducer;
