import { describe, expect, it } from 'vitest'

import { createApp } from '#be/app.ts'

describe('GET /healthz', () => {
    it('returns 200 with { ok: true }', async () => {
        const res = await createApp().request('/healthz')

        expect(res.status).toBe(200)
        expect(await res.json()).toEqual({ ok: true })
    })
})
