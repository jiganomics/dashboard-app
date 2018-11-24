import React from 'react';
import { shallow } from 'enzyme';
import { Checkbook } from '../../../src/features/checkbook/Checkbook';

describe('checkbook/Checkbook', () => {
  it('renders node with correct class name', () => {
    const props = {
      checkbook: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Checkbook {...props} />
    );

    expect(
      renderedComponent.find('.checkbook-checkbook').length
    ).toBe(1);
  });
});
