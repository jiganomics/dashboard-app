// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  DOCUMENTS_SHOW_DOCUMENT_MODAL,
} from './constants';

export function showDocumentModal() {
  return {
    type: DOCUMENTS_SHOW_DOCUMENT_MODAL,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case DOCUMENTS_SHOW_DOCUMENT_MODAL:
      return {
        ...state,
        show: true,
      };

    default:
      return state;
  }
}
