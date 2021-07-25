import React from 'react';
import TopNav from '../topNav/TopNav';
import clsx from 'clsx';
import classes from './home.scss';
import HomeBody from '../homeBody/HomeBody';

const Home = () => {
    return (
        <div className={clsx(classes.wrapper)}>
            <TopNav/>
            <div className={classes.container}>
                <HomeBody/>
            </div>
        </div>
        );
    
    };

export {Home};
export default Home;
