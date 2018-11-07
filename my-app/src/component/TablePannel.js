import React, { Component } from "react";
import { observer } from "mobx-react"
@observer
class TP extends Component {
  render() {
    console.log(this.store);
    return (
      <div style={style.bg}>
        <span style={{ marginRight: "50px" }}>{this.props.data.name}</span>
        {this.props.data.gender}
      </div>
    );
  }
}
const style = {
  bg: {
    lineHeight: "50px",
    backgroundColor: "yellow",
    textAlign: "center"
  }
};

export default TP;
