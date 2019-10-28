
import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';

import App from '../App';


describe('<App />', () => {
  const wrapper = shallow(<App />);
  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
