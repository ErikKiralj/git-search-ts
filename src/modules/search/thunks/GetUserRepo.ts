import { graphQlUrl } from "./consts"
import { IRepository } from "../../../shared/models/Repository";

const fetch = require("node-fetch")

export const getUserRepo = async (username: string): Promise<IRepository[]> => {
  let data = null
  const accessToken : string = process.env.REACT_APP_TOKEN 
  let query = `
         query {
            user(login: "${username}") {
                repositories(first:50){
                 nodes{
                   name
                   url
                   description
                 }
               }
                 }
           }
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
      const repositories = JSON.parse(body).data.user.repositories.nodes
       return repositories
    })
    .catch((error: any) => console.error(error)))
}
