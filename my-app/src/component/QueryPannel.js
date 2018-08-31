import React, { Component } from "react"
import ee from "../store/1"
class QP extends Component {
  handleSubmit(event) {
    event.preventDefault()
    console.log("提交表单")
  console.log(event.target.value)
    ee.emit("message", this.data)
    // this.props.onHandleChange({ name, gender })
  }

  data={}
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div style={{ height: "50px", lineHeight: "50px", textAlign: "center" }}>
          {"name:"} <input type="text" placeholder="姓名" style={{ width: "100px" }}  onChange={e => {
              console.log(e.target.value)
              this.data.name = e.target.value
            }}/>
          {" gender: "}
          <select
            style={{ width: "100px", textAlign: "center" }}
            onChange={e => {
              console.log(e.target.value)
              this.data.gender = e.target.value
            }}
          >
            <option>男</option>
            <option>女</option>
          </select>
          <button type="submit" style={{ marginLeft: "20px" }}>
            submit
          </button>
        </div>
      </form>
    )
  }
}

export default QP
