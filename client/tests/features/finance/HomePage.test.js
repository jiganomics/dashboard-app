import React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from '../../../src/features/finance/HomePage';

describe('finance/HomePage', () => {
  it('renders node with correct class name', () => {
    const props = {
      finance: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <HomePage {...props} />
    );

    expect(
      renderedComponent.find('.finance-home-page').length
    ).toBe(1);
  });
});
