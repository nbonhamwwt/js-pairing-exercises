// This training is brought to you by Yoda
//
// Tests fail, they first must
// Patience and practice, you need
// Green, the code turns then

import apiClient from './apiClient';

export const getCaptains = async () => {
  const response = await apiClient.get('/captains');
  return response.data;
};
