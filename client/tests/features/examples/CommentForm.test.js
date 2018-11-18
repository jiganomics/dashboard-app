import React from 'react';
import { shallow } from 'enzyme';
import { CommentForm } from '../../../src/features/examples';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<CommentForm />);
  expect(renderedComponent.find('.examples-comment-form').length).toBe(1);
});
