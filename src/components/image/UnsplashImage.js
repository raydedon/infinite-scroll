import React from 'react';
import classes from './unsplash.scss';

const UnsplashImage = ({ url }) => (
    <div className={classes.container}>
        <img src={url} className={classes.responsiveImg}/>
    </div>
);

export {UnsplashImage};
export default UnsplashImage;
