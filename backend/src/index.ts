import { serve } from '@hono/node-server'

import { createApp } from '#be/app.ts'
import { logger } from '#be/logger.ts'

const app = createApp()
const port = 3000

serve({ fetch: app.fetch, port }, info => {
    logger.info({ port: info.port }, 'backend listening')
})
