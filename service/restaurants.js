const { yelp } = require("../httpRequset");
const { restaurantsSchema } = require("../schema/restaurantsSchema");

const handleResponse = (res) => {
  const keys_to_keep = ['name', 'price', 'distance', 'rating', 'image_url'];
  console.log(res.data);
  
  const redux = res.data.businesses.map(o => keys_to_keep.reduce((acc, curr) => {
    acc[curr] = o[curr];
    return acc;
  }, {}));
  return redux;
}



const getRestaurants = (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit) : 20;
  const { location } = req.query;
  const valid = restaurantsSchema({limit, location});

  if ( !valid ) {
    return res.status(422).send(restaurantsSchema.errors || 'incorrect input');
  };

  yelp.get('https://api.yelp.com/v3/businesses/search',
    {
      params: {
        limit: limit,
        location: location
      }
    }
  )
    .then(handleResponse)
    .then(data => res.json(data))
    .catch(err => console.log(err))
};

module.exports = { getRestaurants };