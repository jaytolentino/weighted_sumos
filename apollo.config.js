module.exports = {
  client: {
    output: "frontend",
    outputFlat: true,
    includes: [
      "./frontend/**/*.graphql",
      "./frontend/**/*.tsx",
      "./frontend/**/*.ts",
    ],
    tagName: "gql",
    service: {
      name: "SampleAppSchema",
      localSchemaFile: "./app/graphql/schema.graphql",
    },
  },
}