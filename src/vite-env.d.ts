/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly API_GRAPHQL_URL?: string
  readonly API_GRAPHQL_PROXY_TARGET?: string
  readonly WEB_BASE_PATH?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
