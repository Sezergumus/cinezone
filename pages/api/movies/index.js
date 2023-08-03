import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
  // return movies playing at a specific cinema
  if (req.query.cinema_id) {
    const { rows } =
      await sql`SELECT DISTINCT movie.id, movie.title, movie.link, movie.poster
        FROM movie
        JOIN showtime ON movie.id = showtime.movie_id
        JOIN hall ON showtime.hall_id = hall.id
        JOIN cinema ON hall.cinema_id = cinema.id
        WHERE cinema.id= ${req.query.cinema_id}
        ORDER BY movie.id ASC
        `;
    return res.status(200).json({ rows });
  } else if (req.query.movie_link) {
    // if movie_link is provided, return movies with name
    const { rows } =
      await sql`SELECT DISTINCT movie.id, movie.title, movie.link, movie.poster, movie.duration, movie.age_rating, movie.release_date, movie.genre, movie.director, movie.movie_cast
        FROM movie
        WHERE movie.link = ${req.query.movie_link}
        ORDER BY movie.id ASC
        `;
    return res.status(200).json({ rows });
  } else {
    // else return all movies by id
    const { rows } = await sql`SELECT * FROM movie ORDER BY id ASC`;
    return res.status(200).json({ rows });
  }
}
