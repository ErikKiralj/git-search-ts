import React from "react"
import { IRepository } from "../../../../shared/models/Repository"
import styles from "./RepoCard.module.css"

interface IProps {
  data: IRepository[]
  handleClick: () => void
}
export class RepoCard extends React.Component<IProps, {}> {
  render() {
    const { data } = this.props
    return (
      <div className={styles.repo}>
        {data.length !== 0 ? (
          <>
            <div className={styles.sort} onClick={this.props.handleClick}>
              <p>&uarr;</p>
              <p>&darr;</p>
            </div>

            {data.map((repo) => {
              return (
                <div key={repo.url} className={styles.card}>
                  <h2>{repo.name}</h2>
                  <h4>{repo.description}</h4>
                  <a href={repo.url}>
                    <h4>{repo.url}</h4>
                  </a>
                </div>
              )
            })}
          </>
        ) : (
          <div className={styles.card}>
            <h3>User has no repositories.</h3>
          </div>
        )}
      </div>
    )
  }
}
