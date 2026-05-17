import './app.scss'

import { Route, Router } from '@solidjs/router'

import { HomePage } from '#fe/pages/home-page.tsx'

export const App = () => (
    <Router>
        <Route path="/" component={HomePage} />
    </Router>
)
