import React from 'react';
import { shallow } from 'enzyme';
import { BudgetHeader } from '../../../src/features/budget';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<BudgetHeader />);
  expect(renderedComponent.find('.budget-budget-header').length).toBe(1);
});
