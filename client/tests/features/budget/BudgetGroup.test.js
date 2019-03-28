import React from 'react';
import { shallow } from 'enzyme';
import { BudgetGroup } from '../../../src/features/budget';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<BudgetGroup />);
  expect(renderedComponent.find('.budget-budget-group').length).toBe(1);
});
