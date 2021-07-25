import React, {useCallback} from 'react';
import classes from './topNav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {logoutUser} from '../../actions/commonAction';
import {useDispatch} from 'react-redux';

const TopNav = () => {
    const dispatch = useDispatch();
    const onClickHandler = useCallback(() => {
        dispatch(logoutUser());
    }, [dispatch]);
    
    return (
        <div className={classes.topNav}>
            <h1>Infinite Scroll...</h1>
            <button className={classes.icon} onClick={onClickHandler}>
                <FontAwesomeIcon icon={faSignOutAlt} className={classes.faIcon}/>&nbsp;Logout
            </button>
        </div>
    );
};

export {TopNav};
export default TopNav;
