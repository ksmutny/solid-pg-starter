import { serve } from '@hono/node-server'

import { createApp } from '#be/app.ts'
import { logger } from '#be/logger.ts'

const app = createApp()
const port = Number(process.env.BE_PORT)

serve({ fetch: app.fetch, port }, info => {
    logger.info({ port: info.port }, 'backend listening')
})
