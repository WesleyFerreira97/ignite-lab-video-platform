import path from 'path';
import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server'

async function main() {
    const schema = await buildSchema({
        resolvers: {},
        emitSchemaFile: path.resolve(__dirname, 'schema.gql')
    })
}

main();
