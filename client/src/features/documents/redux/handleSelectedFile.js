import {
  DOCUMENTS_HANDLE_SELECTED_FILE,
} from './constants';

export const handleSelectedFile = event => {
  console.log("Event:");
  console.log(event.target.files);
  return dispatch => {
    dispatch({
      type: DOCUMENTS_HANDLE_SELECTED_FILE,
      event,
    });
  };
};

export function reducer(state, action) {
  const event = action.event;
  switch (action.type) {
    case DOCUMENTS_HANDLE_SELECTED_FILE:
      return {
        ...state,
        selectedFile: URL.createObjectURL(event.target.files[0]),
        fileType: event.target.files[0].type,
        loaded: 0,
      };

    default:
      return state;
  }
}
