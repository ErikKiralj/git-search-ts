import React, { Component } from "react"
import styles from "./SearchScreen.module.css"
import { Navbar, SearchBar, Button } from "../../../shared/ui"
import { ProfileCard, RepoCard } from "../components"
import { getUserRepo, getUserProfile } from "../thunks"
import { IUser } from "../../../shared/models/User"
import { IRepository } from "../../../shared/models/Repository"
interface IState {
  query: string
  user: IUser
  repositories: IRepository[]
}
export class SearchScreen extends Component<{}, IState> {
  state: IState = {
    query: "",
    user: null,
    repositories: [],
  }

  handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: e.target.value })
  }

  loadData = async (): Promise<any> => {
    const { query } = this.state
    let user = await getUserProfile(query)
    let repositories = await getUserRepo(query)

    this.setState({ repositories, user })
  }

  render() {
    const { query, user, repositories } = this.state
    return (
      <div className={styles.main}>
        <Navbar />
        <div id="search" className={styles.search}>
          <SearchBar value={query} label={"Search GitHub Username"} onChange={this.handleQueryChange} />
          <Button label={"Search"} onClick={this.loadData}></Button>
        </div>
        {user && (
          <div className={`${styles.content} ${styles.grid}`}>
            <ProfileCard data={user} />
            <RepoCard data={repositories} />
          </div>
        )}
      </div>
    )
  }
}
