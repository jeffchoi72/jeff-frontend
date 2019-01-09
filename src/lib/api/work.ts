import { baseAxios } from '../axios';

interface WorkHistoriesByMonthParam {
  month: string;
}

export const requestWorkHistoriesByMonth = async (params: WorkHistoriesByMonthParam) => {
  try {
    const { month } = params;
    const response = await baseAxios.get(`/work/history/month/${month}`);
    return response;
  } catch ({ response }) {
    return response;
  }
};
