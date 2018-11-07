import { observable, action } from "mobx"
class Store {
  @observable
  data = {}
  @action.bound
  createMessage(obj) {
    this.data = obj
  }
}
export default new Store()
