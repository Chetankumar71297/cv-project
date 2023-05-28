import React from "react";
import GeneralInfo from "./components/General-info";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      previewResume: false,
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    const { previewResume } = this.state;
    this.setState({ previewResume: !previewResume });
  }
  render() {
    return (
      <div className="App">
        <GeneralInfo previewResume={this.state.previewResume} />
        <button
          onClick={() => {
            this.handleOnClick();
          }}
        >
          {this.state.previewResume ? "Edit" : "Submit"}
        </button>
      </div>
    );
  }
}

export default App;
