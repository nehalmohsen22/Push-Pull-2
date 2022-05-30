import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <footer
        className="text-muted py-5"
        style={{ backgroundColor: "#DFDFDE" }}
      >
        <div className="container">
          <p className="float-end mb-1">
            <a href="#">Back to top</a>
          </p>
        </div>
      </footer>
    );
  }
}
export default Footer;
