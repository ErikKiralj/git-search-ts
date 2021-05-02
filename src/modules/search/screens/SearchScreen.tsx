import React, { Component } from "react"
import styles from "./SearchScreen.module.css"
import { Navbar, SearchBar, Button } from "../../../shared/ui"
import { ProfileCard, RepoCard } from "../components"
import { getUserRepo } from "../thunks"
interface IState {
  query: string
  repositories: any
}
export class SearchScreen extends Component<{}, IState> {
  state: IState = {
    query: "",
    repositories: null,
  }

  handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: e.target.value })
  }

  loadData = async (): Promise<any> => {
    let repos = await getUserRepo("ErikKiralj")
    this.setState({ repositories: repos.data.user.repositories.nodes })
  }

  render() {
    const { query } = this.state
    return (
      <div className={styles.main}>
        <Navbar />
        <div className={styles.search}>
          <SearchBar value={query} label={"Search"} onChange={this.handleQueryChange} />
          <Button label={"Search"} onClick={this.loadData}></Button>
        </div>
        <div className={`${styles.content} ${styles.grid}`}>
          <ProfileCard />
          <RepoCard />
        </div>
      </div>
    )
  }
}
