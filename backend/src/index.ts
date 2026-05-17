import { serve } from '@hono/node-server'

import { createApp } from '#be/app.ts'

const app = createApp()
const port = 3000

serve({ fetch: app.fetch, port }, info => {
    console.log(`backend listening on :${info.port}`)
})
