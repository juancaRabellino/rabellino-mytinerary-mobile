const initialState = {
  itineraries: []
}

const itinerariesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ITINERARIES_CITY':
      return {
        ...state,
        itineraries: action.payload
      }
    case 'ITINERARY_LIKE':
      return {
        ...state
      }
    default:
      return state
  }
}

export default itinerariesReducer