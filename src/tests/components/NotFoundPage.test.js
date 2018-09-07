import React from 'react';
import { shallow } from 'enzyme';
import NotFoundpage from '../../components/NotFoundpage';

test('should render NotFoundPage correctly', () => {
  const wrapper = shallow(<NotFoundpage />);
  expect(wrapper).toMatchSnapshot();
});