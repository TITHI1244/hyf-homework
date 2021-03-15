-- Create 3 tables, Meal, Reservation and Review
CREATE TABLE Meal (
	id int(11) primary key not null auto_increment,
    title varchar(255),
    `description` text,
    location varchar(255),
    `when` datetime,
    max_reservations int(11),
    price decimal,
    created_date date
);
CREATE TABLE Reservation (
	id int(11) primary key not null auto_increment,
    number_of_guests int(11),
    meal_id int(11) not null,
    created_date date,
    contact_phonenumber varchar(255),
    contact_name varchar(255),
    contact_email varchar(255), 
    CONSTRAINT FOREIGN KEY (meal_id) REFERENCES Meal(id)
);
CREATE TABLE Review (
	id int(11) primary key not null auto_increment,
    title varchar(255),
    `description` text,
	meal_id int(11) not null,
    stars int(11),
    created_date date,
    CONSTRAINT FOREIGN KEY (meal_id) REFERENCES Meal(id)
);

-- Queries for Meal
-- Get all meals
SELECT * FROM Meal;
-- Add a new meal
INSERT INTO Meal(title, `description`, location, `when`, max_reservations, price, created_date)
VALUES ('Southern fried chicken', 'A perfect basket of fried chicken', 'USA', '2021-02-12', '1', '100', '2021-01-12');
INSERT INTO Meal(title, `description`, location, `when`, max_reservations, price, created_date)
VALUES ('Barramundi', 'White fish served with a lemon and dill butter', 'Australia', '2021-02-13', '3', '50', '2021-01-13');
INSERT INTO Meal(title, `description`, location, `when`, max_reservations, price, created_date)
VALUES ('Biryani', 'A celebration of spices and rice', 'India', '2021-02-14', '3', '50', '2021-01-14');
INSERT INTO Meal(title, `description`, location, `when`, max_reservations, price, created_date)
VALUES ('Smørrebrød', 'Open-faced sandwich', 'Denmark', '2021-02-15', '4', '70', '2021-01-15');
INSERT INTO Meal(title, `description`, location, `when`, max_reservations, price, created_date)
VALUES ('Falafel', 'Deep-fried patty of ground chickpeas', 'Middle East', '2021-02-16', '5', '80', '2021-01-16');
INSERT INTO Meal(title, `description`, location, `when`, max_reservations, price, created_date)
VALUES ('Pad Thai', 'A taste sensation', 'Thailand', '2021-02-17', '6', '20', '2021-01-17');
INSERT INTO Meal(title, `description`, location, `when`, max_reservations, price, created_date)
VALUES ('A meal', 'It is simply a meal!', 'Mother earth!', '2021-02-17', '7', '5', '2021-01-17');
-- Get a meal with any id, fx 1
SELECT * FROM Meal WHERE id = 1;
-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Meal SET `description` = 'A popular street food & taste sensation.' WHERE id = 6;
-- Delete a meal with any id, fx 1
DELETE FROM MEAL WHERE id = 7;


-- QUERIES for Reservation
-- Get all reservations
SELECT * FROM Reservation;
-- Add a new reservation
INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (1, 1, '2021-01-16', '45 45 45 12', 'John', 'john@gmail.com');
INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (2, 3, '2021-01-17', '45 45 45 23', 'Jane', 'jane@gmail.com');
INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (3, 4, '2021-01-18', '45 45 45 34', 'Doe', 'doe@gmail.com');
INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (1, 2, '2021-01-20', '45 45 45 56', 'noone', 'noone@gmail.com');
-- Get a reservation with any id, fx 1
SELECT * FROM Reservation WHERE id = 1;
-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Reservation SET number_of_guests = 2 WHERE id = 3;
-- Delete a reservation with any id, fx 1
DELETE FROM Reservation WHERE meal_id = 4;


-- QUERIES for Review
-- Get all reviews
SELECT * FROM Review;
-- Add a new review
INSERT INTO Review (title, `description`, meal_id, stars, created_date)
VALUES ('Wow', 'It was such a nice experience. Simply wow!!!', 3, 4, '2021-02-25');
INSERT INTO Review (title, `description`, meal_id, stars, created_date)
VALUES ('Delicious', 'It was a lovely experience with the hosts plus the mouth-watering food.', 4, 4, '2021-02-26');
INSERT INTO Review (title, `description`, meal_id, stars, created_date)
VALUES ('Excellent', 'Everything was awesome.', 3, 4, '2021-02-27');
INSERT INTO Review (title, `description`, meal_id, stars, created_date)
VALUES ('Ok', 'Quite ok.', 3, 1, '2021-02-28');
-- Get a review with any id, fx 1
SELECT * FROM Review WHERE id = 4;
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Review SET stars = 5, meal_id = 6 WHERE id = 3;
-- Delete a review with any id, fx 1
DELETE FROM Review WHERE id = 4;


-- Additional queries
-- Get meals that has a price smaller than a specific price fx 90
SELECT * FROM Meal WHERE price < 80 ORDER BY created_date desc;

-- Get meals that still has available reservations
SELECT Meal.id, Meal.title, Meal.max_reservations, Reservation.id AS reservation_id, Reservation.number_of_guests FROM Meal
LEFT JOIN Reservation
ON Reservation.meal_id = Meal.id WHERE Meal.max_reservations > (
    SELECT SUM(number_of_guests)
    FROM Reservation
    WHERE Reservation.meal_id = Meal.id
) ORDER BY Meal.id;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT * FROM Meal WHERE title LIKE '%Thai%';

-- Get meals that has been created between two dates
SELECT * FROM Meal WHERE created_date > '2021-01-12' AND created_date < '2021-01-15';

-- Get only specific number of meals fx return only 5 meals
SELECT * FROM Meal ORDER BY price LIMIT 5;

-- Get the meals that have good reviews
SELECT * FROM Meal WHERE id IN (
	SELECT meal_id FROM Review WHERE stars  = 4
);

-- Get reservations for a specific meal sorted by created_date
SELECT * FROM Reservation
 WHERE meal_id IN (SELECT id FROM Meal WHERE title = 'Southern fried chicken') 
 ORDER BY created_date;

-- Sort all meals by average number of stars in the reviews
SELECT Meal.id, Meal.title, Review.title, Review.stars FROM Meal 
RIGHT JOIN Review 
ON Meal.id = Review.meal_id
ORDER BY Review.stars;