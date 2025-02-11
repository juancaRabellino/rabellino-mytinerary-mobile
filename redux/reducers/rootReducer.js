import { combineReducers } from "redux"
import authReducer from "./authReducer"
import citiesReducer from './citiesReducer'
import itinerariesReducer from './itinerariesReducer'

const rootReducer = combineReducers({
  cities: citiesReducer,
  itineraries: itinerariesReducer,
  auth: authReducer
})

export default rootReducer