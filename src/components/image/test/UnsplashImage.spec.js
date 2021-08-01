import React from 'react';
import { shallow } from 'enzyme';
import UnsplashImage from '../UnsplashImage';
import '../../../setupTests'
let wrapped = shallow(<UnsplashImage url='url'/>);
describe('UnsplashImage', () => {
    it('should render the UnsplashImage Component correctly', () => {
        expect(wrapped).toMatchSnapshot();
    });
});
