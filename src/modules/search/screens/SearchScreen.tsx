import React, { Component } from "react"
import styles from "./SearchScreen.module.css"
import { Navbar, SearchBar } from "../../../shared/ui"
import { ProfileCard, RepoCard } from "../components"
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
      <div className={styles.main}>
        <Navbar />
        <div className={styles.search}>
          <SearchBar value={query} label={"Search"} onChange={this.handleQueryChange} />
        </div>
        <div className={`${styles.content} ${styles.grid}`}>
          <ProfileCard />
          <RepoCard />
        </div>
      </div>
    )
  }
}
