import { describe, expect, it } from 'vitest'

import { formatGreeting } from '#fe/lib/format-greeting.ts'

describe('formatGreeting', () => {
    it('returns "Hello from <subject>" for a non-empty subject', () => {
        expect(formatGreeting('Solid 2.0')).toBe('Hello from Solid 2.0')
    })

    it('trims surrounding whitespace', () => {
        expect(formatGreeting('  Solid 2.0  ')).toBe('Hello from Solid 2.0')
    })

    it('falls back to "Hello, friend" for empty input', () => {
        expect(formatGreeting('')).toBe('Hello, friend')
    })

    it('falls back to "Hello, friend" for whitespace-only input', () => {
        expect(formatGreeting('   ')).toBe('Hello, friend')
    })
})
