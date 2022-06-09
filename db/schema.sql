CREATE DATABASE pc_db;
\c pc_db

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  user_name TEXT,
  email TEXT,
  password_digest TEXT
);

CREATE TABLE pc_list(
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  name TEXT,
  cpu TEXT,
  graphics_card TEXT,
  ram TEXT,
  motherboard TEXT,
  ssd TEXT,
  psu TEXT,
  pc_case TEXT
);
INSERT INTO pc_list (user_id, name, cpu, graphics_card, ram, motherboard, ssd, psu, pc_case) VALUES (1, 'pc1', 'intelll', 'g', 'r', 'a', 's', 'ps', 'cases');


CREATE TABLE cpus(
  id SERIAL PRIMARY KEY,
  name TEXT,
  type TEXT
);
CREATE TABLE graphics_cards(
  id SERIAL PRIMARY KEY,
  name TEXT
);
CREATE TABLE ram(
  id SERIAL PRIMARY KEY,
  name TEXT,
  type TEXT
);
CREATE TABLE motherboards(
  id SERIAL PRIMARY KEY,
  name TEXT,
  ram_type TEXT,
  cpu_type TEXT
);
CREATE TABLE ssds(
  id SERIAL PRIMARY KEY,
  name TEXT
);
CREATE TABLE psus(
  id SERIAL PRIMARY KEY,
  name TEXT,
  power INTEGER
);
CREATE TABLE cases(
  id SERIAL PRIMARY KEY,
  name TEXT
);

