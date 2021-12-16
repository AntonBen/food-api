const cityParts = [
  'Östermalm',
  'Vasastan',
  'Odenplan',
  'Södermalm',
  'Norrmalm',
  'Kungsholmen',
  'Gamla Stan'
];

const getLocationSuggestions = (req,res) => {
  res.json(cityParts);
};

module.exports = { getLocationSuggestions };