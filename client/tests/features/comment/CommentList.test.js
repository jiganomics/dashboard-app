import React from 'react';
import { shallow } from 'enzyme';
import { CommentList } from '../../../src/features/comment';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<CommentList />);
  expect(renderedComponent.find('.comment-comment-list').length).toBe(1);
});
