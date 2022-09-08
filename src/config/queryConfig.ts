export const endpoint = "https://tf1-interview.hasura.app/v1/graphql";
export const headers = {
  "content-type": "application/json",
};
export const graphqlQuery = {
  operationName: "MyQuery",
  query: `query MyQuery {
    image {
      id
      url
    }
  }`,
  variables: {},
};
