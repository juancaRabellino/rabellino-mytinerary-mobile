import axios from 'axios'

const itinerariesActions = {
  listItineraries: id => {
    return async (dispatch, getState) => {
      try {
        const data = await axios.get(`http://localhost:4000/api/itineraries/${id}`)
        dispatch({ type: 'ITINERARIES_CITY', payload: data.data.response })
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
  },

  likeItinerary: (id, token) => {
    return async (dispatch, getState) => {
      try {
        const data = await axios.post(`http://localhost:4000/api/itinerary/like/${id}`, { token }, { headers: { Authorization: `Bearer ${token}` } })
        dispatch({ type: 'ITINERARY_LIKE', payload: data.data.response })
      } catch (error) {
        console.log(error)
      }
    }
  },

  dislikeItinerary: (id, token) => {
    return async (dispatch, getState) => {
      try {
        const data = await axios.post(`http://localhost:4000/api/itinerary/unlike/${id}`, { token }, { headers: { Authorization: `Bearer ${token}` } })
        dispatch({ type: 'ITINERARY_LIKE', payload: data.data.response })
      } catch (error) {
        console.log(error)
      }
    }
  },

  addComment: (comment) => {
    const { id, userName, urlPic, token, cityId } = comment
    const actualComment = comment.comment
    return async (dispatch, getState) => {

      const data = await axios.post(`http://localhost:4000/api/itinerary/addcomment/${id}`, { actualComment, userName, urlPic, token }, { headers: { Authorization: `Bearer ${token}` } })
      if (data.data.success === true) {
        const data = await axios.get(`http://localhost:4000/api/itineraries/${cityId}`)
        dispatch({ type: 'ITINERARIES_CITY', payload: data.data.response })
      }

    }
  },

  updateComment: commentToEdit => {
    const { comment, id, itineraryId, token, cityId } = commentToEdit
    return async (dispatch) => {
      const editComment = await axios.put(`http://localhost:4000/api/itinerary/${itineraryId}`, {commentToEdit}, { headers: { Authorization: `Bearer ${token}` } })
      if (editComment.data.success === true) {
        const response = await axios.get(`http://localhost:4000/api/itineraries/${cityId}`)
        dispatch({ type: 'ITINERARIES_CITY', payload: response.data.response })
      }
    }
  },


  deleteComment: (commentId, itineraryId, cityId, token) => {
    const cityid = cityId._id
    return async (dispatch, getState) => {
      const response = await axios.delete(`http://localhost:4000/api/itinerary/${itineraryId}/${commentId}`, { headers: { Authorization: `Bearer ${token}` } })
      console.log(response.data)
      if (response.data.success === true) {
        const response = await axios.get(`http://localhost:4000/api/itineraries/${cityid}`)
        dispatch({ type: 'ITINERARIES_CITY', payload: response.data.response })
      }
    }
  }
}

export default itinerariesActions