import { formatGreeting } from '../lib/format-greeting.ts'

export const HomePage = () => (
    <main>
        <h1>{formatGreeting('Solid 2.0')}</h1>
    </main>
)
