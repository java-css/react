import React, { Component } from "react";

import QP from "../component/QueryPannel";
import TP from "../component/TablePannel";

class P1 extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  handleChange(e) {
    console.log(e);
    this.setState({ data: e });
  }
  render() {
    return (
      <div style={style.bg}>
        <QP onHandleChange={this.handleChange.bind(this)} />
        <TP data={this.state.data} />
      </div>
    );
  }
}

const style = {
  bg: {
    backgroundColor: "red"
  }
};

export default P1;
