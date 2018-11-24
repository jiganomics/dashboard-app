import React from 'react';
import { shallow } from 'enzyme';
import { CommentBox } from '../../../src/features/comment/CommentBox';

describe('comment/CommentBox', () => {
  it('renders node with correct class name', () => {
    const props = {
      examples: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <CommentBox {...props} />
    );

    expect(
      renderedComponent.find('.comment-comment-box').length
    ).toBe(1);
  });
});
