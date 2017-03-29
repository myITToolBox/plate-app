import React, { Component, PropTypes } from "react";

import Navigation from "../../components/Navigation/Navigation";

export default class DefaultLayout extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  state = {
    open: false
  };

  openDrawer = () => {
    this.setState({
      open: true
    });
  };

  closeDrawer = () => {
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <div>
        <Navigation
          open={this.state.open}
          openDrawer={this.openDrawer}
          closeDrawer={this.closeDrawer}
        />
        {this.props.children}
        <style jsx global>
          {
            `
            * {
              margin: 0;
              box-sizing: border-box;
            }
            body {
              font-family: Roboto, sans-serif;
              margin-top: 60px;
              margin-bottom: 0px;
            }
            `
          }
        </style>
      </div>
    );
  }
}
