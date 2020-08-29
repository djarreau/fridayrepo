import React from 'react'
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import { Nav } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom"

export default function NavigationMenu(props) {
    return (
        <div class="wrapper">
]            <Nav variant="tabs" defaultActiveKey="/">
                <Nav.Item>
                    <Nav.Link as={Link} to="/">FridayApp</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/users">Users</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/products">Products</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/account">Account</Nav.Link>
                </Nav.Item>
            </Nav>
]        </div>
    )
}