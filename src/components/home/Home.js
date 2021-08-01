import React from 'react';
import TopNav from '../topNav/TopNav';
import clsx from 'clsx';
import classes from './home.scss';
import HomeBody from '../homeBody/HomeBody';

const Home = () => {
    return (
        <div className={clsx(classes.wrapper)}>
            <TopNav/>
            <HomeBody/>
        </div>
    );
    
};

export {Home};
export default Home;
