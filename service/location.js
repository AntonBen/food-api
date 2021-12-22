const cityParts = [
  'Östermalm',
  'Vasastan',
  'Odenplan',
  'Södermalm',
  'Norrmalm',
  'Kungsholmen',
  'Gamla Stan',
];

const getLocationSuggestions = (res) => {
  res.json(cityParts);
};

module.exports = { getLocationSuggestions };
