import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('homePageComponent', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<homePageComponent />);
    jest.resetAllMocks();
  });

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });


  it('should call handleLogOutClick function', () => {
    const instance = wrapper.instance();
    console.log('bjnbkjn the instance', instance);
  });
});
