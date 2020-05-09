const defaultState = {
  locations: [],
  filteredByState: [],
  filteredByStateByCity: [],
  filteredByStateByCityByHighway: [],
};

const photos = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_LOCATIONS":
      console.log("src/reducers/index, action.locations", action.locations);
      console.log("this is state inside SET_LOCATIONS:", state);
      return { ...state, locations: action.locations };

    case "FILTER_STATE":
      // filteredLocations = [...locations]
      console.log("FILTER_STATE");
      console.log("REDUX state:", state);
      console.log("action.stateName", action.stateName);

      return {
        ...state,
        filteredByState: state.locations.filter(
          (e) => e.state === action.stateName
        ),
      };

    case "FILTER_CITY":
      // filteredLocations = [...locations]
      console.log("FILTER_CITY");
      console.log("REDUX filteredLocations:", state.filteredLocations);
      console.log("action.stateName", action.stateName);

      return {
        ...state,
        filteredLocations: state.locations.filter(
          (e) => e.state === action.stateName
        ),
      };
    default:
      return state;
  }
};

export default photos;
