import React from 'react';
import renderer from 'react-test-renderer';


describe('<landingPageComponent />', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<landingPageComponent />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
