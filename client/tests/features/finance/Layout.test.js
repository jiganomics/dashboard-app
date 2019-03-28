import React from 'react';
import { shallow } from 'enzyme';
import { Layout } from '../../../src/features/finance';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Layout />);
  expect(renderedComponent.find('.finance-layout').length).toBe(1);
});
