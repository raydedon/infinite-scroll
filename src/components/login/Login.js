import React from 'react';
import LoginImage from './LoginImage';
import {LoginBody} from './LoginBody';
import classes from './login.scss';
import {useDispatch, useSelector} from 'react-redux';
import {push} from 'connected-react-router';

const Login = () => {
    const authenticated = useSelector((state) => state.userDetails.authenticated);
    const dispatch = useDispatch();

    React.useEffect(() => {
        console.info({authenticated});
        if (authenticated) {
            dispatch(push('/home'));
        }
    }, [authenticated, dispatch]);
    return (
        <div className={classes.loginPage}>
            <LoginImage />
            <LoginBody />
        </div>
    );

};

export {Login};
export default Login;
