import React from 'react';
import { shallow } from 'enzyme';
import { SidePanel } from '../../../src/features/documents/SidePanel';

describe('documents/SidePanel', () => {
  it('renders node with correct class name', () => {
    const props = {
      documents: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <SidePanel {...props} />
    );

    expect(
      renderedComponent.find('.documents-side-panel').length
    ).toBe(1);
  });
});
