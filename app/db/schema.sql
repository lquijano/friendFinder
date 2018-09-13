DROP  DATABASE IF EXISTS friendFinder_db;

CREATE DATABASE friendFinder_db;

USE meetMutt_db;

CREATE TABLE friends_db (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(42) NOT NULL,
	picture TEXT NOT NULL,
	min INT (2) NOT NULL,
	max INT (2) NOT NULL,
	PRIMARY KEY (id)
);
