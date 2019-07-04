import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import {
  BUDGET_FETCH_BUDGET_DATA_BEGIN,
  BUDGET_FETCH_BUDGET_DATA_SUCCESS,
  BUDGET_FETCH_BUDGET_DATA_FAILURE,
  BUDGET_FETCH_BUDGET_DATA_DISMISS_ERROR,
} from '../../../../src/features/budget/redux/constants';

import {
  fetchBudgetData,
  dismissFetchBudgetDataError,
  reducer,
} from '../../../../src/features/budget/redux/fetchBudgetData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('budget/redux/fetchBudgetData', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when fetchBudgetData succeeds', () => {
    const store = mockStore({});

    return store.dispatch(fetchBudgetData())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', BUDGET_FETCH_BUDGET_DATA_BEGIN);
        expect(actions[1]).toHaveProperty('type', BUDGET_FETCH_BUDGET_DATA_SUCCESS);
      });
  });

  it('dispatches failure action when fetchBudgetData fails', () => {
    const store = mockStore({});

    return store.dispatch(fetchBudgetData({ error: true }))
      .catch(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', BUDGET_FETCH_BUDGET_DATA_BEGIN);
        expect(actions[1]).toHaveProperty('type', BUDGET_FETCH_BUDGET_DATA_FAILURE);
        expect(actions[1]).toHaveProperty('data.error', expect.anything());
      });
  });

  it('returns correct action by dismissFetchBudgetDataError', () => {
    const expectedAction = {
      type: BUDGET_FETCH_BUDGET_DATA_DISMISS_ERROR,
    };
    expect(dismissFetchBudgetDataError()).toEqual(expectedAction);
  });

  it('handles action type BUDGET_FETCH_BUDGET_DATA_BEGIN correctly', () => {
    const prevState = { fetchBudgetDataPending: false };
    const state = reducer(
      prevState,
      { type: BUDGET_FETCH_BUDGET_DATA_BEGIN }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchBudgetDataPending).toBe(true);
  });

  it('handles action type BUDGET_FETCH_BUDGET_DATA_SUCCESS correctly', () => {
    const prevState = { fetchBudgetDataPending: true };
    const state = reducer(
      prevState,
      { type: BUDGET_FETCH_BUDGET_DATA_SUCCESS, data: {} }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchBudgetDataPending).toBe(false);
  });

  it('handles action type BUDGET_FETCH_BUDGET_DATA_FAILURE correctly', () => {
    const prevState = { fetchBudgetDataPending: true };
    const state = reducer(
      prevState,
      { type: BUDGET_FETCH_BUDGET_DATA_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchBudgetDataPending).toBe(false);
    expect(state.fetchBudgetDataError).toEqual(expect.anything());
  });

  it('handles action type BUDGET_FETCH_BUDGET_DATA_DISMISS_ERROR correctly', () => {
    const prevState = { fetchBudgetDataError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: BUDGET_FETCH_BUDGET_DATA_DISMISS_ERROR }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchBudgetDataError).toBe(null);
  });
});

