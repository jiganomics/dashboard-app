import {
  DOCUMENTS_SHOW_DOCUMENT_MODAL,
} from '../../../../src/features/documents/redux/constants';

import {
  showDocumentModal,
  reducer,
} from '../../../../src/features/documents/redux/showDocumentModal';

describe('documents/redux/showDocumentModal', () => {
  it('returns correct action by showDocumentModal', () => {
    expect(showDocumentModal()).toHaveProperty('type', DOCUMENTS_SHOW_DOCUMENT_MODAL);
  });

  it('handles action type DOCUMENTS_SHOW_DOCUMENT_MODAL correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: DOCUMENTS_SHOW_DOCUMENT_MODAL }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
