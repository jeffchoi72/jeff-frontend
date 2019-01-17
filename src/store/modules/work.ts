import { produce } from 'immer';
import { Action, ActionFunctionAny, createAction, handleActions } from 'redux-actions';

// definition interface
export interface WorkHistory {
  workDate: string;
  workTime: number;
};

export interface WorkHistories {
  status: string;
  data: WorkHistory[];
};

export interface DetailWorkHistory {
  time: string;
  isWork: boolean;
};

export interface DetailWorkHistories {
  status: string;
  data: {
    allWorkTime: number;
    detailWorkHistories: DetailWorkHistory[];
  }
};

interface WorkState {
  workHistories: WorkHistories;
  detailWorkHistories: DetailWorkHistories;
};

interface WorkHistoriesAction {
  type: string;
  payload: WorkHistoriesPayload;
};

interface DetailWorkHistoriesAction {
  type: string;
  payload: DetailWorkHistoriesPayload;
};

interface WorkHistoriesPayload {
  name: string;
  message: string;
  data: {
    workHistories: WorkHistory[],
  };
};

interface DetailWorkHistoriesPayload {
  name: string;
  message: string;
  data: {
    allWorkTime: number;
    workDetailHistories: DetailWorkHistory[];
  }
}

// action type
export const GET_WORK_HISTORIES_BY_MONTH: string = 'work/GET_WORK_HISTORIES_BY_MONTH';
export const GET_WORK_HISTORIES_BY_MONTH_SUCCESS: string = 'work/GET_WORK_HISTORIES_MONTH_BY_SUCCESS';
export const GET_WORK_HISTORIES_BY_MONTH_FAIL: string = 'work/GET_HISTORIES_MONTH_BY_SUCCESS';

export const GET_WORK_HISTORIES_BY_DAY: string = 'work/GET_WORK_HISTORIES_BY_DAY';
export const GET_WORK_HISTORIES_BY_DAY_SUCCESS: string = 'work/GET_WORK_HISTORIES_BY_DAY_SUCCESS';
export const GET_WORK_HISTORIES_BY_DAY_FAIL: string = 'work/GET_WORK_HISTORIES_BY_DAY_FAIL';

// action creators
export const requestWorkHistoriesByMonth: ActionFunctionAny<Action<WorkHistoriesPayload>> = createAction(GET_WORK_HISTORIES_BY_MONTH);
export const successWorkHistoriesByMonth: ActionFunctionAny<Action<WorkHistoriesPayload>> = createAction(GET_WORK_HISTORIES_BY_MONTH_SUCCESS);
export const failWorkHistoriesByMonth: ActionFunctionAny<Action<WorkHistoriesPayload>> = createAction(GET_WORK_HISTORIES_BY_MONTH_FAIL);

export const requestWorkHistoriesByDay: ActionFunctionAny<Action<DetailWorkHistoriesPayload>> = createAction(GET_WORK_HISTORIES_BY_DAY);
export const successWorkHistoriesByDay: ActionFunctionAny<Action<DetailWorkHistoriesPayload>> = createAction(GET_WORK_HISTORIES_BY_DAY_SUCCESS);
export const failWorkHistoriesByDay: ActionFunctionAny<Action<DetailWorkHistoriesPayload>> = createAction(GET_WORK_HISTORIES_BY_DAY_FAIL);

const initialState: WorkState = {
  workHistories: {
    status: 'INIT',
    data: [],
  },
  detailWorkHistories: {
    status: 'INIT',
    data: {
      allWorkTime: 0,
      detailWorkHistories: [],
    },
  },
};

// reducers
export default handleActions<WorkState, any>({
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
      };
    });
  },
  [GET_WORK_HISTORIES_BY_MONTH_FAIL]: (state: WorkState, action: WorkHistoriesAction) => {
    return produce(state, (draft) => {
      draft.workHistories.status = 'FAIL';
    });
  },
  [GET_WORK_HISTORIES_BY_DAY]: (state: WorkState, action: DetailWorkHistoriesAction) => {
    return produce(state, (draft) => {
      draft.detailWorkHistories = {
        status: 'INIT',
        data: {
          allWorkTime: 0,
          detailWorkHistories: [],
        },
      };
    });
  },
  [GET_WORK_HISTORIES_BY_DAY_SUCCESS]: (state: WorkState, action: DetailWorkHistoriesAction) => {
    return produce(state, (draft) => {
      const { workDetailHistories, allWorkTime } = action.payload.data;
      draft.detailWorkHistories = {
        status: 'SUCCESS',
        data: {
          allWorkTime,
          detailWorkHistories: workDetailHistories,
        },
      };
    });
  },
  [GET_WORK_HISTORIES_BY_DAY_FAIL]: (state: WorkState, action: DetailWorkHistoriesAction) => {
    return produce(state, (draft) => {
      draft.detailWorkHistories.status = 'FAIL';
    });
  },
}, initialState);
