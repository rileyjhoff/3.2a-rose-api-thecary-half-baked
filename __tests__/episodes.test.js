const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('episodes routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should return a list of episodes with nested quotes', async () => {
    const res = await request(app).get('/episodes');
    expect(res.body.length).toEqual(6);
    const newCar = res.body.find((char) => char.number === 303);
    expect(newCar).toHaveProperty('title', 'New Car');
    expect(newCar).toHaveProperty('season', 3);
    expect(newCar.quotes[0]).toHaveProperty('detail');
    expect(newCar.quotes[0]).toHaveProperty('character_id');
    expect(newCar.quotes[0]).toHaveProperty('id');
  });

  afterAll(() => {
    pool.end();
  });
});
