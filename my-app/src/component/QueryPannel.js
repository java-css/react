import React, { Component } from "react"
import { observable } from "mobx"
import ReactDOM from "react-dom"
import { create } from "domain"
import store from "../store/store"
@observer
class QP extends Component {
  handleSubmit = e => {
    e.preventDefault()
    console.log("提交")
    console.log(e)
    console.log(this.data)
    // var store = this.props.store
    var obj = this.dataObj
    store.createMessage(obj)
    this.dataObj = {}
  }
  // @observable
  dataObj = {}
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div style={{ height: "50px", lineHeight: "50px", textAlign: "center" }}>
          {"name:"}{" "}
          <input
            type="text"
            placeholder="姓名"
            style={{ width: "100px" }}
            onChange={e => {
              console.log(e.target.value)
              this.dataObj.name = e.target.value
            }}
          />
          {" gender: "}
          <select
            style={{ width: "100px", textAlign: "center" }}
            onChange={e => {
              console.log(e.target.value)
              this.dataObj.gender = e.target.value
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
