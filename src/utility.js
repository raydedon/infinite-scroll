export const ROOT_URL = 'https://beekin.api.willsnvision.com';
export const POST_REQUEST = 'POST';
export const PUT_REQUEST = 'PUT';
export const DELETE_REQUEST = 'DELETE';
export const UNSPLASH_CLIENT_ID = 'fiYH1-9wzaB65MWo0s0_P4KFbzfhfRpanE7zzfTzX7s';
// export const PEXEL_API_KEY = '563492ad6f917000010000015e6c6b9906e140aeba320a43ca0f6a68';
export const PEXEL_API_KEY = '563492ad6f91700001000001cad8e747d16448e580e6c45dc247efac';

export function throttle(func, ms) {
    
    let isThrottled = false, savedArgs, savedThis;
    
    function wrapper() {
        if (isThrottled) { // (2)
            savedArgs = arguments;
            savedThis = this;
            return;
        }
        isThrottled = true;
        
        func.apply(this, arguments); // (1)
        
        setTimeout(function() {
            isThrottled = false; // (3)
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }
    
    return wrapper;
}
