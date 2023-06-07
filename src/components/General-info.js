import React from "react";

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generalInfo: {
        name: "",
        email: "",
        phoneNumber: "",
        address: "",
        description: "",
      },
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange(event, field) {
    const { generalInfo } = this.state;
    generalInfo[field] = event.target.value;
    this.setState({ generalInfo });
  }
  render() {
    if (!this.props.previewResume) {
      return (
        <div>
          <h1>General information</h1>
          <input
            type="text"
            placeholder="Name"
            value={this.state.generalInfo.name}
            onChange={(event) => {
              this.handleOnChange(event, "name");
            }}
          />
          <br />
          <input
            type="text"
            placeholder="Email"
            value={this.state.generalInfo.email}
            onChange={(event) => {
              this.handleOnChange(event, "email");
            }}
          />
          <br />
          <input
            type="text"
            placeholder="Phone Number"
            value={this.state.generalInfo.phoneNumber}
            onChange={(event) => {
              this.handleOnChange(event, "phoneNumber");
            }}
          />
          <br />
          <input
            type="text"
            placeholder="Address"
            value={this.state.generalInfo.address}
            onChange={(event) => {
              this.handleOnChange(event, "address");
            }}
          />
          <br />
          <textarea
            cols="40"
            rows="5"
            placeholder="Description"
            value={this.state.generalInfo.description}
            onChange={(event) => {
              this.handleOnChange(event, "description");
            }}
          ></textarea>
        </div>
      );
    } else {
      return (
        <div>
          <p>Name: {this.state.generalInfo.name}</p>
          <p>Email: {this.state.generalInfo.email}</p>
          <p>Phone Number: {this.state.generalInfo.phoneNumber}</p>
          <p>Address: {this.state.generalInfo.address}</p>
          <p>Description: {this.state.generalInfo.description}</p>
        </div>
      );
    }
  }
}

export default GeneralInfo;
