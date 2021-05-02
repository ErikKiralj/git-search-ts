import React from "react"
import styles from "./SearchBar.module.css"
import { StyledTextField } from "../StyledTextField"

interface IProps {
  value: string
  label: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export class SearchBar extends React.Component<IProps, {}> {
  render() {
    return (
      <div className={styles.container}>
        <StyledTextField value={this.props.value} onChange={this.props.onChange} id="standard-basic" label={this.props.label} autoComplete="off" />
      </div>
    )
  }
}
