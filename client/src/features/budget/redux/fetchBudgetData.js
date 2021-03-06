import {
  BUDGET_FETCH_BUDGET_DATA_BEGIN,
  BUDGET_FETCH_BUDGET_DATA_SUCCESS,
  BUDGET_FETCH_BUDGET_DATA_FAILURE,
  BUDGET_FETCH_BUDGET_DATA_DISMISS_ERROR,
} from './constants';

// Rekit uses redux-thunk for async actions by default: https://github.com/gaearon/redux-thunk
// If you prefer redux-saga, you can use rekit-plugin-redux-saga: https://github.com/supnate/rekit-plugin-redux-saga
export function fetchBudgetData(args = {}) {
  return (dispatch) => { // optionally you can have getState as the second argument
    dispatch({
      type: BUDGET_FETCH_BUDGET_DATA_BEGIN,
    });

    // Return a promise so that you could control UI flow without states in the store.
    // For example: after submit a form, you need to redirect the page to another when succeeds or show some errors message if fails.
    // It's hard to use state to manage it, but returning a promise allows you to easily achieve it.
    // e.g.: handleSubmit() { this.props.actions.submitForm(data).then(()=> {}).catch(() => {}); }
    const promise = new Promise((resolve, reject) => {
      fetch('/api/budgetData/')
        .then(data => data.json())
        .then((res) => {
          dispatch({
            type: BUDGET_FETCH_BUDGET_DATA_SUCCESS,
            data: res,
          });
          resolve(res);
        },
        // Use rejectHandler as the second argument so that render errors won't be caught.
        (err) => {
          dispatch({
            type: BUDGET_FETCH_BUDGET_DATA_FAILURE,
            data: { error: err },
          });
          reject(err);
        },
      );
    });

    return promise;
  };
}

// Async action saves request error by default, this method is used to dismiss the error info.
// If you don't want errors to be saved in Redux store, just ignore this method.
export function dismissFetchBudgetDataError() {
  return {
    type: BUDGET_FETCH_BUDGET_DATA_DISMISS_ERROR,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case BUDGET_FETCH_BUDGET_DATA_BEGIN:
      // Just after a request is sent
      return {
        ...state,
        fetchBudgetDataPending: true,
        fetchBudgetDataError: null,
      };

    case BUDGET_FETCH_BUDGET_DATA_SUCCESS:
      // The request is success
      return {
        ...state,
        budgetData: action.data.data,
        fetchBudgetDataPending: false,
        fetchBudgetDataError: null,
      };

    case BUDGET_FETCH_BUDGET_DATA_FAILURE:
      // The request is failed
      return {
        ...state,
        fetchBudgetDataPending: false,
        fetchBudgetDataError: action.data.error,
      };

    case BUDGET_FETCH_BUDGET_DATA_DISMISS_ERROR:
      // Dismiss the request failure error
      return {
        ...state,
        fetchBudgetDataError: null,
      };

    default:
      return state;
  }
}
