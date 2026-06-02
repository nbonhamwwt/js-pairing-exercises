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

export const getOldestCaptain = async () => {
  const captains = await getCaptains();
  // TODO: Return the captain with the highest age
};

export const getYoungestCaptain = async () => {
  const captains = await getCaptains();
  // TODO: Return the captain with the lowest age
};

export const getAverageAge = async () => {
  const captains = await getCaptains();
  // TODO: Return the average age of all captains
};

export const getCaptainsByAgeRange = async (minAge, maxAge) => {
  const captains = await getCaptains();
  // TODO: Return array of captains whose age is between minAge and maxAge (inclusive)
};
