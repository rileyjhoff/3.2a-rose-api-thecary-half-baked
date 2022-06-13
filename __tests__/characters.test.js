const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('characters routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should return a list of characters with nested quotes', async () => {
    const res = await request(app).get('/characters');
    expect(res.body.length).toEqual(7);
    const moira = res.body.find((char) => char.id === '1');
    expect(moira).toHaveProperty('first_name', 'Moira');
    expect(moira).toHaveProperty('last_name', 'Rose');
    expect(moira).toHaveProperty('quotes');
    expect(moira.quotes[0]).toHaveProperty('detail');
    expect(moira.quotes[0]).toHaveProperty('character_id');
    expect(moira.quotes[0]).toHaveProperty('id');
  });

  afterAll(() => {
    pool.end();
  });
});
