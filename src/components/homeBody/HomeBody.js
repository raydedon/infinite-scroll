import React from 'react';
import InfiniteScroll from '../infiniteScroll/InfinteScroll';
import UnsplashImage from '../image/UnsplashImage';
import {useDispatch, useSelector} from 'react-redux';
import {loadImages} from '../../actions/commonAction';
import classes from './homeBody.scss';

const HomeBody = () => {
    const images = useSelector((state) => state.images);
    const dispatch = useDispatch();
    const {photos, loading} = images;
    const loadData = React.useCallback(() => {
        dispatch(loadImages());
    }, [dispatch]);
    
    return (
        <InfiniteScroll loadContent={loadData} loading={loading} className={classes.container}>
            {loading && photos.length === 0 && <div>Loading...</div>}
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
        </InfiniteScroll>
    );
};

export {HomeBody};
export default HomeBody;
