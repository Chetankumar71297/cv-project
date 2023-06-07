import React from "react";

class EducationInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      info1: {
        universityName: "",
        city: "",
        degree: "",
        from: "",
        to: "",
      },
      additionalSections: [], // Stores additional input section keys
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.addSection = this.addSection.bind(this);
    this.deleteSection = this.deleteSection.bind(this);
  }

  handleOnChange(event, field, sectionKey) {
    const { info1, additionalSections } = this.state;
    if (sectionKey) {
      const sectionIndex = additionalSections.indexOf(sectionKey);
      if (sectionIndex !== -1) {
        let updatedSection = this.state[[sectionKey]];
        updatedSection[field] = event.target.value;
        this.setState({ updatedSection });
      }
    } else {
      info1[field] = event.target.value;
      this.setState({ info1 });
    }
  }

  addSection() {
    const { additionalSections } = this.state;
    const sectionKey = `section${additionalSections.length + 1}`;
    this.setState({
      additionalSections: [...additionalSections, sectionKey],
      [sectionKey]: {
        universityName: "",
        city: "",
        degree: "",
        from: "",
        to: "",
      },
    });
  }

  deleteSection() {
    const { additionalSections } = this.state;
    const lastSection = additionalSections[additionalSections.length - 1];
    /*const sectionIndex = additionalSections.indexOf(sectionKey);
    if (sectionIndex !== -1) {
      const updatedSections = [...additionalSections];
      updatedSections.splice(sectionIndex, 1);
      this.setState({
        additionalSections: updatedSections,
        [sectionKey]: undefined,
      });
    }*/
    const updatedSections = [...additionalSections];
    updatedSections.pop();
    this.setState({
      additionalSections: updatedSections,
      [lastSection]: undefined,
    });
  }

  render() {
    const { info1, additionalSections } = this.state;
    if (!this.props.previewResume) {
      return (
        <div>
          <h1>Educational Information</h1>
          <input
            type="text"
            placeholder="University Name"
            value={info1.universityName}
            onChange={(event) => {
              this.handleOnChange(event, "universityName");
            }}
          />
          <br />
          <input
            type="text"
            placeholder="City"
            value={info1.city}
            onChange={(event) => {
              this.handleOnChange(event, "city");
            }}
          />
          <br />
          <input
            type="text"
            placeholder="Degree"
            value={info1.degree}
            onChange={(event) => {
              this.handleOnChange(event, "degree");
            }}
          />
          <br />
          <input
            type="text"
            placeholder="From"
            value={info1.from}
            onChange={(event) => {
              this.handleOnChange(event, "from");
            }}
          />
          <br />
          <input
            type="text"
            placeholder="To"
            value={info1.to}
            onChange={(event) => {
              this.handleOnChange(event, "to");
            }}
          />
          <br />

          {additionalSections.map((sectionKey) => (
            <div key={sectionKey}>
              {console.log(this.state)}
              <h2>Additional Section</h2>
              <input
                type="text"
                placeholder="University Name"
                value={this.state[[sectionKey]].universityName}
                onChange={(event) => {
                  this.handleOnChange(event, "universityName", sectionKey);
                }}
              />
              <br />
              <input
                type="text"
                placeholder="City"
                value={this.state[[sectionKey]].city}
                onChange={(event) => {
                  this.handleOnChange(event, "city", sectionKey);
                }}
              />
              <br />
              <input
                type="text"
                placeholder="Degree"
                value={this.state[[sectionKey]].degree}
                onChange={(event) => {
                  this.handleOnChange(event, "degree", sectionKey);
                }}
              />
              <br />
              <input
                type="text"
                placeholder="From"
                value={this.state[[sectionKey]].from}
                onChange={(event) => {
                  this.handleOnChange(event, "from", sectionKey);
                }}
              />
              <br />
              <input
                type="text"
                placeholder="To"
                value={this.state[[sectionKey]].to}
                onChange={(event) => {
                  this.handleOnChange(event, "to", sectionKey);
                }}
              />
              <br />
              {/*<button onClick={() => this.deleteSection(sectionKey)}>
                Delete Section
              </button>*/}
            </div>
          ))}
          <button onClick={() => this.deleteSection()}>Delete Section</button>
          <button onClick={this.addSection}>Add Section</button>
        </div>
      );
    } else {
      return (
        <div>
          <p>University Name: {info1.universityName}</p>
          <p>City: {info1.city}</p>
          <p>Degree: {info1.degree}</p>
          <p>From: {info1.from}</p>
          <p>To: {info1.to}</p>

          {additionalSections.map((sectionKey) => (
            <div key={sectionKey}>
              <h2>Additional Section</h2>
              <p>University Name: {this.state[[sectionKey]].universityName}</p>
              <p>City: {this.state[[sectionKey]].city}</p>
              <p>Degree: {this.state[[sectionKey]].degree}</p>
              <p>From: {this.state[[sectionKey]].from}</p>
              <p>To: {this.state[[sectionKey]].to}</p>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default EducationInfo;
