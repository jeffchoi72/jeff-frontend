import { produce } from 'immer';
import { Action, ActionFunctionAny, createAction, handleActions } from 'redux-actions';

// definition interface
export interface WorkHistory {
  workDate: string;
  workTime: number;
}

export interface WorkHistories {
  status: string;
  data: WorkHistory[];
}

interface WorkState {
  workHistories: WorkHistories;
}

interface WorkHistoriesAction {
  type: string;
  payload: {
    status: string;
    message: string;
    data: {
      workHistories: WorkHistory[],
    };
  };
};

// action type
export const GET_WORK_HISTORIES_BY_MONTH: string = 'work/GET_WORK_HISTORIES_BY_MONTH';
export const GET_WORK_HISTORIES_BY_MONTH_SUCCESS: string = 'work/GET_WORK_HISTORIES_MONTH_BY_SUCCESS';
export const GET_WORK_HISTORIES_BY_MONTH_FAIL: string = 'work/GET_HISTORIES_MONTH_BY_SUCCESS';

// action creators
export const requestWorkHistoriesByMonth: ActionFunctionAny<Action<string>> = createAction(GET_WORK_HISTORIES_BY_MONTH)
export const successWorkHistoriesByMonth: ActionFunctionAny<Action<string>> = createAction(GET_WORK_HISTORIES_BY_MONTH_SUCCESS);
export const failWorkHistoriesByMonth: ActionFunctionAny<Action<string>> = createAction(GET_WORK_HISTORIES_BY_MONTH_FAIL);

const initialState: WorkState = {
  workHistories: {
    status: 'INIT',
    data: []
  }
};

// reducers
export default handleActions({
  [GET_WORK_HISTORIES_BY_MONTH]: (state: WorkState, action: WorkHistoriesAction) => {
    return produce(state, (draft) => {
      draft.workHistories.status = 'INIT';
    });
  },
  [GET_WORK_HISTORIES_BY_MONTH_SUCCESS]: (state: WorkState, action: WorkHistoriesAction) => {
    return produce(state, (draft) => {
      const { workHistories } = action.payload.data;
      draft.workHistories = {
        status: 'SUCCESS',
        data: workHistories,
      }
    });
  },
  [GET_WORK_HISTORIES_BY_MONTH_FAIL]: (state: WorkState, action: WorkHistoriesAction) => {
    console.log('action: ', action);
    return produce(state, (draft) => {
      draft.workHistories.status = 'FAIL';
    });
  }
}, initialState);
