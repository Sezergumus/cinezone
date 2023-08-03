import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
  // return movies playing at a specific cinema
  if (req.query.movie_id) {
    const { rows } =
      await sql`SELECT cinema.name AS cinema_name, hall.name AS hall_name, showtime.start_time, showtime.id
        FROM movie
        JOIN showtime ON movie.id = showtime.movie_id
        JOIN hall ON showtime.hall_id = hall.id
        JOIN cinema ON hall.cinema_id = cinema.id
        WHERE movie.id = ${req.query.movie_id}
        ORDER BY showtime.start_time;        
        `;
    return res.status(200).json({ rows });
  } else if (req.query.showtime_id) {
    const { rows } =
      await sql`SELECT cinema.name AS cinema_name, hall.name AS hall_name, hall.seats_row, hall.seats_col, hall.seat_arrangement, showtime.start_time,
      ARRAY_AGG(reservation.seats) AS reserved_seats
      FROM showtime
      JOIN hall ON showtime.hall_id = hall.id
      JOIN cinema ON hall.cinema_id = cinema.id
      LEFT JOIN reservation ON reservation.showtime_id = showtime.id
      WHERE showtime.id = ${req.query.showtime_id}
      GROUP BY cinema.name, hall.name, hall.seats_row, hall.seats_col, hall.seat_arrangement, showtime.start_time;
  `;
    return res.status(200).json(rows);
  }
}
