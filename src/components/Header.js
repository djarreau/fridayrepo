import React from 'react'
import Navigation from './Navigation'
import { Navbar } from 'react-bootstrap'
import NavigationMenu from './NavigationMenu'

export default function Header() {
    return (
        <header>
            <Navbar>
                <NavigationMenu />
            </Navbar>
        </header>
    )
}