CREATE TABLE Genres(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name varchar(255)
);
CREATE TABLE Racks(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    rack_number INT
);
CREATE TABLE Books(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    genre_id INT NOT NULL,
    rack_id INT NOT NULL,
    name varchar(255),
    author varchar(255),
    publisher varchar(255),
    published_date DATE,
    number_of_copies INT,
    CONSTRAINT FOREIGN KEY (genre_id) REFERENCES Genres(id),
    CONSTRAINT FOREIGN KEY (rack_id) REFERENCES Racks(id)
);
CREATE TABLE Borrowing_log(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    book_id INT NOT NULL,
    log_number INT,
    issued_date DATE,
    returned_date DATETIME,
    CONSTRAINT FOREIGN KEY(book_id) REFERENCES Books(id)
);
CREATE TABLE Members(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name varchar(255),
    email varchar(255),
    address varchar(255),
    phone INT
);
CREATE TABLE Book_member(
	book_id INT NOT NULL,
    member_id INT NOT NULL,
    CONSTRAINT FOREIGN KEY(book_id) REFERENCES Books(id),
    CONSTRAINT FOREIGN KEY(member_id) REFERENCES Members(id)
);
