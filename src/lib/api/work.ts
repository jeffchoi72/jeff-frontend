import { baseAxios } from '../axios';

export interface WorkHistoriesByMonthParam {
  month: string;
};

export interface WorkHistoriesByDayParam {
  month: string;
  day: string;
};

export const requestWorkHistoriesByMonth = async (params: WorkHistoriesByMonthParam) => {
  try {
    const { month } = params;
    const response = await baseAxios.get(`/work/history/month/${month}`);
    return response;
  } catch ({ response }) {
    return response;
  }
};

export const requestWorkHistoriesByDay = async (params: WorkHistoriesByDayParam) => {
  try {
    const { month, day } = params;
    const response = await baseAxios.get(`/work/history/month/${month}/${day}`);
    return response;
  } catch ({ response }) {
    return response;
  }
};
