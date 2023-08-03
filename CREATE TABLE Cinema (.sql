CREATE TABLE Cinema (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT NOT NULL
);

CREATE TABLE Hall (
    id SERIAL PRIMARY KEY,
    cinema_id INTEGER NOT NULL REFERENCES Cinema(id),
    name TEXT NOT NULL,
    seats INTEGER NOT NULL,
    seat_arrangement TEXT NOT NULL
);

CREATE TABLE Movie (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    age_rating TEXT,
    duration INTEGER,
    release_date DATE,
    genre TEXT,
    director TEXT,
    movie_cast TEXT,
    image_src TEXT,
    gallery_images TEXT
);

CREATE TABLE Showtime (
    id SERIAL PRIMARY KEY,
    movie_id INTEGER NOT NULL REFERENCES Movie(id),
    hall_id INTEGER NOT NULL REFERENCES Hall(id),
    start_time TIMESTAMP NOT NULL
);

CREATE TABLE Reservation (
    id SERIAL PRIMARY KEY,
    showtime_id INTEGER NOT NULL REFERENCES Showtime(id),
    seat_row INTEGER NOT NULL,
    seat_number INTEGER NOT NULL,
    customer_email TEXT NOT NULL
);

SELECT DISTINCT movie.title
FROM movie
JOIN showtime ON movie.id = showtime.movie_id
JOIN hall ON showtime.hall_id = hall.id
JOIN cinema ON hall.cinema_id = cinema.id
WHERE cinema.name= 'Cevahir';

BU QUERYI KULLANARAK CINEMA NAME ILE MOVIE TITLELARINI GETIREBILIYORUZ
