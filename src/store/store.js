import { configureStore } from '@reduxjs/toolkit'
import propertyReducer from '../store/property/property'
import authReducer from "../store/auth/auth"

export default configureStore({
  reducer: {
    property: propertyReducer,
    auth: authReducer
  },
})