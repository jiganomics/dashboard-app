import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/comment/DefaultPage';

describe('comment/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      comment: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.comment-default-page').length
    ).toBe(1);
  });
});
