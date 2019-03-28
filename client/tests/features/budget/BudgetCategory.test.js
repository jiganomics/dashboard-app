import React from 'react';
import { shallow } from 'enzyme';
import { BudgetCategory } from '../../../src/features/budget';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<BudgetCategory />);
  expect(renderedComponent.find('.budget-budget-category').length).toBe(1);
});
