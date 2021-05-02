import React from "react"
import styles from "./ProfileCard.module.css"

interface IProps {
  data: any
}

export class ProfileCard extends React.Component<IProps, {}> {
  render() {
    const { data } = this.props
    return (
      <div className={styles.profile}>
        <div className={styles.image}>
          <img src={data.avatarUrl}></img>
        </div>
        <div className={styles.info}>
          <h3>Username: {data.login}</h3>
          <h3>Email: {data.email ? data.email : "-"}</h3>
          <h3>
            Github: <a href={data.url}>{data.url}</a>
          </h3>
        </div>
      </div>
    )
  }
}
