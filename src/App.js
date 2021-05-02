import React from "react";
import Accordion from "./components/Accordion";
import Display from "./components/Display";

class App extends React.Component {
  state = { selectedLocation: null, selectedIndex: null };

  selectedLocationUpdate = async (location, index) => {
    await this.setState({
      selectedLocation: location,
      selectedIndex: index
    });
  };

  render() {
    return (
      <div>
        <Accordion onClick={this.selectedLocationUpdate} />;
        <Display
          selectedLocationData={this.state.selectedLocation}
          selectedIndexData={this.state.selectedIndex}
        />
      </div>
    );
  }
}

export default App;
