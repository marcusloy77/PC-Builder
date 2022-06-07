CREATE DATABASE pc_db;
\c pc_db

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  password_digest TEXT
);

CREATE TABLE pc_list(
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  name TEXT
);

CREATE TABLE specs(
  id SERIAL PRIMARY KEY,
  pc_id INTEGER,
  part_type TEXT,
  part_name TEXT,
  link TEXT
);

INSERT INTO pc_list(user_id, name) 
VALUES (1, 'kasun');

INSERT INTO specs(pc_id, part_type, part_name, link)
VALUES (1, 'motherboard', 'Gigabyte B450 Tomahawk MAX ATX', 'https://www.mwave.com.au/product/msi-b450-tomahawk-max-am4-atx-motherboard-ac25690'),
(1, 'gpu', 'ASUS KO GeForce RTX 3060', 'https://www.mwave.com.au/product/gigabyte-radeon-rx-580-gaming-8gb-video-card-ac34178
'),
(1, 'cpu', 'Ryzen 5 3600', 'https://www.mwave.com.au/product/amd-ryzen-5-3600-6-core-socket-am4-36ghz-cpu-processor-wraith-stealth-cooler-ac24743
');