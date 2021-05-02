import React, { Component } from "react"
import styles from "./SearchScreen.module.css"
import { Navbar, SearchBar, Button } from "../../../shared/ui"
import { ProfileCard, RepoCard } from "../components"
import { getUserRepo, getUserProfile } from "../thunks"
interface IState {
  query: string
  user: any
  repositories: any
}
export class SearchScreen extends Component<{}, IState> {
  state: IState = {
    query: "",
    user: null,
    repositories: null,
  }

  handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: e.target.value })
  }

  loadData = async (): Promise<any> => {
    const { query } = this.state
    let user = await getUserProfile(query)
    let repos = await getUserRepo(query)
    this.setState({ repositories: repos?.data?.user?.repositories?.nodes, user: user?.data?.repositoryOwner })
  }

  render() {
    const { query, user, repositories } = this.state
    return (
      <div className={styles.main}>
        <Navbar />
        <div className={styles.search}>
          <SearchBar value={query} label={"Search"} onChange={this.handleQueryChange} />
          <Button label={"Search"} onClick={this.loadData}></Button>
        </div>
        {user && repositories && (
          <div className={`${styles.content} ${styles.grid}`}>
            <ProfileCard data={user} />
            <RepoCard />
          </div>
        )}
      </div>
    )
  }
}
