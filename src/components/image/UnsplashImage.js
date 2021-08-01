import React from 'react';
import classes from './unsplash.scss';

const UnsplashImage = ({ url, key }) => (
    <div className={classes.container} key={key}>
        <img src={url} className={classes.responsiveImg}/>
    </div>
);

export {UnsplashImage};
export default UnsplashImage;
