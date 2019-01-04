import React, { Component } from "react";

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      isToggleOn: true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  colorChange = {
    color: "#d88c3c",
    fontWeight: "700"
  };

  colorBlack = {
    color: "black",
    fontWeight: "700"
  };

  render() {
    return (
      <React.Fragment>
        <h6>06 January 2019</h6>
        <h1>Take Responsibility to Learn</h1>
        <p>Posted by Saia Fonua</p>

        <p>
          Everyone needs spiritual strength. Understanding the scriptures
          through the{" "}
          <span
            style={
              this.state.isToggleOn === false
                ? this.colorChange
                : this.colorBlack
            }
          >
            “Come, Follow Me— For Individuals and Families”
          </span>{" "}
          booklet will provide that strength I need, and prepare me to share
          insights with my wife, family, ward family and the world. I feel like
          this will allow me to help others in their goal to follow Jesus
          Christ.
        </p>

        {this.state.isToggleOn ? (
          <img
            onMouseEnter={this.handleClick}
            onMouseLeave={this.handleClick}
            className="img-fluid img-thumbnail center-block"
            style={{
              maxWidth: "45%",
              display: "block",
              marginRight: "auto",
              marginLeft: "auto"
            }}
            src={require("../images/savior.png")}
            alt={"Jesus Christ"}
          />
        ) : (
          <img
            onMouseEnter={this.handleClick}
            onMouseLeave={this.handleClick}
            className="img-fluid img-thumbnail"
            style={{
              maxWidth: "45%",
              display: "block",
              marginRight: "auto",
              marginLeft: "auto"
            }}
            src={
              "https://edge.ldscdn.org/mobile/images/1961358/7841b35a3f06447e9e17c057dac27ca4/1024x1365.jpg"
            }
          />
        )}
      </React.Fragment>
    );
  }
}

export default Blog;
