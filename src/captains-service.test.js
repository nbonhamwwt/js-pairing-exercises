import * as captainsService from './captains-service';

test('returns data from captains endpoint', async () => {
  const captains = await captainsService.getCaptains();
  const firstCaptain = {
    id: 'SQ2WI',
    first: 'Jack',
    last: 'Sparrow',
    age: 48,
    ship: 'BC13V'
  };

  expect(captains).toHaveLength(4);
  expect(captains[0]).toEqual(firstCaptain);
});

xtest('captain first names', async () => {
  const expectedNames = ['Jack', 'Malcolm', 'Jean Luc', 'Han'];
  const firstNames = await captainsService.firstNames();

  expect(firstNames).toEqual(expectedNames);
});

xtest('captain first names sorted alphabetically', async () => {
  const expectedNames = ['Han', 'Jack', 'Jean Luc', 'Malcolm'];
  const firstNamesSorted = await captainsService.firstNamesSorted();

  expect(firstNamesSorted).toEqual(expectedNames);
});

xtest('captain combined total age', async () => {
  const expectedTotalAge = 179;
  const totalAge = await captainsService.totalAge();

  expect(totalAge).toEqual(expectedTotalAge);
});

xtest('captain and ship combined for given captain id', async () => {
  const expectedData = {
    id: 'R6TZN',
    firstName: 'Malcolm',
    lastName: 'Reynolds',
    shipId: 'V7B8T',
    shipName: 'Serenity'
  };
  const captainShipData = await captainsService.captainBio('R6TZN');

  expect(captainShipData).toEqual(expectedData);
});

xtest('Captains sorted by ship size', async () => {
  const expectedData = [
    {
      id: 'KZUC8',
      first: 'Han',
      last: 'Solo',
      age: 33,
      ship: 'Millenium Falcon'
    },
    {
      id: 'R6TZN',
      first: 'Malcolm',
      last: 'Reynolds',
      age: 34,
      ship: 'Serenity'
    },
    {
      id: 'SQ2WI',
      first: 'Jack',
      last: 'Sparrow',
      age: 48,
      ship: 'Black Pearl'
    },
    {
      id: 'UXWPK',
      first: 'Jean Luc',
      last: 'Picard',
      age: 64,
      ship: 'USS Enterprise NCC-1701-D'
    }
  ];
  const captainsWithShipNamesBySize = await captainsService.captainsWithShipNamesBySize();

  expect(captainsWithShipNamesBySize).toEqual(expectedData);
});

xtest('get oldest captain', async () => {
  const oldestCaptain = await captainsService.getOldestCaptain();
  const expectedCaptain = {
    id: 'UXWPK',
    first: 'Jean Luc',
    last: 'Picard',
    age: 64,
    ship: 'DRPHT'
  };

  expect(oldestCaptain).toEqual(expectedCaptain);
});

xtest('get youngest captain', async () => {
  const youngestCaptain = await captainsService.getYoungestCaptain();
  const expectedCaptain = {
    id: 'KZUC8',
    first: 'Han',
    last: 'Solo',
    age: 33,
    ship: '1M6GB'
  };

  expect(youngestCaptain).toEqual(expectedCaptain);
});

xtest('get average age of all captains', async () => {
  const averageAge = await captainsService.getAverageAge();
  const expectedAverageAge = 44.75;

  expect(averageAge).toBe(expectedAverageAge);
});

xtest('get captains by age range', async () => {
  const captainsByAgeRange = await captainsService.getCaptainsByAgeRange(33, 48);
  const expectedCaptains = [
    {
      id: 'SQ2WI',
      first: 'Jack',
      last: 'Sparrow',
      age: 48,
      ship: 'BC13V'
    },
    {
      id: 'R6TZN',
      first: 'Malcolm',
      last: 'Reynolds',
      age: 34,
      ship: 'V7B8T'
    },
    {
      id: 'KZUC8',
      first: 'Han',
      last: 'Solo',
      age: 33,
      ship: '1M6GB'
    }
  ];

  expect(captainsByAgeRange).toHaveLength(3);
  expect(captainsByAgeRange).toEqual(expect.arrayContaining(expectedCaptains));
});
