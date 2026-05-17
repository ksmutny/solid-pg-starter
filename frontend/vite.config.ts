import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
    cacheDir: 'node_modules/.vite',
    plugins: [solid()],
    resolve: {
        tsconfigPaths: true,
    },
    server: {
        allowedHosts: ['.coder.hornet.club'],
    },
})
