import axios from 'axios'

const citiesActions = {
  listCities: () => {
    return async (dispatch, getState) => {
      try {
        const data = await axios.get('http://localhost:4000/api/cities')
        dispatch({type: 'ALL_CITIES', payload: data.data.response})
      } catch (error) {
        console.log(error)
      }
    }
  },
  readInput: (value) => {
    return (dispatch, getState) => dispatch({type: 'READ_VALUE', payload: value})
  }
}

export default citiesActions