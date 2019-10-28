import React from 'react';
import { shallow } from 'enzyme';
import LogOutComponent from '../../../components/common/LogOutComponent';


describe('<LogOutComponent />', () => {
  it('should match snapshot', () => {
    const props = {
      handleLogOut: jest.fn(),
    };
    const wrapper = shallow(<LogOutComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
