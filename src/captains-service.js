import apiClient from './apiClient';

export const getCaptains = async () => {
  const response = await apiClient.get('/captains');
  return response.data;
};
