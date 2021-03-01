import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"

const authActions = {
  newUser: (newUser) => {
    return async (dispatch, getState) => {
      const response = await axios.post('http://rabellino-mytinerary.herokuapp.com/api/user/signup', newUser)
      if (!response.data.success) {
        return response.data
      }
      dispatch({ type: 'LOG_USER', payload: response.data })
    }
  },

  logoutUser: () => {
    return (dispatch, getState) => {
      dispatch({ type: 'LOG_OUT_USER' })
    }
  },

  logFromLS: (token) => {
    return async (dispatch, getState) => {
      try {
        const respuesta = await axios.post('http://localhost:4000/api/user/ls', { token }, { headers: { Authorization: `Bearer ${token}` } })
        dispatch({ type: 'LOG_USER', payload: { response: { ...respuesta.data.response } } })
      } catch (err) {
        if (err.response.status === 401) {
          alert("Usted está intentando cagarme...")
          AsyncStorage.clear()
          return '/'
        }
      }
    }
  },

  loginUser: (user) => {
    return async (dispatch, getState) => {
      const response = await axios.post('http://rabellino-mytinerary.herokuapp.com/api/user/signin', user)
      if (!response.data.success) {
        return response.data
      }
      dispatch({ type: 'LOG_USER', payload: response.data })
    }
  }
}

export default authActions