import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/budget/DefaultPage';

describe('budget/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      budget: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.budget-default-page').length
    ).toBe(1);
  });
});
