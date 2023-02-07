import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getAllUsers } from "../../services/apis/Endpoints"

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: [],
    },
    reducers: {
        setToken: (state, { payload }) => {
            state.token = payload;
        },
    }
});


export const { setToken } = authSlice.actions;

export function fetchTokenAfterLogin({ email, password }) {
    return async (dispatch) => {
        localStorage.setItem({ "token": "1234" })
        // TODO AUTHNTICATE FROM BACKEND AUTH API TO GET BEARER TOKEN
        await axios
            .get(getAllUsers)
            .then((response) => {
                dispatch(
                    setToken(
                        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsbmFtZSI6IkxhcnJ5IFdhbGtlciIsInVzZXJuYW1lIjoiUmViZWthX05pdHpzY2hlMjMiLCJlbWFpbCI6IlNpc3Rlcl9ZdW5kdDZAZ21haWwuY29tIiwicGhvbmUiOiIxLTk3MS01MjUtNDAzMiB4MzY0MDIiLCJhZGRyZXNzIjoiMjgwMzggTG9sYSBKdW5jdGlvbiIsInJvbGUiOiJyb2xlIDEiLCJwYXNzd29yZCI6InpRcmw0dDhTUzRVZFljUyIsImlkIjoiMSJ9.NrCy6e3r4qcrdVh1cDMDdK9TpbNdbKnZrTjjc2kAWpY"
                    ));
            })
            .catch((er) => {
                console.log(er.message)
            });
    };
}

export default authSlice.reducer;
