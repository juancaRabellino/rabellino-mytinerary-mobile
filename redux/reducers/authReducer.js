const { default: AsyncStorage } = require("@react-native-async-storage/async-storage")

const initialState = {
  loggedUser: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_USER':
      AsyncStorage.setItem('name', action.payload.response.name)
      AsyncStorage.setItem('token', action.payload.response.token)
      return {
        ...state,
        loggedUser: action.payload.response
      }
    case 'LOG_OUT_USER':
      AsyncStorage.clear()
      return {
        ...state,
        loggedUser: null
      }
    default:
      return state
  }
}

module.exports = authReducer