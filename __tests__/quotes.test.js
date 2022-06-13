const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { Quote } = require('../lib/models/Quote');

describe('quotes routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should add a new quote', async () => {
    const quote = new Quote({
      episode_id: '6',
      character_id: '6',
      detail:
        'Okay, I have never heard someone say so many wrong things, one after the other, consecutively, in a row.',
    });
    const res = await request(app).post('/quotes').send(quote);
    expect(res.body.episode_id).toEqual(quote.episode_id);
    expect(res.body.character_id).toEqual(quote.character_id);
    expect(res.body.detail).toEqual(quote.detail);
    const count = await Quote.count();
    expect(count).toEqual(10);
  });

  afterAll(() => {
    pool.end();
  });
});
