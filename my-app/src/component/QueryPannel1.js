import React, { Component } from "react"

class QP1 extends Component {
  handleSubmit(event) {
    event.preventDefault()
    console.log("提交表单")
    let name = this.refs.name.value,
      gender = this.refs.gender.value
    console.log(name, gender)
    this.props.onHandleChange({ name, gender })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div style={{ height: "50px", lineHeight: "50px", textAlign: "center" }}>
          name: <input type="text" placeholder="姓名" style={{ width: "100px" }} ref="name" />
          gender:{" "}
          <select style={{ width: "100px", textAlign: "center" }} ref="gender">
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

export default QP1
