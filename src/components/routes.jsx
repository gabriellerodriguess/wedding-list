import React from 'react'
import { Routes as RoutesPages, Route, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'

export default function Routes() {
    return (
        <BrowserRouter>
            <RoutesPages>
                <Route path='/' element={<Home /> }/>
            </RoutesPages>
        </BrowserRouter>
    )
}