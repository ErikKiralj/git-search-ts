import React, { Component } from "react"
import styles from "./SearchScreen.module.css"
import { Navbar, SearchBar } from "../../../shared/ui"
interface IState {
  query: string
}
export class SearchScreen extends Component<{}, IState> {
  state: IState = {
    query: "",
  }

  handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: e.target.value })
  }

  render() {
    const { query } = this.state
    return (
      <div>
        <Navbar />
        <div className={styles.container}>
          <SearchBar value={query} label={"Search"} onChange={this.handleQueryChange} />
        </div>
      </div>
    )
  }
}
