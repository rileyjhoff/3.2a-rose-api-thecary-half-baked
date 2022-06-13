# Rose API-thecary (A locally sourced, hand-crafted API)

## Demo

[Link to Demo](https://alchemy-rose-api-thecary.herokuapp.com/)

## Getting Started

Use [this template](https://github.com/alchemycodelab/backend-rose-api-thecary) to get started.

### Learning Objectives

- Use a GET route in Express to retrieve a list of related resources from a Postgres database
- Use a POST route in Express to add new resources to a Postgres database

### Description

Welcome to Rose API-thecary. A locally-sourced hand-crafted API which returns lists of Characters, Episodes and Quotes from the instant-classic show Schitt's Creek. You have been provided with some seed data and the skeleton Model files but you will need to add controllers and add static model methods for retrieving the data to meet the acceptance criteria.

### Acceptance Criteria

- Users should be able to view a list of Episodes at `/episodes` -- episode data should include a nested array of quotes and have the following shape

```js
{
  id: '3',
  title: 'New Car',
  season: 3,
  number: 303,
  quotes: [
    {
      id: 3,
      detail: "I dont want to be taken advantage of because I'm overdressed.",
      character_id: 2,
    },
  ],
}
```

- Users should be able to view a list of Characters at `/characters` - character data should include a nested list of quotes and have the following shape

```js
{
  id: '1',
  first_name: 'Moira',
  last_name: 'Rose',
  quotes: [
    {
      id: 1,
      detail:
        'What you did was impulsive, capricious, and melodramatic. But, it was also wrong.',
      character_id: 1,
    },
  ],
}

```

- Users should be able to add a new Quote to the database via a POST route to `/quotes`. The request body should have the following shape:

```js
{
  character_id: 3,
  episode_id: 6,
  detail: "Okay, I have never heard someone say so many wrong things, one after the other, consecutively, in a row."
}
```

- All tests are passing

### Rubric

| Task                                  | Points |
| ------------------------------------- | ------ |
| Dev branch deployed to Heroku with PR | 1      |
| GET `/episodes` route                 | 3      |
| GET `/characters` route               | 3      |
| POST `/quotes` route                  | 3      |
