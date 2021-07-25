import React from 'react';
import LoginImage from './LoginImage';
import {LoginBody} from './LoginBody';
import classes from './login.scss';

const Login = () => {
    return (
        <div className={classes.loginPage}>
            <LoginImage />
            <LoginBody />
        </div>
    );

};

export {Login};
export default Login;
