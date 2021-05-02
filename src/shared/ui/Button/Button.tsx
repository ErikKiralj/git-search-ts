import React from "react"
import styles from "./Button.module.css"

interface IProps {
  label: string
  onClick: () => void
}

export class Button extends React.Component<IProps, {}> {
  render() {
    return (
      <div className={styles.container}>
        <button className={styles.myButton} onClick={this.props.onClick}>
          {this.props.label}
        </button>
      </div>
    )
  }
}
