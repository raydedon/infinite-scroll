import React from 'react';
import classes from './infiniteScroll.scss';
import {throttle} from '../../utility';

const InfiniteScroll = (props) => {
    const {loadContent, children, loading} = props;
    const scrollableTargetOuter = React.useRef();
    const scrollableTargetInner = React.useRef();
    
    const onScrollHandler = React.useCallback(() => {
        const boundClientRect = scrollableTargetInner.current.getBoundingClientRect();
        // const scrollTop = scrollableTargetInner.current.scrollTop;
        const scrollHeight = scrollableTargetInner.current.scrollHeight;
        // const clientHeight = scrollableTargetInner.current.clientHeight;
        const clientHeightOut = scrollableTargetOuter.current.clientHeight;
        // const scrollTopOut = scrollableTargetOuter.current.scrollTop;
        const val = scrollHeight + boundClientRect.y - clientHeightOut;
        if (loading) return;
        if (val < 200) {
            // console.info({clientHeight, scrollTopOut, boundClientRect: boundClientRect, val, clientHeightOut});
            loadContent();
        }
    }, [loadContent, loading]);
    
    React.useEffect(() => {
        loadContent();
    }, [loadContent]);
    
    React.useEffect(() => {
        window.addEventListener('scroll', onScrollHandler);
        return () => window.removeEventListener('scroll', onScrollHandler);
    }, [onScrollHandler]);
    
    return (
        <div className={classes.container} onScroll={throttle(onScrollHandler, 200)} ref={scrollableTargetOuter}>
            <div className={props.className} style={{width: '100%'}} ref={scrollableTargetInner}>
                {children}
            </div>
        </div>
    );
};

export {InfiniteScroll};
export default InfiniteScroll;
