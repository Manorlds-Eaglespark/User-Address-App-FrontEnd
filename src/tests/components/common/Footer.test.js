import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../../components/common/Footer';


describe('<Footer />', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
