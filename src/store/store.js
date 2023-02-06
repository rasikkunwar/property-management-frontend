import { configureStore } from '@reduxjs/toolkit'
import propertyReducer from '../store/property/property'

export default configureStore({
  reducer: {
    property:propertyReducer
    
  },
})