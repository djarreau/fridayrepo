import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Header from './components/Header'
import { Navbar } from 'react-bootstrap';
import Footer from './components/Footer'
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import Product from './views/Products'
import Users from './views/Users';
import UserDetail from './views/UserDetails';
// import CreateAccount from './Forms/CreateAccount';
import ProductDetails from './views/ProductDetails';
import Registration from './views/Registration';
import NavigationMenu from './components/NavigationMenu';

export default function App() {
  return (
    <div>
       <Router>
      <NavigationMenu />
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact /> 
        </Route>
        <Route path="/products">
          <Product />
        </Route>
        <Route path="/product/:id">
          <ProductDetails />
        </Route>
        <Route path="/user/:id">
          <UserDetail />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        {/* <Route path="/account">
          <CreateAccount />
        </Route> */}
        <Route path="/registration">
          <Registration />
        </Route>
      </Switch>
    </div>
     
      <Footer />
      </Router>
    </div>
     
  );
}