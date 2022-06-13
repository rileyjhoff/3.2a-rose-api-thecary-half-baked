-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS quotes;
DROP TABLE IF EXISTS episodes;
DROP TABLE IF EXISTS characters;

CREATE TABLE characters (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  first_name VARCHAR,
  last_name VARCHAR
);

CREATE TABLE episodes (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title VARCHAR(280) NOT NULL,
  season INT NOT NULL,
  number INT not NULL
);

CREATE TABLE quotes (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  character_id BIGINT,
  episode_id BIGINT,
  detail VARCHAR(500) NOT NULL,
  FOREIGN KEY (character_id) REFERENCES characters(id),
  FOREIGN KEY (episode_id) REFERENCES episodes(id)
);

INSERT INTO characters (
  first_name,
  last_name
)
VALUES 
  ('Moira', 'Rose'),
  ('Johnny','Rose'),
  ('David','Rose'),
  ('Alexis','Rose'),
  ('Stevie','Budd'),
  ('Roland','Schitt'),
  ('Jocelyn', 'Schitt')
;

INSERT INTO episodes (
  title,
  season,
  number
)
VALUES 
  ('Finding David', 2, 201),
  ('Motel Review', 3, 308),
  ('New Car', 3, 303),
  ('The Throuple', 3, 302),
  ('Opening Night', 3, 301),
  ('Girls'' Night', 4, 404);

INSERT INTO quotes(
  episode_id,
  character_id,
  detail
)
VALUES
  (1,1,'What you did was impulsive, capricious, and melodramatic. But, it was also wrong.'),
  (2,2,'Tweet us on Facebook!'),
  (3,2,'I dont want to be taken advantage of because I''m overdressed.'),
  (4,3,'I''m starting to feel like I''m trapped in an Avril Lavigne lyric here.'),
  (5,3,'Excuse me, I haven''t bedazzled anything since I was 22.'),
  (1,4,'I didn''t go missing, David. The FBI knew where I was the entire time!'),
  (1,4,'I''m sorry I didn''t respond to like one text David!'),
  (6,3,'I''m sorry that I just know what looks correct. And this situation is not correct! Toilet plungers on display at the front of a store, is incorrect! Breath mints where the lip balms should be. Not correct! Not correct. These mountaineering shoes that my boyfriend is wearing, looking like Oprah on a Thanksgiving Day hike, incorrect.'),
  (6,2, 'Gossip is the devil''s telephone. Best to just hang up.')
  ;