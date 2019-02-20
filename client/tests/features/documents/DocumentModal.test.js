import React from 'react';
import { shallow } from 'enzyme';
import { DocumentModal } from '../../../src/features/documents';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<DocumentModal />);
  expect(renderedComponent.find('.documents-document-modal').length).toBe(1);
});
