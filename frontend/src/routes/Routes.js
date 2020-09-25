import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import CartComponent from '../components/CartComponent';
import HeaderComponent from '../components/HeaderComponent';
import HomeComponent from '../components/HomeComponent';
import ProductsComponent from '../components/ProductsComponent';
import ShowProductComponent from '../components/ShowProductComponent';
import LoginComponent from '../components/LoginComponent';
import { useAuth0 } from '@auth0/auth0-react';

import { AuthLogin, AuthLogout, Profile } from '../components/AuthLogin';
// import RegisterScreen from '../components/RegisterComponent';
// import SigninScreen from '../components/SignInComponent';

const Routes = () => {
    // const { isLoading } = useAuth0();
    // if(isLoading) return <div>Loading...</div>
    return (
        <div>
            <HeaderComponent />
            <BrowserRouter>
                <div className="top-element-formatting">
                    <h1>{" "}</h1>
                    <BrowserRouter>
                        <Route path="/product/:id" component={ShowProductComponent} />
                        <Route path="/cart/:id?" component={CartComponent} />
                        <Route path="/products" component={ProductsComponent} />
                        {/* <Route path="/login" component={LoginComponent} /> */}
                        <Route exact path="/" component={HomeComponent} />
                        <Route path="/authlogin" component={AuthLogin} />
                        {/* <Route path="/register" component={RegisterScreen}/>
                        <Route path="/signin" component={SigninScreen}/> */}
                        <AuthLogout />
                    </BrowserRouter>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default Routes;