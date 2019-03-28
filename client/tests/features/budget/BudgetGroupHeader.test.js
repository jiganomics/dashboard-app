import React from 'react';
import { shallow } from 'enzyme';
import { BudgetGroupHeader } from '../../../src/features/budget';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<BudgetGroupHeader />);
  expect(renderedComponent.find('.budget-budget-group-header').length).toBe(1);
});
