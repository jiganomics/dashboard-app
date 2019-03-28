import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import {
  BUDGET_FETCH_BUDGET_GROUPS_BEGIN,
  BUDGET_FETCH_BUDGET_GROUPS_SUCCESS,
  BUDGET_FETCH_BUDGET_GROUPS_FAILURE,
  BUDGET_FETCH_BUDGET_GROUPS_DISMISS_ERROR,
} from '../../../../src/features/budget/redux/constants';

import {
  fetchBudgetGroups,
  dismissFetchBudgetGroupsError,
  reducer,
} from '../../../../src/features/budget/redux/fetchBudgetGroups';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('budget/redux/fetchBudgetGroups', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when fetchBudgetGroups succeeds', () => {
    const store = mockStore({});

    return store.dispatch(fetchBudgetGroups())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', BUDGET_FETCH_BUDGET_GROUPS_BEGIN);
        expect(actions[1]).toHaveProperty('type', BUDGET_FETCH_BUDGET_GROUPS_SUCCESS);
      });
  });

  it('dispatches failure action when fetchBudgetGroups fails', () => {
    const store = mockStore({});

    return store.dispatch(fetchBudgetGroups({ error: true }))
      .catch(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', BUDGET_FETCH_BUDGET_GROUPS_BEGIN);
        expect(actions[1]).toHaveProperty('type', BUDGET_FETCH_BUDGET_GROUPS_FAILURE);
        expect(actions[1]).toHaveProperty('data.error', expect.anything());
      });
  });

  it('returns correct action by dismissFetchBudgetGroupsError', () => {
    const expectedAction = {
      type: BUDGET_FETCH_BUDGET_GROUPS_DISMISS_ERROR,
    };
    expect(dismissFetchBudgetGroupsError()).toEqual(expectedAction);
  });

  it('handles action type BUDGET_FETCH_BUDGET_GROUPS_BEGIN correctly', () => {
    const prevState = { fetchBudgetGroupsPending: false };
    const state = reducer(
      prevState,
      { type: BUDGET_FETCH_BUDGET_GROUPS_BEGIN }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchBudgetGroupsPending).toBe(true);
  });

  it('handles action type BUDGET_FETCH_BUDGET_GROUPS_SUCCESS correctly', () => {
    const prevState = { fetchBudgetGroupsPending: true };
    const state = reducer(
      prevState,
      { type: BUDGET_FETCH_BUDGET_GROUPS_SUCCESS, data: {} }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchBudgetGroupsPending).toBe(false);
  });

  it('handles action type BUDGET_FETCH_BUDGET_GROUPS_FAILURE correctly', () => {
    const prevState = { fetchBudgetGroupsPending: true };
    const state = reducer(
      prevState,
      { type: BUDGET_FETCH_BUDGET_GROUPS_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchBudgetGroupsPending).toBe(false);
    expect(state.fetchBudgetGroupsError).toEqual(expect.anything());
  });

  it('handles action type BUDGET_FETCH_BUDGET_GROUPS_DISMISS_ERROR correctly', () => {
    const prevState = { fetchBudgetGroupsError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: BUDGET_FETCH_BUDGET_GROUPS_DISMISS_ERROR }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchBudgetGroupsError).toBe(null);
  });
});

