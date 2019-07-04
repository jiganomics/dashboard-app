import React from 'react';
import { shallow } from 'enzyme';
import { Configuration } from '../../../src/features/configuration/Configuration';

describe('configuration/Configuration', () => {
  it('renders node with correct class name', () => {
    const props = {
      configuration: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Configuration {...props} />
    );

    expect(
      renderedComponent.find('.configuration-configuration').length
    ).toBe(1);
  });
});
