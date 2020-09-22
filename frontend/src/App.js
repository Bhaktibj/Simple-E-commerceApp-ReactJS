import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';
import ProductComponent from './components/ProductComponent';
import HomeComponent from './components/HomeComponent';
import CartComponent from './components/CartComponent';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <>
    <Header/>
    <div className="top-element-formatting">
    <h1>{" "}</h1>
    <BrowserRouter>
            <Route path="/product/:id" component={ProductComponent} />
            <Route path="/cart/:id?" component={CartComponent} />
            <Route path="/products" component={HomeComponent} />
            <Route exact path="/" component={Home} />
    </BrowserRouter>
    </div>
    {/* <Footer/> */}
    </>
  );
  }
export default App;