import React from 'react';
import { shallow } from 'enzyme';
import { CategoryData } from '../../../src/features/budget';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<CategoryData />);
  expect(renderedComponent.find('.budget-category-data').length).toBe(1);
});
