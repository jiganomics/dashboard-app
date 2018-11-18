import React from 'react';
import { shallow } from 'enzyme';
import { CommentBox } from '../../../src/features/examples/CommentBox';

describe('examples/CommentBox', () => {
  it('renders node with correct class name', () => {
    const props = {
      examples: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <CommentBox {...props} />
    );

    expect(
      renderedComponent.find('.examples-comment-box').length
    ).toBe(1);
  });
});
