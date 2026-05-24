import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  const graphqlProxyTarget =
    process.env.API_GRAPHQL_PROXY_TARGET || env.API_GRAPHQL_PROXY_TARGET

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    // CI/shell sets process.env; .env.production supplies local GitHub Pages path
    base: process.env.WEB_BASE_PATH || env.WEB_BASE_PATH || '/',
    server: graphqlProxyTarget
      ? {
          proxy: {
            '/graphql': {
              target: graphqlProxyTarget,
              changeOrigin: true,
              secure: false,
            },
          },
        }
      : undefined,
  }
})
