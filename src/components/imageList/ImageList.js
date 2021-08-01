import React from 'react';
import classes from './imageList.scss';
import UnsplashImage from '../image/UnsplashImage';
import {useSelector} from 'react-redux';
import spinner from '../../assets/Iphone-spinner-2.gif';
import clsx from 'clsx';

const ImageList = () => {
    const images = useSelector((state) => state.images);
    const {photos} = images;
    return (
        <div className={clsx(classes.wrapper, classes.container)}>
            {photos.length > 0 && <div className={classes.row}>
                <div className={classes.column}>
                    {photos.length > 0 && photos.map((img, index) => index%4 === 0 && <UnsplashImage key={img.id} url={img.src.medium}/>)}
                </div>
                <div className={classes.column}>
                    {photos.length > 0 && photos.map((img, index) => index%4 === 1 && <UnsplashImage key={img.id} url={img.src.medium}/>)}
                </div>
                <div className={classes.column}>
                    {photos.length > 0 && photos.map((img, index) => index%4 === 2 && <UnsplashImage key={img.id} url={img.src.medium}/>)}
                </div>
                <div className={classes.column}>
                    {photos.length > 0 && photos.map((img, index) => index%4 === 3 && <UnsplashImage key={img.id} url={img.src.medium}/>)}
                </div>
            </div>}
            <div className={classes.loading}><img src={spinner}/></div>
        </div>
    );
};

export {ImageList};
export default ImageList;
