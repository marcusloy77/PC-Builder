CREATE DATABASE pc_db;

CREATE TABLE user(
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  password_digest TEXT
);

CREATE TABLE pc_list(
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  name TEXT,
);

CREATE TABLE specs(
  id SERIAL PRIMARY KEY,
  part_type TEXT,
  link TEXT,
  pc_id INTEGER
);
