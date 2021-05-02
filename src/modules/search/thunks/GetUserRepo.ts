import { graphQlUrl } from "./consts"

const fetch = require("node-fetch")

export const getUserRepo = async (username: string): Promise<any> => {
  let data = null
  const accessToken = "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"
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

  return (data = await fetch("https://api.github.com/graphql", {
    method: "POST",
    body: JSON.stringify({ query }),
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res: any) => res.text())
    .then((body: any) => {
      return JSON.parse(body)
    }) // {"data":{"repository":{"issues":{"totalCount":247}}}}
    .catch((error: any) => console.error(error)))
}
