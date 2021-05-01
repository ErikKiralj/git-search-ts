import React, { Component } from "react"
import styles from "./Navbar.module.css"
import { images } from "../../images"

export class Navbar extends Component {
  render() {
    return (
      <div className={styles.container}>
        <img className={styles.navbarImage} src={images.gitLogo} alt="git-logo"></img>
      </div>
    )
  }
}
