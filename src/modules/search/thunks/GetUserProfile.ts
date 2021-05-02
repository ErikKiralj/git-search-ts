import { IUser } from "../../../shared/models/User"
import { graphQlUrl } from "./consts"
const fetch = require("node-fetch")

export const getUserProfile = async (username: string): Promise<IUser> => {
  let data = null
  const accessToken: string = process.env.REACT_APP_TOKEN
  let query = `
  query {
    repositoryOwner(login: "${username}") {
        login
        ... on User {
          avatarUrl
          url
          email
        }
      }}
      `

  return (data = await fetch(graphQlUrl, {
    method: "POST",
    body: JSON.stringify({ query }),
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res: any) => res.text())
    .then((body: any) => {
      console.log(JSON.parse(body))
      const user = JSON.parse(body).data.repositoryOwner
      return user
    })
    .catch((error: any) => console.error(error)))
}
