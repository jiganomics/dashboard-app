import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/documents/DefaultPage';

describe('documents/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      documents: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.documents-default-page').length
    ).toBe(1);
  });
});
