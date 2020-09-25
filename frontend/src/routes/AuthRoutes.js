import React from 'react';
import { render } from 'react-dom';
import { AuthLogin, AuthLogout, Profile } from '../components/AuthLogin';


const AuthRoutes=()=>{
    return(
    <div id="auth">
        <AuthLogout/>
        <AuthLogin/>
        <Profile/>
    </div>
    );
}

export default AuthRoutes;