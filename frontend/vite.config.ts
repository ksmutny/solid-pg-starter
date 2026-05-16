import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
    cacheDir: 'node_modules/.vite',
    plugins: [solid()],
    server: {
        allowedHosts: ['.coder.hornet.club'],
    },
})
