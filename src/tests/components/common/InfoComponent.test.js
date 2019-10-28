import React from 'react';
import { shallow } from 'enzyme';
import InfoComponent from '../../../components/common/InfoComponent';


describe('<InfoComponent />', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<InfoComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
