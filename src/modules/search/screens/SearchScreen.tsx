import React, { Component } from "react"
interface IState {
  query: string
}
export class SearchScreen extends Component<{}, IState> {
  state: IState = {
    query: "",
  }
  render() {
    return <div>mirko</div>
  }
}
