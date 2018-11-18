import React from 'react';
import { shallow } from 'enzyme';
import { Comment } from '../../../src/features/examples';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Comment />);
  expect(renderedComponent.find('.examples-comment').length).toBe(1);
});
