import React from "react";
import "./styles/Styles.css";

const Display = props => {
  console.log(props.selectedLocationData);
  if (
    props.selectedLocationData != null ||
    props.selectedLocationData != undefined
  ) {
    if (
      props.selectedLocationData.name == null ||
      props.selectedLocationData.name == undefined ||
      props.selectedLocationData.name == ""
    ) {
      return <div className="location-details">No Data Available</div>;
    } else {
      return (
        <div className="location-details">
          <div className="content-text">
            Name: <span>{props.selectedLocationData.name}</span>
            <br></br>
            Type: <span>{props.selectedLocationData.type}</span>
            <br></br>
            population: <span>{props.selectedLocationData.population}</span>
            <br></br>
            Wealth: <span>{props.selectedLocationData.wealth}</span>
            <br></br>
            Authority: <span>{props.selectedLocationData.authority}</span>
            <br></br>
            Number of Guards:{" "}
            <span>{props.selectedLocationData.numGuards}</span>
          </div>
        </div>
      );
    }
  } else {
    return <div className="location-details">Please Select Location</div>;
  }
};

export default Display;
