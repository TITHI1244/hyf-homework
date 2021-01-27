CREATE TABLE Class(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name varchar(255),
    begins DATE,
    ends DATE
);
CREATE TABLE Student(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name varchar(255),
    email varchar(255),
    phone INT,
    class_id INT NOT NULL,
    CONSTRAINT FOREIGN KEY (class_id) REFERENCES Class(id)
);
CREATE INDEX idx_name ON Student(id);
ALTER TABLE Class ADD status ENUM('not-started', 'ongoing', 'finished') NOT NULL;
SELECT * FROM Class;
