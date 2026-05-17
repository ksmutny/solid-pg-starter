import { defineConfig, loadEnv } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '..', '')

    return {
        cacheDir: 'node_modules/.vite',
        plugins: [solid()],
        resolve: {
            tsconfigPaths: true,
        },
        server: {
            port: Number(env.FE_PORT),
            allowedHosts: ['.coder.hornet.club'],
        },
    }
})
