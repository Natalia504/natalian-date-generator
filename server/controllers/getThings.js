const request = require('request-promise-native');
const apiKey = 'iJLvp6Ks9Mgq8KutYmvIeR_tgDTyrczgYZf93-6S6TO51EDuxtrS1_En2kSYaQkpmWqpWvGB7Loc5Tykj0BOfWyizLMzgtTTAoac_S8JLkyXz6xN6k3BgeizChYCXHYx';

const mapThings = ({ things, location, price, start }) => {
  start -= (1000 * 60 * 60 * 2); // 2 hours

  return things.map((thing) => {
    start += (1000 * 60 * 60 * 2); // 2 hours

    if (thing.locked) {
      return new Promise(resolve => resolve(thing));
    }

    return request({
      method: 'GET',
      url: `https://api.yelp.com/v3/${thing.type}/search?term=${thing.term}&location=${location}&price=${price}&start_date=${start}`,
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then((res) => {
      const thingArr = JSON.parse(res)[thing.type];
      const number = Math.floor(Math.random() * thingArr.length);
      thing.result = thingArr[number];
      return thing;
    });
  });
}

const getThings = async (req, res) => {
  console.log('ROUTE: getThings');
  try {
    const requests = mapThings(req.body);
    const nextThings = await Promise.all(requests);
    console.log(nextThings.length);

    return res.send({ success: true, things: nextThings });
  } catch (err) {
    if (process.env.NODE_ENV !== 'test') console.log(err);

    return res.json({ success: false, error: 'getThings failed' });
  }
}

module.exports = { getThings };
