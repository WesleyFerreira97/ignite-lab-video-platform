import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
	uri: 'https://api-sa-east-1.graphcms.com/v2/cl4og7izd03g601xka03w0nnq/master',
	cache: new InMemoryCache()
})