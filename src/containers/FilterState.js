import { connect } from "react-redux";
import FilterState from "../components/FilterState";
import { getFilterState, getFilterCity } from "../actions/index";

const mapDispatchToProps = (dispatch) => {
  return {
    getFilterState: (stateName) => {
      const res = getFilterState(stateName);
      dispatch(res);
    },
    getFilterCity: (cityName) => {
      const res = getFilterCity(cityName);
      dispatch(res);
    },
  };
};

const mapStateToProps = (state) => {
  return {
    locations: state.locations,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterState);
