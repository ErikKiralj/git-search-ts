import React, { Component } from "react"
import styles from "./SearchScreen.module.css"
import { Navbar, SearchBar, Button } from "../../../shared/ui"
import { ProfileCard, RepoCard } from "../components"
import { getUserRepo, getUserProfile } from "../thunks"
import { IUser } from "../../../shared/models/User"
import { IRepository } from "../../../shared/models/Repository"
import { arrayObjectsSort } from "../../../shared/thunks"
interface IState {
  query: string
  user: IUser
  repositories: IRepository[]
  asc: boolean
}
export class SearchScreen extends Component<{}, IState> {
  state: IState = {
    query: "",
    user: null,
    repositories: [],
    asc: false,
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

  handleSortChange = () => {
    this.setState(
      (prevState) => ({
        asc: !prevState.asc,
      }),
      this.sortRepositories
    )
  }

  sortRepositories = () => {
    const { asc, repositories } = this.state
    let order = ""
    asc === true ? (order = "asc") : (order = "desc")
    let repositoriesTemp = arrayObjectsSort(repositories, "name", order)
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
            <RepoCard data={repositories} handleClick={this.handleSortChange} />
          </div>
        )}
      </div>
    )
  }
}
