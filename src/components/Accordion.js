import React from "react";
import MapData from "./data/map-data.json";
import "./styles/Styles.css";

class Accordion extends React.Component {
  state = { selectedIdx: null };

  selectIdx = (data, idx) => {
    this.setState({ selectedIdx: idx });
    this.props.onClick(data, idx);
  };

  render() {
    return (
      <div className="map-container">
        {MapData.map((data, key) => {
          return (
            <div key={key}>
              <div
                className={
                  key === this.state.selectedIdx
                    ? "location-selected"
                    : "location-unselected"
                }
                style={{ left: data.position[0], top: data.position[1] }}
                onClick={() => this.selectIdx(data, key)}
              ></div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Accordion;
