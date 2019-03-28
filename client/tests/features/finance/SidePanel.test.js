import React from 'react';
import { shallow } from 'enzyme';
import { SidePanel } from '../../../src/features/finance/SidePanel';

describe('finance/SidePanel', () => {
  it('renders node with correct class name', () => {
    const props = {
      finance: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <SidePanel {...props} />
    );

    expect(
      renderedComponent.find('.finance-side-panel').length
    ).toBe(1);
  });
});
