import React from 'react'

// const { Switch, Route } = ReactRouterDOM
import { Routes, Route } from 'react-router'

import routes from './routes'

import { AppHeader } from './cmps/app-header.jsx'
import { AppFooter } from './cmps/app-footer'
import { UserDetails } from './pages/user-details'

export class RootCmp extends React.Component {

    render() {
        return (
            <div>
                <AppHeader />
                <main className='main-layout equal-padding'>
                    <Routes>
                        {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
                        <Route path="user/:id" element={<UserDetails />} />
                    </Routes>
                </main>
                <AppFooter />
            </div>
        )
    }
}


