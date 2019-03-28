import React from 'react';
import { shallow } from 'enzyme';
import { Budget } from '../../../src/features/budget/Budget';

describe('budget/Budget', () => {
  it('renders node with correct class name', () => {
    const props = {
      budget: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Budget {...props} />
    );

    expect(
      renderedComponent.find('.budget-budget').length
    ).toBe(1);
  });
});
