import { connect } from "react-redux";
import Map from "../components/Map";
import { getLocations } from "../actions/index";

const mapDispatchToProps = (dispatch) => {
  return {
    getLocations: () => {
      const res = getLocations();
      dispatch(res);
    },
  };
};

const mapStateToProps = (state) => {
  return {
    locations: state.locations,
    filteredByState: state.filteredByState,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
