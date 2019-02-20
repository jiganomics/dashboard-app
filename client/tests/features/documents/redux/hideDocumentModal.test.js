import {
  DOCUMENTS_HIDE_DOCUMENT_MODAL,
} from '../../../../src/features/documents/redux/constants';

import {
  hideDocumentModal,
  reducer,
} from '../../../../src/features/documents/redux/hideDocumentModal';

describe('documents/redux/hideDocumentModal', () => {
  it('returns correct action by hideDocumentModal', () => {
    expect(hideDocumentModal()).toHaveProperty('type', DOCUMENTS_HIDE_DOCUMENT_MODAL);
  });

  it('handles action type DOCUMENTS_HIDE_DOCUMENT_MODAL correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: DOCUMENTS_HIDE_DOCUMENT_MODAL }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
