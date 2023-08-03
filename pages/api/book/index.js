import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { showtime_id, seats, email } = req.body;
    console.log(seats);

    if (seats && showtime_id) {
      const { rows } =
        await sql`INSERT INTO reservation (showtime_id, seats, customer_email) VALUES (${showtime_id}, ${JSON.stringify(
          seats
        )}, ${email})`;
      return res.status(200).json({ rows });
    }
  }
}
