import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '../utilis/Index';

function PubilcRoute({ component: Component, restricted = false, ...rest }) {
    return (
        <Route {...rest} render={props => (
            isLogin() && restricted ?
                <Redirect to="/" />
            :
                <Component {...props}/>
        )
        }
        />
    );
}

export default PubilcRoute;