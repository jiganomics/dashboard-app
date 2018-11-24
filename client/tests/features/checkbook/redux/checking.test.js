import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import {
  CHECKBOOK_CHECKING_BEGIN,
  CHECKBOOK_CHECKING_SUCCESS,
  CHECKBOOK_CHECKING_FAILURE,
  CHECKBOOK_CHECKING_DISMISS_ERROR,
} from '../../../../src/features/checkbook/redux/constants';

import {
  checking,
  dismissCheckingError,
  reducer,
} from '../../../../src/features/checkbook/redux/checking';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('checkbook/redux/checking', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when checking succeeds', () => {
    const store = mockStore({});

    return store.dispatch(checking())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', CHECKBOOK_CHECKING_BEGIN);
        expect(actions[1]).toHaveProperty('type', CHECKBOOK_CHECKING_SUCCESS);
      });
  });

  it('dispatches failure action when checking fails', () => {
    const store = mockStore({});

    return store.dispatch(checking({ error: true }))
      .catch(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', CHECKBOOK_CHECKING_BEGIN);
        expect(actions[1]).toHaveProperty('type', CHECKBOOK_CHECKING_FAILURE);
        expect(actions[1]).toHaveProperty('data.error', expect.anything());
      });
  });

  it('returns correct action by dismissCheckingError', () => {
    const expectedAction = {
      type: CHECKBOOK_CHECKING_DISMISS_ERROR,
    };
    expect(dismissCheckingError()).toEqual(expectedAction);
  });

  it('handles action type CHECKBOOK_CHECKING_BEGIN correctly', () => {
    const prevState = { checkingPending: false };
    const state = reducer(
      prevState,
      { type: CHECKBOOK_CHECKING_BEGIN }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.checkingPending).toBe(true);
  });

  it('handles action type CHECKBOOK_CHECKING_SUCCESS correctly', () => {
    const prevState = { checkingPending: true };
    const state = reducer(
      prevState,
      { type: CHECKBOOK_CHECKING_SUCCESS, data: {} }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.checkingPending).toBe(false);
  });

  it('handles action type CHECKBOOK_CHECKING_FAILURE correctly', () => {
    const prevState = { checkingPending: true };
    const state = reducer(
      prevState,
      { type: CHECKBOOK_CHECKING_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.checkingPending).toBe(false);
    expect(state.checkingError).toEqual(expect.anything());
  });

  it('handles action type CHECKBOOK_CHECKING_DISMISS_ERROR correctly', () => {
    const prevState = { checkingError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: CHECKBOOK_CHECKING_DISMISS_ERROR }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.checkingError).toBe(null);
  });
});

