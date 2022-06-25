import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri:`https://api-sa-east-1.graphcms.com/v2/cl4rkgh1x181601yw4h63ew0j/master`,
    cache: new InMemoryCache()
})