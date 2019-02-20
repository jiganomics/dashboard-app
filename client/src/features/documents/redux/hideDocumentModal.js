// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  DOCUMENTS_HIDE_DOCUMENT_MODAL,
} from './constants';

export function hideDocumentModal() {
  return {
    type: DOCUMENTS_HIDE_DOCUMENT_MODAL,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case DOCUMENTS_HIDE_DOCUMENT_MODAL:
      return {
        ...state,
        show: false,
        selectedFile: null,
        fileType: null,
      };

    default:
      return state;
  }
}
