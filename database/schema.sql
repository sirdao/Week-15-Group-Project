CREATE DATABASE SCHOOL_CAMPUS_DB

USE SCHOOL_CAMPUS_DB;

CREATE TABLE WHATS_AROUND (

	ID INT AUTO_INCREMENT NOT NULL,

	Places VARCHAR(50) NOT NULL,
    score integer(10),
    reviews VARCHAR(255) NOT NULL,
	PRIMARY KEY(ID)
);

USE SCHOOL_CAMPUS_DB;