module.exports = {
  client: {
    output: "app/javascript",
    outputFlat: true,
    includes: [
      "./app/javascript/**/*.graphql",
      "./app/javascript/**/*.tsx",
      "./app/javascript/**/*.ts",
    ],
    tagName: "gql",
    service: {
      name: "SampleAppSchema",
      localSchemaFile: "./app/graphql/schema.graphql",
    },
  },
}