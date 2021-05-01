import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { SearchScreen } from "../search/screens"
export class MainRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SearchScreen} />
        </Switch>
      </BrowserRouter>
    )
  }
}
