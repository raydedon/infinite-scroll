import React, {useCallback} from 'react';
import classes from './topNav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {resetReduxStore} from '../../actions/commonAction';
import {useDispatch} from 'react-redux';

const TopNav = () => {
    const dispatch = useDispatch();
    const onClickHandler = useCallback(() => {
        localStorage.clear();
        dispatch(resetReduxStore());
    }, [dispatch]);
    
    return (
        <div className={classes.topNav}>
            <h3>Infinite Scroll...</h3>
            <button className={classes.icon} onClick={onClickHandler}>
                <FontAwesomeIcon icon={faSignOutAlt} className={classes.faIcon}/>&nbsp;Logout
            </button>
        </div>
    );
};

export {TopNav};
export default TopNav;
