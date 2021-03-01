const initialState = {
  cities: [],
  filteredCities: []
}

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_CITIES':
      return {
        ...state,
        cities: action.payload,
        filteredCities: action.payload
      }
    case 'READ_VALUE':
      return {
        ...state,
        filteredCities: state.cities.filter(city => city.cityName.toLowerCase().indexOf(action.payload.toLowerCase().trim()) === 0)
      }

    default:
      return state
  }
}

export default citiesReducer