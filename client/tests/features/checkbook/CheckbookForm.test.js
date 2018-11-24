import React from 'react';
import { shallow } from 'enzyme';
import { CheckbookForm } from '../../../src/features/checkbook/CheckbookForm';

describe('checkbook/CheckbookForm', () => {
  it('renders node with correct class name', () => {
    const props = {
      checkbook: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <CheckbookForm {...props} />
    );

    expect(
      renderedComponent.find('.checkbook-checkbook-form').length
    ).toBe(1);
  });
});
