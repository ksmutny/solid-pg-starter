import './app.scss'

import { Route, Router } from '@solidjs/router'

import { HomePage } from './pages/home-page.tsx'

export const App = () => (
    <Router>
        <Route path="/" component={HomePage} />
    </Router>
)
