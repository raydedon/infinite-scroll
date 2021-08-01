import React from 'react';
import InfiniteScroll from '../infiniteScroll/InfinteScroll';
import {useDispatch, useSelector} from 'react-redux';
import {loadImages} from '../../actions/commonAction';
// import classes from './homeBody.scss';
import ImageList from '../imageList/ImageList';

const HomeBody = () => {
    const images = useSelector((state) => state.images);
    const dispatch = useDispatch();
    const {loading} = images;
    const loadData = React.useCallback(() => {
        dispatch(loadImages());
    }, [dispatch]);
    
    return (
        <InfiniteScroll loadContent={loadData} loading={loading}>
            <ImageList/>
        </InfiniteScroll>
    );
};

export {HomeBody};
export default HomeBody;
