import React, {useCallback, useEffect, useState, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {loginUser} from '../../actions/commonAction';
import classes from './login.scss';

const LoginBody = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.userDetails.loading);
  
  const inputRef = useRef(null);
  const [cred, setCred] = useState({userName: '', password: ''});
  
  const {userName, password} = cred;
  
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    console.log({userName, password});
    dispatch(loginUser({userName, password}));
  }, [dispatch, password, userName]);
  
  const inputChange = useCallback((e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    setCred({...cred, [name]: value});
  }, [cred]);
  
  return (
      <div className={classes.loginBodyContainer}>
        <div className={classes.wrapper}>
          <p className={classes.header}>Lets Get Started</p>
          <form className={classes.form} onSubmit={onSubmit}>
            <input
                type="email"
                name="userName"
                value={userName}
                ref={inputRef}
                onChange={inputChange}
                placeholder="Email"
                disabled={loading}
            />
            <input
                type="password"
                name="password"
                value={password}
                onChange={inputChange}
                placeholder="Password"
                disabled={loading}
            />
            <button type="submit" disabled={loading}>{loading && <span className='spinner-border spinner-border-sm'/>}SIGN IN</button>
          </form>
        </div>
      </div>
  );
};

export {LoginBody};
export default LoginBody;

