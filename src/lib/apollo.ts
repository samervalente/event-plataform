import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri:'https://api-sa-east-1.graphcms.com/v2/cl4sxllpt2luf01zcael4gosy/master',
    cache: new InMemoryCache()
})