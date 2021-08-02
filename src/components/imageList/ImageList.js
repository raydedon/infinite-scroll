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
                    {photos.length > 0 && photos.filter((img, index) => index%4 === 0).map((img) => <UnsplashImage key={img.id} url={img.src.medium}/>)}
                </div>
                <div className={classes.column}>
                    {photos.length > 0 && photos.filter((img, index) => index%4 === 1).map((img) => <UnsplashImage key={img.id} url={img.src.medium}/>)}
                </div>
                <div className={classes.column}>
                    {photos.length > 0 && photos.filter((img, index) => index%4 === 2).map((img) => <UnsplashImage key={img.id} url={img.src.medium}/>)}
                </div>
                <div className={classes.column}>
                    {photos.length > 0 && photos.filter((img, index) => index%4 === 3).map((img) => <UnsplashImage key={img.id} url={img.src.medium}/>)}
                </div>
            </div>}
            <div className={classes.loading}><img src={spinner}/></div>
        </div>
    );
};

export {ImageList};
export default ImageList;
