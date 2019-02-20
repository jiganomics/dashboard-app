import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import {
  DOCUMENTS_HANDLE_SELECTED_FILE_BEGIN,
  DOCUMENTS_HANDLE_SELECTED_FILE_SUCCESS,
  DOCUMENTS_HANDLE_SELECTED_FILE_FAILURE,
  DOCUMENTS_HANDLE_SELECTED_FILE_DISMISS_ERROR,
} from '../../../../src/features/documents/redux/constants';

import {
  handleSelectedFile,
  dismissHandleSelectedFileError,
  reducer,
} from '../../../../src/features/documents/redux/handleSelectedFile';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('documents/redux/handleSelectedFile', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when handleSelectedFile succeeds', () => {
    const store = mockStore({});

    return store.dispatch(handleSelectedFile())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', DOCUMENTS_HANDLE_SELECTED_FILE_BEGIN);
        expect(actions[1]).toHaveProperty('type', DOCUMENTS_HANDLE_SELECTED_FILE_SUCCESS);
      });
  });

  it('dispatches failure action when handleSelectedFile fails', () => {
    const store = mockStore({});

    return store.dispatch(handleSelectedFile({ error: true }))
      .catch(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', DOCUMENTS_HANDLE_SELECTED_FILE_BEGIN);
        expect(actions[1]).toHaveProperty('type', DOCUMENTS_HANDLE_SELECTED_FILE_FAILURE);
        expect(actions[1]).toHaveProperty('data.error', expect.anything());
      });
  });

  it('returns correct action by dismissHandleSelectedFileError', () => {
    const expectedAction = {
      type: DOCUMENTS_HANDLE_SELECTED_FILE_DISMISS_ERROR,
    };
    expect(dismissHandleSelectedFileError()).toEqual(expectedAction);
  });

  it('handles action type DOCUMENTS_HANDLE_SELECTED_FILE_BEGIN correctly', () => {
    const prevState = { handleSelectedFilePending: false };
    const state = reducer(
      prevState,
      { type: DOCUMENTS_HANDLE_SELECTED_FILE_BEGIN }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.handleSelectedFilePending).toBe(true);
  });

  it('handles action type DOCUMENTS_HANDLE_SELECTED_FILE_SUCCESS correctly', () => {
    const prevState = { handleSelectedFilePending: true };
    const state = reducer(
      prevState,
      { type: DOCUMENTS_HANDLE_SELECTED_FILE_SUCCESS, data: {} }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.handleSelectedFilePending).toBe(false);
  });

  it('handles action type DOCUMENTS_HANDLE_SELECTED_FILE_FAILURE correctly', () => {
    const prevState = { handleSelectedFilePending: true };
    const state = reducer(
      prevState,
      { type: DOCUMENTS_HANDLE_SELECTED_FILE_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.handleSelectedFilePending).toBe(false);
    expect(state.handleSelectedFileError).toEqual(expect.anything());
  });

  it('handles action type DOCUMENTS_HANDLE_SELECTED_FILE_DISMISS_ERROR correctly', () => {
    const prevState = { handleSelectedFileError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: DOCUMENTS_HANDLE_SELECTED_FILE_DISMISS_ERROR }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.handleSelectedFileError).toBe(null);
  });
});

