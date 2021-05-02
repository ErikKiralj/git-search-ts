import { graphQlUrl } from "./consts"

const fetch = require("node-fetch")

export const getUserRepo = async (username: string): Promise<any> => {
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
      return JSON.parse(body)
    })
    .catch((error: any) => console.error(error)))
}
