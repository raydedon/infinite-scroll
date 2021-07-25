import React from 'react';
import classes from './login.scss';

const LoginImage = () => {
    return (
      <div className={classes.loginLeftImage}>
        <div className={classes.loginMsgWrapper}>
          <p className={classes.loginMsgHeader}>Welcome Back!</p>
          <p>
            Lead paragraph. Vivamus sagittis lacus val augue laoreet rutrum
            faucibus dolor auctor. Dius mollis, est non commodo luctus
          </p>
        </div>
      </div>
    );
};

export {LoginImage};
export default LoginImage;
