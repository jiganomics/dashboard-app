import React from 'react';
import { shallow } from 'enzyme';
import { Comment } from '../../../src/features/comment';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Comment />);
  expect(renderedComponent.find('.comment-comment').length).toBe(1);
});
