import React from 'react';
import { shallow } from 'enzyme';
import { MonthlyHeader } from '../../../src/features/budget';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<MonthlyHeader />);
  expect(renderedComponent.find('.budget-monthly-header').length).toBe(1);
});
