import { ApolloProvider } from '@apollo/client/react'
import type { ReactNode } from 'react'
import { apolloClient } from './client.ts'

type GraphQLProviderProps = {
  children: ReactNode
}

export default function GraphQLProvider({ children }: GraphQLProviderProps) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}
