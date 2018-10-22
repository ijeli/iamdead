DROP DATABASE IF EXISTS check_ill_db;
CREATE DATABASE check_ill_db;


USE check_ill_db;

CREATE TABLE Profiles
(
id INT NOT NULL AUTO_INCREMENT,
email VARCHAR(20) NOT NULL,
pass VARCHAR(60) NOT NULL,
firstName VARCHAR(20) NOT NULL,
lastName VARCHAR(20) NOT NULL,
monthOfBirth INTEGER (10) NULL,
dayOfBirth INTEGER (10) NULL,
yearOfBirth INTEGER (10) NULL,
createdAt DATETIME ,
updatedAt DATETIME ,
Primary Key (id)

);

INSERT INTO Profiles (email, pass, firstName, lastName, monthOfBirth, dayOfBirth, yearOfBirth)
VALUES ('email@aim.com', 'abceasyas123', 'Jeremy','Legaspi', 8 , 17, 1994);

CREATE TABLE symptoms
(
id int NOT NULL AUTO_INCREMENT,
symptom varchar(255) NOT NULL,
selected boolean,
disease_1 varchar(255),
disease_2 varchar(255),
disease_3 varchar(255),
disease_4 varchar(255),
disease_5 varchar(255),
createdAt DATETIME,
updatedAt DATETIME,
PRIMARY KEY (id)
);


INSERT INTO symptoms (symptom, selected, disease_1, disease_2, disease_3, disease_4)
VALUES  ('Fever', FALSE, 'Influenza', 'Rheumatoid arthritis', 'Shingles', 'Open cough'),
	( 'Headache', FALSE, 'Influenza', 'Shingles', 'Stroke', 'Malaria'),
        ('Vomiting', FALSE, 'Malaria', 'Norovirus', 'Anemia', 'Flu');
        
INSERT INTO symptoms (symptom, selected, disease_1, disease_2)
VALUES('Muscle Pain', FALSE, 'Influenza', 'Malaria'),
        ('Frequent Urination', FALSE, 'Gynecologic Cancers', 'Urinary track infection'),
        ('Sneezing', FALSE, 'Allergy', 'Open cough'),
        ('Chills', FALSE, 'Flu', 'Urinary Tract Infection');
        
INSERT INTO symptoms (symptom, selected, disease_1, disease_2, disease_3)
VALUES('Diarrhea', FALSE, 'Flu', 'Norovirus', 'Anemia'),
        ('Abdominal Pain', FALSE, 'Norovirus', 'Gynecologic Cancers', 'Anemia');
        
INSERT INTO symptoms (symptom, selected, disease_1, disease_2, disease_3, disease_4)
VALUES('Nausea', FALSE, 'Flu', 'Cold', 'Anemia', 'Malaria');

