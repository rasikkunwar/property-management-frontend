import { configureStore } from '@reduxjs/toolkit'
import propertyReducer from '../store/property/property'
import loadingReducer from '../store/loading/loading'
import myListingsReducer from '../store/myListings/myListings'
import authReducer from "../store/auth/auth"
export default configureStore({
  reducer: {
    property:propertyReducer,
    loading:loadingReducer,
    myListings:myListingsReducer,
    auth: authReducer
  }
})