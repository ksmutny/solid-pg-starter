import { Hono } from 'hono'

export const createApp = (): Hono => {
    const app = new Hono()

    app.get('/healthz', c => c.json({ ok: true }))

    return app
}
